import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Add = () => {
  const [gettitle,settitle] = useState("")
  const [getDescription,setDescription] = useState("")
  const [getdata,setdata] = useState([])
  const myadd = async (e)=>{
    e.preventDefault()

    // console.log(getEmail,getPassword)
    

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json")
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`)

  const raw = JSON.stringify({
    "title": gettitle,
    "description": getDescription
  });

  const requestOption = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  }

  const registerApi = await fetch("https://test.maya555.store/learner/add/task",requestOption)
  const res = await registerApi.json()
  console.log(res)
  if(res.status=="001"){
    getapi()
  }
  // if(res.status=="001"){
  //   localStorage.setItem("token",res.token)
  //   localStorage.setItem("userEmail",JSON.stringify({getEmail}))
  //   setModalShow(false)
  //   mynav("/")
  //   // console.log("res",res)
  // }else{
  //   alert("Please check EmailId Or Passworkd")
  // }


}

const getapi =  () =>{
  const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://test.maya555.store/learner/get/tasks", requestOptions)
  .then(async(res)=>{
    const result = await res.json();
    console.log(result)
    if(res.status=="001"){
      setdata(res.data)
    }

  }).catch((error)=>{
    console.log(error)
  })
}

useEffect(()=>{
  getapi()
},[])



  return (
      <div className="form_div mt-3">
          <Form onSubmit={myadd}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-dark fw-bold">enter title</Form.Label>
              <Form.Control value={gettitle} onChange={(e)=>settitle(e.target.value)} type="text" placeholder="Enter title" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold text-dark">Description</Form.Label>
              <Form.Control value={getDescription} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="add Description" />
            </Form.Group>
            
            <Button variant="primary" type="submit"  >
              Add
            </Button>
          </Form>
        </div>
  )
}

export default Add
