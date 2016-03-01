
function testPDF2(documents, volumen, tomo) {
    var doc = new jsPDF('p', 'in', 'letter'), size = 10, font, size, lines, margin = 0.5, verticalOffset = margin

    doc.setFont("Sans-Serif")
    doc.setFontType("bold");
    doc.setFontSize(14);
    var lista = new Array;
    var fecha;
    if (tomo.value != undefined) {
        switch (tomo.value) {
            case "CXX":
                fecha = FechasPublicaciones2010[volumen.value].fecha;
                break;
            case "CXXI":
                fecha = FechasPublicaciones2011[volumen.value].fecha;
                break;
            case "CXXII":
                fecha = FechasPublicaciones2012[volumen.value].fecha;
                break;
            case "CXXIII":
                fecha = FechasPublicaciones2013[volumen.value].fecha;
                break;
            case "CXXIV":
                fecha = FechasPublicaciones2014[volumen.value].fecha;
                break;
            case "CXXV":
                fecha = FechasPublicaciones[volumen.value].fecha;
                break;
            case "CXXVI":
                fecha = FechasPublicaciones2016[volumen.value].fecha;
                break;
        }

    }
    if (fecha != undefined) {
        fecha = dateToString(fecha);
    }

//Se introducen todos los folios a una lista/arreglo
    for (i = 0; i < documents.length; i++) {
        var aux = documents[i].folio.valueOf();
        lista.push(aux)
    }
//Ordenamos los valores dentro de la lista/arreglo
    lista.sort(ordenar);
    parseInt(lista);
    //ListaF es la lista/arreglo final de Folios
    var listaF = new Array();
    listaF.push(lista[0])
    for (i = 0; i < lista.length; i++) {
        if ((lista[i]) != (lista[i + 1] - 1)) {
            listaF.push(lista[i]);
            if ((i + 1) != lista.length) {
                listaF.push(lista[i + 1]);
            }
        }
    }
    listaF = listaF.filter(Boolean);
    listaF = listaF.unique();
    var folios = ""
    for (i = 0; i < listaF.length; i++) {
        if (i == listaF.length - 1) {
            folios += listaF[i] + "."
        } else {
            if (listaF[i] == (listaF[i + 1] - 1)) {
                folios += listaF[i] + ", ";
            } else {
                var entero = parseInt(listaF[i]);
                entero += 1;
                if (lista.join().includes(entero)) {
                    folios += "DE " + listaF[i] + " A " + listaF[i + 1] + ", ";
                    i++;
                } else {
                    folios += listaF[i] + ", ";
                }
            }
        }
    }

   if (volumen.value) {
        doc.text(3.0, verticalOffset, 'SUMARIO DEL PERIODICO ' + volumen.value)
        verticalOffset += size / 20
        if (fecha != undefined) {
            doc.text(2.9, verticalOffset, 'FECHA: ' + fecha);
            verticalOffset += size / 20
        }
        lines = doc.splitTextToSize('FOLIOS: ' + folios, 6.5);
    } else {
        doc.text(3.0, verticalOffset, 'SUMARIO DEL PERIODICO')
        verticalOffset += size / 20
        lines = doc.splitTextToSize('FOLIOS: ' + folios, 6.5);
    }
    doc.text(0.5, verticalOffset + size / 72, lines);
    if (folios.length > 130) {
        verticalOffset += size / 25;
    }
    verticalOffset += size / 15;
    var cat

    // the 3 blocks of text
    for (i = 0; i < documents.length; i++) {
        if (i === 0) {
            doc.setFont("Sans-Serif").setFontSize(size)
            doc.text(0.5, verticalOffset, documents[i].tipo.toUpperCase() + ' ' + documents[i].categoria.toUpperCase());
            cat = documents[i].categoria;
            verticalOffset += 0.3;
        }
        if (documents[i].categoria !== cat) {
            doc.text(0.5, verticalOffset, documents[i].tipo.toUpperCase() + ' ' + documents[i].categoria.toUpperCase());
            cat = documents[i].categoria;
            verticalOffset += 0.3;
        }
        var mun = documents[i].municipio.split(/(?=[A-Z])/);
        var muni = mun.join(" ");
        var texto = documents[i].tipo.toUpperCase() + ', ' + documents[i].categoria + ', ' + documents[i].notaDelSumario
        if (muni.length > 0) {
            if (documents[i].tipo.toUpperCase() != "FRACCIONAMIENTO") {
                texto += ', Juzgado de ' + muni + ', Zac. '
            } else {
                texto += ', municipio de ' + muni + ', Zac. '
            }
        }
        lines = doc.setFont("Sans-Serif").setFontSize(size).splitTextToSize(texto, 6.5);
        doc.text(0.5, verticalOffset + size / 72, lines)

        var cont = texto.length;
        if (texto.length > 87) {
            while (cont > 0) {
                cont -= 87;
                verticalOffset += 0.1;
            }
        }

        var pt = '.'
        var tm = (documents[i].folio.length + documents[i].volumen.length) * 2
        while (pt.length < (190 - tm)) {
            pt += '.'
        }

        doc.text(0.5, verticalOffset + 2 * (size / 72), documents[i].folio + pt + documents[i].volumen)

        verticalOffset += (lines.length + 3) * size / 72

        if (verticalOffset > 10.25 - margin && i != documents.length - 1) {
            doc.addPage()
            verticalOffset = margin
        }
    }

    doc.output('dataurlnewwindow');
}

function ordenar(elem1, elem2) {
    return elem1 - elem2;
}

Array.prototype.unique = function (a) {
    return function () {
        return this.filter(a)
    }
}(function (a, b, c) {
    return c.indexOf(a, b + 1) < 0
});

	
