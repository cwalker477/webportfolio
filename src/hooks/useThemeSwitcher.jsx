import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
  // Provide a default theme ('light') if localStorage.theme is not set
	const [theme, setTheme] = useState(localStorage.theme || 'light'); 
	const activeTheme = theme === 'dark' ? 'light' : 'dark';

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove(activeTheme);
		root.classList.add(theme);
		localStorage.setItem('theme', theme);
	}, [theme, activeTheme]);

  // Return the actual current theme state, not the calculated 'activeTheme'
	return [theme, setTheme]; 
};

export default useThemeSwitcher;
