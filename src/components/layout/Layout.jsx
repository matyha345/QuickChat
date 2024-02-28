import Header from './header/Header'

const Layout = ({ children }) => {
	return (
		<div
			style={{ backgroundImage: "url('/bg.main.webp')" }}
			className='h-dvh font-sans px-5 text-white bg-center bg-no-repeat bg-cover relative animate-fade'
		>
			<Header />
			{children}
		</div>
	)
}
export default Layout
