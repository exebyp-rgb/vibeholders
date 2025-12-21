import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className = '', label, error, ...props }, ref) => {
        return (
            <div className="w-full relative group">
                {label && (
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-1 group-focus-within:text-[var(--color-neon-blue)] transition-colors">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={`
            w-full bg-transparent border-b border-gray-700 
            text-white placeholder-gray-600 py-3 text-lg
            focus:outline-none focus:border-[var(--color-neon-blue)]
            transition-colors duration-300
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
                    {...props}
                />
                {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
            </div>
        );
    }
);

Input.displayName = "Input";
