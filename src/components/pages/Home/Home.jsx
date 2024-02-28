import { useFormNumber } from '../../hooks/useFormNumber'
import Layout from '../../layout/Layout'
import FormNumber from '../../ui/form-number/FormNumber'


const Home = () => {
	const { t } = useFormNumber()
	return (
		<Layout>
			<div className='flex flex-col items-center md:mt-20 py-5 px-3 md:px-10 '>
				<h1 className='text-white/65 font-bold md:text-lg sm:text-xl text-center'>
					<span dangerouslySetInnerHTML={{ __html: t('main.titleH1') }} />
				</h1>

				<FormNumber />

				<div className='flex flex-col max-w-screen-sm'>
					<h2 className='font-semibold subpixel-antialiased text-sm md:text-1xl text-left md:text-center mt-10 text-white/65 '>
						<span dangerouslySetInnerHTML={{ __html: t('main.titleH2') }} />
					</h2>
					<p className='mt-4 md:text-center text-white/65  text-xs font-semibold subpixel-antialiased'>
						{t('main.text')}
					</p>
				</div>
			</div>
		</Layout>
	)
}

export default Home
