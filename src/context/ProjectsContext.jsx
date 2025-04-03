import { useState, createContext, useEffect } from 'react';
import { supabase } from '../supabaseClient'; // Import Supabase client

// Create projects context
export const ProjectsContext = createContext();

// Create the projects context provider
export const ProjectsProvider = (props) => {
	const [projects, setProjects] = useState([]); // Initialize with empty array
	const [searchProject, setSearchProject] = useState('');
	const [selectProject, setSelectProject] = useState('');
	const [projectCategories, setProjectCategories] = useState([]); // State for unique categories

	// Fetch projects from Supabase on mount
	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const { data, error } = await supabase
					.from('projects') // Assuming your table is named 'projects'
					.select('*'); // Select all columns

				if (error) {
					console.error('Error fetching projects:', error);
					// Handle error appropriately, maybe set an error state
				} else if (data) {
					setProjects(data);
					// Calculate unique categories after fetching
					const uniqueCategories = [...new Set(data.map(project => project.category))].filter(Boolean); // Filter out null/empty categories
					setProjectCategories(uniqueCategories);
				}
			} catch (error) {
				console.error('Error fetching projects:', error);
			}
		};

		fetchProjects();
	}, []); // Empty dependency array ensures this runs only once on mount

	// Search projects by project title (should work with fetched data)
	const searchProjectsByTitle = projects.filter((item) => {
		const result = item.title
			.toLowerCase()
			.includes(searchProject.toLowerCase())
			? item
			: searchProject === ''
			? item
			: '';
		return result;
	});

	// Select projects by project category
	const selectProjectsByCategory = projects.filter((item) => {
		let category =
			item.category.charAt(0).toUpperCase() + item.category.slice(1);
		return category.includes(selectProject);
	});

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				setProjects,
				searchProject,
				setSearchProject,
				searchProjectsByTitle,
				selectProject,
				setSelectProject,
				selectProjectsByCategory,
				projectCategories, // Provide categories
			}}
		>
			{props.children}
		</ProjectsContext.Provider>
	);
};
