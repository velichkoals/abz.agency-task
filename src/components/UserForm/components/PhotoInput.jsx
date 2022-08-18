import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import '../UserForm.sass';

export const PhotoInput = ({ errors }) => {
	const { register } = useFormContext();
	const [fileName, setFileName] = useState('Upload your photo');

	return (
		<div className='photo-input__wrapper'>
			<input
				{...register('file', {
					onChange: (e) => setFileName(e.target.files[0].name),
					required: 'Upload photo',
				})}
				type='file'
				id='photo-input'
				hidden
			/>
			<label
				htmlFor='photo-input'
				className={`photo-input ${errors?.file?.message && 'input-err'}`}
			>
				Upload
			</label>
			<div
				className={`photo-input__file ${errors?.file?.message && 'input-err'}`}
			>
				{fileName}
			</div>
			<div className='err-message photo-err'>{errors?.file?.message}</div>
		</div>
	);
};
