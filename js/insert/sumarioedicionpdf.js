
function testPDF2(documents, volumen) {
	var doc = new jsPDF('p', 'in', 'letter'), size = 10, font, size, lines, margin = 0.5 // inches
																							// on a
																							// 8.5
																							// x 11
																							// inch
																							// sheet.
	, verticalOffset = margin
	
	
	// Margins:
//	doc.setDrawColor(0, 255, 0).setLineWidth(1 / 72).line(margin, margin,
//			margin, 11 - margin).line(8.5 - margin, margin, 8.5 - margin,
//			11 - margin)
			doc.setFont("Sans-Serif")
	doc.setFontType("bold");
	doc.setFontSize(14);
	if(volumen.value){
		//doc.text(3.5, 0.8, 'SUMARIO');
		doc.text(2.5, 0.8, 'SUMARIO DEL PERIODICO NÚMERO ' + volumen.value);
	}else{
		doc.text(3.5, 0.8, 'SUMARIO');
		//doc.text(2.5, 0.8, 'SUMARIO DEL PERIODICO NÚMERO ' + volumen.value);
		
	}
	verticalOffset += 0.5
	// the 3 blocks of text
	for (i = 0; i < documents.length; i++) {
		var mun = documents[i].municipio.split(/(?=[A-Z])/);
		var muni = mun.join(" ");
		var texto = documents[i].tipo.toUpperCase() + ', ' + documents[i].categoria + ', ' + documents[i].notaDelSumario + ', Juzgado de ' + muni + ', Zac. '
		lines = doc.setFont("Sans-Serif").setFontSize(size).splitTextToSize(texto, 6.5)
		doc.text(0.5, verticalOffset + size / 72, lines)
//		alert(texto.length)
		var cont = texto.length
		if (texto.length > 87) {
			while(cont > 0){
				cont -= 87
				verticalOffset += 0.1
			}}
		doc.text(0.5, verticalOffset + 2 * (size /72), documents[i].folio + '.............................................................................................................................................................................'+ documents[i].volumen)

		verticalOffset += (lines.length + 3) * size / 72

		if (verticalOffset > 10.25 - margin && i != documents.length - 1) {
			doc.addPage()
			verticalOffset = margin
		}
	}

	doc.output('dataurlnewwindow');
}