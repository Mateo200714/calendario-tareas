let datos_añadir_tarea_objeto = {
    tarea: null,
    descripcion: null,
    fecha: null,
    hora: null,
    tipo: null,
    hecho: null
};
//funcionalidades codigo
var estructura_tareas_añadir_mostrada = false;
var estructura_tareas_añadir_añadida = false;
//ajustes codigo
const maximos_caracteres_tarea_ajustes = 80;
const maximos_caracteres_descripcion_ajustes = 500;
let temporal_tipo_opcion_tarea_añadir = null;
let temporal_hecho_opcion_tarea_añadir = null;


function mostrar_estructura_añadir_tarea() {
    if (!estructura_tareas_añadir_añadida) {
        document.body.innerHTML += "<div id='div-body-añadir-tareas'></div>";
        estructura_tareas_añadir_añadida = true;
    }
    if (estructura_tareas_añadir_mostrada) {
        document.getElementById("div-body-añadir-tareas").style.display = "none";
        document.getElementById("div-body-añadir-tareas").innerHTML = "";
        estructura_tareas_añadir_mostrada = false;
    }
    else {
        //datos borrador
        const tarea = !(datos_añadir_tarea_objeto.tarea === null) ? datos_añadir_tarea_objeto.tarea : "";
        const descripcion = !(datos_añadir_tarea_objeto.descripcion === null) ? datos_añadir_tarea_objeto.descripcion : "";
        const fecha = !(datos_añadir_tarea_objeto.fecha === null) ? datos_añadir_tarea_objeto.fecha : fecha_tarea_añadir_predeterminada();
        const hora = !(datos_añadir_tarea_objeto.hora === null) ? datos_añadir_tarea_objeto.hora : "00:00";
        const tipo = !(datos_añadir_tarea_objeto.tipo === null) ? datos_añadir_tarea_objeto.tipo : 1;
        const hecho = (datos_añadir_tarea_objeto.hecho === true) ? datos_añadir_tarea_objeto.tipo : false;

        document.getElementById("div-body-añadir-tareas").innerHTML = "<div class='div-ajuste-tarea-alinear'><div class='text-titulo-tarea-ajuste'>Tarea</div><textarea id='textarea-titulo-tarea'value=''placeholder='Tarea hacer...'maxlength='" + maximos_caracteres_tarea_ajustes + "'>" + tarea + "</textarea></div><div class='div-ajuste-tarea-alinear'><div class='text-titulo-tarea-ajuste'>Descripción</div><textarea id='textarea-descripcion-tarea'value=''placeholder='Descripción...'maxlength='" + estructura_tareas_añadir_añadida + "'>" + descripcion + "</textarea></div><div class='div-ajuste-tarea-alinear'><div class='div-fecha-alinear'><div class='text-titulo-tarea-ajuste'>Fecha</div><input id='input-fecha-tarea'type='date'value='" + fecha + "'min='" + fecha_minima_tarea_añadir_predeterminada() + "'></div><div class='div-hora-alinear'><div class='text-titulo-tarea-ajuste'>Hora</div><input type='time' id='bt-hora-ajustes-tarea' value='" + hora + "'></div></div>";
        document.getElementById("div-body-añadir-tareas").innerHTML += "<div class='div-ajuste-tarea-alinear' id='div-tipo-tarea-alinear-1'><div class='div-tipo-tarea-alinear'><div class='text-titulo-tarea-ajuste'>Tipo</div><div id='div-tipo-opciones-alinear'></div></div><div class='div-hecho-tarea-alinear'><div class='text-titulo-tarea-ajuste'>Hecho</div><div class='div-label-check-hecho-tarea'><div class='div-switch-button-hecho'id='switch-button-hecho'></div></div></div></div>";
        //menu cancelar
        document.getElementById("div-body-añadir-tareas").innerHTML += "<div class='div-bloquear-interaccion-pagina'id='div-bloquear-interaccion-pagina'style='display:none'></div><div class='div-alinear-menu-cancelar-añadir-tarea'id='div-alinear-menu-cancelar-añadir-tarea'><div id='div-menu-cancelar-añadir-tarea'><div class='div-alinear-bt-menu-cancelar-añadir-tarea'><input type='button'value='Salir'class='bt-menu-cancelar-añadir-tarea'onclick='mostrar_estructura_añadir_tarea()'><input type='button'value='Guardar'class='bt-menu-cancelar-añadir-tarea'onclick='guardar_borrador_ajustes_añadir_tarea()'><input type='button'value='Continuar'class='bt-menu-cancelar-añadir-tarea'onclick='salir_menu_cancelar_añadir_tarea()'></div><svg class='svg-reiniciar-ajustes'onclick='reiniciar_ajustes_añadir_tarea()'xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' width='500px' height='500px'><path fill='#8bb7f0' d='M23.596,2.871v4.444c5.533,1.566,9.589,6.65,9.589,12.684c0,7.282-5.903,13.185-13.185,13.185 S6.815,27.282,6.815,20c0-4.897,2.671-9.168,6.635-11.44l3.05,3.05V2.5H7.39l2.935,2.935C5.614,8.57,2.5,13.916,2.5,20 c0,9.665,7.835,17.5,17.5,17.5S37.5,29.665,37.5,20C37.5,11.568,31.536,4.53,23.596,2.871z'/><path fill='#4e7ab5' d='M20,37.986c-9.918,0-17.987-8.068-17.987-17.986c0-5.826,2.813-11.252,7.555-14.634L6.216,2.014 h10.771v10.771l-3.614-3.613C9.619,11.472,7.302,15.587,7.302,20c0,7.002,5.696,12.698,12.698,12.698S32.698,27.002,32.698,20 c0-5.654-3.797-10.678-9.235-12.216l-0.354-0.101V2.272l0.586,0.122C31.976,4.125,37.987,11.529,37.987,20 C37.987,29.918,29.918,37.986,20,37.986z M8.565,2.986l2.524,2.525L10.594,5.84C5.831,9.011,2.987,14.304,2.987,20 c0,9.381,7.632,17.014,17.013,17.014S37.013,29.381,37.013,20c0-7.811-5.403-14.663-12.931-16.52v3.472 c5.665,1.771,9.589,7.083,9.589,13.048c0,7.538-6.133,13.671-13.672,13.671S6.328,27.538,6.328,20 c0-4.885,2.636-9.43,6.88-11.862l0.323-0.186l2.482,2.482V2.986H8.565z'/></svg></div></div>";
        actualizar_tipos_opciones_añadir_tarea(tipo)
        actualizar_hecho_opciones_añadir_tarea(hecho)
        //svg cancelar tarea
        document.getElementById("div-body-añadir-tareas").innerHTML += "<svg id='svg-cancelar-tarea'style='cursor:pointer'onclick='mostrar_menu_cancelar_añadir_tarea()' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0,0,256,256' width='500px' height='500px' fill-rule='nonzero'><g fill='#ff3c29' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray=' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><g transform='scale(5.33333,5.33333)'><path d='M39.48633,6.97852c-0.39614,0.00936 -0.77249,0.17506 -1.04687,0.46094l-14.43945,14.43945l-14.43945,-14.43945c-0.28248,-0.2909 -0.67069,-0.45506 -1.07617,-0.45508c-0.61064,0.00015 -1.16026,0.37042 -1.38978,0.93629c-0.22952,0.56587 -0.09314,1.21439 0.34486,1.63988l14.43945,14.43945l-14.43945,14.43945c-0.39185,0.37623 -0.54969,0.9349 -0.41265,1.46055c0.13704,0.52565 0.54754,0.93616 1.07319,1.07319c0.52565,0.13704 1.08432,-0.02081 1.46055,-0.41265l14.43945,-14.43945l14.43945,14.43945c0.37623,0.39185 0.9349,0.54969 1.46055,0.41265c0.52565,-0.13704 0.93616,-0.54754 1.07319,-1.07319c0.13704,-0.52565 -0.0208,-1.08432 -0.41265,-1.46055l-14.43945,-14.43945l14.43945,-14.43945c0.44646,-0.42851 0.58398,-1.08719 0.34628,-1.65854c-0.2377,-0.57135 -0.80184,-0.93811 -1.4205,-0.92349z'/></g></g></svg>";
        //svg añadir tarea
        document.getElementById("div-body-añadir-tareas").innerHTML += "<svg id='svg-añadir-tarea'style='cursor:pointer'onclick='añadir_tarea_nueva()' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0,0,256,256' width='500px' height='500px' fill-rule='nonzero'><g fill='#06de80' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray=' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><g transform='scale(5.12,5.12)'><path d='M41.9375,8.625c-0.66406,0.02344 -1.27344,0.375 -1.625,0.9375l-18.8125,28.78125l-12.1875,-10.53125c-0.52344,-0.54297 -1.30859,-0.74609 -2.03125,-0.51953c-0.71875,0.22266 -1.25391,0.83203 -1.37891,1.57422c-0.125,0.74609 0.17578,1.49609 0.78516,1.94531l13.9375,12.0625c0.4375,0.37109 1.01563,0.53516 1.58203,0.45313c0.57031,-0.08594 1.07422,-0.41016 1.38672,-0.89062l20.09375,-30.6875c0.42969,-0.62891 0.46484,-1.44141 0.09375,-2.10547c-0.37109,-0.66016 -1.08594,-1.05469 -1.84375,-1.01953z'/></g></g></svg>";
        document.getElementById("div-body-añadir-tareas").style.display = "block";
        estructura_tareas_añadir_mostrada = true;
    }
}
function añadir_tarea_nueva() {
    let datos_tarea_usuario_correctos = true;
    {//tarea
        let texto_tarea_usuario = document.getElementById("textarea-titulo-tarea").value;
        //correcciones de texto
        if (texto_tarea_usuario.length > maximos_caracteres_tarea_ajustes) {
            datos_tarea_usuario_correctos = false;
        }
    }
    if (datos_tarea_usuario_correctos) {//descripcion
        let texto_descripcion_usuario = document.getElementById("textarea-titulo-tarea").value;
        //correcciones de texto
        if (texto_descripcion_usuario.length > maximos_caracteres_descripcion_ajustes) {
            datos_tarea_usuario_correctos = false;
        }
    }
    if (datos_tarea_usuario_correctos) {//fecha
        const fecha_minima = fecha_minima_tarea_añadir_predeterminada().split("-");
        const fecha_usuario = document.getElementById("input-fecha-tarea").value.split("-");
        if ((fecha_minima[0] > fecha_usuario[0]) || (fecha_minima[1] > fecha_usuario[1]) || (fecha_minima[2] > fecha_usuario[2])) {
            datos_tarea_usuario_correctos = false;
        }
        datos_añadir_tarea_objeto.fecha = fecha_usuario[0] + "-" + fecha_usuario[1] + "-" + fecha_usuario[2];
    }
    if (datos_tarea_usuario_correctos) {//hora
        const hora_ajustes_tarea_usuario = document.getElementById("bt-hora-ajustes-tarea").value.split(":");
        if ((hora_ajustes_tarea_usuario[0] < 0) || (hora_ajustes_tarea_usuario[1] < 0)) {
            datos_tarea_usuario_correctos = false;
        }
    }
    if (datos_tarea_usuario_correctos) {//tipo
        const tipo_tarea_ajustes = temporal_tipo_opcion_tarea_añadir;
        if ((tipo_tarea_ajustes != 1) && (tipo_tarea_ajustes != 2) && (tipo_tarea_ajustes != 3)) {
            datos_tarea_usuario_correctos = false;
        }
    }
    if (datos_tarea_usuario_correctos) {//hecho
        const hecho_tarea_ajustes = temporal_hecho_opcion_tarea_añadir;
        if ((hecho_tarea_ajustes != true) && (hecho_tarea_ajustes != false)) {
            datos_tarea_usuario_correctos = false;
        }
    }
    //guardar datos en la base de datos 
    if (datos_tarea_usuario_correctos) {
        const tarea_texto = document.getElementById("textarea-titulo-tarea").value;
        const descripcion_texto = document.getElementById("textarea-titulo-tarea").value;
        const fecha_texto = document.getElementById("input-fecha-tarea").value;
        const hora_texto = document.getElementById("bt-hora-ajustes-tarea").value;
        const tipo_texto = temporal_tipo_opcion_tarea_añadir;
        const hecho_texto = temporal_hecho_opcion_tarea_añadir;
        //guardar en base
    }
    //reiniciar datos guardados  
    datos_añadir_tarea_objeto = {
        tarea: null,
        descripcion: null,
        fecha: null,
        hora: null,
        tipo: null,
        hecho: null
    };
}
function fecha_tarea_añadir_predeterminada() {
    const fecha = new Date();
    sessionStorage.setItem("dia_actual", fecha.getDate())
    sessionStorage.setItem("mes_actual", fecha.getMonth() + 1)
    sessionStorage.setItem("año_actual", fecha.getFullYear())
    const año = fecha.getFullYear();
    let mes = fecha.getMonth() + 1;
    let dia = fecha.getDate();

    if (mes < 10) {
        mes = "0" + mes;
    }
    if (dia < 10) {
        dia = "0" + dia;
    }

    return año + "-" + mes + "-" + dia
}
function fecha_minima_tarea_añadir_predeterminada() {
    const fecha = new Date();
    sessionStorage.setItem("mes_actual", fecha.getMonth() + 1)
    sessionStorage.setItem("año_actual", fecha.getFullYear())
    const año = fecha.getFullYear();
    let mes = fecha.getMonth();
    const dia = "01";

    if (mes < 10) {
        mes = "0" + mes;
    }

    return año + "-" + mes + "-" + dia
}
function actualizar_tipos_opciones_añadir_tarea(tipo) {
    if (tipo == 1) {//propias
        document.getElementById("div-tipo-opciones-alinear").innerHTML = "<input type='button'class='bt-tipo-opcion-tarea-pulsado'id='bt-tipo-opcion-tarea-pulsado-1'value='Propia'onclick='actualizar_tipos_opciones_añadir_tarea(1)'><input type='button'class='bt-tipo-opcion-tarea'id='bt-tipo-opcion-tarea-2'value='Importante'onclick='actualizar_tipos_opciones_añadir_tarea(2)'><input type='button'class='bt-tipo-opcion-tarea'id='bt-tipo-opcion-tarea-3'value='Otros'onclick='actualizar_tipos_opciones_añadir_tarea(3)'>";
    }
    else if (tipo == 2) {//importantes
        document.getElementById("div-tipo-opciones-alinear").innerHTML = "<input type='button'class='bt-tipo-opcion-tarea'id='bt-tipo-opcion-tarea-1'value='Propia'onclick='actualizar_tipos_opciones_añadir_tarea(1)'><input type='button'class='bt-tipo-opcion-tarea-pulsado'id='bt-tipo-opcion-tarea-pulsado-2'value='Importante'onclick='actualizar_tipos_opciones_añadir_tarea(2)'><input type='button'class='bt-tipo-opcion-tarea'id='bt-tipo-opcion-tarea-3'value='Otros'onclick='actualizar_tipos_opciones_añadir_tarea(3)'>";
    }
    else if (tipo == 3) {//otras
        document.getElementById("div-tipo-opciones-alinear").innerHTML = "<input type='button'class='bt-tipo-opcion-tarea'id='bt-tipo-opcion-tarea-1'value='Propia'onclick='actualizar_tipos_opciones_añadir_tarea(1)'><input type='button'class='bt-tipo-opcion-tarea'id='bt-tipo-opcion-tarea-2'value='Importante'onclick='actualizar_tipos_opciones_añadir_tarea(2)'><input type='button'class='bt-tipo-opcion-tarea-pulsado'id='bt-tipo-opcion-tarea-pulsado-3'value='Otros'onclick='actualizar_tipos_opciones_añadir_tarea(3)'>";
    }
    temporal_tipo_opcion_tarea_añadir = tipo;
}
function actualizar_hecho_opciones_añadir_tarea(hecho) {
    if (hecho) {//check
        document.getElementById("switch-button-hecho").innerHTML = "<input type='checkbox'checked 'name='switch-button-hecho'id='switch-label-hecho'class='switch-button__checkbox-hecho'><label  onclick='flip_flop_hecho_opcion_añadir_tarea()'for='switch-label-hecho'class='switch-button__label-hecho'></label>";
    }
    else {
        document.getElementById("switch-button-hecho").innerHTML = "<input type='checkbox'name='switch-button-hecho'id='switch-label-hecho'class='switch-button__checkbox-hecho'><label onclick='flip_flop_hecho_opcion_añadir_tarea()'for='switch-label-hecho'class='switch-button__label-hecho'></label>";
    }
}
function flip_flop_hecho_opcion_añadir_tarea() {
    temporal_hecho_opcion_tarea_añadir = ((temporal_hecho_opcion_tarea_añadir == false) || (temporal_hecho_opcion_tarea_añadir == null)) ? true : false
}
function mostrar_menu_cancelar_añadir_tarea() {
    document.getElementById("div-alinear-menu-cancelar-añadir-tarea").style.display = "flex";
    document.getElementById("div-bloquear-interaccion-pagina").style.display = "block";
}
function salir_menu_cancelar_añadir_tarea() {
    document.getElementById("div-alinear-menu-cancelar-añadir-tarea").style.display = "none";
    document.getElementById("div-bloquear-interaccion-pagina").style.display = "none";
}
function guardar_borrador_ajustes_añadir_tarea() {
    datos_añadir_tarea_objeto = {
        tarea: document.getElementById("textarea-titulo-tarea").value,
        descripcion: document.getElementById("textarea-descripcion-tarea").value,
        fecha: document.getElementById("input-fecha-tarea").value,
        hora: document.getElementById("bt-hora-ajustes-tarea").value,
        tipo: temporal_tipo_opcion_tarea_añadir,
        hecho: temporal_hecho_opcion_tarea_añadir
    };
    mostrar_estructura_añadir_tarea()
}
function reiniciar_ajustes_añadir_tarea() {
    datos_añadir_tarea_objeto = {
        tarea: null,
        descripcion: null,
        fecha: null,
        hora: null,
        tipo: null,
        hecho: null
    };
    temporal_tipo_opcion_tarea_añadir = null;
    temporal_hecho_opcion_tarea_añadir = null;

    estructura_tareas_añadir_mostrada = false;
    mostrar_estructura_añadir_tarea()
    salir_menu_cancelar_añadir_tarea()
}

//!(borrar  al tener la base de datos terminada y no usar esto en el codigo final)
const tareas_usuario_firebase = [
    { id: "", fecha: 1 + "/" + 4 + "/" + 2023, tarea: "Examen de mates", descripcion: "Estudiar temas 1-10", tipo: 1, hecho: false },
    { id: "1", fecha: 1 + "/" + 4 + "/" + 2023, tarea: "Programar la herramienta calendario", descripcion: "Desarrollar la herramienta propia para tener mi propia agenda", tipo: 0, hecho: true }
];