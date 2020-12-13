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


x[0].innerHTML ="<b style=\"color:green;\">HELLO</b>" + paras[0];




// console.log(document.body.innerHTML);
// // document.body.innerHTML = "MALHOTRA";