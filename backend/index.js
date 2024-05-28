const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const uuid = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());


// GET
const todos=[
  {
    id:1,
    name:"cricket",
    completed:true
  },
  {
    id:2,
    name:"hiking",
    completed:false
  }
]

app.get('/',(req,res)=>{
  res.json({msg:"Todo list Home page"});
});

app.get('/todos',(req,res)=>{
  res.json(todos);
});

app.get('/todos/:id',(req,res)=>{
  let oneTodo = todos.filter((oneTodo ) => oneTodo.id == req.params.id);
  res.json({msg:"id", data:oneTodo});
});


//POST

app.post('/todos',(req,res)=>{
  todos.push({id:uuid.v4(), ...req.body})
  res.json({msg:"add to do", data:todos});
});

//EDIT

app.put('/todos/:id',(req,res)=>{
  let todo =todos.find((todo) => todo.id ==req.params.id);
  if(todo){
    todo.name =req.body.name;
    todo.completed = req.body.completed;
    res.json({msg:"edit todo",data:todo});
  }
  res.json({msg:" todo not found"});

});

//DELETE

app.delete('/todos/:id',(req,res)=>{
  let index = todos.find((todo) => todo.id ==req.params.id);
  todos.splice(index,1);
  res.json({msg:"delete to do",data:todos});
});



app.listen(3000, ()=>{
  console.log("server is running");
});