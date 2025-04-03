import { useContext } from 'react';
import { FiClock, FiTag } from 'react-icons/fi';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectSingleHeader = () => {
	// Include loading state if needed, or handle null data directly
	const { singleProjectData, loading } = useContext(SingleProjectContext);

	// Handle loading and null states
	if (loading) {
		return <div className="mt-14 sm:mt-20 mb-7">Loading header...</div>; // Or a proper skeleton loader
	}

	if (!singleProjectData) {
		return <div className="mt-14 sm:mt-20 mb-7">Project not found.</div>;
	}

	// Assuming Supabase columns are named like 'title', 'publish_date', 'tags'
	// Adjust property names if your Supabase columns are different
	return (
		<div>
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-text-light-primary dark:text-text-dark-primary mt-14 sm:mt-20 mb-7"> {/* Updated text */}
				{singleProjectData.title || 'Project Title'} {/* Use direct property access */}
			</p>
			<div className="flex">
				<div className="flex items-center mr-10">
					<FiClock className="text-lg text-text-light-secondary dark:text-text-dark-secondary" /> {/* Updated text */}
					<span className="font-general-regular ml-2 leading-none text-text-light-primary dark:text-text-dark-primary"> {/* Updated text */}
						{singleProjectData.publish_date || 'Publish Date'} {/* Adjust property name if needed */}
					</span>
				</div>
				<div className="flex items-center">
					<FiTag className="text-lg text-text-light-secondary dark:text-text-dark-secondary" /> {/* Updated text */}
					<span className="font-general-regular ml-2 leading-none text-text-light-primary dark:text-text-dark-primary"> {/* Updated text */}
						{singleProjectData.tags || 'Tags'} {/* Adjust property name if needed */}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectSingleHeader;
