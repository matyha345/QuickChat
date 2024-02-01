import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import Field from './ui/feild/Feild'
import Button from './ui/button/Button'

function App() {
	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors }
	} = useForm()

	const inputValue = watch('phone')
	const [isButtonDisabled, setIsButtonDisabled] = useState(true)

	const onSubmit = data => {
		const enteredPhoneNumber = data.phone.replace(/[^\d]/g, '')

		const whatsappLink = `https://wa.me/${enteredPhoneNumber}`
		window.open(whatsappLink, '_blank')

		reset()
	}

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

	useEffect(() => {
		setIsButtonDisabled(inputValue < 1)
	}, [inputValue])

	return (
		<section className='w-full h-dvh bg-slate-400 flex items-center justify-center font-mono'>
			<div className='mx-auto container max-w-screen-lg m-0-auto px-2r'>
				<div className='flex'>
					<div className=' bg-slate-300 py-5 px-10 rounded-xl shadow-2xl shadow-gray-600'>
						<h1 className='font-bold text-lg sm:text-xl md:text-3xl text-center'>
							QuickChat Search: Найди своих в <span className=' text-green-600 mr-1'>WhatsApp</span>
							мгновенно.
						</h1>

						<form className='mt-5 relative' onSubmit={handleSubmit(onSubmit)}>
							<Field
								error={errors?.phone?.message}
								name='phone'
								register={register}
								options={phoneValidation}
								type={'tel'}
								placeholder='+7 999 999 99 99'
							/>
							<Button disabled={isButtonDisabled} type={'submit'}></Button>
						</form>

						<h2 className='ml-5 sm:ml-0 font-semibold subpixel-antialiased text-sm md:text-1xl text-left  md:text-center mt-10 text-slate-600'>
							Данный сервис перенаправляет по указанному номеру на веб-сайт 
							<span className='text-green-600 ml-1'>WhatsApp</span>, обеспечивая удобный переход к
							приложению для определенного пользователя.
						</h2>
					</div>
				</div>
			</div>
		</section>
	)
}

export default App
