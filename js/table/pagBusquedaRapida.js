function actualizarIndice(){
	
	var input =document.getElementById("indiceP");
	
	
	input.value=indice;
	
	 
}

function siguientePag(id){
			var aux=0;
			if(documents.length%4>0){
				aux=1;}
			if(indice<(documents.length/4)){
			indice++;
			
			actualizarIndice();
			mostrarLista(id,valu);
			
			}
}

function anteriorPag(id){
			if(indice>1){
			indice--;
			
			actualizarIndice();
			mostrarLista(id,valu);
			
			}
}

function ultimaPag(id){
	if(documents.length%2>0){
 	indice=(parseInt(documents.length/4))+1;
 	
 	actualizarIndice();
	mostrarLista(id,valu);}
	else{
	
    indice=parseInt(documents.length/4);
    
    actualizarIndice();
	mostrarLista(id,valu);	
	}
}

function primeraPag(id){
	indice=1;
	
	actualizarIndice();
	mostrarLista(id,valu);
}

function indicePag(id,num){
	indice=num.value;
	
	actualizarIndice();
	mostrarLista(id,valu);
	
	var input = document.getElementById("indiceP");
	input.setAttribute("min", 1);
	
	if(documents.length%2>0){
	input.setAttribute("max", parseInt(documents.length/4)+1);}
	else{
	input.setAttribute("max", parseInt(documents.length/4));
	}
	
	
}

function selectBusqueda(busqueda,id){
	if(busqueda.value=="Leyes"){

		
		valu=1;
		mostrarLista(id,valu)

	}

	if(busqueda.value=="Suplementos"){
		
		
		valu=2;
		mostrarLista(id,valu);
		

	}	


}



function mostrarLista(id,valu){
	

	if(valu==1){


 				
 	           var out = "";
				var i;
				documents = arr2.Documentos;
				
				
				for ( i = (indice-1)*4; i < indice*4; i++) {
					if(i<documents.length){
					out += 
					"<div class='service'>" +
			        '<div class="row row-fit">'+"<div class='col-sm-5'>" + "	<div class='description'>" + "		<p>" + documents[i].categoria + "</p>" + "	</div>" + "</div>" +
					"<div class='col-sm-9'>" + "	<div class='description'>" + "		<p>" + documents[i].descripcion + "</p>" + "	</div>" + "</div>" + 
					"<div class='col-sm-5'>" + "	<div class='description'>" + "		<p>" + documents[i].estado + "</p>" + "	</div>" + "</div>" +  
					"<div class='col-sm-5'>" + "	<div class='description'><a href= 'javascript:void(0)' onclick='activarDescarga(" + '"'+ arr2.Documentos[i].url +'","' + arr2.Documentos[i].nombre + '"' + ")' class='button worker-button-2'>Descargar</a></div>" + 
					"</div></div></div>";
					
					}
				}
				
				
				
				document.getElementById(id).innerHTML = out;
				
				actualizarIndice();
				document.getElementById("resultado").innerHTML = "Resultados Encontrados: "+(documents.length);
				
				


	}

	if(valu==2){
		

		 var out = "";
				var i;
				documents = arr2.Documentos;
				
				
				for ( i = (indice-1)*4; i < indice*4; i++) {
					if(i<documents.length){
						out +=
		        '<div class="row">'+
				"<div class='col-sm-9'>" + 
				"	<div class='description'>" + 
				"		<p>"+documents[i].titulo+"</p>" + 
				"	</div>" + 
				"</div>" + 
				"<div class='col-sm-3'>" + 
				"	<div class='description'>" + 
				"		<p>"+documents[i].tomo+"</p>" + 
				"	</div>" + 
				"</div>" + 
				"<div class='col-sm-3'>" + 
				"	<div class='description'>" + 
				"		<p>"+documents[i].volumenPeriodico+"</p>" + 
				"	</div>" + 
				"</div>" + 
				"<div class='col-sm-3'>" + 
				"	<div class='description'>" + 
				"		<p>"+documents[i].numeroSuplemento+"</p>" + 
				"	</div>" + 
				"</div>" + 
				"<div class='col-sm-3'>" + 
				"	<div class='description'>" + 
				"		<p>"+documents[i].fechaPublicacion+"</p>" + 
				"	</div></div>" + 
				
				"<div class='col-sm-3'>" + 
				"	<div class='description'>" + 
				"<a href= 'javascript:void(0)' onclick='activarDescarga(" + '"'+ arr2.Documentos[i].url +'","' + arr2.Documentos[i].nombre + '"' + ")' class='button worker-button-2'>Descargar</a>" +
				"	</div>" + 
				"</div>" + 			
				
				"</div>" 

	
	
	
	
	
					}
				}

	
			document.getElementById(id).innerHTML = out;
			
			actualizarIndice();
				document.getElementById("resultado").innerHTML = "Resultados Encontrados: "+(documents.length);
	
	
	
	



	}


}






