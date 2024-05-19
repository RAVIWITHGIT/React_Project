import React from 'react'
import card1 from '../Assets/HomeImg/Group 35.png'
import card2 from '../Assets/HomeImg/Group 57.png'
import card3 from '../Assets/HomeImg/Group 58.png'
import card4 from '../Assets/HomeImg/Group 59.png'
import './homeCourseCard.css'

const card = [
    {
        img1:card1,
    },
    {
        img1:card2,
    },
    {
        img1:card3,
    },
    {
        img1:card4,
    }
]

const HomeCourseCard = () => {
  return (
    <div>
        <div className="row row-cols-1 row-cols-md-4 py-5 g-4">
            {
            card.map((value)=>{
                return (
                    <div className="col">
    <div className="card "  style={{backgroundColor:"rgb(17, 25, 39)"}}>
      <img src={value.img1} className="card-img-top img-fluid" style={{height:"400px"}}   alt="..."/>
    </div>
  </div>
                )
            })
        }

      
    </div>
    </div>
  )
}

export default HomeCourseCard
