const Button = ({ type, disabled, clickHandler = null }) => {
	const handleKeyDown = event => {
		if (event.key === 'Enter' && clickHandler) {
			clickHandler()
		}
	}
	return (
		<>
			<button
				className='absolute bg-black bottom-3 md:bottom-5 md:right-3 right-2 disabled:opacity-10 disabled:text-gray-400 enabled:bg-black text-white p-0.5 border border-black rounded-lg  transition-colors'
				onClick={clickHandler}
				onKeyDown={handleKeyDown}
				disabled={disabled}
				type={type}
			>
				<span data-state='closed'>
					<svg width='24' height='24' viewBox='0 0 24 24' fill='none' className='text-white'>
						<path
							d='M7 11L12 6L17 11M12 18V7'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						></path>
					</svg>
				</span>
			</button>
		</>
	)
}

export default Button
