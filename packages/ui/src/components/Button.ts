// Button component types and styles

export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    class?: string;
}

export const buttonStyles = {
    base: 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2',
    variants: {
        primary: 'bg-primary text-white hover:bg-primary-hover',
        secondary: 'bg-bg-secondary border border-border text-text hover:bg-border',
        ghost: 'bg-transparent text-text-secondary hover:text-text',
    },
    sizes: {
        sm: 'px-3 py-1.5 text-sm rounded-md',
        md: 'px-4 py-2 text-base rounded-lg',
        lg: 'px-6 py-3 text-lg rounded-xl',
    },
};
