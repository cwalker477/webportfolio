import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import Button from '../components/reusable/Button';

// Accept showHireMeModal prop from App.js
const Home = ({ showHireMeModal }) => { 
	return (
		<div className="container mx-auto">
      {/* Pass prop down to AppBanner */}
			<AppBanner showHireMeModal={showHireMeModal}></AppBanner> 

			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider>

			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-accent-orange hover:bg-orange-700 focus:ring-1 focus:ring-orange-700 text-white text-lg sm:text-xl duration-300"
					aria-label="More Projects"
				>
					<Button title="More Projects" />
				</Link>
			</div>
		</div>
	);
};

export default Home;
