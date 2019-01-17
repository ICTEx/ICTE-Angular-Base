
const WebSocket = require('isomorphic-ws');

const ws = new WebSocket('ws://localhost:10550'); //TODO: Just for test local

var array = ['Yes','No']

ws.onopen =(e) => {
   console.log(e.target.readyState);
   console.log('Connected...');
};

ws.onclose= (closeEvent) => {
   console.log(closeEvent);
};

ws.onerror = (error)=>{
   console.log(error.message);
};

ws.onmessage= (data) => {
   console.log(data.data.toString('utf8'));
   var number = data.data.toString('utf8',0,1);
   console.log(number);
   var n2 = data.data.toString('utf8',1,2);
   console.log(n2);
   var con = data.data.toString('utf8',2,data.data.length-1);
   console.log(con);

};

const sendMessage = ()=>{
   ws.send("12345.67890");
   console.log("msg sent...");
};

setInterval(sendMessage, 1000);