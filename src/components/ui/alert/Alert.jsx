import React, { useEffect, useRef, useState } from 'react'
import cn from 'clsx'

const Alert = ({ type = 'success', text, customStyles }) => {
	const [isVisible, setIsVisible] = useState(true)
	const timeoutIdRef = useRef(null)

	useEffect(() => {
		if (isVisible) {
			timeoutIdRef.current = setTimeout(() => {
				setIsVisible(false)
			}, 3000)
		} else if (timeoutIdRef.current) {
			clearTimeout(timeoutIdRef.current)
		}

		return () => {
			if (timeoutIdRef.current) {
				clearTimeout(timeoutIdRef.current)
			}
		}
	}, [isVisible])

	const alertClasses = {
		success: 'bg-green-300 text-gray-800',
		error: 'bg-red-500 text-white',
		info: 'bg-blue-400 text-gray-800',
		warning: 'bg-orange-400 text-white'
	}

	return (
		<div
			style={customStyles}
			className={cn(
				`animate-fade ${alertClasses[type]} animate-opacity mb-4 rounded-md px-4 py-2`,
				{
					visible: isVisible,
					hidden: !isVisible
				}
			)}
		>
			{text}
		</div>
	)
}

export default Alert
