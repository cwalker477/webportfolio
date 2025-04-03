import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import HireMeModal from '../HireMeModal';
import logoLight from '../../images/logo-light.svg';
import logoDark from '../../images/logo-dark.svg';
import { motion } from 'framer-motion';
import Button from '../reusable/Button';

// Accept showHireMeModal prop from App.js
const AppHeader = ({ showHireMeModal }) => { 
	const [showMenu, setShowMenu] = useState(false);
	// Removed local modal state: const [showModal, setShowModal] = useState(false);
  // Destructure theme state and setter from hook
	const [theme, setTheme] = useThemeSwitcher(); 

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	// Removed local modal handler function, using prop now

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		>
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					<div>
						<Link to="/">
              {/* Reversed condition to show light logo on dark theme and vice-versa */}
							{theme === 'dark' ? (
								<img
									src={logoLight}
									className="w-36"
									alt="Light Logo" // Corrected alt text
								/>
							) : (
								<img
									src={logoDark}
									className="w-36"
									alt="Dark Logo"
								/>
							)}
						</Link>
					</div>

					{/* Theme switcher small screen */}
					<div
            // Pass the theme to switch TO (the opposite one)
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
						aria-label="Theme Switcher"
						className="block sm:hidden ml-0 bg-surface-light dark:bg-surface-dark p-3 shadow-sm rounded-xl cursor-pointer" // Kept surface colors
					>
            {/* Use actual theme state for icon */}
						{theme === 'dark' ? ( 
							<FiMoon className="text-text-light-secondary hover:text-gray-400 dark:text-text-dark-secondary dark:hover:text-primary-light text-xl" /> // Restore original dark hover color
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" /> // Restore original light mode icon colors
						)}
					</div>

					{/* Small screen hamburger menu */}
					<div className="sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="h-7 w-7 fill-current text-text-light-secondary dark:text-text-dark-secondary" // Updated text colors
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<Link
						to="/projects"
						className="block text-left text-lg text-text-light-primary dark:text-text-dark-secondary hover:text-text-light-secondary dark:hover:text-primary-light sm:mx-4 mb-2 sm:py-2" // Restore original dark text/hover
						aria-label="Projects"
					>
						Projects
					</Link>
					<Link
						to="/about"
						className="block text-left text-lg text-text-light-primary dark:text-text-dark-secondary hover:text-text-light-secondary dark:hover:text-primary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-palette-gray dark:border-surface-dark" // Restore original dark text/hover
						aria-label="About Me"
					>
						About Me
					</Link>
					<Link
						to="/contact"
						className="block text-left text-lg text-text-light-primary dark:text-text-dark-secondary hover:text-text-light-secondary dark:hover:text-primary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-palette-gray dark:border-surface-dark" // Restore original dark text/hover
						aria-label="Contact"
					>
						Contact
					</Link>
					<div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-palette-gray dark:border-surface-dark"> {/* Updated border colors */}
						<span
							onClick={showHireMeModal}
							className="font-general-medium sm:hidden block text-left text-md bg-accent-orange hover:bg-orange-700 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24"
							aria-label="Hire Me Button"
						>
							<Button title="Hire Me" />
						</span>
					</div>
				</div>

				{/* Header links large screen */}
				<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
					<Link
						to="/projects"
						className="block text-left text-lg text-text-light-primary dark:text-text-dark-secondary hover:text-text-light-secondary dark:hover:text-primary-light sm:mx-4 mb-2 sm:py-2" // Restore original dark text/hover
						aria-label="Projects"
					>
						Projects
					</Link>
					<Link
						to="/about"
						className="block text-left text-lg text-text-light-primary dark:text-text-dark-secondary hover:text-text-light-secondary dark:hover:text-primary-light sm:mx-4 mb-2 sm:py-2" // Restore original dark text/hover
						aria-label="About Me"
					>
						About Me
					</Link>
					<Link
						to="/contact"
						className="block text-left text-lg text-text-light-primary dark:text-text-dark-secondary hover:text-text-light-secondary dark:hover:text-primary-light sm:mx-4 mb-2 sm:py-2" // Restore original dark text/hover
						aria-label="Contact"
					>
						Contact
					</Link>
				</div>

				{/* Header right section buttons */}
				<div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
					<div className="hidden md:flex">
						<span
							onClick={showHireMeModal}
							className="text-md font-general-medium bg-accent-orange hover:bg-orange-700 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
							aria-label="Hire Me Button"
						>
							<Button title="Hire Me" />
						</span>
					</div>

					{/* Theme switcher large screen */}
					<div
            // Pass the theme to switch TO (the opposite one)
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
						aria-label="Theme Switcher"
						className="ml-8 bg-surface-light dark:bg-surface-dark p-3 shadow-sm rounded-xl cursor-pointer" // Kept surface colors
					>
            {/* Use actual theme state for icon */}
						{theme === 'dark' ? ( 
							<FiMoon className="text-text-light-secondary hover:text-gray-400 dark:text-text-dark-secondary dark:hover:text-primary-light text-xl" /> // Restore original dark hover color
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" /> // Restore original light mode icon colors
						)}
					</div>
				</div>
			</div>
			{/* Hire me modal is now rendered in App.js */}
		</motion.nav>
	);
};

export default AppHeader;
