import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import 'materialize-css'

import {useAuth} from './hooks/auth.hook'
import {useRoutes} from './routes'
import {AuthContext} from './context/AuthContext'
import {Navbar} from './components/Navbar'
import {Loader} from './components/Loader'

function App() {
	const {login, logout, token, userId, ready} = useAuth()
	const isAuth = !!token
	const routes = useRoutes(isAuth)

	if (!ready) {
		return <Loader />
	}

 	return (
 		<AuthContext.Provider value={{
 			login, logout, token, userId, isAuth
 		}}>
	 		<BrowserRouter>
	 			{isAuth && <Navbar />}
				<div className="container">
					{routes}
				</div>
			</BrowserRouter>
		</AuthContext.Provider>
	)
}

export default App
