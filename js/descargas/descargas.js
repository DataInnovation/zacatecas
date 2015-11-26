function b64toBlob(b64Data, contentType, sliceSize) {
				contentType = contentType || '';
				sliceSize = sliceSize || 512;

				var byteCharacters = atob(b64Data);
				var byteArrays = [];

				for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
					var slice = byteCharacters.slice(offset, offset + sliceSize);

					var byteNumbers = new Array(slice.length);
					for (var i = 0; i < slice.length; i++) {
						byteNumbers[i] = slice.charCodeAt(i);
					}

					var byteArray = new Uint8Array(byteNumbers);

					byteArrays.push(byteArray);
				}

				var blob = new Blob(byteArrays, {
					type : contentType
				});
				return blob;
			}
			

function descargar(arr,nombre){
				nombre = nombre || 'Periodico.pdf';
				var documents = arr.Descarga;
    			var blob = b64toBlob(documents, 'application/pdf');
				var blobUrl = URL.createObjectURL(blob);
				//window.location = blobUrl;
				var a = window.document.createElement('a');
				a.href = window.URL.createObjectURL(blob);
				//descargar con el nombre indicado
				a.download = nombre;

				// Append anchor to body.
				document.body.appendChild(a)
				a.click();

				// Remove anchor from body
				document.body.removeChild(a)
    		}
    		



function activarDescarga(urle,nombre)
			{
			 var xmlhttpPeriodico = new XMLHttpRequest();
			 xmlhttpPeriodico.onreadystatechange = function() {
				if (xmlhttpPeriodico.readyState==4 && xmlhttpPeriodico.status==200){
					var myArr = JSON.parse(xmlhttpPeriodico.responseText);
					descargar(myArr,nombre);
				}
			}
			xmlhttpPeriodico.open("GET",urle,true);
			xmlhttpPeriodico.send();
	
				}