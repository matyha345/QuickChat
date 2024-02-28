const Field = ({ register, name, options, error, customStyles, ...rest }) => {
	return (
		<div className=' relative min-w-max oldstyle-nums'>
			<input {...register(name, options)} {...rest} className={customStyles} />
			{error && (
				<div className='absolute right-0 top-full mt-2 text-sm text-slate-400'>{error}</div>
			)}
		</div>
	)
}

export default Field
