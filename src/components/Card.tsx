import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Card = ({ className, children, ...other }: ComponentPropsWithoutRef<"div">) => {
    return (
    <div className={twMerge("bg-gray-800 rounded-2xl border border-white/10 relative z-0 overflow-hidden", className)}{...other}>
        {children}
    </div>
    );
}
