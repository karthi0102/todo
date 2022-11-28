import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const NewTodo = () => {
    const navigate = useNavigate()
    
    const [name,setName]=useState('')
    const [date,setDate]=useState('')
    const [number,setNumber]=useState('')
    const [complete,setComplete]=useState(false)

    const handleSubmit =async(e)=>{
            e.preventDefault()
            try {
                const {data}= await axios.post('http://localhost:8080/',{name,date,number,complete})
                navigate('/')
            } catch (error) {
                alert(error)
            }
    }
  return (
    <div>
        <h1>NEW TODO</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" value={name} onChange={e=>setName(e.target.value)} />
            <input type="date" name="" id="" value={date} onChange={e=>setDate(e.target.value)} />
            <input type="number" name="" id="" value={number} onChange={e=>setNumber(e.target.value)} />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default NewTodo