import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import '../UserForm.sass';

export const PhotoInput = ({ errors }) => {
	const { register } = useFormContext();
	const [fileName, setFileName] = useState('Upload your photo');

	return (
		<div className='photo-input__wrapper'>
			<input
				{...register('photo', {
					onChange: (e) => setFileName(e.target.files[0].name),
					required: 'Upload photo',
				})}
				type='file'
				accept='image/jpeg, image/jpg'
				id='photo-input'
				hidden
			/>
			<label
				htmlFor='photo-input'
				className={`photo-input ${errors?.photo?.message && 'input-err'}`}
			>
				Upload
			</label>
			<div
				className={`photo-input__file ${errors?.photo?.message && 'input-err'}`}
			>
				{fileName}
			</div>
			<div className='err-message photo-err'>{errors?.photo?.message}</div>
		</div>
	);
};
