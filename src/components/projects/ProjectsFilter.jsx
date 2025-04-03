import { useContext } from 'react'; // Import useContext
import { ProjectsContext } from '../../context/ProjectsContext'; // Import the context

const ProjectsFilter = ({ setSelectProject }) => {
	// Consume the context to get dynamic categories
	const { projectCategories } = useContext(ProjectsContext); 

	return (
		<select
			onChange={(e) => {
				setSelectProject(e.target.value);
			}}
			className="font-general-medium 
                px-4
                sm:px-6
                py-2
                border
                dark:border-surface-dark // Updated border
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-surface-light // Updated background
                dark:bg-surface-dark // Updated background
                text-text-light-primary // Updated text
                dark:text-text-dark-secondary // Updated text
            "
		>
			<option value={setSelectProject} className="text-sm sm:text-md">
				All Projects
			</option>

			{/* Map over dynamic categories from context */}
			{projectCategories.map((category) => (
				<option className="text-normal sm:text-md" key={category}>
					{category}
				</option>
			))}
		</select>
	);
};

export default ProjectsFilter;
