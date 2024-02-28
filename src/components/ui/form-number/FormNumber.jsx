import { useFormNumber } from "../../hooks/useFormNumber"
import ButtonInput from "../button-input/ButtonInput"
import Field from "../feild/Feild"


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
					<p className='md:text-lg font-bold text-whatsApp'>WhatsApp</p>
					<Field
						error={errors?.whatsApp?.message}
						name='whatsApp'
						register={register}
						options={phoneValidation}
						type={'tel'}
						placeholder={t('main.placeholder')}
					/>
					<ButtonInput
						disabled={isButtonDisabledWhatsApp}
						type={changeTypeButtonWhatsApp}
						clickHandler={() => onSubmit('whatsApp')}
					></ButtonInput>
				</div>
				<div className='relative'>
					<p className='md:text-lg font-bold text-viber mt-5'>Viber</p>
					<Field
						error={errors?.viber?.message}
						name='viber'
						register={register}
						options={phoneValidation}
						type={'tel'}
						placeholder={t('main.placeholder')}
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
