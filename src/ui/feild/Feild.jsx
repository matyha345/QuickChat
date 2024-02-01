const Field = ({ register, name, options, error, ...rest }) => {
	return (
		<div className=' min-w-max relative oldstyle-nums'>
			<input
				{...register(name, options)}
				{...rest}
				className='bg-white  w-full px-6 py-6 md:py-4 rounded-xl focus:border-blue-600 placeholder:text-slate-500 tracking-wide'
			/>
			{error && <div className=' absolute top-full right-0 text-slate-700 mt-2'>{error}</div>}
		</div>
	)
}

export default Field
