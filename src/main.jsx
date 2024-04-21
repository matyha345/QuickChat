import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Loader from './components/ui/loader/Loader.jsx'
import './components/language/i18n.js'
import './styles/index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Routs from './routes/Routs.jsx'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Suspense fallback={<Loader />}>
				<Routs />
			</Suspense>
		</QueryClientProvider>
	</React.StrictMode>
)
