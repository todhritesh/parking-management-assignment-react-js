import React,{useEffect,useState} from 'react'
import {toast} from 'react-toastify'
function ViewVehicle() {
  const [parkings,setParkings] = useState([])
  const getData = () => {
      const data = JSON.parse(localStorage.getItem("parkings"));
      if(data!==null){
          console.log("first")
          setParkings(data)
      }
  }
  useEffect(()=>{
    getData()
  },[])
  const handleCheckOut = (index) => {
    const data = parkings.map((item,i)=>{
      if(i===index){
        item.checkOut=new Date().toLocaleString()
      }
      return item
    })
    setParkings(data);
    localStorage.setItem("parkings",JSON.stringify(data))
    toast.success("Checked out successfully")
  }
  return (
    <div style={{width:"100vw",height:"100vh"}} className='' >
    <div className="row mx-auto ">
      <div className="mt-5"></div>
      <div className="mt-5"></div>
        <div className="card border-success border-2">
          <div className="card-body">
            <h6>Total Vehicle in parking : {parkings.filter(item=>item.checkOut==="").length}</h6>
            <h6>Total Vehicle checked out : {parkings.filter(item=>item.checkOut!=="").length}</h6>
          </div>
        </div>
      <div className="col-lg-8 mx-auto table-responsive">
      <div className="mt-5"></div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sl. no.</th>
              <th scope="col">Name</th>
              <th scope="col">Vehicle No.</th>
              <th scope="col">Slot No.</th>
              <th scope="col">Check In</th>
              <th scope="col">Check Out</th>
              <th scope="col">Checkout</th>
            </tr>
          </thead>
          <tbody>
              {
                parkings.map((item,i)=>(
                  <tr>
                    <th scope="col">{i+1}</th>
                    <th scope="col">{item.name}</th>
                    <th scope="col">{item.vehicleNo}</th>
                    <th scope="col">{item.slotNo}</th>
                    <th scope="col">{item.checkIn}</th>
                    <th scope="col">{item.checkOut||"-"}</th>
                    <th scope="col">
                      {!item.checkOut && <button onClick={()=>handleCheckOut(i)} className="btn btn-outline-success">Checkout</button>}
                      {item.checkOut && <h6 className='text-success fw-bold'>✔</h6>}
                    </th>
                  </tr>
                ))
              }
          </tbody>
        </table>
      </div>
    </div>
</div>
  )
}

export default ViewVehicle