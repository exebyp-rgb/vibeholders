import AddVibeForm from '@/components/Forms/AddVibeForm';
import Link from 'next/link';

export default function AddVibePage() {
    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-neon-purple)]/10 to-black pointer-events-none" />

            <div className="z-10 w-full">
                <div className="absolute top-8 left-8">
                    <Link href="/" className="text-sm uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
                        ← Back to Stage
                    </Link>
                </div>

                <AddVibeForm />
            </div>
        </main>
    );
}
