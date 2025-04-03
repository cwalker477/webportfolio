import { useState, createContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { supabase } from '../supabaseClient'; // Import Supabase client
// Removed static data import: import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const [singleProjectData, setSingleProjectData] = useState(null); // Initialize as null
	const [loading, setLoading] = useState(true); // Add loading state
	const { projectId } = useParams(); // Get projectId from URL

	useEffect(() => {
		const fetchProject = async () => {
			setLoading(true); // Start loading
			if (!projectId) {
				setLoading(false);
				return; // Don't fetch if no projectId
			}

			try {
				// Fetch the project matching the projectId
				// Assuming your primary key column is 'id'
				const { data, error } = await supabase
					.from('projects') // Assuming table name is 'projects'
					.select('*')
					// Convert projectId string from URL to integer for matching int8 column
					.eq('id', parseInt(projectId, 10)) 
					.single(); // Expect only one row

				if (error) {
					console.error('Error fetching single project:', error);
					setSingleProjectData(null); // Set data to null on error
				} else if (data) {
					// Here we might need to transform the fetched 'data'
					// to match the structure expected by ProjectInfo, ProjectGallery etc.
					// For now, let's assume the fetched data structure is close enough
					// or we'll adapt the components later if needed.
					// A potential issue: singleProjectData.js had nested objects like ProjectInfo, ProjectImages etc.
					// The fetched 'data' will likely be a flat object based on table columns.
					// We may need to restructure 'data' here or update the consuming components.
					// Example: Map fetched columns to the expected nested structure if necessary.
					// const formattedData = { ProjectHeader: { title: data.title, ... }, ProjectImages: [...], ... };
					// setSingleProjectData(formattedData);

					// For now, setting the raw fetched data:
					setSingleProjectData(data);
				} else {
					setSingleProjectData(null); // No data found
				}
			} catch (error) {
				console.error('Error in fetchProject:', error);
				setSingleProjectData(null);
			} finally {
				setLoading(false); // Stop loading regardless of outcome
			}
		};

		fetchProject();
	}, [projectId]); // Re-fetch if projectId changes

	// Provide loading state as well if needed by components
	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData, loading }}
		>
			{/* Conditionally render children only when not loading, or let components handle loading state */}
			{/* {!loading ? children : <div>Loading project...</div>}  */}
			{/* Or simply pass loading state down */}
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
