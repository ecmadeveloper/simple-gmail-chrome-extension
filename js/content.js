var j = document.createElement('script');
j.src = chrome.extension.getURL('js/jquery-1.10.2.min.js');
(document.head || document.documentElement).appendChild(j);

var g = document.createElement('script');
g.src = chrome.extension.getURL('js/gmail.js');
(document.head || document.documentElement).appendChild(g);

var s = document.createElement('script');
s.src = chrome.extension.getURL('js/main.js');
(document.head || document.documentElement).appendChild(s);

// var template = '<div class="gmail-chrome-extension-inner-container">\
// 					<div id="gmail-chrome-extension-toggle-container">\
// 					</div>\
// 					<div id="gmail-chrome-extension-content-container">\
// 					</div>\
// 				</div>';
// var origin_body = document.body,
// 	sidebar = document.createElement('div');
// 	sidebar.setAttribute('id', "gmail-chrome-extension-container");

// 	// sidebar.innerHTML(template);

// origin_body.appendChild(sidebar);

document.addEventListener("email_changed", function(data) {
    var from = JSON.parse(localStorage.getItem("from")),
    	to = JSON.parse(localStorage.getItem("to")),
    	length = JSON.parse(localStorage.getItem("length"));

    var emails = JSON.parse(localStorage.getItem("emails")).slice(from - 1, to - from + 1);
    console.log("Data Changed...");
    console.log(emails);
});
