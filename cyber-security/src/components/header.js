import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import './header.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  

  return (
    <div>
      <nav className="navbar navbar-expand-lg mynav border-bottom border-body " data-bs-theme="dark" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <NavLink to="/">  <span className='ms-1 me-3 text-white nav_h'>Tips-G</span></NavLink>
      <button type="button" className="btn navbtn1 btn-warning">Cyber-Security</button></a>
    <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
      <NavLink to="/course">  <li className="nav-item">
          <a className="nav-link navA" href="#">All Courses</a>
        </li></NavLink>
      <NavLink to="/about">  <li className="nav-item">
          <a className="nav-link navA" href="#">About Us</a>
        </li></NavLink>
       <NavLink to="/cetificat"> <li className="nav-item">
          <a className="nav-link navA" href="#">Certifications</a>
        </li></NavLink>
        <NavLink to="/service">  <li className="nav-item">
          <a className="nav-link navA" href="#">Services</a>
        </li></NavLink>
        
        
        
      </ul>
      <div>
      <NavLink to="/signIn">  <p className='d-inline signP'>Sign In</p></NavLink>
        <button type="button" className="btn getE btn-warning m-2" onClick={handleShow}>Get Enrolled</button>



 {/* Modal  */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body text-white">
      
      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary text-white">Save changes</button>
      </div>
      
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</nav>



 

      <Modal show={show}  onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body className='bg-dark'>

        <div className='container-fluid' >
        <div className='row  d-flex justify-content-center '>
            <div className='col-lg-12 col-10  text-center'>
               <div className='row'>
                <div className='col-12  signin_content py-5'>
                    <h1>Register</h1>
                    <p>Start your learning Journey!</p>
                </div>
                </div> 
                <div className='row d-flex justify-content-center'>
                    <div className='col-lg-4 col-6 text-white signInBtnDiv'>
                        <h3>Tips-G</h3>
                        <p><button type="button" class="btn btn-warning">Cyber-Security</button></p>
                    </div>
                </div>
                <form className="row py-3 signInForm text-white gy-3 text-start">
  <div className="col-12">
    <label for="inputEmail4" className="form-label">Full Name</label>
    <input type="text" className="form-control bg-transparent" placeholder='enter your email' id="inputEmail4"/>
  </div>
  <div className="col-12">
    <label for="inputEmail4" className="form-label">User Name</label>
    <input type="text" className="form-control bg-transparent" placeholder='enter your email' id="inputEmail4"/>
  </div>
  <div className="col-12">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control bg-transparent" placeholder='enter your email' id="inputEmail4"/>
  </div>
  <div className="col-12">
    <label for="inputEmail4" className="form-label">Confirm Email</label>
    <input type="email" className="form-control bg-transparent" placeholder='enter your email' id="inputEmail4"/>
  </div>
  <div className="col-12">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control bg-transparent" placeholder='enter password email' id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label for="inputPassword4" className="form-label">Confirm Password</label>
    <input type="password" className="form-control bg-transparent" placeholder='enter password email' id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputState" className="form-label">Country</label>
    <select id="inputState" className="form-select bg-transparent">
      <option selected>India</option>
      <option>Japan</option>
    </select>
  </div>
  <div className="col-12">
    <label for="inputPassword4" className="form-label">Age</label>
    <input type="number" className="form-control bg-transparent" placeholder='enter your age' id="inputPassword4"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
      E-mail me product updates and newsletters. 
      </label>
    </div>
  </div>
  <div className="col-12 d-flex">
    <button type="submit" className="btn flex-grow-1 btn-warning">Register</button>
  </div>
  <div className="col-12 text-center ">
   <p>By registering you agree to our Terms of Service, Privacy Policy and Acceptable Use Policy</p>
  </div>
</form>
<div className='text-white'>
    <p>Already Have a Account ? <span className='text-warning' style={{cursor:"pointer"}} > Login </span></p>
    <p>© 2023 TIPS-G Cyber Security</p>
</div>

            </div>
        </div>

        
      </div>
        </Modal.Body>
        <Modal.Footer className='bg-black'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Header
