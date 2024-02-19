const Field = ({ register, name, options, error, ...rest }) => {
	return (
		<div className=' min-w-max relative oldstyle-nums'>
			<input
				{...register(name, options)}
				{...rest}
				className='bg-white/80 w-full p-4 md:p-6 rounded-xl focus:border-blue-600 placeholder:text-slate-500 tracking-wide mt-1'
			/>
			{error && (
				<div className=' absolute top-full right-0 text-slate-400 mt-2 text-sm'>{error}</div>
			)}
		</div>
	)
}

export default Field
