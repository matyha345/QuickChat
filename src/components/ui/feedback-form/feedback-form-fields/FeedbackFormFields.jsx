const FeedbackFormFields = ({ t, register, errors }) => {
	return (
		<div className='border-b border-white/10 pb-12'>
			<h2 className='text-base font-semibold leading-7 text-white'>{t('feedback.fedBack')}</h2>
			<p className='mt-1 text-sm leading-6 text-gray-400'>{t('feedback.title')}</p>

			<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
				<div className='sm:col-span-4'>
					<label htmlFor='username' className='block text-sm font-medium leading-6 text-white'>
						{t('feedback.name')}
					</label>
					<div className='mt-2'>
						<div className='relative flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset'>
							<input
								{...register('username', { required: true, maxLength: 20 })}
								type='text'
								name='username'
								id='username'
								autoComplete='username'
								className='flex-1 border-0 bg-transparent px-2 py-2.5  text-white outline-none focus:ring-0 sm:text-sm sm:leading-6'
								placeholder={t('feedback.name')}
							/>
							{errors.username && (
								<div className='absolute right-0 top-full mt-2 text-sm text-slate-400'>
									{t('feedback.required')}
								</div>
							)}
						</div>
					</div>
				</div>

				<div className='col-span-full'>
					<label htmlFor='about' className='block text-sm font-medium leading-6 text-white'>
						{t('feedback.opinionComment')}
					</label>
					<div className='relative mt-2'>
						<textarea
							{...register('about', { required: true, minLength: 20, maxLength: 400 })}
							placeholder={t('feedback.message')}
							id='about'
							name='about'
							rows={3}
							className='block min-h-24 w-full rounded-md border-0 bg-white/5 px-2.5 py-1.5 text-white shadow-sm outline-none ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
						/>
						{errors.about && (
							<div className='absolute right-0 top-full mt-2 text-sm text-slate-400'>
								{errors.about.type === 'required'
									? t('feedback.required')
									: errors.about.type === 'minLength'
										? t('feedback.requiredMinLength')
										: errors.about.type === 'maxLength'
											? t('feedback.requiredMaxLength')
											: t('feedback.requiredValue')}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default FeedbackFormFields
