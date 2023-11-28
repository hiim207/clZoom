const socket = new WebSocket(`ws://${window.location.host}`);
const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");

socket.addEventListener("open", ()=>{
    console.log('서버와 연결되었다.');
})

socket.addEventListener("message", (message)=>{
    console.log('방금 받은 메시지 : ', message.data);
})

socket.addEventListener("close", ()=>{
    console.log('서버와 연결이 종료되었습니다.');
})

// setTimeout(()=>{
//     socket.send("브라우저가 인사해본다 안녕?🎵",);
// },3000);

function handleSubmint(event){
    event.preventDefault();
    const input = messageForm.querySelector("input");
    socket.send(input.value);
    input.value="";
}

messageForm.addEventListener("submit", handleSubmint);