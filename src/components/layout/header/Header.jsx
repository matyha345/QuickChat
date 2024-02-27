import { useFormNumber } from '../../hooks/useFormNumber'

const Header = () => {
	const { toggleLanguage, locales, isActiveLanguage } = useFormNumber()

	return (
		<div className='flex items-center justify-between relative pt-3 md:px-20 '>
			<a className='font-semibold text-2xl' href='/'>
				QuickChat Search
			</a>

			<button
				className='border border-white w-20 h-10 rounded-3xl flex items-center justify-center text-white hover:opacity-90 active:opacity-70'
				onClick={toggleLanguage}
			>
				<img src='/language.svg' alt='Language image' />
				<span className='w-10 font-semibold text-base'>{locales[isActiveLanguage].title}</span>
			</button>
		</div>
	)
}
export default Header
