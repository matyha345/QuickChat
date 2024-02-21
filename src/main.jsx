import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import FormNumber from './FormNumber.jsx'
import './language/i18n.js'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Suspense fallback='...Loading'>
			<FormNumber />
		</Suspense>
	</React.StrictMode>
)
