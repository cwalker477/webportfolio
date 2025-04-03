import useThemeSwitcher from '../../hooks/useThemeSwitcher';
// Removed FiArrowDownCircle import
import developerLight from '../../images/developer.svg';
import developerDark from '../../images/developer-dark.svg';
import { motion } from 'framer-motion';
import Button from '../reusable/Button'; // Import Button component

// Accept showHireMeModal prop
const AppBanner = ({ showHireMeModal }) => { 
	const [activeTheme] = useThemeSwitcher();

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		>
			<div className="w-full md:w-1/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					Hi, Iam Stoman
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					A Full-Stack Developer & Design Enthusiast
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					// Added margin-top to the container div
					className="flex justify-center sm:block mt-8" 
				>
          {/* Changed <a> to <span>, added onClick, updated styles and text */}
					<span
						onClick={showHireMeModal} // Call modal handler
            // Removed mt-12 from button span, adjusted bottom margin
						className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300 mb-6 sm:mb-0 inline-block cursor-pointer" 
						aria-label="Hire Me Button"
					>
						<Button title="Hire Me" /> {/* Use Button component for consistency */}
					</span>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
			>
				<img
					src={
						activeTheme === 'dark' ? developerLight : developerDark
					}
					alt="Developer"
				/>
			</motion.div>
		</motion.section>
	);
};

export default AppBanner;
