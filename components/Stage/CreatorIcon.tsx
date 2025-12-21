import Image from 'next/image';

interface CreatorIconProps {
    name: string;
    imageSrc?: string;
    vibeColor: string; // Hex color code
    position: { top: string; left: string }; // e.g. "20%", "50%"
    onClick: () => void;
}

export default function CreatorIcon({
    name,
    imageSrc,
    vibeColor,
    position,
    onClick
}: CreatorIconProps) {
    return (
        <div
            className="absolute z-[var(--z-scene)] flex flex-col items-center cursor-pointer jitter-animation group"
            style={{ top: position.top, left: position.left }}
            onClick={onClick}
        >
            {/* Icon Circle */}
            <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 p-1 transition-transform duration-300 group-hover:scale-110"
                style={{
                    borderColor: vibeColor,
                    boxShadow: `0 0 15px ${vibeColor}, inset 0 0 10px ${vibeColor}`
                }}
            >
                <div className="w-full h-full rounded-full overflow-hidden bg-black/50 relative">
                    {imageSrc ? (
                        <Image
                            src={imageSrc}
                            alt={name}
                            fill
                            className="object-cover opacity-90 group-hover:opacity-100"
                        />
                    ) : (
                        <div
                            className="w-full h-full flex items-center justify-center text-xs text-white/50 font-bold"
                            style={{ backgroundColor: `${vibeColor}20` }}
                        >
                            VIBE
                        </div>
                    )}
                </div>
            </div>

            {/* Name Label */}
            <span
                className="mt-3 text-sm md:text-base font-medium tracking-wide opacity-80 group-hover:opacity-100 transition-opacity"
                style={{
                    color: vibeColor,
                    textShadow: `0 0 8px ${vibeColor}`
                }}
            >
                {name}
            </span>
        </div>
    );
}
