import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Css/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './Context/UserContext.jsx'
import AdminContext from './Context/AdminContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminContext>

 
    <UserContext>
  <BrowserRouter>
    <App />
  </BrowserRouter>

    </UserContext>
       </AdminContext>
  </StrictMode>,
)
