import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost' | 'neon';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {

        // Base styles
        const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

        // Variants
        const variants = {
            primary: "bg-[var(--color-neon-blue)] text-black hover:shadow-[0_0_20px_var(--color-neon-blue)]",
            outline: "border-2 border-[var(--color-neon-pink)] text-[var(--color-neon-pink)] hover:bg-[var(--color-neon-pink)] hover:text-white hover:shadow-[0_0_20px_var(--color-neon-pink)]",
            ghost: "text-white hover:text-[var(--color-neon-blue)]",
            neon: "text-white neon-text-glow hover:scale-105", // Text-only with glow
        };

        // Sizes
        const sizes = {
            sm: "text-sm px-4 py-2",
            md: "text-base px-6 py-3",
            lg: "text-lg px-8 py-4",
        };

        const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

        return (
            <button ref={ref} className={classes} {...props} />
        );
    }
);

Button.displayName = "Button";
