import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
// Removed Social Icons as they were hardcoded, consider adding them back if needed dynamically
// import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi';

const ProjectInfo = () => {
	// Include loading state
	const { singleProjectData, loading } = useContext(SingleProjectContext);

	// Handle loading and null states
	if (loading) {
		return <div className="mt-14">Loading project info...</div>; // Or skeleton loader
	}

	if (!singleProjectData) {
		// No project data
		return null; 
	}

	// Assuming Supabase columns are named like:
	// client_name, client_services, client_website, objective, technologies (array), challenge_details
	// Adjust property names if your Supabase columns are different

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			{/* Left Section */}
			<div className="w-full sm:w-1/3 text-left">
				{/* Client details */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-text-light-secondary dark:text-text-dark-secondary mb-2"> {/* Updated text */}
						About Client 
					</p>
					<ul className="leading-loose">
						{singleProjectData.client_name && (
							<li className="font-general-regular text-text-light-secondary dark:text-text-dark-secondary"> {/* Updated text */}
								<span>Name: </span> {singleProjectData.client_name}
							</li>
						)}
						{singleProjectData.client_services && (
							<li className="font-general-regular text-text-light-secondary dark:text-text-dark-secondary"> {/* Updated text */}
								<span>Services: </span> {singleProjectData.client_services}
							</li>
						)}
						{singleProjectData.client_website && (
							<li className="font-general-regular text-text-light-secondary dark:text-text-dark-secondary"> {/* Updated text */}
								<span>Website: </span>
								<a
									href={singleProjectData.client_website} // Use dynamic link
									target="_blank" // Add target blank
									rel="noopener noreferrer" // Add rel for security
									className='hover:underline hover:text-accent-orange dark:hover:text-orange-300 cursor-pointer duration-300' // Using accent-orange and a lighter orange for dark hover
									aria-label="Project Website"
								>
									{singleProjectData.client_website}
								</a>
							</li>
						)}
						{/* Add other client details if available in Supabase data */}
					</ul>
				</div>

				{/* Objectives */}
				{singleProjectData.objective && (
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-text-light-secondary dark:text-text-dark-secondary mb-2"> {/* Updated text */}
							Objective
						</p>
						<p className="font-general-regular text-text-light-primary dark:text-text-dark-secondary"> {/* Updated text */}
							{singleProjectData.objective}
						</p>
					</div>
				)}

				{/* Technologies */}
				{singleProjectData.technologies && singleProjectData.technologies.length > 0 && (
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-text-light-secondary dark:text-text-dark-secondary mb-2"> {/* Updated text */}
							Tools & Technologies
						</p>
						<p className="font-general-regular text-text-light-primary dark:text-text-dark-secondary"> {/* Updated text */}
							{/* Split the text string into an array, trim whitespace, then join */}
							{typeof singleProjectData.technologies === 'string' 
								? singleProjectData.technologies.split(',').map(tech => tech.trim()).join(', ')
								: ''}
						</p>
					</div>
				)}

				{/* Social sharing - Commented out as it was hardcoded */}
				{/* 
				<div>
					<p className="font-general-regular text-2xl font-semibold text-text-light-secondary dark:text-text-dark-secondary mb-2"> {/* Updated text */}
						Share This
					</p>
					<div className="flex items-center gap-3 mt-5">
						{ Add dynamic social sharing logic if needed }
					</div>
				</div> 
				*/}
			</div>

			{/* Right Section: Project Challenge/Details */}
			{singleProjectData.challenge_details && (
				<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
					<p className="font-general-regular text-text-light-primary dark:text-text-dark-primary text-2xl font-bold mb-7"> {/* Updated text */}
						Challenge
					</p>
					{/* Assuming challenge_details is a single text field. 
					    If it contains markdown or needs paragraph splitting, adjust rendering here. */}
					<p className="font-general-regular mb-5 text-lg text-text-light-secondary dark:text-text-dark-secondary whitespace-pre-line"> {/* Updated text */}
						{singleProjectData.challenge_details}
					</p>
				</div>
			)}
		</div>
	);
};

export default ProjectInfo;
