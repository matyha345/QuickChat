const Button = ({ type, disabled, clickHandler = null }) => {
	return (
		<>
			<button
				className='absolute bg-black md:bottom-3.5 md:right-3 right-2 disabled:opacity-10 disabled:text-gray-400 enabled:bg-black text-white p-0.5 border border-black rounded-lg  bottom-1.5 transition-colors'
				onClick={clickHandler}
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
