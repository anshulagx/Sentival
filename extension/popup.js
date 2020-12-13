document.addEventListener('DOMContentLoaded', function () {
  var list = document.getElementById('evsa');
  for (var i = 0; i < 10; i++) {
    var firstname = "Hi: "+i;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(firstname));
    list.appendChild(entry);
  }
}, false);



// var i = 1;
// document.addEventListener('DOMContentLoaded', function() {
//   var checkPageButton = document.getElementById('checkPage');
//   checkPageButton.addEventListener('click', function() {
//     document.getElementById("demo").innerHTML = "Count: "+i;
//     i++;
//     chrome.tabs.getSelected(null, function(tab) {
//       d = document;

//       var f = d.createElement('form');
//       f.action = 'options.html';
//       f.method = 'post';
//       var i = d.createElement('input');
//       i.type = 'hidden';
//       i.name = 'url';
//       i.value = tab.url;
//       f.appendChild(i);
//       d.body.appendChild(f);
//       f.submit();
//     });
//   }, false);
// }, false);

// chrome.runtime.onMessage.addListener(function(request, sender) {
//   if (request.action == "getSource") {
//     message.innerText = request.source;
//   }
// });

// function onWindowLoad() {

//   var message = document.querySelector('#message');

//   chrome.tabs.executeScript(null, {
//     file: "getPagesSource.js"
//   }, function() {
//     // If you try and inject into an extensions page or the webstore/NTP you'll get an error
//     if (chrome.runtime.lastError) {
//       message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
//     }
//   });

// }

// window.onload = onWindowLoad;
