// import React from 'react'
import React, { useEffect, useState } from 'react'

import './home.css'
import certificateImg from '../Assets/HomeImg/ic-certificate.png'
import skillsImg from '../Assets/HomeImg/ic-skills.png'
import certifiedImg1 from '../Assets/HomeImg/image-removebg.png'
import certifiedImg2 from '../Assets/HomeImg/Vector.png'
import group69 from '../Assets/HomeImg/Group69.svg'
import group50 from '../Assets/HomeImg/Group50.svg'
import HomeCourseCard from './homeCourseCard'
import vector from '../Assets/HomeImg/Vector 9.png'
import StudentCard from './studentCard'
import HomeTeam from './homeTeam'
import Frame from '../Assets/HomeImg/Frame 10.png'
import Header from '../header'
import Footer from '../footer'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(()=>{
    handleShow();
  },[])

  return (
    <div className='' style={{backgroundColor:"rgb(17, 25, 39)"}}>
      <Header/>
      <section className='home_fSection py-5 '>
        <div className='container'>
          <div className='row '>
            <div className='col-12 d-flex justify-content-center flex-column'>
                <h1 className='text-center text-white'>Your <span className='text-warning'>cybersecurity</span><br/>
    journey starts <span className='text-warning'> here.</span></h1>
    <p className='text-center text-white'>Develop your skills with guided training and prove your expertise with industry  <br/>certifications. Become a market-ready cybersecurity professional.</p>
    <div className='d-flex justify-content-center'>
    <button type="button" class="btn btn-warning">Get Enrolled</button>
    </div>
            </div>
          </div>
          <div class="row py-5 justify-content-center  row-cols-1 row-cols-md-2 g-4">
  <div class="col-lg-4 ">
    <div class="card border   bg-transparent">
      <img  src={certificateImg} className="card-img-top img-fluid w-75 ssd" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center text-white">Get certified with <br/><span>TIPS-G</span></h5>
        <p class="card-text text-center text-white">Skyrocket your resume. Land your <br/> dream job. Stand out from the <br/> competition.</p>
        <p class="card-text text-center m-auto card_f py-2">Get Enrolled</p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 ">
  <div class="card border  bg-transparent">
      <img  src={skillsImg} className="card-img-top img-fluid w-75 ssd" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center text-white">Master your <br/> 
new <span className='text-warning'> Skills</span></h5>
        <p class="card-text text-center text-white">Learn popular offensive and <br/> defensive security techniques with <br/> TIPS-G’s skill paths.</p>
        <p class="card-text text-center m-auto card_f py-2">Get Enrolled</p>
      </div>
    </div>
  </div>
  
  
</div>
<div className='row'>
  <div className='col-12 text-white text-center'>
    <h2 className='text-warning'>100+</h2>
    <p>Learners advancing in cybersecurity.</p>
  </div>
</div>
        </div>
      </section>

      <section className='home_sSection  my-5'>
        <div className='container'>
        <div className='row mb-4'>
  <div className='col-12'>
    <h1 className='text-white text-center'>Get<span className='text-warning '> TIPS-G</span> certified</h1>
    <div className='d-flex justify-content-center'>
    <button type="button" class="btn btn-warning me-2">Online Courses</button>
    <button type="button" class="btn btn-outline-warning">Offline Courses</button>
    </div>
  </div>
</div>

<div className='row justify-content-center my-4'>
  <div className='col-lg-5 my-2'>
    <div className='container pb-3 certified_card1'>
    <div className='row'>
      <div className='col-4 d-flex align-items-center'>
<img className='img-fluid' src={group69}/>
      </div>
      <div className='col-8 '>
    <img className='img-fluid' src={certifiedImg1}/>

      </div>
    </div>
    <div className='row'>
      <div className='col-12 text-white'>
      <h2>MDCS</h2>
      <p>Master Diploma in Cyber Security</p>
      </div>
    </div>
    <div className='row'>
      <div className='col-4  text-white'>
        <p><i class="fa-solid fa-layer-group"></i>12  Modules</p>
      </div>
      <div className='col-4 text-white'>
      <p><i class="fa-regular fa-lightbulb"></i>Exam Included</p>
      </div>
      <div className='col-12 d-flex justify-content-center'>
      <button type="button" class="btn btn-warning">Get Enrolled</button>
      </div>
    </div>
  </div>
  </div>


  <div className='col-lg-5 my-2'>
  <div className='container p-4  certified_card2'>
    <div className='row'>
      <div className='col-5  d-flex align-items-center'>
<img className='img-fluid' src={group50}/>
      </div>
      <div className='col-7 '>
    <img className='img-fluid ' src={certifiedImg2}/>

      </div>
    </div>
    <div className='row'>
      <div className='col-12 text-white'>
      <h2>DCS</h2>
      <p>Diploma in Cyber Security</p>
      </div>
    </div>
    <div className='row'>
      <div className='col-4  text-white'>
        <p><i class="fa-solid fa-layer-group"></i>12  Modules</p>
      </div>
      <div className='col-4 text-white'>
      <p><i class="fa-regular fa-lightbulb"></i>Exam Included</p>
      </div>
      <div className='col-12 d-flex justify-content-center'>
      <button type="button" class="btn btn-warning">Get Enrolled</button>
      </div>
    </div>
  </div>
  </div>
</div>
          
          </div>        
      </section>

      <section className='home_tSection'>
        <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='text-white text-center'><span className='text-warning'>TIPS-G</span> Specialization Courses</h2>
          </div>
        </div>
        <HomeCourseCard/>

          
        </div>
      </section>

      <section className='py-5'>
        <div className='container home_fvSection p-4 py-5'  >
          <div className='row'>
            <div className='col-12'>
              <h2 className='text-center text-white'>Why TIPS-G <span className='text-warning'> Cyber-Security?</span></h2>
              <p className='text-center text-white'>Prepare for your future in cybersecurity with interactive, guided training and industry <br/>
                  certifications. Learn the skills needed to stand out from the competition.</p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card bg-transparent text-white border">
      <div className="card-body">
        <h5 className="card-title text-center"><i className="fa-regular fa-compass"></i></h5>
        <p className="card-text text-center">Highly Practical </p>
        <p className="card-text text-center">For every skill level, from beginner to <br/> advanced, Enhance your chances to make <br/> a dream career in the field of cybersecurity</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card bg-transparent text-white border">
      <div className="card-body">
        <h5 className="card-title text-center"><i class="fa-solid fa-arrow-pointer"></i></h5>
        <p className="card-text text-center">Get Certified</p>
        <p className="card-text text-center">Practice in a real-world environment,<br/> directly with Industry Experts, and <br/> polish your skills on Live Project</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card bg-transparent text-white border">
      <div className="card-body">
        <h5 className="card-title text-center"><i class="fa-regular fa-lightbulb"></i></h5>
        <p className="card-text text-center ">Guided Courses</p>
        <p className="card-text text-center">Stand out in the job market, skyrocket <br/> your resume with industrial validation <br/> and globally recognised Certificate </p>
      </div>
    </div>
  </div>



  <div className="col">
    <div className="card bg-transparent text-white border">
      <div className="card-body">
        <h5 className="card-title text-center"><i class="fa-solid fa-pen-to-square"></i></h5>
        <p className="card-text text-center ">Guided Courses</p>
        <p className="card-text text-center">Stand out in the job market, skyrocket <br/> your resume with industrial validation <br/> and globally recognised Certificate </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card bg-transparent text-white border">
      <div className="card-body">
        <h5 className="card-title text-center"><i class="fa-solid fa-user-tie"></i></h5>
        <p className="card-text text-center ">Guided Courses</p>
        <p className="card-text text-center">Stand out in the job market, skyrocket <br/> your resume with industrial validation <br/> and globally recognised Certificate </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card bg-transparent text-white border">
      <div className="card-body">
        <h5 className="card-title text-center"><i class="fa-solid fa-house-laptop"></i></h5>
        <p className="card-text text-center ">Guided Courses</p>
        <p className="card-text text-center">Stand out in the job market, skyrocket <br/> your resume with industrial validation <br/> and globally recognised Certificate </p>
      </div>
    </div>
  </div>

  
</div>
   

        </div>
      </section>

      <section className='faq_section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-white text-center'>
              <h2>Frequently Asked Questions</h2>
              <p className='text-warning'>FAQ</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
            <div class="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item bg-transparent text-white">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Frequently Asked Questions 1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item my-3 bg-transparent text-white ">
    <h2 className="accordion-header ">
      <button className="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Frequently Asked Questions 2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item bg-transparent text-white">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Frequently Asked Questions 3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  <div className="accordion-item my-3 bg-transparent text-white">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
      Frequently Asked Questions 4
      </button>
    </h2>
    <div id="flush-collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  <div className="accordion-item bg-transparent text-white">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapsefour">
      Frequently Asked Questions 5
      </button>
    </h2>
    <div id="flush-collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  <div class="accordion-item my-3 bg-transparent text-white">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesix" aria-expanded="false" aria-controls="flush-collapsefour">
      Frequently Asked Questions 6
      </button>
    </h2>
    <div id="flush-collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  <div class="accordion-item bg-transparent text-white mb-5">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseseven" aria-expanded="false" aria-controls="flush-collapsefour">
      Frequently Asked Questions 7
      </button>
    </h2>
    <div id="flush-collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

      <section className='student_section my-5' >
        <div className='container'>
          <div className='row'>
           <div className='col-12  text-center text-white'>
            <h1>Listen it from your Fellow students</h1>
            <img  className=' img-fluid vector_img' src={vector}/>
            </div> 
          </div>
          <div className='container'>
            <StudentCard/>
          </div>
        </div>
      </section>

      <section className='team_section py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center text-white'>
              <h2>Meet Our Team</h2>
              <img  className=' img-fluid vector_img' src={vector}/>
            </div>
          </div>

          <HomeTeam/>
        </div>
      </section>

      <section className="lasthSection py-5">
        <div className="container lasth_imgSection">
            <img className="img-fluid" src={Frame}/>
        </div>
      </section>
      <Footer/>

      
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

export default Home
