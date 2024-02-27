import { PhotoIcon } from '@heroicons/react/24/solid'
import { useForm } from 'react-hook-form'
import { FaCaretRight } from 'react-icons/fa6'
import cn from 'clsx'
import { sendToTelegram } from '../../services/sendToTelegram'
import { useMutation } from '@tanstack/react-query'

const FeedBackForm = ({ isActiveFeedback, setIsActiveFeedback }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm()

	const onSubmit = async data => {
		try {
			await sendToTelegram(data)
			reset()
		} catch (error) {
			console.error('Ошибка при отправке данных на Telegram:', error)
		}
	}

	return (
		<div className='relative'>
			<FaCaretRight
				onClick={() => setIsActiveFeedback(!isActiveFeedback)}
				fontSize={40}
				className={cn('absolute top-1/2 -left-20 cursor-pointer hover:opacity-60', {
					'animate-fade': isActiveFeedback,
					hidden: !isActiveFeedback
				})}
			/>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='space-y-12'>
					<div className='border-b border-white/10 pb-12'>
						<h2 className='text-base font-semibold leading-7 text-white'>Форма обратной связи</h2>
						<p className='mt-1 text-sm leading-6 text-gray-400'>
							Эта информация будет отображаться публично, так что будьте осторожны с тем, чем вы
							делитесь.
						</p>

						<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
							<div className='sm:col-span-4'>
								<label
									htmlFor='username'
									className='block text-sm font-medium leading-6 text-white'
								>
									Ваше Имя
								</label>
								<div className='mt-2'>
									<div className='flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'>
										<input
											{...register('username')}
											type='text'
											name='username'
											id='username'
											autoComplete='username'
											className='flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6'
											placeholder='Ваше Имя'
										/>
									</div>
								</div>
							</div>

							<div className='col-span-full'>
								<label htmlFor='about' className='block text-sm font-medium leading-6 text-white'>
									О
								</label>
								<div className='mt-2'>
									<textarea
										{...register('about')}
										placeholder='About you'
										id='about'
										name='about'
										rows={3}
										className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
										defaultValue={''}
									/>
								</div>
								<p className='mt-3 text-sm leading-6 text-gray-400'>
									Напишите ваше предложение или отзыв
								</p>
							</div>

							<div className='col-span-full'>
								<label
									htmlFor='cover-photo'
									className='block text-sm font-medium leading-6 text-white'
								>
									Cover photo
								</label>
								<div className='mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-4 py-6'>
									<div className='text-center'>
										<PhotoIcon className='mx-auto h-12 w-12 text-gray-500' aria-hidden='true' />
										<div className='mt-4 flex text-sm leading-6 text-gray-400'>
											<label
												htmlFor='file-upload'
												className='relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500'
											>
												<span>Upload a file</span>
												<input
													id='file-upload'
													name='file-upload'
													type='file'
													className='sr-only'
												/>
											</label>
											<p className='pl-1'>or drag and drop</p>
										</div>
										<p className='text-xs leading-5 text-gray-400'>PNG, JPG, GIF up to 10MB</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-6 flex items-center justify-end gap-x-6'>
					<button
						onClick={() => reset()}
						type='button'
						className='text-sm font-semibold leading-6 text-white'
					>
						Сбросить
					</button>
					<button
						type='submit'
						onClick={() => handleSubmit}
						className='rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
					>
						Оправить
					</button>
				</div>
			</form>
		</div>
	)
}
export default FeedBackForm
