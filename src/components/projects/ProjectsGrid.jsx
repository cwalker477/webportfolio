import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';

const ProjectsGrid = () => {
	const {
		projects,
		searchProject,
		setSearchProject,
		searchProjectsByTitle,
		selectProject,
		setSelectProject,
		selectProjectsByCategory,
	} = useContext(ProjectsContext);

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-gray-500 dark:text-gray-300"> {/* Use standard Tailwind text colors */}
					Projects portfolio
				</p>
			</div>

			<div className="mt-10 sm:mt-16">
				<h3
					className="font-general-regular 
                        text-center text-gray-500 // Use standard Tailwind text colors
                        dark:text-gray-300 // Use standard Tailwind text colors
                        text-md
                        sm:text-xl
                        mb-3
                        "
				>
					Search projects by title or filter by category
				</h3>
				<div
					className="
                        flex
                        justify-between
                        border-b border-gray-200 // Use standard Tailwind border color
                        dark:border-gray-700 // Use standard Tailwind border color
                        pb-3
                        gap-3
                        "
				>
					<div className="flex justify-between gap-2">
						<span
							className="
                                hidden
                                sm:block
                                bg-surface-light 
                                dark:bg-surface-dark 
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
						>
							<FiSearch className="text-gray-400 dark:text-gray-300 w-5 h-5"></FiSearch> {/* Use standard Tailwind text colors */}
						</span>
						<input
							onChange={(e) => {
								setSearchProject(e.target.value);
							}}
							className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                                border-gray-200 // Light mode border
                                dark:border-gray-700 // Dark mode border
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-gray-50 // Light mode background
                                dark:bg-surface-dark // Use defined surface color for dark background
                                text-gray-800 // Light mode text
                                dark:text-text-dark-primary // Use defined primary text color for dark mode
                                "
							id="name"
							name="name"
							type="search"
							required=""
							placeholder="Search Projects"
							aria-label="Name"
						/>
					</div>

					<ProjectsFilter setSelectProject={setSelectProject} />
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
				{selectProject
					? selectProjectsByCategory.map((project) => (
							<ProjectSingle
								title={project.title}
								category={project.category}
								image={project.img_url} // Use correct column name
								id={project.id} 
								key={project.id}
							/>
					  ))
					: searchProject
					? searchProjectsByTitle.map((project) => (
							<ProjectSingle
								title={project.title}
								category={project.category}
								image={project.img_url} // Use correct column name
								id={project.id} 
								key={project.id}
							/>
					  ))
					: projects.map((project) => (
							<ProjectSingle
								title={project.title}
								category={project.category}
								image={project.img_url} // Use correct column name
								id={project.id} 
								key={project.id}
							/>
					  ))}
			</div>
		</section>
	);
};

export default ProjectsGrid;
