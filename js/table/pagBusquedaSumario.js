function actualizarIndice(){
	
	var input =document.getElementById("indiceP");
	
	
	input.value=indice;
	
	 
}

function siguientePag(id){
			var aux=0;
			if(documents.length%10>0){
				aux=1;}
			if(indice<(documents.length/10)){
			indice++;
			
			actualizarIndice();
			mostrarLista(id);
			
			}
}

function anteriorPag(id){
			if(indice>1){
			indice--;
			
			actualizarIndice();
			mostrarLista(id);
			
			}
}

function ultimaPag(id){
	if(documents.length%2>0){
 	indice=(parseInt(documents.length/10))+1;
 	
 	actualizarIndice();
	mostrarLista(id);}
	else{
	
    indice=parseInt(documents.length/10);
    
    actualizarIndice();
	mostrarLista(id);	
	}
}

function primeraPag(id){
	indice=1;
	
	actualizarIndice();
	mostrarLista(id);
}

function indicePag(id,num){
	indice=num.value;
	
	actualizarIndice();
	mostrarLista(id);
	
	var input = document.getElementById("indiceP");
	input.setAttribute("min", 1);
	
	if(documents.length%2>0){
	input.setAttribute("max", parseInt(documents.length/10)+1);}
	else{
	input.setAttribute("max", parseInt(documents.length/10));
	}
	
	
}

function mostrarLista(id){
 				
 	           var out = "";
				var i;
				documents = arr2.Documentos;
				
				
				for ( i = (indice-1)*10; i < indice*10; i++) {
					if(i<documents.length){
				
				
				out +=
		        '<div class="row">'+
				"<div class='col-sm-3'>" + 
				"	<div class='description'>" + 
				"		<p>"+documents[i].volumen+"</p>" + 
				"	</div>" + 
				"</div>" + 
				"<div class='col-sm-3'>" + 
				"	<div class='description'>" + 
				"		<p>"+documents[i].tipo+"</p>" + 
				"	</div>" + 
				"</div>" +
				"<div class='col-sm-4'>" + 
				"	<div class='description'>" + 
				"		<p>"+documents[i].categoria+"</p>" + 
				"	</div>" + 
				"</div>" +
				"<div class='col-sm-2'>" + 
				"	<div class='description'>" + 
				"		<p>"+documents[i].folio+"</p>" + 
				"	</div>" + 
				"</div>" +
				"<div class='col-sm-3'>" + 
				"	<div class='description'>" + 
				"		<p>"+documents[i].fecha+"</p>" + 
				"	</div>" + 
				"</div>" + 
				"<div class='col-sm-4'>" + 
				"	<div class='price'>" + 
				"		<p>"+documents[i].notaDelSumario+"</p>" + 
				"	</div>" + 
				"</div>"+
				"<div class='col-sm-5'>" + 
				"	<div class='price'>" + 
				"		<p>"+documents[i].municipio+"</p>" + 
				"	</div>" + 
				"</div>"+
				"</div>"			
				
				
				
				}
				
				}
				document.getElementById(id).innerHTML = out;
				
				actualizarIndice();
				document.getElementById("resultado").innerHTML = "Resultados Encontrados: "+(documents.length);
				
				}