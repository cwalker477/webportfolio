function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-text-light-secondary dark:text-text-dark-secondary"> {/* Updated text */}
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/realstoman/react-tailwindcss-portfolio"
					target="__blank"
					className="hover:underline hover:text-accent-orange dark:hover:text-orange-300 ml-1 duration-500"
				>
					React & Tailwind CSS Portfolio
				</a>
				.
				<a
					href="https://stoman.me"
					target="__blank"
					className="text-text-light-secondary dark:text-text-dark-secondary font-medium uppercase hover:underline hover:text-accent-orange dark:hover:text-orange-300 ml-1 duration-500" // Updated text
				>
					Stoman
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
