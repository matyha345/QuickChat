import FeedBackForm from '../ui/feedback-form/FeedbackForm'
import Header from './header/Header'

const Layout = ({ children }) => {
	return (
		<div
			style={{ backgroundImage: "url('/bg.main.webp')" }}
			className='h-dvh font-sans px-5 text-white bg-center bg-no-repeat bg-cover relative overflow-x-hidden'
		>
			<Header />
			{children}
		</div>
	)
}
export default Layout
