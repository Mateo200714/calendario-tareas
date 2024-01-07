//fecha-hora actual
var minuto_actual;
var hora_actual;
var dia_actual;
var mes_actual;
var año_actual;
//otros
var dia_buscado;
var estructura_calendario;
var estructura_calendario_tareas;
var cambio_de_estructura_tareas;
var tareas_mtr_dia_calend;
var cambio_de_estructura;
window.addEventListener("load",()=>{
    preparar_aplicacion()
})
function preparar_aplicacion() {
    //fecha
    const fecha = new Date();
    minuto_actual = fecha.getMinutes();
    hora_actual = fecha.getHours();
    dia_actual = fecha.getDate();
    mes_actual = fecha.getMonth() + 1;
    año_actual = fecha.getFullYear();
    //cuenta usuario
    if (localStorage.getItem("correo_cuenta") === null) {
        localStorage.setItem("correo_cuenta", null)
    }
    //otros
    dia_buscado = null;
    estructura_calendario = 1;
    estructura_calendario_tareas = 1;
    cambio_de_estructura_tareas = true;
    tareas_mtr_dia_calend = 1;//tares mostrar dia calendario-->1:todas,2:propias,3:importantes,...
    mostrar_estructura_calendario();

}
function mes_anterior() {
    if (mes_actual > 1) {
        mes_actual -= 1;
    }
    else if (mes_actual === 1) {
        mes_actual = 12;
        año_actual -= 1;
    }
    mostrar_estructura_calendario()
}
function mes_siguiente() {
    if (mes_actual < 12) {
        mes_actual += 1;
    }
    else if (mes_actual === 12) {
        mes_actual = 1;
        año_actual += 1;
    }
    mostrar_estructura_calendario()
}
function calcular_fecha_actual() {
    const fecha = new Date();
    dia_actual = fecha.getDate();
    const dia = !(dia_actual) < 10 ? dia_actual : "0" + dia_actual;
    const mes = !(fecha.getMonth() + 1) < 10 ? (fecha.getMonth() + 1) : "0" + (fecha.getMonth() + 1);

    return dia + "/" + mes + "/" + fecha.getFullYear()
}
function calcular_hora_actual() {
    const fecha = new Date();
    minuto_actual = fecha.getMinutes();
    hora_actual = fecha.getHours();
    const minuto = !(minuto_actual < 10) ? minuto_actual : "0" + minuto_actual;
    const hora = !(hora_actual < 10) ? hora_actual : "0" + hora_actual;

    return hora + ":" + minuto
}

let interval_hora_actualizar;
function actualizar_hora() {
    interval_hora_actualizar = setInterval(() => {
        const fecha = new Date();
        //actualizar
        minuto_actual = fecha.getMinutes();
        if (minuto_actual === 0) {
            hora_actual = fecha.getHours();
            if (hora_actual === 0) {
                dia_actual = fecha.getDate();
                if (dia_actual === 1) {
                    mes_actual = fecha.getMonth() + 1;
                    if (mes_actual === 0) {
                        año_actual = fecha.getFullYear();
                    }
                }
            }
        }
        //mostrar por pantalla
        const minuto = !(minuto_actual < 10) ? minuto_actual : "0" + minuto_actual;
        const hora = !(hora_actual < 10) ? hora_actual : "0" + hora_actual;
        const dia = !(dia_actual) < 10 ? dia_actual : "0" + dia_actual;
        const mes = !(mes_actual + 1) < 10 ? (mes_actual + 1) : "0" + (mes_actual + 1);
        const año = año_actual;

        document.getElementById("div-hora-inferior").innerHTML = hora + ":" + minuto;//hora
        document.getElementById("div-fecha-inferior").innerHTML = dia + "/" + mes + "/" + año;//fecha
    }, 10000);
}

//!(sin hacer)
function mostrar_introducir_correo_cuenta() {
    document.getElementById("div-cuenta").display = "block";
    document.getElementById("bt-guardar-correo").addEventListener("click", () => {
        //comprobar si es correo google
        const numero_caracteres_correo = document.getElementById("correo-usuario").value;
        let texto_coger = "";
        for (let i = 0; i < 9; i++) {
            texto_coger = numero_caracteres_correo[numero_caracteres_correo.length - 1 - i] + texto_coger;
        }
        if (texto_coger == "@gmail.com") {//buscar correo

        }
        else {//mostrar mensaje "correo introducido no valido"
            alert("Introduzca un gmail válido")
        }
    });
}
