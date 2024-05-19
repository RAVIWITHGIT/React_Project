import React from "react";
import "./service.css";
import sVector from "../Assets/serviceImg/sVector.png";
import { FaLock } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { SiCyberdefenders } from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoNewspaperSharp } from "react-icons/io5";
import Testingcard from "./testingcard";
import ConsultationCard from "./consultationCard";
import scane from '../Assets/serviceImg/scane.png'
import Footer from "../footer";
import Header from "../header";

const Service = () => {
  return (
    <div>
      <Header />
      <div  style={{backgroundColor:"rgb(17, 25, 39)"}}>
        <div className="container">
          <div className="row fservice_section text-white  py-5">
            <div className="col-12 text-center">
              <h2>Our Services</h2>
              <img className="serviceImg1" src={sVector} />
              <p></p>
              <p>
                The average cost of a data breach is $3.92 million. We help to
                prevent breaches and keep your company safe. Fortune 500
                companies, government agencies, educational, and non-profits are
                among the organizations targeted every day – many of whom are
                woefully unprepared to respond to security incidents. That’s
                where we come in. With decades of combined experience, thousands
                of hours of practice, and core values from our time in service,
                we will use our skill set to secure your environment.
              </p>
            </div>
            <div className="col-12 mt-5  fservice_sectionImg">
              <div className="row  row-cols-1 py-3 row-cols-md-4 g-4">
                <div className="col">
                  <div className="card bg-transparent text-white">
                    <div className="card-body">
                      <h5 className="card-title text-center my-2">
                        <FaLock style={{ color: "yellow", fontSize: "40px" }} />
                      </h5>
                      <p className="card-text text-center">Penetration Testing.</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card bg-transparent text-white">
                    <div className="card-body">
                      <h5 className="card-title text-center my-2">
                        <FaShieldAlt
                          style={{ color: "yellow", fontSize: "40px" }}
                        />
                      </h5>
                      <p className="card-text text-center">Security Auditing</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card bg-transparent text-white">
                    <div className="card-body">
                      <h5 className="card-title text-center my-2">
                        <SiCyberdefenders
                          style={{ color: "yellow", fontSize: "40px" }}
                        />
                      </h5>
                      <p className="card-text text-center">Cyber Forensics</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card bg-transparent text-white">
                    <div className="card-body">
                      <h5 className="card-title text-center my-2">
                        <IoNewspaperSharp
                          style={{ color: "yellow", fontSize: "40px" }}
                        />
                      </h5>
                      <p className="card-text text-center">Custom Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row py-5 testing_section text-white ">
            <div className="col-12 my-3 text-center">
              <h2 className="text-warning">Penetration Testing</h2>
              <p>From large Fortune 500 companies to local small businesses, we have helped hundreds of companies secure their most valuable data. Our solutions are customized to meet your needs and requirements. When you’re ready to secure your organization, choose us as your partner.</p>
            </div>

            <div className="col-12">
              <Testingcard/>
            </div>
          </div>

          <div className="row consultation_section py-5 ">
            <div className="col-12 text-center text-white">
              <h2 className="text-warning">Security Auditing & Consultation</h2>
              <p>Our talented engineers have decades of experience assisting customers with their security needs.</p>
            </div>

            <div className="col-12 my-5">
              <ConsultationCard/>
            </div>
          </div>

          <div className="row service_forensicsSection py-5">
            <div className="col-12 text-center text-white">
              <h2 className="text-warning">Cyber Forensics</h2>
              <p>Our talented engineers have decades of experience assisting customers with their security needs.</p>
            </div>
            <div className="col-12">
            <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100  text-white" style={{backgroundColor:"rgb(26, 35, 50)"}}>
      <img src={scane} className="card-img-top m-auto pt-3 img-fluid w-50" alt="..."/>
      <div className="card-body text-center">
        <h5 className="card-title">Forensic Acquisition & Extraction</h5>
        <p className="card-text">Forensic acquisition is the careful gathering of digital evidence, preserving its integrity. Extraction involves retrieving pertinent information from seized data using specialized tools. Both processes are integral to uncovering digital evidence for investigations in areas like cybersecurity and criminal cases.</p>
        <p className="card-text"><button type="button" className="btn btn-warning">Read More</button></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 bg-transparent text-white">
      <div className="card-body text-center">
        <h5 className="card-title text-warning">TIPS-G Cyber Security USES GLOBALLY REPUTED TOOLS & STANDARD FORENSIC TECHNIQUES.</h5>
        <p className="card-text" style={{fontSize:"11px"}}>There’s been a significant rise in the amount of computer, Mobile and internet related crime in recent years. This is hardly surprising as we increasingly rely on computers, mobile phones and the internet to carry out transactions and store and exchange information. The very nature of computers means that whatever you do leaves a trail of evidence, but in order to be used in court this needs to be gathered and handled in such a way that it isn’t compromised. This is where we come into play ! Our team is not only capable of effectively investigating various type of Digital Evidence but also understand the crucial nature and magnitude of the evidence and the importance of keeping it confidential. We undertake all the possible steps to make sure that optimum care is taken while investigating. with dedicated experience in the Digital Forensic Domain and providing Digital Forensic Training & Services to various Law Enforcement Organizations, Investigation Agencies, Defense Organizations, Central/ State Forensic Labs, Research & Development Organizations, Top Multi-Nationals etc.</p>
        <p className="card-text"><button type="button" className="btn btn-warning">Warning</button></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100  text-white"  style={{backgroundColor:"rgb(26, 35, 50)"}}>
    <img src={scane} className="card-img-top pt-3 m-auto img-fluid w-50" alt="..."/>

      <div className="card-body text-center">
        <h5 className="card-title">Forensic Analysis & Reporting</h5>
        <p className="card-text">Forensic acquisition is the careful gathering of digital evidence, preserving its integrity. Extraction involves retrieving pertinent information from seized data using specialized tools. Both processes are integral to uncovering digital evidence for investigations in areas like cybersecurity and criminal cases.</p>
        <p className="card-text"><button type="button" className="btn btn-warning">Read More</button></p>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>

          <div className="row py-5 service_form d-flex justify-content-center  ">
            <div className="col-12 text-white text-center">
              <h2 className="text-warning">See How We Can Secure Your Assets</h2>
              <p>Let’s talk about how TIPS-G Cyber Security can solve your cybersecurity needs. Give us a call, send us an e-mail, or fill out the contact form below to get started.</p>
            </div>
            <div className="col-10 ">
            <form className="row  g-3">
  <div className="col-md-6 ">
    <label for="inputEmail4" className="form-label text-white">First Name</label>
    <input type="text" className="form-control bg-transparent" id="inputEmail4"/>
  </div>
  <div className="col-md-6 ">
    <label for="inputEmail4" className="form-label text-white">Last Name</label>
    <input type="text" className="form-control bg-transparent" id="inputEmail4"/>
  </div>
  <div className="col-md-6 ">
    <label for="inputEmail4" className="form-label text-white">Email</label>
    <input type="email" className="form-control bg-transparent" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label text-white">Phone Number</label>
    <input type="number" className="form-control bg-transparent" id="inputPassword4"/>
  </div>
  
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" className="text-white form-label">Example textarea</label>
  <textarea className="form-control bg-transparent" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

  
 
  
  <div className="col-12 text-center">
    <button type="submit" className="btn btn-warning">Sign in</button>
  </div>
</form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Service;
