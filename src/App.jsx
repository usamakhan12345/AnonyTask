import React from 'react'
import {BrowserRouter as Router ,Routes,Route, Navigate} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import NavBar from './components/Navbar/NavBar'
import Authenticate from './pages/Authenticate/Authenticate'
import Activate from './pages/Activate/Activate'
import Rooms from './pages/Rooms/Rooms'
const isAuth = true
const user = {
  activated:false
}
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<GuestRoute>
          <Home />
        </GuestRoute>} />
        <Route path='/activate' element={<SemiProtected>
          <Activate />
        </SemiProtected>} />
        <Route path='/rooms' element={<Protected>
          <Rooms />
        </Protected>} />
        <Route path='/authenticate' element={<Authenticate />}></Route>

      </Routes>
    </Router>
  )
}
const GuestRoute = ({children})=>{
  return isAuth ?(
    <Navigate to='/rooms' />
  ):
  children
}
const SemiProtected =({children})=>{
  return !isAuth ?(
    <Navigate to='/' />
  ):isAuth && user.activated ?
  (<Navigate to='/rooms' />)
  :
  children
}
const Protected = ({children})=>{
  return !isAuth?(
    <Navigate to='/' />
  ):
  isAuth && !user.activated?(
    <Navigate to='/activate' />
  ):
  children
}
export default App