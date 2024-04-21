import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routesComponent } from './routes-component'

const Routs = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routesComponent.map(route => {
					return <Route key={route.path} path={route.path} element={<route.component />} />
				})}
				<Route path='*' element={'not page'} />
			</Routes>
		</BrowserRouter>
	)
}

export default Routs
