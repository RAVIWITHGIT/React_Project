import React from 'react'
import { FaSpider } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { FaWifi } from "react-icons/fa";
import { IoScanCircleOutline } from "react-icons/io5";
import { FaUserCog } from "react-icons/fa";
import { FaFingerprint } from "react-icons/fa";
import './textingcard.css'

const data = [
    {
        micon:<FaSpider />,
        title:"External Penetration Testing",
        des:"External penetration testing is the evaluation of your network’s perimeter defenses."
    },
    {
        micon:<LuBox />,
        title:"Internal Penetration Testing",
        des:"Internal penetration testing emulates attacks from inside your corporate network."
    },
    {
        micon:<AiOutlineGlobal />,
        title:"Web Application Testing",
        des:"Web application testing measures the security posture of your website and/or custom developed application."
    },
    {
        micon:<AiOutlineSecurityScan />,
        title:"Vulnerability Scanning",
        des:"Vulnerability assessments evaluate and prioritize exposures in your organization."
    },
    {
        micon:<FaWifi />,
        title:"Wireless Penetration Testing",
        des:"Wireless testing is the evaluation of your wireless posture."
    },
    {
        micon:<IoScanCircleOutline />,
        title:"Social Engineering",
        des:"Social engineering assesses the human vulnerability factor in your organization."
    },
    {
        micon:<FaUserCog />,
        title:"Physical Penetration Testing",
        des:"Physical penetration tests evaluate a company’s physical security posture."
    },
    {
        micon:<FaFingerprint />,
        title:"SOC / Purple Team Testing",
        des:"SOC assessments help improve SIEM baselining and detection capabilities."
    }
]

const Testingcard = () => {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        {
            data.map((gvalue)=>{
                return (
                    <div class="col">
                    <div class="card h-100  text-white" style={{backgroundColor:"rgb(26, 35, 50)"}}>
                      <div class="card-body serviceTestingCard text-center">
                        <h5 class="card-title text-warning fs-2">{gvalue.micon}</h5>
                        <h4 class="card-text ">{gvalue.title}</h4>
                        <p class="card-text">{gvalue.des}</p>
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

export default Testingcard
