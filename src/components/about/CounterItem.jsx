import React from 'react';

const CounterItem = ({ title, counter, measurement }) => {
	return (
		<div className="mb-20 sm:mb-0">
			<h2 className="text-4xl text-center text-text-light-secondary dark:text-text-dark-secondary mb-2"> {/* Updated text */}
				{counter} {measurement}
			</h2>
			<span className="font-general-regular block text-md text-center text-text-light-secondary dark:text-text-dark-secondary"> {/* Updated text */}
				{title}
			</span>
		</div>
	);
};

export default CounterItem;
