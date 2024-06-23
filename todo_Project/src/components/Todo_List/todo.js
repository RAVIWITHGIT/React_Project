import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import './todo.css'
import SignIn from "./SignIn";
import InputGroup from 'react-bootstrap/InputGroup';
import { useLocation, useNavigate } from "react-router-dom";
import Regesiter from "./Regesiter";
import Add from "./Add";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FiAlignJustify } from "react-icons/fi";

const Todo = () => {

  const [mshow, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [modalShow, setModalShow] = useState(false);
  const ModalClose = () => setModalShow(false);
  const mynav = useNavigate()
  const userInfo = JSON.parse( localStorage.getItem("userName"))
  const [searchData,setSearchData] = useState("")
  const [todoData,setData] = useState([])
  const [asData,setAsData] = useState([])
  const [gettitle,settitle] = useState("")
  const [getDescription,setDescription] = useState("")
  const [EditId,SetEditId] = useState("")
  const [mytTitle,SetEditTitle] = useState("")
  const [myDescription,SetEditDescription] = useState("")
  const [image,setimage] = useState()
  const [getimage,setgetimage] = useState()
  const mylocation = useLocation()


  // *********************************************** search title ***********************************
  const getsearchValue = (e)=>{
    setSearchData(e.target.value)
    if(e.target.value.length>0){
      let newdata = todoData.filter((value)=>{
        if(value.title.includes(e.target.value)){
          return value
        }
        
      })
      setData(newdata)

    }
    else{
      setData(asData)
    }


  }

  // ******************************************* logout code **************************************

  const logout =  ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("userEmail")
    setShow(false)
    mynav("/signin")
  }

  // const todoApi = async ()=>{
  //   const requestOptions = {
  //     method: "GET",
  //     redirect: "follow"
  //   };
    
  //   let result = await fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
  //   result =await  result.json()
  //   setData(result)
  //   setAsData(result)
  //   // console.log(result)
    
  //   }


  //******************************************* add data ********************************************

  const myadd = async (e)=>{
    e.preventDefault()

    

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

  const AddApi = await fetch("https://test-todo-backend-o64b.onrender.com/learner/add/task",requestOption)
  const res = await AddApi.json()
  console.log(res)
  if(res.status=="001"){
    settitle("")
    setDescription("")
    getapi()
  }


}


// ******************************************* get data ******************************************
const getapi = async () =>{
  const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

const res = await fetch("https://test-todo-backend-o64b.onrender.com/learner/get/tasks", requestOptions)
const result = await res.json()
console.log(result)
if(result.status=="001"){
  setData(result.data)
  setAsData(result.data)
}else if(result.status=="TOKEN_ERR" ||result.status=="TXN_ERR"){
  mynav("/signin")

}
  // .then(async(res)=>{ 
  //   const result = await res.json();
  //   console.log(result)
  //   if(result.status=="001"){
  //     setData(result.data)
  //     setAsData(result.data)
  //   }

  // }).catch((error)=>{
  //   console.log(error)
  // })
}


  // **************************************************** Delete Data *********************************
  const DeleteData =async (id)=>{
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

const raw = JSON.stringify({
  "id": id
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

const result = await fetch("https://test-todo-backend-o64b.onrender.com/learner/delete/task", requestOptions)
const res = await result.json();
console.log(res)
if(res.status=="001"){
  getapi()
}  

  }

  // ************************************************** edit Data *********************************

  //To show the by default value in input field
  const ShowEditDataModal = (value)=>{
    setModalShow(true)
    SetEditTitle(value.title)
    SetEditDescription(value.description)
    SetEditId(value.id)
    // setfocus(true)
    console.log(value.title)
    console.log(value.description)
  }

  //Edit title function
  const Edittitle = async (e)=>{
    e.preventDefault()
    const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);


const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

const result = await fetch(`https://test-todo-backend-o64b.onrender.com/learner/edit/task/title/${EditId}/${mytTitle}`, requestOptions)
const res = await result.json();
console.log(res)



  }

  //Edit Description function
  const Editdescription = async (e)=>{
    e.preventDefault()
    const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);


const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

const result = await fetch(`https://test-todo-backend-o64b.onrender.com/learner/edit/task/desc?id=${EditId}&desc=${myDescription}`, requestOptions)
const res = await result.json();
console.log(res)
getapi()


  }

  const EditData = (e) =>{
    Edittitle(e);
    Editdescription(e);
    setModalShow(false)


  }

// **************************************** upload image api ****************************************

  const uploadProfile = async  ()=>{
    const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

const formdata = new FormData()
formdata.append("image",image)

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: formdata,
  redirect: "follow"
};

const result = await fetch("https://test-todo-backend-o64b.onrender.com/learner/upload/profile", requestOptions)
const res = await result.json();
console.log(res)
setgetimage(res.profile)



  }


