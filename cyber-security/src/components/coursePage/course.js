import React from 'react'
import './course.css'
import Ccard1 from '../Assets/courseImg/Ccard1.png'
import Ccard2 from '../Assets/courseImg/Ccard2.png'
import Ccard3 from '../Assets/courseImg/Ccard3.png'
import Ccard4 from '../Assets/courseImg/Ccard4.png'
import Ccard5 from '../Assets/courseImg/Ccard5.png'
import Ccard6 from '../Assets/courseImg/Ccard6.png'
import Ccard7 from '../Assets/courseImg/Ccard7.png'
import Ccard8 from '../Assets/courseImg/Ccard8.png'
import Ccard9 from '../Assets/courseImg/Ccard9.png'
import Ccard10 from '../Assets/courseImg/Ccard10.png'
import Ccard11 from '../Assets/courseImg/Ccard11.png'
import Ccard12 from '../Assets/courseImg/Ccard12.png'
import { FaLayerGroup, FaRegLightbulb } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import Header from '../header'
import Footer from '../footer'

const data = [
    {   
        img:Ccard1,
        title:"MAPT",
        myp:"Mobile Application Penetration Testing",
        cN:"180px"
    },
    {   
        img:Ccard2,
        title:"CBBS",
        myp:"Certified Bug Bounty Specialist",
        cN:"140px"

    },
    {   
        img:Ccard3,
        title:"CPTS",
        myp:"Certified Penetration Testing Specialist",
        cN:"190px"

    },
    {   
        img:Ccard4,
        title:"CEH",
        myp:"TIPS-G Certified Ethical Hacker",
        cN:"100px"

    },
    {   
        img:Ccard5,
        title:"CFS",
        myp:"Certified Forensics Specialist",
        cN:"110px"

    },
    {   
        img:Ccard6,
        title:"APT",
        myp:"Advance Penetration Testing",
        cN:"150px"

    },
    {   
        img:Ccard7,
        title:"APT",
        myp:"AWS Associate",
        cN:"140px"

    },
    {   
        img:Ccard8,
        title:"IOT",
        myp:"IOT Testing",
        cN:"140px"

    },
    {   
        img:Ccard9,
        title:" AWS SECURITY",
        myp:"AWS Security Course",
        cN:"120px"

    },
    {   
        img:Ccard10,
        title:" Linux",
        myp:"Beginner to Advanced Linux Course",
        cN:"160px"

    },
    {   
        img:Ccard11,
        title:" Python",
        myp:"Mobile Application Penetration Testing",
        cN:"140px"

    },
    {   
        img:Ccard12,
        title:" Networking",
        myp:"Beginner to Advanced Networking Course",
        cN:"190px"

    },
]

const Course = () => {
  return (
      <div>
             <Header/>
    <div className='course_mainSection container-fluid'>
        <div className='row   d-flex justify-content-center   '>
                <div className='col-12 my-5 py-4 px-5 courseF_section text-center text-white'>
                    <h1>All Courses</h1>
                    <p>HTB Academy's hands-on certifications are designed to provide job proficiency on various cybersecurity roles. As ensured by up-to-date training material, rigorous certification processes and real-world exam lab environments, HTB certified individuals will possess deep technical competency in different cybersecurity domains.</p>
                </div>
        </div>

        <div className='row pb-5  d-flex justify-content-center course_card_section'>
                    <div className='col-10 text-center'>
                        <button type="button" className="btn px-4 mb-5 btn-warning">Get Your Demo Class</button>
                    </div>
                    <div className='col-10'>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {
                            data.map((mv)=>{
                                return (
                                    <div class="col">
    <div class="card  mt-3 CCard bg-transparent text-white ">
      <img src={mv.img} className="card-img-top m-auto  CcardImg  img-fluid" style={{width:`${mv.cN}`}} alt="..."/>
      <div className="card-body   mycardBody">
        <h5 className="card-title text-center card_title">{mv.title}</h5>
        <p className="card-text text-center" style={{fontSize:"10px"}}>{mv.myp}</p>
        <p className="card-text " style={{fontSize:"13px"}}><sapn>{<FaLayerGroup style={{marginRight:"10px"}}/>}28 Modules</sapn> <span className='float-end'>{<FaRegLightbulb style={{marginRight:"5px"}}/>}Exam Included</span></p>
      </div>
    </div>
  </div>
                                )
                            })
                        }
  
  
  
  
</div>
                    </div>

              
        </div>
    </div>
        <Footer/>
    </div>
  )
}

export default Course
