const AboutClientSingle = ({ title, image }) => {
	return (
		<>
			<img
				src={image}
				className="w-64 py-5 px-10 border bg-surface-light border-palette-gray dark:border-surface-dark shadow-sm rounded-lg mb-8 cursor-pointer" // Updated background and border
				alt={title}
			/>
		</>
	);
};

export default AboutClientSingle;
