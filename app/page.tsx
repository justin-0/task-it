import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <div className="mx-6 md:mx-24">
            <header className="py-4">
                <nav className="flex items-center justify-between">
                    <div>
                        <span className="font-semi text-sm">task-it</span>
                    </div>
                    <div>
                        <Button size="sm" className="md:hidden">
                            Get started
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
                <Button className="mt-3 hidden md:block" size="lg">
                    Get started
                </Button>
            </main>
        </div>
    );
}
