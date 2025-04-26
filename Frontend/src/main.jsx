import { createRoot } from 'react-dom/client'
import router from './routers/router.jsx'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}>
        <App />
    </RouterProvider>

)
