import React from 'react';

const FormInput = ({
	inputLabel,
	labelFor,
	inputType,
	inputId,
	inputName,
	placeholderText,
	ariaLabelName,
}) => {
	return (
		<div className="font-general-regular mb-4">
			<label
				className="block text-lg text-text-light-primary dark:text-text-dark-primary mb-1" // Updated text
				htmlFor={labelFor}
			>
				{inputLabel}
			</label>
			<input
				className="w-full px-5 py-2 border border-gray-300 dark:border-surface-dark border-opacity-50 text-text-light-primary dark:text-text-dark-secondary bg-surface-light dark:bg-surface-dark rounded-md shadow-sm text-md" // Updated border, text, background
				type={inputType}
				id={inputId}
				name={inputName}
				placeholder={placeholderText}
				aria-label={ariaLabelName}
				required
			/>
		</div>
	);
};

export default FormInput;
