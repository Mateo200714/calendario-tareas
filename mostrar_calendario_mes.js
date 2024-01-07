
function calcular_dias_mes() {
    const n_mes = mes_actual - 1;
    const año = año_actual;
    const dia_meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //febrero:29?
    if (año % 4 === 0) { dia_meses[1] = 29; }

    return dia_meses[n_mes]
}
function text_mes_actual() {
    const n_mes = mes_actual - 1;
    const text_mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Nombriembre", "Diciembre"];
    return text_mes[n_mes]
}
function mostrar_estructura_calendario() {
    if (interval_hora_actualizar != undefined) {
        clearInterval(interval_hora_actualizar);
        interval_hora_actualizar = undefined;
    }
    actualizar_hora()
    //estructura titulo fecha actual
    document.body.innerHTML = "<div class='div-fecha-titulo'><div class='div-mes-actual-titulo'id='div-mes-actual-titulo'>" + text_mes_actual() + "</div><div class='div-año-actual-titutlo'>" + año_actual + "</div><div class='div-linea-diseño-fecha-actual-titulo'></div></div><div class='div-hora-inferior'id='div-hora-inferior'>" + calcular_hora_actual() + "</div><div class='div-fecha-inferior'id='div-fecha-inferior'>" + calcular_fecha_actual() + "</div>";
    //indice
    document.body.innerHTML += "<div class='div-indice-calendario'><div class='div-calendario-bt-indice'onclick='cambiar_estructura_calendario()'>Calendario<div class='div-linea-diseño-calendario-indice 'id='div-linea-diseño-calendario-indice'></div></div><div class='div-calendario-bt-indice'onclick='cambiar_estructura_tareas()'>Tareas<div class='div-linea-diseño-calendario-indice 'id='div-linea-diseño-tareas-indice'></div></div><div class='div-calendario-bt-indice'onclick='cambiar_estructura_rutina()'>Rutinas<div class='div-linea-diseño-calendario-indice 'id='div-linea-diseño-rutina-indice'></div></div></div>";
    //clima
    if (estructura_calendario === 1) {
        obtener_clima_actual()
    }
    //estructura principal
    if (estructura_calendario === 1) {
        if (cambio_de_estructura) {
            let numero = 15;
            const interval_indice = setInterval(() => {
                numero += 4;
                document.getElementById("div-linea-diseño-calendario-indice").style.width = numero + "%";
                if (numero >= 65) {
                    document.getElementById("div-linea-diseño-calendario-indice").style.width = "65%";
                    clearInterval(interval_indice);
                }
            }, 4);
            cambio_de_estructura = false;
        }
        else {
            document.getElementById("div-linea-diseño-calendario-indice").style.width = "65%";
        }
        mostrar_calendario_tareas()
    }
    else if (estructura_calendario === 2) {
        if (cambio_de_estructura) {
            let numero = 15;
            const interval_indice = setInterval(() => {
                numero += 4;
                document.getElementById("div-linea-diseño-tareas-indice").style.width = numero + "%";
                if (numero >= 65) {
                    document.getElementById("div-linea-diseño-tareas-indice").style.width = "65%";
                    clearInterval(interval_indice);
                }
            }, 4);
            cambio_de_estructura = false;
        }
        else {
            document.getElementById("div-linea-diseño-tareas-indice").style.width = "65%";
        }
        mostrar_tareas_buscador()
    }
    else {
        if (cambio_de_estructura) {
            let numero = 15;
            const interval_indice = setInterval(() => {
                numero += 4;
                document.getElementById("div-linea-diseño-rutina-indice").style.width = numero + "%";
                if (numero >= 65) {
                    document.getElementById("div-linea-diseño-rutina-indice").style.width = "65%";
                    clearInterval(interval_indice);
                }
            }, 4);
            cambio_de_estructura = false;
        }
        else {
            document.getElementById("div-linea-diseño-rutina-indice").style.width = "65%";
        }
        mostrar_estructura_rutinas()
    }
    //flechas: izquierda
    document.body.innerHTML += "<svg id='svg-flecha-mes-anterior'class='svg-flecha-mes-anterior'xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1'x='0px' y='0px' width='100%' viewBox='0 0 96 96' enable-background='new 0 0 96 96' xml:space='preserve'><path fill='transparent' opacity='1.000000' stroke='none' d=' M58.000000,97.000000   C38.666672,97.000000 19.833340,97.000000 1.000008,97.000000   C1.000005,65.000008 1.000005,33.000019 1.000003,1.000021   C32.999985,1.000014 64.999969,1.000014 96.999969,1.000007   C96.999977,32.999981 96.999977,64.999962 96.999985,96.999969   C84.166664,97.000000 71.333336,97.000000 58.000000,97.000000  M51.429623,88.866714   C59.932308,88.866714 68.434998,88.866714 77.678795,88.866714   C67.820641,75.985115 58.553783,64.027374 49.545906,51.877636   C48.619232,50.627750 48.433231,47.666588 49.277206,46.461613   C53.573627,40.327469 58.345001,34.527489 62.906460,28.577072   C67.694984,22.330444 72.434074,16.045918 77.784462,9.001552   C68.905289,9.001552 61.122761,8.864013 53.353188,9.119901   C51.835407,9.169888 49.947208,10.411851 48.944839,11.672518   C41.945198,20.475931 35.095673,29.399984 28.281595,38.348995   C25.741449,41.685001 21.496094,45.211327 21.531521,48.614403   C21.569363,52.249641 25.527699,56.007866 28.153208,59.421234   C35.613155,69.119728 43.266098,78.669769 51.429623,88.866714  z'/><path style='cursor:pointer'onclick='mes_anterior()'id='svg-bt1' opacity='1.000000' stroke='none' d=' M51.136341,88.572479   C43.266098,78.669769 35.613155,69.119728 28.153208,59.421234   C25.527699,56.007866 21.569363,52.249641 21.531521,48.614403   C21.496094,45.211327 25.741449,41.685001 28.281595,38.348995   C35.095673,29.399984 41.945198,20.475931 48.944839,11.672518   C49.947208,10.411851 51.835407,9.169888 53.353188,9.119901   C61.122761,8.864013 68.905289,9.001552 77.784462,9.001552   C72.434074,16.045918 67.694984,22.330444 62.906460,28.577072   C58.345001,34.527489 53.573627,40.327469 49.277206,46.461613   C48.433231,47.666588 48.619232,50.627750 49.545906,51.877636   C58.553783,64.027374 67.820641,75.985115 77.678795,88.866714   C68.434998,88.866714 59.932308,88.866714 51.136341,88.572479  z'/></svg>";
    //flechas:dereccha
    document.body.innerHTML += "<svg id='svg-flecha-mes-siguiente'class='svg-flecha-mes-siguiente'xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1'x='0px' y='0px' width='100%' viewBox='0 0 96 96' enable-background='new 0 0 96 96' xml:space='preserve'><path fill='transparent' opacity='1.000000' stroke='none' d=' M58.000000,97.000000   C38.666672,97.000000 19.833340,97.000000 1.000008,97.000000   C1.000005,65.000008 1.000005,33.000019 1.000003,1.000021   C32.999985,1.000014 64.999969,1.000014 96.999969,1.000007   C96.999977,32.999981 96.999977,64.999962 96.999985,96.999969   C84.166664,97.000000 71.333336,97.000000 58.000000,97.000000  M51.429623,88.866714   C59.932308,88.866714 68.434998,88.866714 77.678795,88.866714   C67.820641,75.985115 58.553783,64.027374 49.545906,51.877636   C48.619232,50.627750 48.433231,47.666588 49.277206,46.461613   C53.573627,40.327469 58.345001,34.527489 62.906460,28.577072   C67.694984,22.330444 72.434074,16.045918 77.784462,9.001552   C68.905289,9.001552 61.122761,8.864013 53.353188,9.119901   C51.835407,9.169888 49.947208,10.411851 48.944839,11.672518   C41.945198,20.475931 35.095673,29.399984 28.281595,38.348995   C25.741449,41.685001 21.496094,45.211327 21.531521,48.614403   C21.569363,52.249641 25.527699,56.007866 28.153208,59.421234   C35.613155,69.119728 43.266098,78.669769 51.429623,88.866714  z'/><path style='cursor:pointer'onclick='mes_siguiente()' opacity='1.000000' stroke='none' d=' M51.136341,88.572479   C43.266098,78.669769 35.613155,69.119728 28.153208,59.421234   C25.527699,56.007866 21.569363,52.249641 21.531521,48.614403   C21.496094,45.211327 25.741449,41.685001 28.281595,38.348995   C35.095673,29.399984 41.945198,20.475931 48.944839,11.672518   C49.947208,10.411851 51.835407,9.169888 53.353188,9.119901   C61.122761,8.864013 68.905289,9.001552 77.784462,9.001552   C72.434074,16.045918 67.694984,22.330444 62.906460,28.577072   C58.345001,34.527489 53.573627,40.327469 49.277206,46.461613   C48.433231,47.666588 48.619232,50.627750 49.545906,51.877636   C58.553783,64.027374 67.820641,75.985115 77.678795,88.866714   C68.434998,88.866714 59.932308,88.866714 51.136341,88.572479  z'/></svg>";

}
//estructuras
function mostrar_calendario_tareas() {
    //estructura casillas calendario
    function mostrar_todas_casillas_calendario() {
        const background_casillas = [];//blanco,gris,rojo,azul,verde,verde azul
        const dias_totales = calcular_dias_mes();
        let codigo = "";
        for (let i = 0; i < dias_totales; i++) {
            //datos casilla
            const total_cosas_hacer_propias = 0;//coger datos ya guardados sacados del firebase
            const total_cosas_hacer_importantes = 0;//coger datos ya guardados sacados del firebase

            //casillas
            codigo += "<div class='div-casilla-calendario' onclick='reiniciar_ajustes_dia_calendario();mostrar_estructura_tareas_dia_calendario(" + i + ")'><div class='div-dia-casilla-calendario'>" + (i + 1) + "</div>";
            if (total_cosas_hacer_propias > 0) {
                codigo += "<div class='div-total-cosas-hacer-propias-casillas-calendario'>" + total_cosas_hacer_propias + "</div>";
            }
            if (total_cosas_hacer_importantes > 0) {
                codigo += "<div class='div-total-cosas-hacer-importantes-casillas-calendario'>" + total_cosas_hacer_importantes + "</div>";
            }
            codigo += "</div>";
        }
        return codigo
    }
    document.body.innerHTML += "<div id='div-calendario-todas-casillas'>" + mostrar_todas_casillas_calendario() + "</div>";
}
function mostrar_tareas_buscador() {

    function buscar_tareas_requeridas_calendario() {
        //recibir tareas

        //pasarlas a codigo
        let codigo = "";

        return codigo
    }
    //todas tareas activas
    //p1
    document.body.innerHTML += "<div class='div-todas-tareas-activas-calendario'><div class='div-indice-tareas-activas-calendario'id='div-indice-tareas-activas-calendario'><div class='div-bt-indice-tareas-activas-calendario'onclick='cambiar_tipo_tarea_buscar(1)'>Todas<div class='div-linea-diseño-indice-tareas-activas-calendario'id='div-linea-diseño-indice-tareas-activas-calendario-1'></div></div><div class='div-bt-indice-tareas-activas-calendario'onclick='cambiar_tipo_tarea_buscar(2)'>Activas<div class='div-linea-diseño-indice-tareas-activas-calendario'id='div-linea-diseño-indice-tareas-activas-calendario-2'></div></div><div class='div-bt-indice-tareas-activas-calendario'onclick='cambiar_tipo_tarea_buscar(3)'>Hechas<div class='div-linea-diseño-indice-tareas-activas-calendario'id='div-linea-diseño-indice-tareas-activas-calendario-3'></div></div><div class='div-bt-indice-tareas-activas-calendario'onclick='cambiar_tipo_tarea_buscar(4)'>Atrasadas<div class='div-linea-diseño-indice-tareas-activas-calendario'id='div-linea-diseño-indice-tareas-activas-calendario-4'></div></div><div class='div-bt-indice-tareas-activas-calendario'onclick='cambiar_tipo_tarea_buscar(5)'>Este mes<div class='div-linea-diseño-indice-tareas-activas-calendario'id='div-linea-diseño-indice-tareas-activas-calendario-5'></div></div><div class='div-bt-indice-tareas-activas-calendario'onclick='cambiar_tipo_tarea_buscar(6)'>Siguiente mes<div class='div-linea-diseño-indice-tareas-activas-calendario'id='div-linea-diseño-indice-tareas-activas-calendario-6'></div></div><div class='div-bt-indice-tareas-activas-calendario'onclick='cambiar_tipo_tarea_buscar(7)'>Mes anterior<div class='div-linea-diseño-indice-tareas-activas-calendario'id='div-linea-diseño-indice-tareas-activas-calendario-7'></div></div></div><div id='div-todas-tareas-activas-recibidas-calendario'>" + buscar_tareas_requeridas_calendario() + "</div></div>";
    //p2
    document.getElementById("div-indice-tareas-activas-calendario").innerHTML += "<div class='div-bt-indice-tareas-activas-calendario'onclick='cambiar_tipo_tarea_buscar(8)'>Este mes (propias)<div class='div-linea-diseño-indice-tareas-activas-calendario'id='div-linea-diseño-indice-tareas-activas-calendario-8'></div></div><div class='div-bt-indice-tareas-activas-calendario'onclick='cambiar_tipo_tarea_buscar(9)'>Este mes (importantes)<div class='div-linea-diseño-indice-tareas-activas-calendario'id='div-linea-diseño-indice-tareas-activas-calendario-9'></div></div><div class='div-bt-indice-tareas-activas-calendario'onclick='cambiar_tipo_tarea_buscar(10)'>Este mes (otras)<div class='div-linea-diseño-indice-tareas-activas-calendario'id='div-linea-diseño-indice-tareas-activas-calendario-10'></div></div><div class='div-bt-indice-tareas-activas-calendario'onclick='cambiar_tipo_tarea_buscar(11)'>Sin fecha<div class='div-linea-diseño-indice-tareas-activas-calendario'id='div-linea-diseño-indice-tareas-activas-calendario-11'></div></div>";
    //bt añadir tarea
    document.body.innerHTML += "<div class='div-alinear-svg-añadir-tarea'><svg class='svg-añadir-tarea'id='svg-añadir-tarea-1'style='cursor:pointer'onclick='mostrar_estructura_añadir_tarea()'version='1.0' xmlns='http://www.w3.org/2000/svg' width='100.000000pt' height='100.000000pt' viewBox='0 0 100.000000 100.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,100.000000) scale(0.100000,-0.100000)' fill='' stroke='none'><path d='M386 944 c-171 -41 -308 -192 -338 -371 -51 -303 217 -573 521 -526 98 15 171 52 245 123 340 326 31 885 -428 774z m132 -357 l3 -66 67 -3 c52 -2 67 -6 67 -18 0 -12 -15 -16 -67 -18 l-67 -3 -3 -67 c-2 -52 -6 -67 -18 -67 -12 0 -16 15 -18 67 l-3 67 -67 3 c-52 2 -67 6 -67 18 0 12 15 16 68 18 l67 3 0 63 c0 34 3 66 7 70 17 17 28 -6 31 -67z' /></g></svg > </div>";
}
//!(no funciona)
function cambiar_tipo_tarea_buscar(n_bt_tarea) {
    //animacion linea
    let id_linea;
    switch (Number(n_bt_tarea)) {
        case 1:
            id_linea = "div-linea-diseño-indice-tareas-activas-calendario-1";
            break;
        case 2:
            id_linea = "div-linea-diseño-indice-tareas-activas-calendario-2";
            break;
        case 3:
            id_linea = "div-linea-diseño-indice-tareas-activas-calendario-3";
            break;
        case 4:
            id_linea = "div-linea-diseño-indice-tareas-activas-calendario-4";
            break;
        case 5:
            id_linea = "div-linea-diseño-indice-tareas-activas-calendario-5";
            break;
        case 6:
            id_linea = "div-linea-diseño-indice-tareas-activas-calendario-6";
            break;
        case 7:
            id_linea = "div-linea-diseño-indice-tareas-activas-calendario-7";
            break;
        case 8:
            id_linea = "div-linea-diseño-indice-tareas-activas-calendario-8";
            break;
        case 9:
            id_linea = "div-linea-diseño-indice-tareas-activas-calendario-9";
            break;
        case 10:
            id_linea = "div-linea-diseño-indice-tareas-activas-calendario-10";
            break;
        case 11:
            id_linea = "div-linea-diseño-indice-tareas-activas-calendario-11";
            break;
    }
    if (cambio_de_estructura_n_bt_tarea === n_bt_tarea) {
        let numero = 15;
        const interval_indice = setInterval(() => {
            numero += 4;
            document.getElementById(id_linea).style.width = numero + "%";
            if (numero >= 65) {
                document.getElementById(id_linea).style.width = "65%";
                clearInterval(interval_indice);
            }
        }, 4);
        cambio_de_estructura_n_bt_tarea = n_bt_tarea;
    }
    else {
        document.getElementById(id_linea).style.width = "65%";
    }
}
function cambiar_estructura_calendario() {
    if (estructura_calendario === 1) {
        const fecha = new Date();
        dia_actual = fecha.getDate();
        mes_actual = fecha.getMonth() + 1;
        año_actual = fecha.getFullYear();
    }
    cambio_de_estructura_n_bt_tarea = 0;
    estructura_calendario = 1;
    cambio_de_estructura = true;
    mostrar_estructura_calendario()
}
function mostrar_estructura_rutinas() {

}
//actualizaciones de cambio de estructuras
function cambiar_estructura_tareas() {
    estructura_calendario = 2;
    cambio_de_estructura = true;
    tareas_mtr_dia_calend = 1;
    mostrar_estructura_calendario()
}
function cambiar_estructura_rutina() {
    estructura_calendario = 3;
    cambio_de_estructura = true;
    mostrar_estructura_calendario()
}
//funciones extras
function obtener_clima_actual() {
    const apiKey = "1ed75e3be26d763c3f6a1f50aa89ed3f";
    const lugar = "Negreira";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${lugar}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { main, name, weather } = data;
            const icono = `https://openweathermap.org/img/wn/${weather[0]["icon"]
                }@2x.png`;
            //traducir tiempo text
            let clima_text = weather[0].description;
            switch (clima_text) {
                case "overcast cloud":
                    clima_text = "Nublado";
                    break;
                case "overcast clouds":
                    clima_text = "Nubarrones";
                    break;
                case "broken clouds":
                    clima_text = "Nubes rotas";
                    break;
                case "scattered clouds":
                    clima_text = "Nubes dispersas";
                    break;
                case "few clouds":
                    clima_text = "Pocas nubes";
                    break;
                case "light rain":
                    clima_text = "Lluvia ligera";
                    break;
                case "moderate rain":
                    clima_text = "Lluvia moderada";
                    break;
            }
            //actualizar clima html
            document.body.innerHTML += "<div class='div-clima-calendario'><div class='div-nombre-lugar'>" + name + "</div><div class='div-img-tiempo'><img src='" + icono + "'class='img-tiempo'><div class='div-text-tiempo'>" + clima_text + "</div></div><div class='div-text-temperatura-actual'>" + main.temp + "ºc</div><div class='div-text-temperatura-maxima'>" + main.temp_max + "ºc<img class='img-temperatura-actual'src='https://img.icons8.com/cotton/64/null/thermometer-up--v1.png'alt=''></div><div class='div-text-temperatura-minima'>" + main.temp_min + "ºc<img class='img-temperatura-actual'src='https://img.icons8.com/cotton/64/null/thermometer-down--v1.png'alt=''></div><div class='div-text-temperatura-minima'></div><div class='div-text-humedad-actual'><img class='img-humedad-actual'src='https://img.icons8.com/external-topaz-kerismaker/48/000000/external-Humidity-weather-topaz-kerismaker.png'alt=''>" + main.humidity + "%</div><div class='div-text-viento'><img class='img-viento-actual'src='./viento.png' />" + data.wind.speed + "Km/h</div></div>";
            document.getElementsByClassName("div-clima-calendario")[0].style.backgroundImage = `url(./clouds.png)`
        })
        .catch(() => {
            alert(`Error al buscar clima ${lugar}`)
        });
}
