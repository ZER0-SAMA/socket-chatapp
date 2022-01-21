const socket = io();
let n;
let keyarea=document.querySelector("#text-box");  
let messageArea=document.querySelector('.chat-area') 
do{
    n=prompt('Your name')
}while(!n);

        // let messageArea=document.querySelector('.chat-area') 
        function message(){
            let msg={
                Name:n,
               Message: document.getElementById("text-box").value
            
            }
            
                console.log(msg);
            document.getElementById("text-box").value=" "

            //Append message
            appendMessage(msg,'outgoing-msg');
            //send to server
            socket.emit('message',msg)
        
        }


    function appendMessage(msg,type){
     let mainDiv= document.createElement('div')
     let className=type
     mainDiv.classList.add(className)
     let markup =`
                <span id="user">${msg.Name}</span>
                <br>
                <p>${msg.Message}</p>
     `
      // <h4>${msg.Name}</h4>
     mainDiv.innerHTML=markup
     messageArea.appendChild(mainDiv)
     scrollToBottom()

}






//Incoming message
socket.on('sendmsg',(mssg)=>{

 let mainDiv= document.createElement('div')
     let className="income-msg"
     mainDiv.classList.add(className)
     let markup =`
                <span id="user">${mssg.Name}</span>
                <br>
                <p>${mssg.Message}</p>
     `
      // <h4>${msg.Name}</h4>
     mainDiv.innerHTML=markup
     messageArea.appendChild(mainDiv)
     scrollToBottom()


})












// keyarea.addEventListener('keyup',(e)=>{
//     if(e.key==='Enter'){
//         sendMessage(e.target.value)
//     }
// })

// function sendMessage(m){
//     let msg={
//         Name:n,
//        Message: m
    
//     }
    
//     console.log(msg);
//     document.getElementById("text-box").value=" "
//     appendMessage(msg,'outgoing-msg');
// }
// function appendMessage(msg,type){
//      let mainDiv= document.createElement('div')
//      let className=type
//      mainDiv.classList.add(className)
//      let markup =`
//                 <h4>${msg.Name}</h4>
//                 <p>${msg.Message}</p>
//      `
//      mainDiv.innerHTML=markup
//      messageArea.appendChild(mainDiv)

// }
function scrollToBottom(){
    messageArea.scrollTop=messageArea.scrollHeight
}