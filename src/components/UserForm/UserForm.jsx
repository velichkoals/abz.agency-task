import React from 'react';
import { Button } from '../../common/Button/Button';
import { useForm, FormProvider } from 'react-hook-form';
import { NameInput } from './components/NameInput';
import { EmailInput } from './components/EmailInput';
import { PhoneInput } from './components/PhoneInput';
import { PositionInput } from './components/PositionInput';
import { PhotoInput } from './components/PhotoInput';

import './UserForm.sass';

export const UserForm = () => {
	const formMethods = useForm({ mode: 'onBlur' });
	const {
		formState: { errors },
		handleSubmit,
	} = formMethods;

	return (
		<FormProvider {...formMethods}>
			<form
				className='user-form'
				onSubmit={handleSubmit((data) => console.log(data))}
			>
				<div className='user-form__title'>Working with POST request</div>
				<NameInput
					name={'name'}
					options={{
						required: 'This field is required.',
						minLength: {
							value: 2,
							message: 'Field should include min. 2 characters',
						},
						maxLength: {
							value: 60,
							message: 'Field should include max. 60 characters',
						},
					}}
					placeholder='Your name'
					className={errors?.name?.message && 'input-err'}
					errors={errors}
				/>
				<EmailInput
					name={'email'}
					options={{
						required: 'This field is required.',
						minLength: {
							value: 2,
							message: 'Field should include min. 2 characters',
						},
						maxLength: {
							value: 100,
							message: 'Field should include max. 100 characters',
						},
						pattern: {
							value:
								/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,
							message: 'Invalid email address.',
						},
					}}
					placeholder='Email'
					className={errors?.email?.message && 'input-err'}
					errors={errors}
				/>
				<PhoneInput
					name={'phone'}
					options={{
						required: 'This field is required.',
						pattern: {
							value: /^[\+]{0,1}380([0-9]{9})$/,
							message: 'Invalid phone number.',
						},
					}}
					placeholder='Phone'
					className={errors?.phone?.message && 'input-err'}
					errors={errors}
				/>
				<PositionInput errors={errors} />
				<PhotoInput errors={errors} />
				<Button type='submit' text='Sign up' className='user-form__btn' />
			</form>
		</FormProvider>
	);
};
