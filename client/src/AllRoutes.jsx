import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ShowTodo from './ShowTodo'
import NewTodo from './NewTodo'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<ShowTodo/>} />
        <Route path='/new'element={<NewTodo />}/>
    </Routes>
  )
}

export default AllRoutes
