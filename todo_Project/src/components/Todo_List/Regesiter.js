import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


const Regesiter = () => {
    const [modalShow, setModalShow] = useState(true);
    const [getEmail,setEmail] = useState("")
    const mynav = useNavigate()
    const [getname,setname] = useState("")
    const [getPassword,setPassWord] = useState("")
    const handleClose = () => setModalShow(false);


    

    const submitform = async (e)=>{
      e.preventDefault()
      setModalShow(false)

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

    const registerApi = await fetch("https://test-todo-backend-o64b.onrender.com/learner/register",requestOption)
    const res = await registerApi.json()
    localStorage.setItem("userEmail",JSON.stringify({getEmail}))
    localStorage.setItem("userName",JSON.stringify({getname}))
    mynav("/signin")
    console.log("res",res)


  }


  return (
    <div>
       <Modal
      show={modalShow} onHide={handleClose} backdrop="static"
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div >

        <h4 className='text-center'>Register</h4>
        <Form onSubmit={submitform}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter Your Name</Form.Label>
        <Form.Control type="text" value={getname} onChange={(e)=>setname(e.target.value)} placeholder="Enter Name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={getEmail} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={getPassword} onChange={(e)=>setPassWord(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Country</Form.Label>
        <Form.Control placeholder="Enter Your Country" />
      </Form.Group>
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

export default Regesiter
