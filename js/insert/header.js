function header(page) {
    
    if (getCookie('usuario').length > 0) {
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

        htm += '<li> <a href = "#" id="usuarioR">' + getCookie('usuario') + '</a></li>'
        htm += '<li> <a href="../admin/"> Inicio </a></li>'
        if (page == 'busqueda') {
            htm += '<li class="has-children current-menu-item" >'
                    + '<img src="../img/lupac.png"> <a href=""> Busqueda </a>'
        } else {
            htm += '<li class="has-children">'
                    + '<img src="../img/lupac.png"> <a href=""> Busqueda </a>'
        }
        htm += '<ul class = "children">'
                + '<li><a href = "../busqueda/"> Busqueda de Solicitud </a></li>'
                + '<li><a href = "../busqueda-leyes/"> Busqueda de Leyes </a></li>'
                + '<li> <a href = "../busqueda-suplemento/"> Busqueda de Suplemento </a></li>'
                + '</ul>' + '</li>'

        if (page == 'tramites') {
            htm += '<li class="has-children current-menu-item"><a href = ""> Tramites </a>'
        } else {
            htm += '<li class = "has-children"><a href = ""> Tramites </a>'
        }
        htm += '<ul class = "children">'
                + '<li><a href = "../insercion/"> Insercion </a></li>'
                + '<li><a href = "../carga-imagen/"> Carga Imagenes Insercion </a></li>'
                + '<li><a href = "../carga-transcrito/"> Carga Transcripciones </a></li>'
                + '<li><a href = "../carga-leyes/"> Carga Leyes </a></li>'
                + '<li><a href = "../carga-periodico/"> Carga Periodicos Publicados </a></li>'
                + '<li><a href = "../carga-suplementos/"> Carga Suplementos </a></li>'
                + '<li><a href = "../nota-sumario/"> Nota del Sumario </a></li>'
                + '<li><a href = "../busqueda-sumario-edicion/"> Reporte Sumario Edicion </a></li>'
                + '</ul>' + '</li>'
        if (page == 'parametros') {
            htm += '<li class = "has-children current-menu-item"> <a href = ""> Parametros </a>'
        } else {
            htm += '<li class = "has-children"> <a href = ""> Parametros </a>'
        }
        htm += '<ul class = "children">'
                + '<li> <a href = "../tipos-insercion/"> Tipos de Inserciones </a></li>'
                + '<li> <a href = "../categoria-tipos/"> Categoria de Tipos </a></li>'
                + '<li> <a href = "../municipios/"> Municipios </a></li>'
                + '<li> <a href = "../juzgados/"> Juzgados </a></li>'
                + '<li> <a href = "../calendario-publicaciones/"> Calendario Publicaciones </a></li>'
                + '<li> <a href = "../folio/"> Contador Folio </a></li></ul></i>'
        if (page == 'servicio') {
            htm += '<li class = "has-children current-menu-item"> <a href = ""> Servicios </a>'
        } else {
            htm += '<li class = "has-children"> <a href = ""> Servicios </a>'
        }
        htm += '<ul class = "children">'
                + '<li> <a href ="../directorio/"> Directorio </a></li></ul></li>'
                + '<li>' + "<a href = 'javascript:void(0)' onclick='eliminarCookies()'>Cerrar sesion </a></li></ul>"
                + '<i class = "responsive-menu-trigger icon-menu"> </i>' + '</nav>'
                + '</div>' + '</div>' + '</div>' + '</header>';
    } else {
        var htm = '<!-- Header -->'
                + '		<!-- Header -->'
                + '<header>'
                + '<div class="container">'
                + '<div class="row">'
                + '<!-- Brand -->'
                + '<div class="col-xs-12 col-md-6">'
                + '<div class="brand">'
                + '<a href="../index.html"><img src="../img/brand.png" alt="brand" /></a>'
                + '</div>'
                + '</div>'
                + '<!-- Nav -->'
                + '<div class="col-xs-12 col-md-18">'
                + '<nav><ul>'
                + '<li><a href="../index.html">Inicio</a></li>'
                if (page == 'busqueda') {
                    htm += '<li class="has-children current-menu-item" >'
                            + '<img src="../img/lupac.png"> <a href=""> Busqueda </a>'
                } else {
                    htm += '<li class="has-children">'
                            + '<img src="../img/lupac.png"> <a href=""> Busqueda </a>'
                }
                htm += '<ul class = "children">'
                        + '<li><a href = "../busqueda/"> Busqueda de Solicitud </a></li>'
                        + '<li><a href = "../busqueda-leyes/"> Busqueda de Leyes </a></li>'
                        + '<li> <a href = "../busqueda-suplemento/"> Busqueda de Suplemento </a></li>'
                        + '</ul>' + '</li>'

                if (page == 'servicio') {
                    htm += '<li class = "has-children current-menu-item"> <a href = ""> Servicios </a>'
                } else {
                    htm += '<li class = "has-children"> <a href = ""> Servicios </a>'
                }
                htm += '<ul class = "children">'
                        + '<li> <a href ="../directorio/"> Directorio </a></li></ul></li>'
                + '</ul>'
                + '<i class="responsive-menu-trigger icon-menu"></i>'
                + '</nav>'
                + '</div>'
                + '</div>'
                + '</div>'
                + '</header>';
    }
    document.getElementById("menu").innerHTML = htm;
}
