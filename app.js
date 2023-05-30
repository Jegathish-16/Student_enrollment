require('dotenv').config()
const express = require("express")
const app = express();
const PORT = 3500;
const students_router = require('./Routes/students');
const mongoose = require("mongoose");

// app.use(express.urlencoded({extended:true}))
// app.use(express.json());
mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error',(errorMessage)=> console.log(errorMessage))
db.once('open',()=>console.log('connection established'))
app.get('/',(require,response)=>{
    response.send("Landing page");
})

app.use('/api/v1/students', students_router)

app.listen(PORT,console.log('server runs at http://localhost:3500/'))