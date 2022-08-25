import React from 'react'
import {useNavigate} from 'react-router-dom'

function Welcome() {
    const navigate = useNavigate()
  return (
    <div style={{width:"100vw",height:"100vh"}} className='d-flex align-items-center' >
        <div className="container">
            <div className="row justify-content-around">
                <div className="col-lg-7 d-flex justify-content-start flex-column">
                    <h1 className='display-4' >Parking Management > React js</h1>
                    <h4 className='mt-4'>
                    The first step to securing a parking spot
                    </h4>
                    <button onClick={()=>navigate("/add-vehicle")} className="btn btn-outline-success w-25 mt-4 fw-bold">Get Started</button>
                </div>
                <div className="col-lg-5 d-flex justify-content-end">
                    <img className='w-100' src={require("../../images/car2.png")} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome