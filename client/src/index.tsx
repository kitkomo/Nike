import { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/normalize.scss'
import './scss/index.scss'
import { BrowserRouter } from 'react-router-dom'
import UserStore from './store/UserStore'

const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	// <Context.Provider value={{user: new UserStore()}}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	// </Context.Provider>,
)
