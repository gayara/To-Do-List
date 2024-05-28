const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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
  res.json({msg:"id"});
});


//POST

app.post('/todos',(req,res)=>{
  res.json({msg:"add to do"});
});

//EDIT

app.put('/todos/:id',(req,res)=>{
  res.json({msg:"edit to do"});
});

//DELETE

app.delete('/todos/:id',(req,res)=>{
  res.json({msg:"delete to do"});
});



app.listen(3000, ()=>{
  console.log("server is running");
});