import { useFormNumber } from '../../hooks/useFormNumber'
import ButtonInput from '../button-input/ButtonInput'
import Field from '../feild/Feild'

const FormNumber = () => {
	const {
		register,
		phoneValidation,
		onSubmit,
		errors,
		isButtonDisabledWhatsApp,
		isButtonDisabledViber,
		changeTypeButtonWhatsApp,
		changeTypeButtonViber,
		t
	} = useFormNumber()

	return (
		<div className='w-full'>
			<form className='mx-auto mt-5 max-w-4xl' onSubmit={onSubmit}>
				<div className='relative'>
					<p className='font-bold text-whatsApp md:text-lg'>WhatsApp</p>
					<Field
						error={errors?.whatsApp?.message}
						name='whatsApp'
						register={register}
						options={phoneValidation}
						type={'tel'}
						placeholder={t('main.placeholder')}
						customStyles={
							'mt-1 w-full rounded-xl bg-white/10 p-4 tracking-wide outline-none placeholder:text-slate-100 md:p-6'
						}
					/>
					<ButtonInput
						disabled={isButtonDisabledWhatsApp}
						type={changeTypeButtonWhatsApp}
						clickHandler={() => onSubmit('whatsApp')}
					></ButtonInput>
				</div>
				<div className='relative'>
					<p className='mt-5 font-bold text-viber  md:text-lg'>Viber</p>
					<Field
						error={errors?.viber?.message}
						name='viber'
						register={register}
						options={phoneValidation}
						type={'tel'}
						placeholder={t('main.placeholder')}
						customStyles={
							'mt-1 w-full rounded-xl bg-white/10 p-4 tracking-wide outline-none placeholder:text-slate-100 md:p-6'
						}
					/>
					<ButtonInput
						disabled={isButtonDisabledViber}
						type={changeTypeButtonViber}
						clickHandler={() => onSubmit('viber')}
					></ButtonInput>
				</div>
			</form>
		</div>
	)
}

export default FormNumber
