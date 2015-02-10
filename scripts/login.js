var xmlDoc;
window.onload = function(){
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "students.xml", false);
	xmlhttp.send();

	xmlDoc = xmlhttp.responseXML;
}

function checkUser(){
	var aUser = false;
	var user = document.getElementById('account').value
	var password = document.getElementById('password').value

	for (var i = 0; i < xmlDoc.getElementsByTagName('student').length; i++) {
		if (user === xmlDoc.getElementsByTagName('student')[i].children[2].innerHTML || user === xmlDoc.getElementsByTagName('student')[i].children[3].innerHTML) {
			aUser = true
		};
	};
	if (!aUser) {

	};
	for (var i = 0; i < xmlDoc.getElementsByTagName('student').length; i++) {
		if (password === xmlDoc.getElementsByTagName('student')[i].children[4].innerHTML) {

		};
	};
}