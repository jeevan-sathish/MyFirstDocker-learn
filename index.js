const express =require("express")
const port = 3000;

const app =express();

app.get('/',(req,res)=>{
    res.send("hello jeevan this ismy express app 😉")
})

app.listen(port,()=>{
    console.log(`running succesfully on http://localhost:${port}`)
})