import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
  // Refined functional initializer
	const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light'; // Default for SSR/build
    }
    const storedTheme = localStorage.theme;
    // Check if stored theme is valid, otherwise check system preference
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
  });

	useEffect(() => {
		if (typeof window !== 'undefined') { // Ensure document is available
      const root = window.document.documentElement;
      const oldTheme = theme === 'dark' ? 'light' : 'dark'; // Calculate the opposite theme

      root.classList.remove(oldTheme);
      root.classList.add(theme);
      localStorage.setItem('theme', theme);
    }
    // Only depend on 'theme' itself
	}, [theme]); 

	return [theme, setTheme];
};

export default useThemeSwitcher;
