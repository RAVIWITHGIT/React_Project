import React, { memo } from 'react'
import Table from 'react-bootstrap/Table';


const MyTable = (props) => {
  console.log("props",props)
  // console.log(props.mydata)
  return (
    <>
      <h1 className="text-center fw-bold py-3">MyTodo</h1>
        <div className="todo_tableDiv">
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Checked</th>
          <th>Title</th>
          <th>Description</th>
          <th>Add</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          props.mydata.map((value)=>{
            return (
        <tr key={value.id}>
          <td><input value="test" defaultChecked={false}  type="checkbox"  /> </td>
          <td>{value.title}</td>
          <td>{value.description}</td>
          <td><button className="btn btn-success">Edit</button></td>
          <td><button className="btn btn-danger">Delete</button></td>
        </tr>

            )
          })
        }
        
       
        
        
      </tbody>
    </Table>
        </div>
    </>
  )
}

export default memo( MyTable)
