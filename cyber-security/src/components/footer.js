import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
      <footer className='pt-5 text-white'>
        <div className='container'>
        <div className='row'>
            <div className='col-lg-3'>
              <span className='footer_h'>TIPS-G</span><span><button type="button" className="btn btn-warning fbtn">Cyber-Security</button></span>
              <h5 className='my-3'><span><i className="fa-solid fa-phone me-2"></i></span>+91&nbsp;8890831283</h5>
              <h5 className='lh-sm mb-4'><span><i className="fa-solid fa-location-dot me-2"></i></span>101-201-301, Chanda Tower, Girnar Colony, Gandhi Path Road, Vaishali Nagar, Jaipur - 302021</h5>
            </div>
            <div className='col-lg-3 fService text-lg-center'>
              <p>All Courses</p>
              <p>Specialized Courses</p>
              <p>Certifications</p>
              <p>Services</p>
              <p>Contact Us</p>
              </div>
            <div className='col-lg-3 fService text-lg-center'>
              <p>About</p>
              <p>News and Blog</p>
              <p>Franchise</p>
              <p>Testimonials</p>
              <p>FAQ</p>
            </div>

            <div className='col-lg-3'>
              <p className='fsignIn'>Sign in <span><button type="button" class="btn btn-warning ms-2">Get Enrolled</button></span></p>
              <p className='rfContent'>Download Application</p>
              <p><i class="fa-brands fa-google-play me-2 footer_icon"></i><i class="fa-brands fa-app-store-ios footer_icon"></i></p>
              <p className='rfContent'>Follow Us :</p>
              <p><i class="fa-brands fa-instagram footer_icon"></i><i class="fa-brands fa-facebook-f mx-2 footer_icon"></i><i class="fa-brands fa-linkedin footer_icon"></i><i class="fa-brands fa-youtube mx-2 footer_icon"></i></p>
            </div>
        </div>
        <div className='row  py-3'>
          <div className='col-12 '>
            <h5 className='text-lg-center lh-base footer_copyright '><span>2023 © TIPS-G Cybersecurity</span> <span className='mx-4'> Terms of Service </span> <span className='mx-4'> Privacy Policy </span> <span>Acceptable Use Policy </span> <span className='mx-4'> FAQ </span></h5>
          </div>
        </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
