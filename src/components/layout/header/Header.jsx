import { useFormNumber } from '../../hooks/useFormNumber'

const Header = () => {
	const { toggleLanguage, locales, isActiveLanguage } = useFormNumber()

	return (
		<div className='relative flex items-center justify-between pt-3 md:px-20 '>
			<a className='text-2xl font-semibold' href='/'>
				QuickChat Search
			</a>

			<button
				className='flex h-10 w-20 items-center justify-center rounded-3xl border border-white text-white hover:opacity-90 active:opacity-70'
				onClick={toggleLanguage}
			>
				<img src='/language.svg' alt='Language image' />
				<span className='w-10 text-base font-semibold'>{locales[isActiveLanguage].title}</span>
			</button>
		</div>
	)
}
export default Header
