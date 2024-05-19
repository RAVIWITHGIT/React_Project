import React from 'react'
import './certificat.css'
import logo1 from '../Assets/certificatImg/logo1.svg'
import logo2 from '../Assets/certificatImg/logo2.svg'
import certificatimg1 from '../Assets/certificatImg/certificatimg1.png'
import certificatimg2 from '../Assets/certificatImg/certificatimg2.png'
import { FaLayerGroup, FaRegLightbulb } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import Ccard1 from '../Assets/certificatImg/Ccard1.png'
import Ccard2 from '../Assets/certificatImg/Ccard2.png'
import Ccard3 from '../Assets/certificatImg/Ccard3.png'
import Ccard4 from '../Assets/certificatImg/Ccard4.png'
import Header from '../header'
import Footer from '../footer'

const Certificat = () => {
  return (
    <div className='certificatMain_section'>
      <Header/>
                <div className='container-fluid py-5'>
                    <div className='row py-5 d-flex justify-content-center   certificatF_section'>
                <div className='col-10  text-center text-white'>
                    <h1>TIPS-G Certifications</h1>
                    <p>HTB Academy's hands-on certifications are designed to provide job proficiency on various cybersecurity roles. As ensured by up-to-date training material, rigorous certification processes and real-world exam lab environments, HTB certified individuals will possess deep technical competency in different cybersecurity domains.</p>
                </div>
                    </div>

                    <div className='row d-flex my-5 justify-content-center Brochure_section'>
                                <div className='col-12 my-3 d-flex justify-content-center'>
                                <button type="button" class="btn btn-warning">Get Your Demo Class</button>
                            </div>
                            <div className='col-10 py-4 my-3 brouchure_firstCard'>
                                <div className='row border-bottom'>
                                    <div className='col-lg-6'>
                                        <div className='row'>
                                            <div className='col-4'>
                                                <img className='img-fluid' src={logo1}/>
                                            </div>
                                            <div className='col-8'>
                                                <img className='img-fluid' src={certificatimg1}/>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 text-white leftCertificat_cardContent  '>
                                            <h2>MDCS</h2>
                                            <p>Master Diploma in Cyber Security</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 text-white rightCertificat_cardContent'>
                                        <h4>TIPS-G Certified</h4>
                                        <h3>Master Diploma in Cyber <br/> Security</h3>
                                        <p>TIPS-G Master Diploma in Cyber Security is a highly hands-on certification that assesses the candidates’ hacking skills. TIPS-G Master Diploma in Cyber Security certification holders will possess technical competency in the ethical hacking and penetration testing domains at an intermediate level. They will also be able to assess the risk at which an infrastructure is exposed and compose a commercial-grade as well as actionable report.</p>
                                    </div>
                                </div>


                                <div className='row py-3 certificatCard_footer'>
                                    <div className='col-8'>
                                        <div className='row'>
                                            <div className='col-10  text-white'>
                                            <span>{<FaLayerGroup className='mx-1' />}12  Modules</span>
                                            <span className='mx-3'>{<FaRegLightbulb className='mx-1' />}Internship Included</span>
                                            <span>{<MdOutlineWatchLater className='mx-1'/>}Duration : 1 Year</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                         <button type="button" class="btn btn-warning">Download Brochure</button>
                                    </div>
                                </div>
                            </div>
                            

                            <div className='col-10 py-4 my-3 brouchure_firstCard2'>
                                <div className='row border-bottom'>
                                    <div className='col-lg-6'>
                                        <div className='row'>
                                            <div className='col-4'>
                                                <img className='img-fluid' src={logo2}/>
                                            </div>
                                            <div className='col-8'>
                                                <img className='img-fluid' src={certificatimg2}/>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 text-white leftCertificat_card2Content'>
                                            <h2>DCS</h2>
                                            <p>Diploma in Cyber Security</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 text-white rightCertificat_card2Content'>
                                        <h4>TIPS-G Certified</h4>
                                        <h3>Diploma in Cyber <br/> Security</h3>
                                        <p>TIPS-G Diploma in Cyber Security is a highly hands-on certification that assesses the candidates’ hacking skills. TIPS-G Diploma in Cyber Security certification holders will possess technical competency in the ethical hacking and penetration testing domains at an intermediate level. They will also be able to assess the risk at which an infrastructure is exposed and compose a commercial-grade as well as actionable report.</p>
                                    </div>
                                </div>
                                <div className='row py-3 certificatCard_footer'>
                                    <div className='col-8'>
                                        <div className='row'>
                                            <div className='col-10  text-white'>
                                            <span>{<FaLayerGroup className='mx-1' />}12  Modules</span>
                                            <span className='mx-3'>{<FaRegLightbulb className='mx-1' />}Internship Included</span>
                                            <span>{<MdOutlineWatchLater className='mx-1'/>}Duration : 6 month</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                         <button type="button" class="btn btn-warning">Download Brochure</button>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className='row py-5 d-flex  justify-content-center professional_section'>
                    <div className='col-12 px-5 py-3 professionalText_section  text-center text-white'>
                    <h1>Professional Certifications</h1>
                    <p>TIPS-G offers its subject-matter enriched EC-Council Certified Ethical Hacking Course in Jaipur, Offensive Security OSCP Course in Jaipur, Red Hat Linux Course in Jaipur, CISCO Certified CCNA Course in Jaipur, Cyber Security Course, Internet of Things (IoT) Courses, Artificial Intelligence Course, End Point Security Course, Web, and Mobile Pentesting Courses, and many more with a valid Certification that is fully authentic throughout the world wherever you apply Our training is provided by industry-oriented and experienced teaching fraternities with high expertise to hone our students Go-Ready in any Cyber Security domain.</p>
                </div>

                <div className='col-10 my-5'>
                <div class="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card h-100 m-3  certificatCard">
      <img src={Ccard1} className="card-img-top m-auto my-3 img-fluid w-50" alt="..."/>
      <div className="card-body text-center">
        <h5 className="card-title">EC Council is an international cybersecurity certification body, offering career-oriented training and certifications for IT professionals.</h5>
        <p className="card-text mt-3"><button type="button" class="btn btn-warning">Learn More</button></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card m-3 h-100 certificatCard">
      <img src={Ccard2} className="card-img-top my-3  img-fluid w-50" alt="..."/>
      <div className="card-body text-center">
      <h5 className="card-title">EC Council is an international cybersecurity certification body, offering career-oriented training and certifications for IT professionals.</h5>
        <p className="card-text mt-3"><button type="button" class="btn btn-warning">Learn More</button></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 m-3 certificatCard">
      <img src={Ccard3} className="card-img-top my-4 m-auto img-fluid w-50" alt="..."/>
      <div className="card-body text-center">
      <h5 className="card-title">EC Council is an international cybersecurity certification body, offering career-oriented training and certifications for IT professionals.</h5>
        <p className="card-text mt-3"><button type="button" class="btn btn-warning">Learn More</button></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 m-3 certificatCard">
      <img src={Ccard4} className="card-img-top my-3  img-fluid w-50" alt="..."/>
      <div className="card-body text-center">
      <h5 className="card-title">EC Council is an international cybersecurity certification body, offering career-oriented training and certifications for IT professionals.</h5>
        <p className="card-text mt-3"><button type="button" class="btn btn-warning">Learn More</button></p>
      </div>
    </div>
  </div>
  
 
 
</div>
                </div>
                    </div>





                </div>
                <Footer/>
    </div>
  )
}

export default Certificat
