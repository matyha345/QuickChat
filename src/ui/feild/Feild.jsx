const Field = ({ register, name, options, error, customStylesClass, ...rest }) => {
	return (
		<div className=' min-w-max relative oldstyle-nums'>
			<input {...register(name, options)} {...rest} className={customStylesClass} />
			{error && <div className=' absolute top-full right-0 text-slate-400 mt-2 text-sm'>{error}</div>}
		</div>
	)
}

export default Field
