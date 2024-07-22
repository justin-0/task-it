import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: 'Task-It',
        template: '%s | Task-It',
    },
    description: "Keep everything in the same place-even if your team isn't",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} min-h-svh`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
