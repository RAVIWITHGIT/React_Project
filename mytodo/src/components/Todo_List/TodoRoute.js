import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todo from './todo'

const TodoRoute = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Todo/>}/>
        <Route path='/signin' element={<Todo/>}/>
        <Route path='/register' element={<Todo/>}/>
    </Routes>
    </>
  )
}

export default TodoRoute
