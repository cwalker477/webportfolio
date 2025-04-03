import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense, useState } from 'react'; // Import useState
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import HireMeModal from './components/HireMeModal'; // Import Modal
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));


function App() {
	// Lifted state and function for modal
	const [showModal, setShowModal] = useState(false);

	function showHireMeModal() {
		if (!showModal) {
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			setShowModal(false);
		}
	}

	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
					<ScrollToTop />
					{/* Pass modal handler to header */}
					<AppHeader showHireMeModal={showHireMeModal} /> 
					<Suspense fallback={""}>
						<Routes>
              {/* Pass modal handler to Home page */}
							<Route path="/" element={<Home showHireMeModal={showHireMeModal} />} /> 
							<Route path="projects" element={<Projects />} />
							{/* Changed route to accept dynamic projectId */}
							<Route
								path="projects/:projectId" 
								element={<ProjectSingle />}
							/>
							<Route path="about" element={<About />} />
							<Route path="contact" element={<Contact />} />
						</Routes>
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
				{/* Render Modal conditionally */}
				{showModal ? (
					<HireMeModal
						onClose={showHireMeModal}
						onRequest={showHireMeModal}
					/>
				) : null}
			</div>
		</AnimatePresence>
	);
}

export default App;
