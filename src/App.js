import React from 'react'
import {Route,Routes} from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import AddVehiclePage from './pages/AddVehiclePage'
import ViewVehilePage from './pages/ViewVehilePage'
import WelcomePage from './pages/WelcomePage'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<WelcomePage/>} />
      <Route path='/add-vehicle' element={<AddVehiclePage/>} />
      <Route path='/view-vehicle' element={<ViewVehilePage/>} />
    </Routes>
    <ToastContainer position='top-center' />
    </>
  )
}

export default App