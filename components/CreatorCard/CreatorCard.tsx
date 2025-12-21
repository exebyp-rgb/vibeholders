import { Button } from '@/components/ui/Button';

interface CreatorCardProps {
    creator: {
        id: string;
        name: string;
        vibeColor: string;
        videoUrl?: string; // h.264 mp4
        tags: string[];
        outUrl: string;
    };
    onClose: () => void;
}

export default function CreatorCard({ creator, onClose }: CreatorCardProps) {
    // Styles
    const cardStyle = {
        boxShadow: `0 0 30px ${creator.vibeColor}40`, // Soft glow
        borderColor: creator.vibeColor,
    };

    return (
        <div className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            {/* Click outside to close (Optional, but good UX) */}
            <div className="absolute inset-0" onClick={onClose} />

            {/* Card Container - 9:16 Aspect Ratio */}
            <div
                className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-xl overflow-hidden animate-in fade-in zoom-in-95 duration-300"
                style={cardStyle}
            >
                {/* Video Player */}
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/backgrounds/bg-default.webp" // Fallback
                >
                    {/* We will implement media delivery in API later */}
                    <source src={creator.videoUrl || "/videos/demo.mp4"} type="video/mp4" />
                </video>

                {/* Overlay Content (Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {creator.tags.map(tag => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-xs font-bold uppercase rounded-full bg-black/50 border backdrop-blur-md"
                                style={{ borderColor: creator.vibeColor, color: creator.vibeColor }}
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-white/60 text-xs font-medium uppercase tracking-wider mb-1">active now</div>
                            <h2 className="text-2xl font-bold text-white mb-2 neon-text-glow">{creator.name}</h2>
                        </div>
                    </div>

                    <Button
                        className="w-full mt-4"
                        variant="primary"
                        style={{
                            backgroundColor: creator.vibeColor,
                            boxShadow: `0 0 20px ${creator.vibeColor}60`,
                            color: '#000'
                        }}
                        onClick={() => window.open(creator.outUrl, '_blank')} // TODO: Route via /out
                    >
                        VIEW
                    </Button>
                </div>

                {/* Close Button (Top Right) */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}
