var btn = document.createElement("BUTTON")
var t = document.createTextNode("CLICK ME");
btn.appendChild(t);
//Appending to DOM
document.body.appendChild(btn);

var x = document.getElementsByTagName('p');

var paras = []

for (var i = 0; i < x.length; i++) {
  var str = x[i].innerText;
  var result = str.match(/([^\.!\?]+[\.!\?]+)|([^\.!\?]+$)/g);
  try {
    for (var j = 0; j < result.length; j++)
      paras.push(result[j]);
  } catch (err) {
    continue;
  }
}

x[0].innerHTML = "<b style=\"color:green;\">aaa</b>" + paras[0];


var parass="I am writing to recommend NAME for the position of lab manager.";
var data = JSON.stringify({"text": parass});

var xhr = new XMLHttpRequest();


xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && this.status == 200)
     {
        x[1].innerHTML = "<b style=\"color:green;\">aaaaaaatsea</b>"+this.responseText + paras[0];
      //  alert(xhr.responseText);
    }
  };

xhr.open("POST", "http://127.0.0.1:5001/check", true);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send(data);

// xhr.onload = function() {
//       var dataa = JSON.parse(this.responseText);
//       x[1].innerHTML = "<b style=\"color:green;\">qqqaaaaaaatsea</b>" + paras[0];
// };

// console.log(document.body.innerHTML);
// // document.body.innerHTML = "MALHOTRA";
