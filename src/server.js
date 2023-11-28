import http from "http";
import WebSocket from "ws";
import express from 'express';

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use("/public", express.static(__dirname+"/public"));

app.get("/", (req,res)=>res.render("home"));
app.get("/*", (req,res)=>res.redirect("/"));

const handleListen = () => console.log("연결중 http://localhost:3000");
//app.listen(3000, handleListen);

const server = http.createServer(app);
const wss = new WebSocket.Server({server});

//연결 확인
// function handleConnection(socket){
//     console.log(socket);
// }

wss.on("connection", (socket)=>{
    console.log("브라우저와 연결되었다요!");
    socket.on("close", ()=> console.log("서버->서버와 연결이 끊겼네요 ㅠ"));
    socket.on("message",(message)=>{
        socket.send(`[서버] : ${message}`);
    });
});

server.listen(3000, handleListen);



