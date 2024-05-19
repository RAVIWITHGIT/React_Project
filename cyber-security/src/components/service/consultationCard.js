import React from 'react'
import { GiCheckedShield } from "react-icons/gi";
import { BsExclude } from "react-icons/bs";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaNetworkWired } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import { FaKey } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import './consultationCard.css'



const data = [
    {
        micon:<GiCheckedShield />,
        title:"Security Risk Assessment",
        des:"A risk assessment evaluates the potential threats to your organization and the risks to the confidentiality, integrity, and availability of information.."
    },
    {
        micon:<BsExclude />,
        title:"Cloud Security Assessment",
        des:"A cloud security assessment evaluates your organization’s cloud infrastructure and helps secure your critical cloud assets."
    },
    {
        micon:<FaPuzzlePiece />,
        title:"Security Gap Analysis",
        des:"A security gap analysis is a review of your organization’s security posture."
    },
    {
        micon:<FaNetworkWired />,
        title:"Console Architecture Assessment",
        des:"A console architecture assessment considers the perimeter and internal network architectures and configurations."
    },
    {
        micon:<CiSun />,
        title:"Host Compliance & Malware Audit",
        des:"A host compliance audit evaluates your devices for security best-practices."
    },
    {
        micon:<FaKey />,
        title:"Password Audit",
        des:"A password audit is the evaluation of your organization’s password policy.."
    },
    {
        micon:<FaClipboardList />,
        title:"Security Policy Assessment",
        des:"A security policy assessment is the evaluation of your organization’s current security policies.."
    },
    {
        micon:<FaUserCog />,
        title:"Tailored Consulting",
        des:"Sometimes, your organization doesn’t fit into “off the rack” assessments and that’s okay."
    }
]


const ConsultationCard = () => {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        {
            data.map((gvalue)=>{
                return (
                    <div class="col">
                    <div class="card h-100  text-white" style={{backgroundColor:"rgb(26, 35, 50)"}}>
                      <div class="card-body consultationCard text-center">
                        <h5 class="card-title text-warning fs-2">{gvalue.micon}</h5>
                        <h4 className="card-text" >{gvalue.title}</h4>
                        <p className="card-text">{gvalue.des}</p>
                      </div>
                      <div class="card-footer text-center">
        <small class="text-body-secondary"><button type="button" class="btn btn-warning">Read More</button></small>
      </div>
       </div>
  </div>
                )
            })
        }
  
</div>
    </div>
  )
}

export default ConsultationCard
