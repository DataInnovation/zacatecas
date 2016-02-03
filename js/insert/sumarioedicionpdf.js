
function testPDF2(documents, volumen) {
	var doc = new jsPDF('p', 'in', 'letter'), size = 10, font, size, lines, margin = 0.5  , verticalOffset = margin
	
	
			doc.setFont("Sans-Serif")
	doc.setFontType("bold");
	doc.setFontSize(14);
	if(volumen.value){
		doc.text(2.5, 0.8, 'SUMARIO DEL PERIODICO NÚMERO ' + volumen.value);
	}else{
		doc.text(3.5, 0.8, 'SUMARIO');
	}
	verticalOffset += 0.5
	var cat
	// the 3 blocks of text
	for (i = 0; i < documents.length; i++) {
		if(i == 0){
			doc.setFont("Sans-Serif").setFontSize(size)
			doc.text(0.8, verticalOffset, documents[i].tipo.toUpperCase() + ' ' + documents[i].categoria.toUpperCase());
			cat = documents[i].categoria
			verticalOffset += 0.5
		}
		if(documents[i].categoria != cat){
			doc.text(0.8, verticalOffset, documents[i].tipo.toUpperCase() + ' ' + documents[i].categoria.toUpperCase());
			cat = documents[i].categoria
			verticalOffset += 0.5
		}
		var mun = documents[i].municipio.split(/(?=[A-Z])/);
		var muni = mun.join(" ");
		var texto = documents[i].tipo.toUpperCase() + ', ' + documents[i].categoria + ', ' + documents[i].notaDelSumario + ', Juzgado de ' + muni + ', Zac. '
		lines = doc.setFont("Sans-Serif").setFontSize(size).splitTextToSize(texto, 6.5)
		doc.text(0.5, verticalOffset + size / 72, lines)

		var cont = texto.length
		if (texto.length > 87) {
			while(cont > 0){
				cont -= 87
				verticalOffset += 0.1
			}}
		
		var pt = '.'
		var tm = (documents[i].folio.length + documents[i].volumen.length)*2
		//alert(documents[i].folio.length + documents[i].volumen.length)
		while(pt.length < (190-tm)){
			pt += '.'
		}
		
		doc.text(0.5, verticalOffset + 2 * (size /72), documents[i].folio + pt + documents[i].volumen)

		verticalOffset += (lines.length + 3) * size / 72

		if (verticalOffset > 10.25 - margin && i != documents.length - 1) {
			doc.addPage()
			verticalOffset = margin
		}
	}

	doc.output('dataurlnewwindow');
}