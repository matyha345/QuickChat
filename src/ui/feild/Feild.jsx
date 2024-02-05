const Field = ({ register, name, options, error, customStylesClass, ...rest }) => {
	return (
		<div className=' min-w-max relative oldstyle-nums'>
			<input {...register(name, options)} {...rest} className={customStylesClass} />
			{error && <div className=' absolute top-full right-0 text-slate-700 mt-2'>{error}</div>}
		</div>
	)
}

export default Field
