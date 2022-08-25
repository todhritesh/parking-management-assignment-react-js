import React from 'react'
import {useNavigate,useLocation} from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    const {pathname} = useLocation()
  return (
<nav class="navbar navbar-expand-sm bg-success bg-gradient navbar-dark py-3 fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">Parking Management</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav ms-auto">
        <li className="nav-item "><div style={{cursor:'pointer'}} onClick={()=>navigate("/")} className={`nav-link ${pathname=="/"?"active":""}`} >Home</div></li>
        <li className="nav-item"><div style={{cursor:'pointer'}} onClick={()=>navigate("/add-vehicle")} className={`nav-link ${pathname=="/add-vehicle"?"active":""}`}>Add</div></li>
        <li className="nav-item"><div style={{cursor:'pointer'}} onClick={()=>navigate("/view-vehicle")} className={`nav-link ${pathname=="/view-vehicle"?"active":""}`}>View</div></li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar