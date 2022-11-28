const express = require('express')
const app=express()
const mongoose = require('mongoose')
const cors=require('cors')
const Todo = require("./models/todo")
app.use(cors())
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
mongoose.connect('mongodb+srv://harini:harini@cluster0.0l2eiql.mongodb.net/?retryWrites=true&w=majority')
.then(res => console.log("Connection Open"))
.catch(err => console.log("Eror"))

app.get('/',async(req,res)=>{
    try {
        const todo = await Todo.find({})
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).send("erorr")
    }
})

app.post('/',async(req,res)=>{
    try {
        const todo = new Todo({...req.body})
        await todo.save()
        res.status(200).send("success")
    } catch (error) {
        res.status(500).send("erorr")
    }
})

app.listen(8080,()=>{
    console.log('server is running')
})