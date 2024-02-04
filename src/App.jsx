import { useForm } from 'react-hook-form'
import { useCallback, useEffect, useState } from 'react'
import Field from './ui/feild/Feild'
import Button from './ui/button/Button'

function App() {
	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors }
	} = useForm({ shouldUnregister: false })

	const inputValueWhatsApp = watch('whatsApp')
	const inputValueViber = watch('viber')

	const [modifiedPhoneNumber, setModifiedPhoneNumber] = useState('')
	const [isButtonDisabledWhatsApp, setIsButtonDisabledWhatsApp] = useState(true)
	const [isButtonDisabledViber, setIsButtonDisabledViber] = useState(true)

	useEffect(() => {
		const enteredPhoneNumber = (inputValueWhatsApp || inputValueViber || '').replace(/[^\d]/g, '')
		const modifiedNumber = enteredPhoneNumber.replace(/8/g, '+7')

		setModifiedPhoneNumber(modifiedNumber)

		setIsButtonDisabledWhatsApp(modifiedNumber < 1 || !inputValueWhatsApp)

		setIsButtonDisabledViber(modifiedNumber < 1 || !inputValueViber)
	}, [inputValueWhatsApp, inputValueViber])

	const onSubmit = useCallback(
		messenger => {
			if (messenger === 'whatsApp') {
				const whatsappLink = `https://wa.me/${modifiedPhoneNumber}`
				window.open(whatsappLink, '_blank')
			} else if (messenger === 'viber') {
				const viberLink = `viber://chat?number=+${modifiedPhoneNumber}`
				window.open(viberLink, '_blank')
			}

			reset()
		},
		[modifiedPhoneNumber, reset]
	)

	const phoneValidation = {
		required: 'Введите номер телефона',
		pattern: {
			value: /^[\d\s()+-]+$/i,
			message: 'Номер телефона должен содержать только цифры'
		},
		minLength: {
			value: 10,
			message: 'Номер минимум 10 символов'
		}
	}

	return (
		<section className='w-full h-dvh bg-slate-400 flex items-center justify-center font-sans px-5'>
			<div className='mx-auto container max-w-screen-lg m-0-auto px-2r'>
				<div className='flex'>
					<div className='bg-bgMain py-5 px-10 rounded-xl shadow-2xl shadow-gray-600'>
						<h1 className='text-white font-bold text-lg sm:text-xl md:text-3xl text-center'>
							QuickChat Search: Найди своих в <span className=' text-whatsApp mr-1'>WhatsApp</span>
							мгновенно.
						</h1>

						<form className='mt-5 relative' onSubmit={handleSubmit(onSubmit)}>
							<div className='relative'>
								<p className='text-lg font-bold text-whatsApp'>WhatsApp</p>
								<Field
									customStylesClass='bg-white/80 w-full px-6 py-6 md:py-4 rounded-xl focus:border-blue-600 placeholder:text-slate-500 tracking-wide mt-1'
									error={errors?.whatsApp?.message}
									name='whatsApp'
									register={register}
									options={phoneValidation}
									type={'tel'}
									placeholder='+7 999 999 99 99'
								/>
								<Button
									disabled={isButtonDisabledWhatsApp}
									type={'submit'}
									clickHandler={() => handleSubmit(onSubmit('whatsApp'))}
								></Button>
							</div>
							<div className='relative'>
								<p className='text-lg font-bold text-viber mt-5'>Viber</p>
								<Field
									customStylesClass='bg-white/80 w-full px-6 py-6 md:py-4 rounded-xl focus:border-blue-600 placeholder:text-slate-500 tracking-wide mt-1'
									error={errors?.viber?.message}
									name='viber'
									register={register}
									options={phoneValidation}
									type={'tel'}
									placeholder='+7 999 999 99 99'
								/>
								<Button
									disabled={isButtonDisabledViber}
									type={'submit'}
									clickHandler={() => handleSubmit(onSubmit('viber'))}
								></Button>
							</div>
						</form>

						<h2 className='ml-5 sm:ml-0 font-semibold subpixel-antialiased text-sm md:text-1xl text-left  md:text-center mt-10 text-white/75'>
							Данный сервис перенаправляет по указанному номеру на веб-сайт
							<span className='text-whatsApp ml-1'>WhatsApp</span>, обеспечивая удобный переход к
							приложению для определения пользователя.
						</h2>
					</div>
				</div>
			</div>
		</section>
	)
}

export default App
