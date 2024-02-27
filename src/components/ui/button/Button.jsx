const Button = ({ clickHandler, customStyles, children }) => {
	return (
		<button onClick={clickHandler} className={customStyles}>
			{children}
		</button>
	)
}
export default Button
