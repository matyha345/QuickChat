const Field = ({ register, name, options, error, ...rest }) => {
	return (
		<div className=' min-w-max relative oldstyle-nums'>
			<input
				{...register(name, options)}
				{...rest}
				className='bg-white/10 w-full p-4 md:p-6 rounded-xl outline-none placeholder:text-slate-100 tracking-wide mt-1'
			/>
			{error && (
				<div className=' absolute top-full right-0 text-slate-400 mt-2 text-sm'>{error}</div>
			)}
		</div>
	)
}

export default Field
