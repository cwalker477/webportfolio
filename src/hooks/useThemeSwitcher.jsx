import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
  // Use functional initializer to read localStorage only once
  // Also check system preference as a fallback
	const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') { // Ensure localStorage is available
      const storedTheme = localStorage.theme;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return storedTheme || (prefersDark ? 'dark' : 'light');
    }
    return 'light'; // Default if window is not available (SSR/build)
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
