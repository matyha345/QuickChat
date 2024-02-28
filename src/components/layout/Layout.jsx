import Header from './header/Header'
import cn from 'clsx'
const Layout = ({ children, isActiveFeedback }) => {
	return (
		<div
			style={{ backgroundImage: "url('/bg.main.webp')" }}
			className='relative h-dvh overflow-x-hidden bg-cover bg-center bg-no-repeat px-5 font-sans text-white'
		>
			<div
				className={cn('block', {
					'absolute bottom-0 left-0 right-0 top-0 z-20 bg-white/10 px-5 ': 	isActiveFeedback
				})}
			>
				<Header />
				{children}
			</div>
		</div>
	)
}
export default Layout
