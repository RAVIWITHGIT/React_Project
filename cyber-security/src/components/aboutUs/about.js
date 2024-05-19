import React from 'react'
import './about.css'
import Aboutf from '../Assets/aboutImg/aaabstract 1.png'
import journeyImg from '../Assets/aboutImg/Group 72.png'
import successImg from '../Assets/aboutImg/Group 73.png'
import Header from '../header'
import Footer from '../footer'

const About = () => {
  return (
    <div>
        <Header/>
    <div className='container-fluid' style={{backgroundColor:"rgb(17, 25, 39)"}}>
        <div className='row py-5 aboutF_section d-flex justify-content-center'>
            <div className='col-10 text-white'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <img className='img-fluid w-100' src={Aboutf}/>
                    </div>
                    <div className='col-lg-8 pt-3'>
                        <h2>We are changing the <br/> old Education <br/> System</h2>
                        <button type="button" className="btn me-3 btn-warning">Courses</button>
                        <button type="button" className="btn btn-secondary">Know More</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='row d-flex justify-content-center py-5 Journey_section'>
            <div className='col-10 text-white'>
                <h3 className='journey_heading'>Our <span style={{color:"yellow"}}> Journey :</span></h3>
            </div>
            <div className='col-10'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='col-12 my-4 text-white'>
                            <h2>01. Starting from the Dorm room:</h2>
                            <p>RNS Group of Companies started as a small dorm room IT Company back in 2016, in Jaipur. The Company also faced a critical shortage of skilled and affordable manpower in order to drive business from Colleges/Universities.</p>
                        </div>
                        <div className='col-12  text-white'>
                            <h2>02. Solving Manpower Crisis:</h2>
                            <p>In order to solve the manpower crisis, RNS Group ran in the house On Job Training program by hiring freshers and making them skilled by training them on live projects and procure to produce manpower post-completion of Training.</p>
                        </div>
                        <div className='col-12 my-4 text-white'>
                            <h2>03. Success of OJT:</h2>
                            <p>Our “On Job Training” program made a super hit in market and helped us to generate over 120+ skilled in-house manpower at affordable prices. RNS Group of Companies grew from a family of 6 to 120 in no time, with a valuation of $ 1 Million, in just one year.</p>
                        </div>
                        <div className='col-12 text-white'>
                            <h2>04. Birth of TIPS-G:</h2>
                            <p>With the success of the OJT program, we find a huge difference in the Indian Educational System of theoretical learning and the application of that knowledge in the practical world. We are here to full fill this gap with our TIPS-G program, which empowered high school graduate students to enroll in the corporate world and learn practically, without worrying about a formal education degree. Along with 100% placement assurance.</p>
                        </div>
                        <div className='col-12 my-4 text-white'>
                            <h2>05. Success of TIPS-G:</h2>
                            <p>In less than 3 years in the market, TIPS-G has made a benchmark in the history of the Indian Educational System by training and placing more than 300+ students and having over 16+ learning centers all over Rajasthan.</p>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <img className='img-fluid' src={journeyImg}/>
                    </div>
                </div>
            </div>

            
        </div>

        <div className='row d-flex justify-content-center py-5 success_section'>
            <div className='col-10 text-white'>
                <h3 className='journey_heading'>Our Secret to <span style={{color:"red"}}> Success:</span></h3>
            </div>
            <div className='col-10'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='col-12 mt-5 pe-5 text-white'>
                            <p className='success_sectionFpara'>Your success is what matters to us, so we have created the simplest process which will lead you to your success, which includes: Graduation degree from India’s Top most Universities, along with Guaranteed placements. In just 3 simple steps.</p>
                            
                        </div>
                        <div className='col-12 my-5 text-white'>
                            <h2>1. Talent Hunt:</h2>
                            <p>We conduct a talent hunt exam at the national level for 12th-pass students and enroll the selected students in our TIPS-G program according to their interests.</p>
                            <button type="button" className="btn float-end btn-warning">Warning</button>
                        </div>
                        <div className='col-12 my-5 text-white'>
                            <h2>2.Training:</h2>
                            <p>After enrolling in their desired course, the students are given practical training from day one in the real working environment, which provides complete skill development to students.</p>
                            <button type="button" className="btn float-end btn-warning">Warning</button>
                        </div>
                        <div className='col-12 text-white'>
                            <h2>3. Placement:</h2>
                            <p>As students complete their first 2 years of practical training with us. We ensure them with 1 year of Paid Internship and Guaranteed Placement offers, along with their graduation degree.</p>
                            <button type="button" className="btn float-end btn-warning">Warning</button>
                        </div>
                        
                    </div>
                    <div className='col-lg-6'>
                        <img className='img-fluid' src={successImg}/>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
        <Footer/>
    </div>
  )
}

export default About
