import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectGallery = () => {
	// Include loading state
	const { singleProjectData, loading } = useContext(SingleProjectContext);

	// Handle loading and null states
	if (loading) {
		return <div className="mt-12">Loading gallery...</div>; // Or skeleton loader
	}

	if (!singleProjectData) {
		// No project data, gallery cannot be displayed
		return null; 
	}

	// Assuming Supabase column for gallery images is 'detail_images' (an array of text URLs)
	// Adjust 'detail_images' if your column name is different
	const images = singleProjectData.detail_images;

	if (!images || images.length === 0) {
		return <div className="mt-12">No project images available.</div>;
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{images.map((imageUrl, index) => { // Map over the array of URLs
				return (
					<div className="mb-10 sm:mb-0" key={index}> {/* Use index as key if no unique ID per image */}
						<img
							src={imageUrl} // Use the URL directly
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={`${singleProjectData.title || 'Project'} Image ${index + 1}`} // Generate alt text
							// key prop is on the parent div now
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;
