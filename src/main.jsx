import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Loader from './components/ui/loader/Loader.jsx'
import Home from './components/pages/Home/Home.jsx'
import './components/language/i18n.js'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Suspense fallback={<Loader />}>
			<Home />
		</Suspense>
	</React.StrictMode>
)
