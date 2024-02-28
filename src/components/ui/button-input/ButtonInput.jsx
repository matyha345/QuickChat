const ButtonInput = ({ type, disabled, clickHandler = null }) => {
	const handleKeyDown = event => {
		if (event.key === 'Enter' && clickHandler) {
			clickHandler()
		}
	}
	return (
		<>
			<button
				className='absolute bottom-3 right-2 rounded-lg border border-black/80 bg-transparent p-0.5 text-white transition-colors enabled:bg-white disabled:text-gray-400 disabled:opacity-50 md:bottom-5  md:right-3'
				onClick={clickHandler}
				onKeyDown={handleKeyDown}
				disabled={disabled}
				type={type}
			>
				<span data-state='closed'>
					<svg width='24' height='24' viewBox='0 0 24 24' fill='none' className=' text-black'>
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

export default ButtonInput
