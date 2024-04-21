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
		<Layout isActiveFeedback={isActiveFeedback}>

			<div className='flex flex-col items-center px-3 py-5 md:mt-20 md:px-10'>
				<h1 className='text-center font-bold text-white/65 sm:text-xl md:text-lg'>
					<span dangerouslySetInnerHTML={{ __html: t('main.titleH1') }} />
				</h1>

				<FormNumber />

				<div className='flex max-w-screen-sm flex-col'>
					<h2 className='md:text-1xl mt-10 text-left text-sm font-semibold text-white/65 subpixel-antialiased md:text-center '>
						<span dangerouslySetInnerHTML={{ __html: t('main.titleH2') }} />
					</h2>
					<p className='mt-4 text-xs font-semibold  text-white/65 subpixel-antialiased md:text-center'>
						{t('main.text')}
					</p>
				</div>
			</div>

			<Button
				customStyles={
					'absolute top-[53%] md:top-[47%] -right-1 md:right-2 hover:opacity-60 animate-opacityBreathe'
				}
				clickHandler={() => setIsActiveFeedback(!isActiveFeedback)}
			>
				<FaCaretLeft fontSize={35} />
			</Button>

			<div
				ref={ref}
				style={{
					backgroundImage: "url('/bg.main.webp')",
					transform: !isActiveFeedback ? 'translate(1100px)' : 'translate(0)',
					transition: 'transform 0.8s ease'
				}}
				className='absolute right-0 top-0 z-50 h-dvh w-full rounded bg-black px-5 py-10 md:px-10 lg:w-auto'
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