// ************************************ checked function ***************************************
const checkedfun = async (getid)=>{
  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);

const raw = JSON.stringify({
  "id": getid
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

const result = await fetch("https://test-todo-backend-o64b.onrender.com/learner/update/task", requestOptions)
const res = await result.json()
if(res.status=="001"){
  getapi()
}

}


  useEffect(()=>{
    getapi()
    if(localStorage.getItem("userEmail")){
      mynav("/")
    }else{
      mynav("/signin")
    }

  },[])
  

  return (
    <div>
      {mylocation.pathname=="/register"?<Regesiter/>:mylocation.pathname=="/signin"?<SignIn getapi={getapi}/>:""}
      



      {/* todo code ***********************************************************8 */}

      <section className="add_formSection">
        {/* <Logout/> */}
        {
        localStorage.getItem("userEmail")?
        <div className="d-flex justify-content-between" >
          <div className="mt-2 ps-1">
          <InputGroup className="mb-3">
        <Form.Control value={searchData} onChange={(e)=>getsearchValue(e)}
          placeholder="Search Todo Title"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
          </div>
          <div className="mt-2 pe-1">


    <Button variant="danger" onClick={handleShow} className="me-2">
      <FiAlignJustify />
      </Button>
      <Offcanvas show={mshow} onHide={handleClose} key={3} placement={"end"}>
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>{userInfo && userInfo.getname}</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form.Group className="mb-3 d-inline-block" style={{width:"220px"}} >
              {/* <Form.Label className="fw-bold text-dark">Image</Form.Label> */}
              <Form.Control   onChange={(e)=>setimage(e.target.files[0])} type="file" accept ="image/*"/>
            </Form.Group>
                <button className=" ms-2 btn btn-success" onClick={uploadProfile}>add image</button>
                <img src={getimage}  className="mt-2 rounded-circle" style={{width:"75px",height:"75px"}} />
          <h4 >{userInfo && userInfo.getname}</h4>
          <button className="btn btn-danger" onClick={logout}>Logout</button>
          {/* Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc. */}
        </Offcanvas.Body>
      </Offcanvas>
          </div>
        
        </div>:""
        
        }
        
        {/* <Add/> **********************************************/}
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
      </section>

      <section className="todo_section">


        
        {/* <MyTable mydata={todoData}/> *********************************************88*/}
        <h1 className="text-center fw-bold py-3">MyTodo</h1>
        <div className="todo_tableDiv">
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Checked</th>
          <th>Title</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          todoData.map((value)=>{
            return (
        <tr key={value.id}>
          <td><input value="test" defaultChecked={value.isDone==0?false:true} onClick={()=>checkedfun(value.id)}  type="checkbox"  /> </td>
          <td>{value.title}</td>
          <td>{value.description}</td>
          <td><button className="btn btn-success" onClick={()=>ShowEditDataModal(value)}>Edit</button></td>
          <td><button className="btn btn-danger" onClick={()=>DeleteData(value.id)}>Delete</button></td>
        </tr>

            )
          })
        }
        
      </tbody>
    </Table>
        </div>
      </section>


      {/* //*********************************** edit modal */}
      <Modal
      show={modalShow} onHide={ModalClose} backdrop="static"
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div >

        <h4 className='text-center'>Edit</h4>
        <Form >
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Title</Form.Label>
        <Form.Control value={mytTitle} autoFocus onChange={(e)=>SetEditTitle(e.target.value)}  placeholder="Enter Title" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label  >Description</Form.Label>
        <Form.Control value={myDescription}  onChange={(e)=>SetEditDescription(e.target.value)} as="textarea" rows={3} />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={(e)=>EditData(e)}>
        Edit
      </Button>
    </Form>
        </div>
      </Modal.Body>
      
    </Modal>

    </div>
  );
};

export default Todo;
