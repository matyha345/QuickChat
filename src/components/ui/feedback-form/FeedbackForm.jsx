import cn from 'clsx'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { useFeedBackForm } from './hooks/useFeedBackForm'
import FeedbackFormFields from './feedback-form-fields/FeedbackFormFields'
import Button from '../button/Button'
import Alert from '../alert/Alert'
import { useEffect } from 'react'
import { LiaDonateSolid } from "react-icons/lia";

const FeedBackForm = ({ isActiveFeedback, setIsActiveFeedback }) => {
	const {
		nav,
		remainingTime,
		setRemainingTime,
		lastSubmissionTime,
		setLastSubmissionTime,
		t,
		handleSubmit,
		mutation,
		register,
		errors,
		reset
	} = useFeedBackForm()

	useEffect(() => {
		let timer
		if (lastSubmissionTime) {
			const currentTime = Date.now()
			const elapsedTime = currentTime - lastSubmissionTime
			const remaining = Math.max(0, 60000 - elapsedTime) // Оставшееся время в миллисекундах
			setRemainingTime(remaining)
			timer = setInterval(() => {
				setRemainingTime(prevTime => Math.max(0, prevTime - 1000)) // Обновляем оставшееся время каждую секунду
			}, 1000)
		}
		return () => clearInterval(timer) // Очищаем интервал при размонтировании компонента
	}, [lastSubmissionTime])

	const onSubmit = async data => {
		const currentTime = Date.now()
		if (lastSubmissionTime && currentTime - lastSubmissionTime < 60000) {
			return
		}
		setLastSubmissionTime(currentTime)
		await mutation.mutateAsync(data)
	}

	return (
		<div className='relative'>
			{mutation.isSuccess && (
				<Alert
					customStyles={{
						position: 'absolute',
						top: '-2%',
						left: '0'
					}}
					type='success'
					text={t('feedback.alertIsSuccess')}
				/>
			)}

			{mutation.isError && (
				<Alert
					customStyles={{
						position: 'absolute',
						bottom: '5%',
						left: '0',
						width: '280px'
					}}
					type='error'
					text={t('feedback.alertIsError')}
				/>
			)}

			<IoIosCloseCircleOutline
				onClick={() => setIsActiveFeedback(!isActiveFeedback)}
				fontSize={28}
				className={cn('absolute -top-5  right-0 cursor-pointer hover:opacity-60 ', {
					'animate-fade': isActiveFeedback,
					hidden: !isActiveFeedback
				})}
			/>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='space-y-12'>
					<FeedbackFormFields t={t} register={register} errors={errors} />
				</div>

				<div className='mt-6 flex items-center justify-end gap-x-6'>
					<Button
						clickHandler={() => reset()}
						type='button'
						customStyles={'text-sm font-semibold leading-6 text-white hover:opacity-60'}
					>
						{t('feedback.buttonDrop')}
					</Button>
					<Button
						type='submit'
						clickHandler={() => handleSubmit}
						disabled={mutation.isPending}
						customStyles={cn(
							'rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500',
							{
								'flex justify-center w-24': mutation.isPending
							},
							{
								'opacity-10 cursor-no-drop': remainingTime
							}
						)}
					>
						{mutation.isPending ? <div className='loader'></div> : t('feedback.buttonSubmit')}
					</Button>
				</div>
			</form>

			{remainingTime > 0 && (
				<p className='mt-5 animate-fade text-sm text-slate-400'>
					{t('feedback.pleaseWait')}{' '}
					<span className='text-blue-400'>{Math.ceil(remainingTime / 1000)}</span>
				</p>
			)}

			<Button clickHandler={() => nav('/donate')}>
				<LiaDonateSolid size={55} className='text-slate-400' />
			</Button>
		</div>
	)
}
export default FeedBackForm
