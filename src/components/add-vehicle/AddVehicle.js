import React,{useState,useEffect} from 'react'
import {toast} from "react-toastify"

function AddVehicle() {
    const [name , setName] = useState("")
    const [vehicleNo , setVehicleNo] = useState("")
    const [slotNo , setSlotNo] = useState("")
    const [parkings,setParkings] = useState([])

    const handleSubmit = () => {
        if(name===""||vehicleNo===""||slotNo===""){
            toast.error("all fields are required")
            return 
        }
        localStorage.setItem("parkings",JSON.stringify([...parkings,{
            name,vehicleNo,slotNo,checkIn: new Date().toLocaleString(),checkOut:""
        }]))
        setName("")
        setVehicleNo("")
        setSlotNo("")
        getData()
        toast.success("Checked in successfully")
    }

    const getData = () => {
        const data = JSON.parse(localStorage.getItem("parkings"));
        if(data!==null){
            setParkings(data)
        }
    }

    useEffect(()=>{
        getData()
    },[])
    console.log(parkings)
  return (
    <div style={{width:"100vw",height:"100vh"}} className='' >
        <div className="row mx-auto ">
            <div className="mt-5"></div>
            <div className="mt-5"></div>
            <div className="mt-5"></div>
            <div className="mt-5"></div>
            <div className="col-lg-5 mx-auto my-auto  shadow">
                <div className="card border-0">
                    <div className="card-body">
                        <div className="card-header h2">Add Vehicle Form</div>
                        <div className="my-2">
                            <div className="form-label">Name</div>
                            <input value={name} onChange={e=>setName(e.target.value)} type="text" name="" id="" className="form-control" />
                        </div>
                        <div className="my-2">
                            <div className="form-label">Vehicle No.</div>
                            <input value={vehicleNo} onChange={e=>setVehicleNo(e.target.value)} type="text" name="" id="" className="form-control" />
                        </div>
                        <div className="my-2">
                            <div className="form-label">Slot No.</div>
                            <input value={slotNo} onChange={e=>setSlotNo(e.target.value)} type="text" name="" id="" className="form-control" />
                        </div>
                        <div className="my-2">
                        <button onClick={()=>handleSubmit()} className="btn btn-outline-success w-25 mt-4 fw-bold">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddVehicle