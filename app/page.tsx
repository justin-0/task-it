import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <div className="h-screen bg-slate-200 px-6 md:px-24">
            <header className="py-4">
                <nav className="flex items-center justify-between">
                    <div>
                        <span className="font-semi text-sm">task-it</span>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            size="sm"
                            variant="outline"
                            className="md:hidden"
                            asChild
                        >
                            <Link href="/sign-in">Log in</Link>
                        </Button>
                        <Button size="sm" className="md:hidden" asChild>
                            <Link href="/sign-up">Get started</Link>
                        </Button>
                    </div>
                </nav>
            </header>
            <main className="flex h-[800px] w-full flex-col items-center justify-center md:mx-auto md:w-[800px]">
                <h1 className="text-balance text-center text-4xl font-bold">
                    task-it brings all your tasks, teammates, and tools together
                </h1>
                <p className="mt-2 text-pretty text-center text-lg font-light">
                    Keep everything in the same place-even if your team isn't
                </p>
                <div className="mt-5 flex gap-4">
                    <Button className="hidden md:flex" size="lg" asChild>
                        <Link href="/sign-up">Get started</Link>
                    </Button>
                    <Button
                        className="hidden md:flex"
                        size="lg"
                        variant="outline"
                        asChild
                    >
                        <Link href="/sign-in">Log in</Link>
                    </Button>
                </div>
            </main>
        </div>
    );
}
