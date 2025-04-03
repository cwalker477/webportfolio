import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiGlobe,
	FiYoutube,
} from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	{
		id: 1,
		icon: <FiGlobe />,
		url: 'https://www.stoman.me/',
	},
	{
		id: 2,
		icon: <FiGithub />,
		url: 'https://github.com/realstoman',
	},
	{
		id: 3,
		icon: <FiTwitter />,
		url: 'https://twitter.com/realstoman',
	},
	{
		id: 4,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/realstoman',
	},
	{
		id: 5,
		icon: <FiYoutube />,
		url: 'https://www.youtube.com/c/realstoman',
	},
];

const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-palette-gray dark:border-surface-dark"> {/* Updated border */}
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-text-light-primary dark:text-text-dark-primary mb-5"> {/* Updated text */}
						Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-accent-orange dark:hover:text-orange-300 cursor-pointer rounded-lg bg-gray-50 dark:bg-surface-dark hover:bg-gray-100 shadow-sm p-4 duration-300" // Updated dark background
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
};

export default AppFooter;
