import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/normalize.scss'
import './scss/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { RootStateProvider } from './store/RootStore'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<RootStateProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</RootStateProvider>,
)
