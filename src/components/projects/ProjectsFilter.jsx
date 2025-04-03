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
                border-gray-200 // Light mode border
                dark:border-gray-700 // Dark mode border
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-gray-50 // Light mode background
                dark:bg-surface-dark // Correct dark background
                text-gray-800 // Light mode text
                dark:text-text-dark-primary // Correct dark text
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
