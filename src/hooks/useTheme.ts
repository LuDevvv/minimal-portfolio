import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        // Sync initial class
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
            root.classList.remove('light');
        } else {
            root.classList.add('light');
            root.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return { theme, toggleTheme };
};
