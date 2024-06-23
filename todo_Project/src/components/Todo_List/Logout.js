import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {useNavigate } from "react-router-dom";



const Logout = () => {
  const mynav = useNavigate()
  const userInfo = JSON.parse( localStorage.getItem("userName"))

  const logout =  ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("userEmail")
    mynav("/signin")
  }

  return (
    <div>
      {
        localStorage.getItem("userEmail")?
        <div className="d-flex justify-content-end" >
          {/* <button className="btn btn-secondary mx-3 my-2">Logout</button> */}
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {userInfo && userInfo.getname}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
        <Dropdown.Item onClick={logout} >Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        
        </div>:""
        
        }
    </div>
  )
}

export default Logout
