function header(page) {
	var htm = '<!-- Header -->'
			+ '<header>'
			+ '<div class = "container">'
			+ '<div class = "row">'
			+ '<!-- Brand -->'
			+ '<div class = "col-xs-12 col-md-6">'
			+ '<div class = "brand">'
			+ '<a href = "index.html"> <img src = "../img/brand.png" alt = "brand" /> </a>'
			+ '</div>' + '</div>' + '<!-- Nav -->'
			+ '<div class = "col-xs-12 col-md-18">' + '<nav>' + '<ul>'
	htm += '<li> <a href = "#" id = "usuarioR"> Usuario </a></li>'
	if (page == 'inicio') {
		htm += '<li class="current-menu-item"> <a href="index.html"> Inicio </a></li>'
	} else {
		htm += '<li> <a href="index.html"> Inicio </a></li>'
	}
	if (page == 'busqueda') {
		htm += '<li class="has-children current-menu-item" >'
				+ '<img src="../img/lupac.png"> <a href=""> Búsqueda </a>'
	} else {
		htm += '<li class="has-children">'
				+ '<img src="../img/lupac.png"> <a href=""> Búsqueda </a>'
	}
	htm += '<ul class = "children">'
			+ '<li><a href = "../busqueda/"> Búsqueda de Solicitud </a></li>'
			+ '<li><a href = "../busqueda-leyes/"> Búsqueda de Leyes </a></li>'
			+ '<li> <a href = "../busqueda-suplemento/"> Búsqueda de Suplemento </a></li>'
			+ '</ul>' + '</li>'

	if (page == 'tramites') {
		htm += '<li class="has-children current-menu-item"><a href = ""> Trámites </a>'
	} else {
		htm += '<li class = "has-children"><a href = ""> Trámites </a>'
	}
	htm += '<ul class = "children">'
			+ '<li><a href = "../insercion/"> Insercion </a></li>'
			+ '<li><a href = "../carga-imagen/"> Carga Imagenes Inserción </a></li>'
			+ '<li><a href = "../carga-transcrito/"> Carga Transcripciones </a></li>'
			+ '<li><a href = "../carga-leyes/"> Carga Leyes </a></li>'
			+ '<li><a href = "../carga-periodico/"> Carga Períodicos Publicados </a></li>'
			+ '<li><a href = "../carga-suplementos/"> Carga Suplementos </a></li>'
			+ '<li><a href = "../nota-sumario/"> Nota del Sumario </a></li>'
			+ '<li><a href = "../busqueda-sumario/"> Reporte Sumario </a></li>'
			+ '<li><a href = "../busqueda-sumario-edicion/"> Reporte Sumario Edicion </a></li>'
			+ '</ul>' + '</li>'
	if (page == 'parametros') {
		htm += '<li class = "has-children current-menu-item"> <a href = ""> Parametros </a>'
	} else {
		htm += '<li class = "has-children"> <a href = ""> Parametros </a>'
	}
	htm += '<ul class = "children">'
			+ '<li> <a href = "#/"> Tipos de Inserciones </a></li>'
			+ '<li> <a href = "#/"> Categoría de Tipos </a></li>'
			+ '<li> <a href = "../municipios/"> Municipios </a></li>'
			+ '<li> <a href = "../juzgados/"> Juzgados </a></li>'
			+ '<li> <a href = "#/"> Calendario Publicaciones </a></li>'
			+ '<li> <a href = "#/"> Contador Folio </a></li>'
			+ '<li> <a href = "#/"> Tipos de Leyes </a></li>' + '</ul></li>'
			+ '<li>' + '<a href = ' + 'javascript:void(0)' + 'onclick = '
			+ 'eliminarCookies()' + ' > Cerrar sesión </a></li></ul>'
			+ '<i class = "responsive-menu-trigger icon-menu"> </i>' + '</nav>'
			+ '</div>' + '</div>' + '</div>' + '</header>';

	document.getElementById("menu").innerHTML = htm;
}