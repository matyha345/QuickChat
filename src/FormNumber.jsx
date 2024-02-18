import { useForm } from 'react-hook-form'
import { useCallback, useEffect, useState } from 'react'
import Field from './ui/feild/Feild'
import Button from './ui/button/Button'

const FormNumber = () => {
	const [modifiedPhoneNumber, setModifiedPhoneNumber] = useState('')
	const [isButtonDisabledWhatsApp, setIsButtonDisabledWhatsApp] = useState(true)
	const [isButtonDisabledViber, setIsButtonDisabledViber] = useState(true)

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors }
	} = useForm({ shouldUnregister: false, mode: 'onChange' })

	const inputValueWhatsApp = watch('whatsApp')
	const inputValueViber = watch('viber')

	useEffect(() => {
		const enteredPhoneNumber = (inputValueWhatsApp || inputValueViber || '').replace(/[^\d]/g, '')
		const modifiedNumber = enteredPhoneNumber.replace(/8/g, '7')

		setModifiedPhoneNumber(modifiedNumber)

		setIsButtonDisabledWhatsApp(modifiedNumber < 1 || !inputValueWhatsApp)

		setIsButtonDisabledViber(modifiedNumber < 1 || !inputValueViber)
	}, [inputValueWhatsApp, inputValueViber])

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

	const onSubmit = useCallback(
		messenger => {
			if (!Object.keys(errors).length) {
				let link = ''
				if (messenger === 'whatsApp') {
					link = `https://wa.me/${modifiedPhoneNumber}`
				} else if (messenger === 'viber') {
					link = `viber://chat?number=${modifiedPhoneNumber}`
				}

				if (link) {
					window.open(link, '_blank')
				}

				reset()
			}
		},
		[modifiedPhoneNumber, reset, errors]
	)

	const changeTypeButtonWhatsApp = !isButtonDisabledWhatsApp ? 'submit' : 'button'
	const changeTypeButtonViber = !isButtonDisabledViber ? 'submit' : 'button'

	return (
		<section className='w-full h-dvh bg-slate-400 flex items-center justify-center font-sans px-5'>
			<div className='mx-auto container max-w-screen-lg m-0-auto px-2r'>
				<div className='flex'>
					<div className='bg-bgMain py-5 px-3 md:px-10 rounded-xl shadow-2xl shadow-gray-600'>
						<h1 className='text-white font-bold md:text-lg sm:text-xl text-center'>
							Отыскать новые контакты в{' '}
							<span className='text-whatsApp mx-1'>WhatsApp</span>и{' '}
							<span className='text-viber mx-1'>Viber</span>
							cтало проще простого с QuickChat Search.
						</h1>

						<form className='mt-5 relative' onSubmit={onSubmit}>
							<div className='relative'>
								<p className='md:text-lg font-bold text-whatsApp'>WhatsApp</p>
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
									type={changeTypeButtonWhatsApp}
									clickHandler={() => onSubmit('whatsApp')}
								></Button>
							</div>
							<div className='relative'>
								<p className='md:text-lg font-bold text-viber mt-5'>Viber</p>
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
									type={changeTypeButtonViber}
									clickHandler={() => onSubmit('viber')}
								></Button>
							</div>
						</form>

						<h2 className='font-semibold subpixel-antialiased text-sm md:text-1xl text-left md:text-center mt-10 text-white/75'>
							Наш сервис мгновенно перенаправляет вас по указанному номеру на веб-страницы
							<span className=' text-whatsApp mx-1'>WhatsApp</span> и
							<span className='text-viber ml-1'>Viber</span>, обеспечивая мгновенный доступ к
							приложениям без лишних телодвижений.
						</h2>
						<p className=' mt-3 md:text-center text-white/75 text-xs font-semibold subpixel-antialiased'>
							Больше не нужно тратить время на поиск и добавление новых контактов в телефоне –
							QuickChat Search делает весь процесс быстрым и удобным. Просто введите номер и
							наслаждайтесь связью в считанные мгновения!
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FormNumber
