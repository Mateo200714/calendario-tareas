function mostrar_estructura_tareas_dia_calendario(dia) {
    if (!isNaN(dia)) {
        dia_buscado = dia;
    }
    else {
        dia = dia_buscado;
    }
    //mostrar por pantalla
    //img svg flecha volver
    document.body.innerHTML = "<svg class='svg-flecha-volver'xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1'x='0px' y='0px' width='100%' viewBox='0 0 96 96' enable-background='new 0 0 96 96' xml:space='preserve'><path fill='transparent' opacity='1.000000' stroke='none' d=' M58.000000,97.000000   C38.666672,97.000000 19.833340,97.000000 1.000008,97.000000   C1.000005,65.000008 1.000005,33.000019 1.000003,1.000021   C32.999985,1.000014 64.999969,1.000014 96.999969,1.000007   C96.999977,32.999981 96.999977,64.999962 96.999985,96.999969   C84.166664,97.000000 71.333336,97.000000 58.000000,97.000000  M51.429623,88.866714   C59.932308,88.866714 68.434998,88.866714 77.678795,88.866714   C67.820641,75.985115 58.553783,64.027374 49.545906,51.877636   C48.619232,50.627750 48.433231,47.666588 49.277206,46.461613   C53.573627,40.327469 58.345001,34.527489 62.906460,28.577072   C67.694984,22.330444 72.434074,16.045918 77.784462,9.001552   C68.905289,9.001552 61.122761,8.864013 53.353188,9.119901   C51.835407,9.169888 49.947208,10.411851 48.944839,11.672518   C41.945198,20.475931 35.095673,29.399984 28.281595,38.348995   C25.741449,41.685001 21.496094,45.211327 21.531521,48.614403   C21.569363,52.249641 25.527699,56.007866 28.153208,59.421234   C35.613155,69.119728 43.266098,78.669769 51.429623,88.866714  z'/><path style='cursor:pointer'onclick='mostrar_estructura_calendario()' opacity='1.000000' stroke='none' d=' M51.136341,88.572479   C43.266098,78.669769 35.613155,69.119728 28.153208,59.421234   C25.527699,56.007866 21.569363,52.249641 21.531521,48.614403   C21.496094,45.211327 25.741449,41.685001 28.281595,38.348995   C35.095673,29.399984 41.945198,20.475931 48.944839,11.672518   C49.947208,10.411851 51.835407,9.169888 53.353188,9.119901   C61.122761,8.864013 68.905289,9.001552 77.784462,9.001552   C72.434074,16.045918 67.694984,22.330444 62.906460,28.577072   C58.345001,34.527489 53.573627,40.327469 49.277206,46.461613   C48.433231,47.666588 48.619232,50.627750 49.545906,51.877636   C58.553783,64.027374 67.820641,75.985115 77.678795,88.866714   C68.434998,88.866714 59.932308,88.866714 51.136341,88.572479  z'/></svg>";
    //indice
    document.body.innerHTML += "<div class='div-fecha-titulo'><div class='div-dia-actual-titulo'>" + (Number(dia) + 1) + "</div><div class='div-mes-actual-titulo'>" + text_mes_actual() + "</div><div class='div-año-actual-titutlo'>" + año_actual + "</div><div class='div-linea-diseño-fecha-actual-titulo'></div></div > ";
    //tareas
    document.body.innerHTML += "<div class='div-todas-tareas'><div class='div-indice-tareas'><div class='bt-tareas-todas-importantes-propias'onclick='cambiar_tipo_tareas_dia_estructura(1)'>Todas<div class='div-linea-diseño-tareas-indice'id='div-linea-diseño-tareas-indice-1'></div></div><div class='bt-tareas-propias'onclick='cambiar_tipo_tareas_dia_estructura(2)'>Propias<div class='div-linea-diseño-tareas-indice'id='div-linea-diseño-tareas-indice-2'></div></div><div class='bt-tareas-importantes'onclick='cambiar_tipo_tareas_dia_estructura(3)'>Importantes<div class='div-linea-diseño-tareas-indice'id='div-linea-diseño-tareas-indice-3'></div></div></div><div class='div-todas-tareas-lista'>" + mostrar_tareas_dia_calendario() + "</div>";
    if (tareas_mtr_dia_calend === 1) {
        document.getElementById("div-linea-diseño-tareas-indice-2").style.width = "0%";
        document.getElementById("div-linea-diseño-tareas-indice-3").style.width = "0%";
        if (cambio_de_estructura_tareas === true) {
            let numero = 15;
            const interval_indice = setInterval(() => {
                numero += 4;
                document.getElementById("div-linea-diseño-tareas-indice-1").style.width = numero + "%";
                if (numero >= 65) {
                    document.getElementById("div-linea-diseño-tareas-indice-1").style.width = "65%";
                    clearInterval(interval_indice);
                }
            }, 4);
            cambio_de_estructura_tareas = false;
        }
        else {
            document.getElementById("div-linea-diseño-tareas-indice-1").style.width = "65%";
        }
    }
    else if (tareas_mtr_dia_calend === 2) {
        document.getElementById("div-linea-diseño-tareas-indice-1").style.width = "0%";
        document.getElementById("div-linea-diseño-tareas-indice-3").style.width = "0%";
        if (cambio_de_estructura_tareas === true) {
            let numero = 15;
            const interval_indice = setInterval(() => {
                numero += 4;
                document.getElementById("div-linea-diseño-tareas-indice-2").style.width = numero + "%";
                if (numero >= 65) {
                    document.getElementById("div-linea-diseño-tareas-indice-2").style.width = "65%";
                    clearInterval(interval_indice);
                }
            }, 4);
            cambio_de_estructura_tareas = false;
        }
        else {
            document.getElementById("div-linea-diseño-tareas-indice-2").style.width = "65%";
        }
    }
    else {
        document.getElementById("div-linea-diseño-tareas-indice-1").style.width = "0%";
        document.getElementById("div-linea-diseño-tareas-indice-2").style.width = "0%";
        if (cambio_de_estructura_tareas === true) {
            let numero = 15;
            const interval_indice = setInterval(() => {
                numero += 4;
                document.getElementById("div-linea-diseño-tareas-indice-3").style.width = numero + "%";
                if (numero >= 65) {
                    document.getElementById("div-linea-diseño-tareas-indice-3").style.width = "65%";
                    clearInterval(interval_indice);
                }
            }, 4);
            cambio_de_estructura_tareas = false;
        }
        else {
            document.getElementById("div-linea-diseño-tareas-indice-3").style.width = "65%";
        }
    }

}
function mostrar_tareas_dia_calendario() {
    let tareas_recibidas = [];//array de objetos
    if (tareas_mtr_dia_calend === 1) {//todas
        //buscar cache
        for (let i = 0; i < tareas_usuario_firebase.length; i++) {
            const tarea = tareas_usuario_firebase[i];
            const tarea_fecha = tarea.fecha.split("/");
            if ((tarea_fecha[0] === dia_buscado) && (tarea_fecha[1] === mes_actual) && (tarea_fecha[2] === año_actual)) {
                tareas_recibidas.push(tarea);
            }
        }
    }
    else if (tareas_mtr_dia_calend === 2) {//propias
        for (let i = 0; i < tareas_usuario_firebase.length; i++) {
            const tarea = tareas_usuario_firebase[i];
            if (tarea.tipo === 0) {//propia?
                const tarea_fecha = tarea.fecha.split("/");
                if ((tarea_fecha[0] === dia_buscado) && (tarea_fecha[1] === mes_actual) && (tarea_fecha[2] === año_actual)) {
                    tareas_recibidas.push(tarea);
                }
            }
        }
    }
    else if (tareas_mtr_dia_calend === 3) {//importantes
        for (let i = 0; i < tareas_usuario_firebase.length; i++) {
            const tarea = tareas_usuario_firebase[i];
            if (tarea.tipo === 1) {//importante?
                const tarea_fecha = tarea.fecha.split("/");
                if ((tarea_fecha[0] === dia_buscado) && (tarea_fecha[1] === mes_actual) && (tarea_fecha[2] === año_actual)) {
                    tareas_recibidas.push(tarea);
                }
            }
        }
    }
    else if (tareas_mtr_dia_calend === 3) {//otras
        for (let i = 0; i < tareas_usuario_firebase.length; i++) {
            const tarea = tareas_usuario_firebase[i];
            if (tarea.tipo === 2) {//otras?
                const tarea_fecha = tarea.fecha.split("/");
                if ((tarea_fecha[0] === dia_buscado) && (tarea_fecha[1] === mes_actual) && (tarea_fecha[2] === año_actual)) {
                    tareas_recibidas.push(tarea);
                }
            }
        }
    }
    let codigo = "";
    for (let i = 0; i < tareas_recibidas.length; i++) {

    }
    return codigo
}

function reiniciar_ajustes_dia_calendario() {
    if (interval_hora_actualizar != undefined) {
        clearInterval(interval_hora_actualizar);
        interval_hora_actualizar = undefined;
    }
    sessionStorage.setItem("tareas_mtr_dia_calend", 1)
    sessionStorage.setItem("cambio_de_estructura_tareas", true)
}
function cambiar_tipo_tareas_dia_estructura(tipo) {
    if (tipo === tareas_mtr_dia_calend) {
        cambio_de_estructura_tareas = false;
    }
    else {
        cambio_de_estructura_tareas = true;
    }
    tareas_mtr_dia_calend = tipo;
    mostrar_estructura_tareas_dia_calendario()
}