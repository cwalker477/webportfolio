// import { useContext } from 'react'; // No longer needed
// import SingleProjectContext from '../../context/SingleProjectContext'; // No longer needed

// Removing related projects section for now as dynamic fetching requires more logic.
const ProjectRelatedProjects = () => {
	// const { singleProjectData } = useContext(SingleProjectContext); // Data structure mismatch

	// Return null to hide the section
	return null; 

	// Original structure (requires data transformation or different fetching logic):
	/*
	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				Related Projects // {singleProjectData.RelatedProject.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{ // Need logic here to fetch/display actual related projects }
			</div>
		</div>
	);
	*/
};

export default ProjectRelatedProjects;
