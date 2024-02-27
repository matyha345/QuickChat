import { useFormNumber } from '../../hooks/useFormNumber'
import Layout from '../../layout/Layout'
import FormNumber from '../../ui/form-number/FormNumber'

import FeedBackForm from '../../ui/feedback-form/FeedbackForm'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import Button from '../../ui/button/Button'
import { FaCaretLeft } from 'react-icons/fa'

const Home = () => {

	const { t } = useFormNumber()
	const { ref, isShow: isActiveFeedback, setIsShow: setIsActiveFeedback } = useOnClickOutside(false)

	return (
		<Layout>
			<div className='flex flex-col items-center md:mt-20 py-5 px-3 md:px-10'>
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

			<Button
				customStyles={'absolute top-[47%] right-0 hover:opacity-60'}
				clickHandler={() => setIsActiveFeedback(!isActiveFeedback)}
			>
				<FaCaretLeft fontSize={40} />
			</Button>

			<div
				ref={ref}
				style={{
					backgroundImage: "url('/bg.main.webp')",
					transform: !isActiveFeedback ? 'translate(800px)' : 'translate(0)',
					transition: 'transform 0.5s ease'
				}}
				className='absolute top-0 right-0 bg-black rounded h-dvh p-10 z-50'
			>
				<FeedBackForm
					isActiveFeedback={isActiveFeedback}
					setIsActiveFeedback={setIsActiveFeedback}
				/>
			</div>
		</Layout>
	)
}

export default Home
