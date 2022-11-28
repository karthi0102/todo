import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const ShowTodo = () => {
    const [todos,setTodo]=useState([])
    const getData=async()=>{
        const {data}=await axios.get('http://localhost:8080/')
        setTodo(data)
    }
    useEffect(()=>{
        getData()
    })
  return (
   <div>
    <Link to='/new'>NEW TODO</Link>
        {todos?.map(t=>(
            <div key={t._id}>
                <h1>{t.name}</h1>
                <h2>{t.date}</h2>
                <h3>{t.number}</h3>
                <h4>{t.complete}</h4>
            </div>
        ))}
   </div>
  )
}

export default ShowTodo