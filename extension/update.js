var btn = document.createElement("BUTTON")
var t = document.createTextNode("CLICK ME");
btn.appendChild(t);
//Appending to DOM
document.body.appendChild(btn);

var x = document.getElementsByTagName('p');

var paras = []

for(var i = 0; i<x.length ; i++){
    var str = x[i].innerText;
    var result = str.match(/([^\.!\?]+[\.!\?]+)|([^\.!\?]+$)/g);
    try{
    for(var j = 0; j<result.length ; j++)
        paras.push(result[j]);
}
catch(err){
    continue;
}
}


let parass=("I am writing to recommend NAME for the position of lab manager. As is required for this position, she is diligent, hardworking, and meticulous. She is willing and able to learn new things quickly. While she is pleasant and considerate, she is also willing to act firmly to enforce necessary procedures for research with human subjects. She will not be afraid to challenge any hint of cutting corners.")

let data = {"text": parass};

var xhr = new XMLHttpRequest();
xhr.open("POST", "http://127.0.0.1:5000/api/analyze", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify(data));
xhr.onreadystatechange = function() {//Call a function when the state changes.
    if(xhr.readyState == 4 && xhr.status == 200) {
        alert(xhr.responseText);
    }
// xhr.onload = function() {
//     var dataa = JSON.parse(this.responseText);
//     console.log(dataa);
//     x[0].innerHTML ="<b style=\"color:green;\">"+"dataa"+"</b>" + paras[0];
//};



// console.log(document.body.innerHTML);
// // document.body.innerHTML = "MALHOTRA";
