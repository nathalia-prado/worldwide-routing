import {
    createBrowserRouter,
    createRoutesFromElements,
    Route, 
} from 'react-router-dom'

import App from './components/App'

export const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<App />} />)
  )