

	function testPDF2(documents) {
			
		    
		//Creación del PDF y su contenido
				var doc = new jsPDF();
				doc.setFont("sans-serif");
				doc.setFontType("normal");
				pageHeight= doc.internal.pageSize.height;
				
				//documents[i].volumen
				//tipo categoria folio fecha notaDelSumario
				
				doc.setFontType("bold");
				doc.setFontSize(14);
				doc.text(85,10,'SUMARIOS');
				
				doc.setFontType("bold");
				doc.setFontSize(10);
				
				var i,x=15,y=23;
				for(i = 0; i < documents.length; i++) {
					doc.text(x, y, 'Tipo: '+documents[i].tipo+ '     Categoria: '+documents[i].categoria);
					doc.text(x,(y+4),'Nota del Sumario: '+documents[i].notaDelSumario);
					doc.text(x,(y+8),'Municipio: '+documents[i].municipio);
					doc.text(x,(y+12),'Fecha: '+documents[i].fecha+'      Folio: '+documents[i].folio+'...............................................................................................Volumen: '+documents[i].volumen);
					y=y+18;
					
					if (y >= (pageHeight-30))
					{
  					doc.addPage();
  						y = 23; // Restart height position
					}
					
				}		
				
		
		doc.output('dataurlnewwindow');
		
		
		
		
	}