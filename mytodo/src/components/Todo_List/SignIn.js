import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';



const SignIn = ({getapi}) => {
     const [getEmail,setEmail] = useState("")
     const [getPassword,setPassWord] = useState("")
    const [modalShow, setModalShow] = React.useState(false);
    const handleClose = () => setModalShow(false);
    const mynav = useNavigate()
    const gotoRegister = ()=>{
        mynav('/register')
    }

    const Loginform = async (e)=>{
      e.preventDefault()

      //***** only for when not run api
      // localStorage.setItem("userEmail",JSON.stringify({getEmail}))
      // setModalShow(false)
      // mynav("/")

      //******************  end 


      
      console.log(getEmail,getPassword)
      

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      "email": getEmail,
      "password": getPassword
    });

    const requestOption = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    }

    const registerApi = await fetch("https://test-todo-backend-o64b.onrender.com/learner/login",requestOption)
    const res = await registerApi.json()
    console.log("res",res)
    if(res.status=="001"){
      localStorage.setItem("token",res.token)
      localStorage.setItem("userEmail",JSON.stringify({getEmail}))
      setModalShow(false)
      mynav("/")
      getapi()
      // console.log("res",res)
    }else{
      alert("Please check EmailId Or Passworkd")
    }


  }


useEffect(()=>{
  setModalShow(true)
},[])    

  return (
    <div>
       <Modal
      show={modalShow} onHide={handleClose} backdrop="static"
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header  >
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div >

        <h4 className='text-center'>SignIn</h4>
        <Form onSubmit={Loginform}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={getEmail} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={getPassword} onChange={(e)=>setPassWord(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
      <p className='text-center' style={{cursor:"pointer"}} onClick={gotoRegister}>Don't Have a Account go To Register?</p>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
      </Modal.Body>
      
    </Modal>
    </div>
  )
}

export default SignIn
