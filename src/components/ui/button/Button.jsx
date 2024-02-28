

const Button = ({ clickHandler, customStyles, children, type, disabled }) => {
	return (
		<button onClick={clickHandler} className={customStyles} type={type} disabled={disabled}>
			{children}
		</button>
	)
}
export default Button
