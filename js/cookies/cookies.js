var s = "http://127.0.0.1:8020/Servidor/login.html";
function eliminarCookies(){

	eliminarCookie("usuario");
	eliminarCookie("password");
	
	window.location=s;
	//window.location="http://periodicooficial.zacatecas.gob.mx/login.html";
	//window.location="http://127.0.0.1:8020/Servidor/login.html";
	
	
	
}


function eliminarCookie(name){
	var pathBits = location.pathname.split('/');
    var pathCurrent = ' path=';

    // do a simple pathless delete first.
    document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;';

    for (var i = 0; i < pathBits.length; i++) {
        pathCurrent += ((pathCurrent.substr(-1) != '/') ? '/' : '') + pathBits[i];
        document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;' + pathCurrent + ';';
    }
	
	
}

function crearCookie(){
	
	var usuario=document.getElementById("username");
	var password=document.getElementById("password");
	
	
	
	
	
	var xmlhttp = new XMLHttpRequest();
			var url = "http://periodicooficial.zacatecas.gob.mx:9000/autenticacion";
			
			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState==4 && xmlhttp.status==200){
					var myArr = JSON.parse(xmlhttp.responseText);
					setCookie('usuario',usuario.value,1);
					setCookie('password',password.value,1);
					//window.location="http://127.0.0.1:8020/Servidor/admin/index.html";
					//window.location="http://periodicooficial.zacatecas.gob.mx/admin/index.html";
					window.location=s;
					
				}
				else{
					//document.getElementById("respuesta").innerHTML="Credenciales Incorrectas";
				}	
			};
			xmlhttp.open("POST",url,true);
			
			var formData = new FormData( document.getElementById("forma") );
					xmlhttp.send(formData);
			
			

	
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires+ ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie('usuario');
    if (user != "") {
    	return true;
    } else {
    	return false;
    }
}

function verificarLogin(){
	if (!checkCookie()) {
		alert('Inicia Sesion: ');
       //window.location="http://127.0.0.1:8020/Servidor/login.html";
       //window.location="http://periodicooficial.zacatecas.gob.mx/login.html";
       window.location=S;
	}

}
