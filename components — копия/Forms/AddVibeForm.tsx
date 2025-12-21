"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function AddVibeForm() {
    const [step, setStep] = useState<'login' | 'form' | 'success'>('login');
    const [formData, setFormData] = useState({
        displayName: '',
        archetype: '',
        tags: '',
        externalLink: '',
    });

    const handleLogin = () => {
        // Mock Google Login
        setTimeout(() => setStep('form'), 1000);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock Submission
        console.log("Submitting:", formData);
        setStep('success');
    };

    if (step === 'login') {
        return (
            <div className="flex flex-col items-center gap-6 p-8 text-center max-w-md mx-auto">
                <h2 className="text-3xl font-bold neon-text-glow">JOIN THE VIBE</h2>
                <p className="text-gray-400">Creators only. Authenticate to contribute.</p>
                <Button variant="outline" onClick={handleLogin} className="w-full">
                    Continue with Google
                </Button>
            </div>
        );
    }

    if (step === 'success') {
        return (
            <div className="flex flex-col items-center gap-6 p-8 text-center">
                <h2 className="text-3xl font-bold text-[var(--color-neon-green)] neon-text-glow">VIBE ADDED</h2>
                <p className="text-gray-400">Your visual has been submitted for curation.</p>
                <Button variant="primary" onClick={() => window.location.href = '/'}>
                    Return to Stage
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-md mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 neon-text-glow text-center">CREATE PROFILE</h2>

            <Input
                label="Display Name"
                placeholder="e.g. Neon Rider"
                value={formData.displayName}
                onChange={e => setFormData({ ...formData, displayName: e.target.value })}
                required
            />

            <Input
                label="Archetype"
                placeholder="e.g. Cyberpunk, Yogi, Gamer"
                value={formData.archetype}
                onChange={e => setFormData({ ...formData, archetype: e.target.value })}
                required
            />

            <Input
                label="Vibe Tags (comma separated)"
                placeholder="neon, night, rain"
                value={formData.tags}
                onChange={e => setFormData({ ...formData, tags: e.target.value })}
                required
            />

            {/* File Upload Mock */}
            <div className="border border-dashed border-gray-700 p-8 rounded-xl text-center hover:border-[var(--color-neon-blue)] transition-colors cursor-pointer group">
                <div className="text-gray-400 group-hover:text-white transition-colors">
                    <span className="block text-2xl mb-2">📹</span>
                    <span className="text-sm uppercase tracking-wider">Upload Vertical Video (9:16)</span>
                </div>
            </div>

            <Input
                label="External Link"
                placeholder="https://instagram.com/..."
                type="url"
                value={formData.externalLink}
                onChange={e => setFormData({ ...formData, externalLink: e.target.value })}
                required
            />

            <Button type="submit" variant="primary" className="mt-4">
                Submit Vibe
            </Button>
        </form>
    );
}
