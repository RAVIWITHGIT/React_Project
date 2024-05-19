import React from 'react'
import './studentCard.css'

const data = [
    {
        name:"ravi lakshakar",
        myimg:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww' className='st_img img-fluid ",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officia amet eum doloribus blanditiis impedit repellat debitis soluta quam nam, perspiciatis saepe, suscipit, et optio recusandae ipsum eius "
    },
    {
        name:"ravi lakshakar",
        myimg:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww' className='st_img img-fluid ",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officia amet eum doloribus blanditiis impedit repellat debitis soluta quam nam, perspiciatis saepe, suscipit, et optio recusandae ipsum eius "
    },
    {
        name:"ravi lakshakar",
        myimg:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww' className='st_img img-fluid ",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officia amet eum doloribus blanditiis impedit repellat debitis soluta quam nam, perspiciatis saepe, suscipit, et optio recusandae ipsum eius"
    },
]

const StudentCard = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 py-5 g-4">
        {
            data.map((value)=>{
                return (
                <div className="col">
    <div className="card bg-transparent text-white border">
      <div className="card-body">
        <div className='card-title'>
            <div className='row'>
                <div className='col-3 '>
                    <img src={value.myimg} className='st_img img-fluid '   />
                </div>
                <div className='col-8'>
                    <div className='row'>
                        <div className='col-12 '>
                        <p className='student_name'>{value.name}</p>
                        <p className=''>

                        <i className="fa-solid  fa-star" style={{color:"#FFD43B"}}></i>
                        <i className="fa-solid fa-star" style={{color:"#FFD43B"}}></i>
                        <i className="fa-solid fa-star" style={{color:"#FFD43B"}}></i>
                        <i className="fa-solid fa-star" style={{color:"#FFD43B"}}></i>
                        <i className="fa-solid fa-star" style={{color:"#FFD43B"}}></i>
                        </p>



                        </div>
                    </div>
                       
                </div>
            </div>
        </div>
        <p className="card-text student_des">{value.des}</p>
      </div>
    </div>
  </div>
            )
            })
        }
  {/* <div className="col">
    <div className="card bg-transparent text-white border">
      <div className="card-body">
        <div className='card-title'>
            <div className='row'>
                <div className='col-3 '>
                    <img src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww' className='st_img img-fluid '   />
                </div>
                <div className='col-8'>
                    <div className='row'>
                        <div className='col-12 '>
                        <p className=''>ravi Lakshakar</p>
                        <p className=''>

                        <i className="fa-solid  fa-star" style={{color:"#FFD43B"}}></i>
                        <i className="fa-solid fa-star" style={{color:"#FFD43B"}}></i>
                        <i className="fa-solid fa-star" style={{color:"#FFD43B"}}></i>
                        <i className="fa-solid fa-star" style={{color:"#FFD43B"}}></i>
                        <i className="fa-solid fa-star" style={{color:"#FFD43B"}}></i>
                        </p>



                        </div>
                    </div>
                       
                </div>
            </div>
        </div>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
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

export default StudentCard
