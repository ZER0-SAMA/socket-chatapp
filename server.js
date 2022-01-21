const express =require('express') //import express
const app =express() //call express
const http =require("http").createServer(app)
const Port = process.env.PORT || 3001
http.listen(Port,()=>{                              //http.listen vs app.listen                
    console.log(`Server Listening at  ${Port}`) // backticks /template string 
    })

app.use(express.static(__dirname+'/public'))
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

//socket
const io =require('socket.io')(http)  //passing server to let io know which server usijng

io.on("connection",(socket)=>{
    console.log("Connected ...")
    socket.on("message",(m)=>{
        // console.log(m)
        socket.broadcast.emit('sendmsg',m)
    })
})

