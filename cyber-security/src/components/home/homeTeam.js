import React from 'react'
import './homeTeam.css'
import team1 from '../Assets/HomeImg/team1.png'
import team2 from '../Assets/HomeImg/team2.png'
import team3 from '../Assets/HomeImg/team3.png'

const data = [
    {
        name:"Nand Kishore Yadav",
        img1:team1,
        postion:"Founder @ TIPS-G",
        des:"Greetings! I'm Nand Kishore Yadav, founder of TIPS-G, your guide to cybersecurity. With over a decade of hands-on experience, I've navigated the ever-evolving cyber landscape TIPS-G is a culmination of my passion for simplifying cybersecurity.In my journey, I've witnessed the shifts in digital threats, shaping my commitment to security. At TIPS-G, we strive to empower users with the knowledge to navigate the digital world safely. Join us for a transformative experience towards a more secure online future.Welcome to TIPS-G, where cybersecurity meets simplicity and expertise converge for a safer digital journey."
    },
    {
        name:"Dinesh Kumar",
        img1:team2,
        postion:"Security Analyst",
        des:"Hello, I'm Dinesh Kumar, a dedicated Security Analyst at TIPS-G Cyber Security. With a passion for ensuring digital landscapes remain secure, I bring a wealth of experience and expertise to the realm of cybersecurity."
    },
    {
        name:"Deepak",
        img1:team3,
        postion:"Security Analyst",
        des:""
    },
]

const HomeTeam = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
            data.map((value)=>{
                return (
                    <div className="col">
                    <div className="card bg-transparent text-white border h-100">
                      <img src={value.img1} className=" pt-3 teamimg card-img-top m-auto" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title text-center team_name">{value.name}</h5>
                        <p className="card-text text-center team_postion">{value.postion}</p>
                        <p className="card-text text-center team_des">{value.des}</p>
                      </div>
                      <div className="card-footer text-center fs-2">
                            <small className="text-body-secondary ">
                                <i className="fa-brands fa-linkedin" style={{color: "#FFD43B"}}></i>
                                <i className="fa-brands mx-2 fa-square-twitter" style={{color: "#FFD43B"}}></i>
                                <i className="fa-brands fa-square-facebook" style={{color: "#FFD43B"}}></i>
                                <i className="fa-solid mx-2 fa-envelope" style={{color: "#FFD43B"}}></i>
                                </small>
                     </div>
                    </div>
                  </div>
                )
            })
        }
 
  {/* <div className="col">
    <div className="card h-100">
      <img src={team2} className="card-img-top m-auto" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={team3} className="card-img-top m-auto" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div> */}
</div>
    </div>
  )
}

export default HomeTeam
