import React from 'react'
import {useNavigate,useLocation} from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    const {pathname} = useLocation()
  return (
    <nav className="narbar navbar-expand-lg bg-success bg-gradient navbar-dark py-2 fixed-top">
        <div className="container d-flex justify-content-between">
            <a  className="navbar-brand ">Parking Management</a>

            <div className="navbar-nav h5">
                <div className="nav-item "><div style={{cursor:'pointer'}} onClick={()=>navigate("/")} className={`nav-link ${pathname=="/"?"active":""}`} >Home</div></div>
                <div className="nav-item"><div style={{cursor:'pointer'}} onClick={()=>navigate("/add-vehicle")} className={`nav-link ${pathname=="/add-vehicle"?"active":""}`}>Add</div></div>
                <div className="nav-item"><div style={{cursor:'pointer'}} onClick={()=>navigate("/view-vehicle")} className={`nav-link ${pathname=="/view-vehicle"?"active":""}`}>View</div></div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar