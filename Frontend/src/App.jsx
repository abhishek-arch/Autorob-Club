import React from 'react'
import{Routes, Route} from 'react-router-dom'
import Home from './Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import AdminSignup from './pages/AdminSignup'
import AdminLogin from './pages/AdminLogin'
import UserHome from './pages/UserHome'
import UserProtectWrapper from './pages/UserProtectWrapper'
import AdminProtectWrapper from './pages/AdminProtectWrapper'
import AdminHome from './pages/AdminHome'
import UserProfile from './pages/UserProfile'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Autorob-Club/userlogin' element={<UserLogin />} />
        <Route path='/Autorob-Club/usersignup' element={<UserSignup />} />
        <Route path='/Autorob-Club/adminsignup' element={<AdminSignup />} />
        <Route path='/Autorob-Club/adminlogin' element={<AdminLogin />} />
        <Route path='/Autorob-Club/user-home' element={<UserProtectWrapper>
               <UserHome/>
            </UserProtectWrapper>} />
        <Route path='/Autorob-Club/admin-home' element={<AdminProtectWrapper>
               <AdminHome/>
            </AdminProtectWrapper>} />
            <Route path='/Autorob-Club/user-profile' element={<UserProtectWrapper><UserProfile/></UserProtectWrapper>}/>
        
      </Routes>
      
    </div>
  )
}

export default App
