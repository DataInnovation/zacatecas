
	function slctr(texto,valor){
		this.texto = texto
		this.valor = valor
	}

	function fecpub(fecha,numero,ano,tomo){
		this.fecha = fecha
	}

	function TipoInser(cual,donde, juzgados){
		
		if(cual.selectedIndex != 0){
			if(cual.selectedIndex == 4 || cual.selectedIndex == 6  ){
				document.getElementById(juzgados).disabled = false;
				
			}
			else{
				document.getElementById(juzgados).disabled = true;
				
			}
			donde.length=0
			cual = eval(cual.value)
			for(m=0;m<cual.length;m++){
				var nuevaOpcion = new Option(cual[m].texto);
				donde.options[m] = nuevaOpcion;
				if(cual[m].valor != null){
					donde.options[m].value = cual[m].valor
				}
				else{
					donde.options[m].value = cual[m].texto
				}
			}
		}
	}
	
	
	function Juzgados(cual,donde){
		if(cual.selectedIndex != 0){
			donde.length=0
			cual = eval(cual.value)
			for(m=0;m<cual.length;m++){
				var nuevaOpcion = new Option(cual[m].texto);
				donde.options[m] = nuevaOpcion;
				if(cual[m].valor != null){
					donde.options[m].value = cual[m].valor
				}
				else{
					donde.options[m].value = cual[m].texto
				}
			}
		}
	}


	function Fechas(cual,donde){
		if(cual.value != 0){
			cual = eval(cual.value)
			var nuevaOpcion = FechasPublicaciones[cual].fecha;
			donde.value=nuevaOpcion;
		}
	}


	function publicaciones(ctas){
	  var num = ctas.value
	  var div = '';
	  for (var i=1;i<num;i++){ 
		   var cont=i+1;
		   div+="<div class='col-sm-12'>"
		   div+="	<input class='input-line js-input' type='number' name='siVolumenesPublicacion[]' id='siVolumenesPublicacion"+cont+"' placeholder='Numero de Inserciones:' value='' onChange='Fechas(this,siFechasPublicacion"+cont+");'/>"
		   div+="</div>"
		   div+="<div class='col-sm-12'>"
		   div+="	<input class='input-line js-input' type='text' name='siFechasPublicacion[]' id='siFechasPublicacion"+cont+"' placeholder='Fecha de Publicación' value='' />"
		   div+="</div>";
	  }
	
	  $("#PUBLICACIONES").html(div);
	}






	function insertarSolicitud(url) {
		generarFolio(url);
	}

	function generarFolio(url) {
		var resultadoWS = $.post(url + "/generar/folio", {}, function(data, status) {
			//El servidor provee un Folio
			var folio = data["folio"];
			testPDF(url , folio);
		}, "json");
	}

	function testPDF(url ,folio) {
		
		var idVolumenesPublicacion = [];
		$('input[name^="siVolumenesPublicacion"]').each(function() {
			idVolumenesPublicacion.push(parseInt($(this).val()));
		});

		var idsiFechasPublicacion = [];
		$('input[name^="siFechasPublicacion"]').each(function() {
			idsiFechasPublicacion.push($(this).val());
		});
		
		//Obtener los valores de la 'form'
		var usuario = document.getElementsByName("usuario")[0].value; //dinamicos, obtenidos al accesar el usuario
		var password = document.getElementsByName("password")[0].value; //dinamicos,obtenidos al accesar el usuario
		var path  = document.getElementsByName("path")[0].value;
		var urlAlfresco = document.getElementsByName("urlAlfresco")[0].value;
		
		var siActor = document.getElementsByName("siActor")[0].value;
		var siTipoInsercion = document.getElementsByName("siTipoInsercion")[0].value;
		var siNombreSolicitante = document.getElementsByName("siNombreSolicitante")[0].value;
		var siContraparte =document.getElementsByName("siContraparte")[0].value;
		var siCategoria = document.getElementsByName("siCategoria")[0].value;
		var siMunicipio = document.getElementsByName("siMunicipio")[0].value;
		var siJuzgado = document.getElementsByName("siJuzgado")[0].value;
		var siNumInserciones = document.getElementsByName("siNumInserciones")[0].value;
		var siVolumenesPublicacion = idVolumenesPublicacion.join() //document.getElementsByName("siVolumenesPublicacion").value;
		var siFechasPublicacion = idsiFechasPublicacion.join() //document.getElementsByName("siFechasPublicacion").value;
		var siCantidadAPagar = document.getElementsByName("siCantidadAPagar")[0].value;
		var siPartidaPagoNum = document.getElementsByName("siPartidaPagoNum")[0].value;
		var siFecha = document.getElementsByName("siFecha")[0].value;
		var siNotaSumario = document.getElementsByName("siNotaSumario")[0].value;
		var logo= 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAyAAD/4QMbaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJFMzREQUY5MkZGMzExRTVCRDk2ODM3MTlCOEVBQkREIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJFMzREQUY4MkZGMzExRTVCRDk2ODM3MTlCOEVBQkREIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9IkNFMzlEQ0UxOTVDRjkyMTdFRENBM0QxNzg0Mjc3MjZBIiBzdFJlZjpkb2N1bWVudElEPSJDRTM5RENFMTk1Q0Y5MjE3RURDQTNEMTc4NDI3NzI2QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uACFBZG9iZQBkwAAAAAEDABADAwYJAAAOfAAAIeoAAC+4/9sAhAAIBgYGBgYIBgYIDAgHCAwO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';
		
				
		//Creación del PDF y su contenido
		var doc = new jsPDF();
		doc.setFont("sans-serif");
		doc.setFontType("normal");
		
		//marco1
		doc.setLineWidth(.5);
		doc.setDrawColor(0); 
		doc.setFillColor(255, 255, 255); 
		doc.roundedRect(10, 10, 190,175, 1, 1, 'FD');		
		
		//logo
		doc.addImage(logo, 'JPEG', 15, 15, 65, 40);
		
		var text = 'Folio: '+folio;
		var textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
		var textOffset = ((doc.internal.pageSize.width - textWidth) / 8) * 7;
		doc.text(textOffset, 20, text);

		//4 lineas primera parte marco1
		doc.setLineWidth(0);
		doc.setDrawColor(0,0,0);
		doc.line(20, 60, 190, 60);
		doc.line(20, 70, 190, 70);
		doc.line(20, 80, 190, 80);
		doc.line(20, 90, 190, 90);
		//valores bajo las lineas
		doc.setFontSize(7);
		doc.setTextColor(150);
		doc.text(80, 63, 'NOMBRE DE LA PERSONA QUE SOLICITA');
		doc.text(93, 73, 'NOMBRE DEL ACTOR');
		doc.text(90, 83, 'A BIENES O ENCONTRA DE');
		doc.text(100, 93, 'JUZGADO');
		//valores sobre las lineas
		doc.setFontSize(9);
		doc.setTextColor(0,0,0);
		var text = ''+siNombreSolicitante;
		var textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
		var textOffset = ((doc.internal.pageSize.width - textWidth) / 4) * 2;
		doc.text(textOffset, 59, text);
		var text = ''+siActor;
		var textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
		var textOffset = ((doc.internal.pageSize.width - textWidth) / 4) * 2;
		doc.text(textOffset, 69, text);
		var text = ''+siContraparte;
		var textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
		var textOffset = ((doc.internal.pageSize.width - textWidth) / 4) * 2;
		doc.text(textOffset, 79, text);
		var text = ''+siJuzgado;
		var textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
		var textOffset = ((doc.internal.pageSize.width - textWidth) / 4) * 2;
		doc.text(textOffset, 89, text);
		
		//segunda parte del marco1
		doc.setTextColor(0,0,0);
		doc.setFont("sans-serif");
		doc.setFontType("bold");
		doc.setFontSize(13);
		doc.text(80, 100, 'TIPO DE DOCUMENTO');
		
		//condiciones para marcar el cuadro
		doc.setFontSize(7);
		switch (siTipoInsercion) {
			case 'PARTICULAR':{
			doc.text(131, 109, 'X');
			break;
			}
			case 'GOBIERNO':{
			doc.text(131, 115, 'X');
			break;
			}
			case 'LEGISLATIVO':{
			doc.text(131, 120, 'X');
			break;
			}
			case 'JUDICIAL':{
			doc.text(131, 125, 'X');
			break;
			}
			case 'EDICTO':{
			doc.text(131, 130, 'X');
			break;
			}
			case 'FRACCIONAMIENTOS':{
			doc.text(131, 135, 'X');
			break;
			}
			case 'OTROS':{
			doc.text(131, 140, 'X');
			break;
			}
		
		}
		
		doc.setFontType("normal");
		doc.setFontSize(9);
		doc.text(65, 110, 'PARTICULAR');
		doc.rect(130,107, 3, 3);
		
		doc.setFontSize(9);
		doc.text(65, 115, 'GOBIERNO');
		doc.rect(130,113, 3, 3);
		
		doc.setFontSize(9);
		doc.text(65, 120, 'LEGISLATIVO');
		doc.rect(130,118, 3, 3);
		
		doc.setFontSize(9);
		doc.text(65, 125, 'JUDICIAL');
		doc.rect(130,123, 3, 3);
		
		doc.setFontSize(9);
		doc.text(65, 130, 'EDICTO');
		doc.rect(130,128, 3, 3);
		
		doc.setFontSize(9);
		doc.text(65, 135, 'FRACCIONAMIENTOS');
		doc.rect(130,133, 3, 3);
		

		doc.setFontSize(9);
		doc.setFontType("bold");
		doc.text(65, 152, 'OTRO:');
		
		
		doc.setFontSize(9);
		doc.setFontType("normal");
		doc.text(70, 159, 'FECHA:');
		
		//arreglo de la fecha 
		var nombres = siFecha.split("/");
		doc.text(84, 166, ''+nombres[0]);//año
		doc.text(74, 166, ''+nombres[1]);//mes
		doc.text(64, 166, ''+nombres[2]);//dia
		
		//lineas segunda parte marco1
		doc.setDrawColor(0,0,0);
		doc.line(83, 152, 133, 152);//otro
		doc.line(63, 167, 71, 167);//fecha dia
		doc.line(73, 167, 81, 167);//fecha mes
		doc.line(83, 167, 91, 167);//fecha anio
		doc.line(94, 167, 133, 167);//firma solicitante
		
		//formatofecha
		doc.setFontSize(10);
		doc.setFontType("normal");
		doc.text(72, 166, '/');
		doc.setFontSize(10);
		doc.setFontType("normal");
		doc.text(82, 166, '/');
		doc.setFontSize(6);
		doc.setFontType("normal");
		doc.text(65, 170, 'DIA');
		doc.setFontSize(6);
		doc.setFontType("normal");
		doc.text(75, 170, 'MES');
		doc.setFontSize(6);
		doc.setFontType("normal");
		doc.text(85, 170, 'AÑO');
		doc.setFontSize(6);
		doc.setFontType("normal");
		doc.text(99, 170, 'FIRMA DEL SOLICITANTE');
		
		
		//marco2
		doc.setLineWidth(.5);
		doc.setFillColor(255, 255, 255); 
		doc.roundedRect(10, 191, 190,26, 1, 1, 'FD');
		//lineas
		doc.setLineWidth(0);
		doc.setDrawColor(0,0,0); 
		doc.line(89, 200, 190, 200);
		doc.line(89, 210, 190, 210);
		
		
		//valores
		doc.setFontSize(9);
		doc.setFontType("normal");
		doc.text(120, 199, ''+siCantidadAPagar);
		doc.text(120, 209, ''+siPartidaPagoNum);
		
		
		//valor a poner
		doc.setFontSize(9);
		doc.setFontType("bold");
		doc.text(15, 200, 'CANTIDAD A PAGAR:');
		doc.text(15, 210, 'PARTIDA DE PAGO No.:');
			
		
		//marco3
		doc.setLineWidth(.5);
		doc.setDrawColor(0); 
		doc.setFillColor(255, 255, 255); 
		doc.roundedRect(10, 220, 190,26, 1, 1, 'FD');
		
		//valores
		doc.setFontSize(9);
		doc.setFontType("normal");
		doc.text(120, 228, ''+siVolumenesPublicacion );
		doc.text(93, 238, ''+siFechasPublicacion);
		
		//lineas
		doc.setLineWidth(0);
		doc.setDrawColor(0,0,0); 
		doc.line(89, 229, 190, 229);
		doc.line(89, 239, 190, 239)
		
		//valores a poner
		doc.setLineWidth(0);
		doc.setFontSize(9);
		doc.setFontType("bold");
		doc.text(15, 229, 'No. DE PERIÓDICOS:');
		doc.text(15, 239, 'FECHA DE PUBLICACIÓN:');
			
		
		
		var pdfOutput = doc.output('datauristring').split(',')[1];//Aqui se obtiene el PDF codificado
		
		//Parametros a enviar al WS (llave , valor)
		var valores = {
			usuario : usuario,
			password : password,
			path : path,
			archivo : pdfOutput,
			siFolio : folio, //Folio generado anteriormente por la llamada al WS
			siActor : siActor,
			siTipoInsercion : siTipoInsercion,
			siNombreSolicitante : siNombreSolicitante,
			siContraparte : siContraparte,
			siCategoria : siCategoria,
			siMunicipio : siMunicipio,
			siJuzgado : siJuzgado,
			siNumInserciones : siNumInserciones,
			siVolumenesPublicacion : idVolumenesPublicacion.join(),
			siFechasPublicacion : idsiFechasPublicacion.join(),
			siCantidadAPagar : siCantidadAPagar,
			siPartidaPagoNum : siPartidaPagoNum,
			siFecha : siFecha,
			siNotaSumario : siNotaSumario,
			urlAlfresco : urlAlfresco
		};
		
		
		var resultadoWS = $.post(url + "/upload/solicitudinsercion/bytes", valores, function(data, status) {
		}, "json");
		resultadoWS.done(function(data) {
			for (key in data ) {
				//alert("key is " + [key] + ", value is " + data[key]);
			}
			document.getElementById("resultado").innerHTML = "Solicitud registrada con éxito!, FOLIO : " + data.folio;
			doc.output('dataurlnewwindow');
		});
		resultadoWS.fail(function(data) {
			alert("Error: " + data.responseText);
		});
		
	}
