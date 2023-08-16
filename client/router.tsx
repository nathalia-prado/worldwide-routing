import {
    createBrowserRouter,
    createRoutesFromElements,
    Route, 
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Continent from './components/Continent'
import Country from './components/Country'

export const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/continents/:name" element={<Continent />} />
        <Route path="/continents/:name/:code" element={<Country />} />        
    </Route>
    )
  )