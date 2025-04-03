import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Accept id prop
// Force rebuild test 1
const ProjectSingle = ({ title, category, image, id }) => { 
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
      {/* Use dynamic link with id */}
			<Link to={`/projects/${id}`} aria-label="Single Project"> 
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-surface-light dark:bg-surface-dark"> {/* Updated background */}
					<div>
						<img
							src={image}
							className="rounded-t-xl border-none"
							alt="Single Project"
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-lg md:text-xl text-text-light-secondary dark:text-text-dark-secondary mb-2"> {/* Updated text */}
							{title}
						</p>
						<span className="text-lg text-text-light-secondary dark:text-text-dark-secondary"> {/* Updated text */}
							{category}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
