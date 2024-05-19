import React, { useEffect, useState } from 'react'
import './signIn.css'

const SignIn = () => {
    const [getv,setv] = useState()

    useEffect(()=>{
        setv("first")
    },[])
  return (
    <div className='main_page' style={{height:getv=="first"?"60rem":"80rem"}} >
      <div className='container' style={{display:getv=="first"?"block":"none"}}>
        <div className='row  d-flex justify-content-center '>
            <div className='col-lg-5 col-10  text-center'>
               <div className='row'>
                <div className='col-12  signin_content py-5'>
                    <h1>Welcome Back ! </h1>
                    <p>Sign in to continue to TIPS-G</p>
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
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control bg-transparent" placeholder='enter your email' id="inputEmail4"/>
  </div>
  <div className="col-12">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control bg-transparent" placeholder='enter password email' id="inputPassword4"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
            Remember me 
      </label>
    </div>
  </div>
  <div className="col-12 d-flex">
    <button type="submit" className="btn flex-grow-1 btn-warning">Sign in</button>
  </div>
  <div className="col-12 text-center ">
   <p>Forgot your password? Click Here</p>
  </div>
</form>
<div className='text-white'>
    <p>Don’t have an account ? <span className='text-warning' style={{cursor:"pointer"}} onClick={()=>{setv("second")}}> Register Now</span></p>
    <p>© 2023 TIPS-G Cyber Security</p>
</div>

            </div>
        </div>

        
      </div>


      <div className='container' style={{display:getv=="second"?"block":"none"}}>
        <div className='row  d-flex justify-content-center '>
            <div className='col-lg-5 col-10  text-center'>
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
    <p>Already Have a Account ? <span className='text-warning' style={{cursor:"pointer"}} onClick={()=>{setv("first")}}> Login </span></p>
    <p>© 2023 TIPS-G Cyber Security</p>
</div>

            </div>
        </div>

        
      </div>
    </div>
  )
}

export default SignIn
