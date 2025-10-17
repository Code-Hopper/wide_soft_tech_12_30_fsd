import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Service from "./components/pages/Service"
import Dashboard from './components/pages/Dashboard'
import SettingComponent from './components/sections/DashboardComponents/SettingComponent'
import ProfileComponent from './components/sections/DashboardComponents/ProfileComponent'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service/:servicename' element={<Service />} />
          <Route path='/dashboard/:name' element={<Dashboard />}>
            <Route path='setting' element={<SettingComponent />} />
            <Route path='profile' element={<ProfileComponent />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App