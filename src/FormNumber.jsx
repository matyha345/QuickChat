import Field from './ui/feild/Feild'
import Button from './ui/button/Button'
import { useFormNumber } from './hooks/useFormNumber'

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
		toggleLanguage,
		t,
		locales,
		isActiveLanguage
	} = useFormNumber()

	return (
		<section className='w-full h-dvh bg-slate-400 flex items-center justify-center font-sans px-5'>
			<div className='mx-auto container max-w-screen-lg'>
				<div className='flex'>
					<div className='bg-bgMain py-5 px-3 md:px-10 rounded-xl shadow-2xl shadow-gray-600 relative'>
						<button
							className='absolute top-[-45px] sm:top-[-53px] right-[10px] bg-bgMain w-20 h-10 rounded-3xl flex items-center justify-center text-white hover:opacity-90  active:opacity-70'
							onClick={toggleLanguage}
						>
							<img src='/language.svg' alt='Language image' />
							<span className='w-10 font-semibold text-base'>
								{locales[isActiveLanguage].title}
							</span>
						</button>

						<h1 className='text-white font-bold md:text-lg sm:text-xl text-center'>
							<span dangerouslySetInnerHTML={{ __html: t('main.titleH1') }} />
						</h1>

						<form className='mt-5 relative' onSubmit={onSubmit}>
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
								<Button
									disabled={isButtonDisabledWhatsApp}
									type={changeTypeButtonWhatsApp}
									clickHandler={() => onSubmit('whatsApp')}
								></Button>
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
								<Button
									disabled={isButtonDisabledViber}
									type={changeTypeButtonViber}
									clickHandler={() => onSubmit('viber')}
								></Button>
							</div>
						</form>

						<h2 className='font-semibold subpixel-antialiased text-sm md:text-1xl text-left md:text-center mt-10 text-white/75'>
							<span dangerouslySetInnerHTML={{ __html: t('main.titleH2') }} />
						</h2>
						<p className=' mt-3 md:text-center text-white/75 text-xs font-semibold subpixel-antialiased'>
							{t('main.text')}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FormNumber
