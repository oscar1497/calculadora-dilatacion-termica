// Cálculo de dilatación térmica
function calcularDilatacion() {
    const tipoDilatacion = document.getElementById("tipoDilatacion").value;
    const variableDilatacion = document.getElementById("variableDilatacion").value;
    const longitudInicial = parseFloat(document.getElementById("longitudInicial").value);
    const deltaTemperatura = parseFloat(document.getElementById("deltaTemperatura").value);
    const coeficiente = parseFloat(document.getElementById("coeficiente").value);
    const dilatacion = parseFloat(document.getElementById("dilatacion").value);
    
    let resultadoDilatacion;
    
    if (variableDilatacion === "dilatacion") {
        if (tipoDilatacion === "lineal") {
            resultadoDilatacion = longitudInicial * coeficiente * deltaTemperatura;
        } else if (tipoDilatacion === "superficial") {
            resultadoDilatacion = longitudInicial * coeficiente * deltaTemperatura * 2;
        } else if (tipoDilatacion === "volumetrica") {
            resultadoDilatacion = longitudInicial * coeficiente * deltaTemperatura * 3;
        }
    } else if (variableDilatacion === "longitudInicial") {
        if (tipoDilatacion === "lineal") {
            resultadoDilatacion = (dilatacion) / (coeficiente * deltaTemperatura);
        } else if (tipoDilatacion === "superficial") {
            resultadoDilatacion = (dilatacion) / (coeficiente * deltaTemperatura * 2);
        } else if (tipoDilatacion === "volumetrica") {
            resultadoDilatacion = (dilatacion) / (coeficiente * deltaTemperatura * 3);
        }
    } else if (variableDilatacion === "coeficiente") {
        if (tipoDilatacion === "lineal") {
            resultadoDilatacion = dilatacion / (longitudInicial * deltaTemperatura);
        } else if (tipoDilatacion === "superficial") {
            resultadoDilatacion = dilatacion / (longitudInicial * deltaTemperatura * 2);
        } else if (tipoDilatacion === "volumetrica") {
            resultadoDilatacion = dilatacion / (longitudInicial * deltaTemperatura * 3);
        }
    } else if (variableDilatacion === "deltaTemperatura") {
        if (tipoDilatacion === "lineal") {
            resultadoDilatacion = dilatacion / (longitudInicial * coeficiente);
        } else if (tipoDilatacion === "superficial") {
            resultadoDilatacion = dilatacion / (longitudInicial * coeficiente * 2);
        } else if (tipoDilatacion === "volumetrica") {
            resultadoDilatacion = dilatacion / (longitudInicial * coeficiente * 3);
        }
    }

    document.getElementById("resultadoDilatacion").innerHTML = `Resultado: ${resultadoDilatacion ? resultadoDilatacion.toPrecision(15) : "Error en el cálculo"}`;
}

// Cálculo de la Ley de Conducción Térmica de Fourier
function calcularConduccionTermica() {
    const variableFourier = document.getElementById("variableFourier").value;
    const tasaCalor = parseFloat(document.getElementById("tasaCalor").value);
    const conductividad = parseFloat(document.getElementById("conductividad").value);
    const area = parseFloat(document.getElementById("area").value);
    const diferenciaTemperatura = parseFloat(document.getElementById("diferenciaTemperatura").value);
    const distancia = parseFloat(document.getElementById("distancia").value);
    let resultado;

    if (variableFourier === "tasaCalor") {
        if (conductividad && area && diferenciaTemperatura && distancia) {
            resultado = (conductividad * area * diferenciaTemperatura) / distancia;
        } else {
            resultado = "Por favor, ingrese todos los valores necesarios.";
        }
    } else if (variableFourier === "conductividad") {
        if (tasaCalor && area && diferenciaTemperatura && distancia) {
            resultado = (tasaCalor * distancia) / (area * diferenciaTemperatura);
        } else {
            resultado = "Por favor, ingrese todos los valores necesarios.";
        }
    } else if (variableFourier === "area") {
        if (tasaCalor && conductividad && diferenciaTemperatura && distancia) {
            resultado = (tasaCalor * distancia) / (conductividad * diferenciaTemperatura);
        } else {
            resultado = "Por favor, ingrese todos los valores necesarios.";
        }
    } else if (variableFourier === "diferenciaTemperatura") {
        if (tasaCalor && conductividad && area && distancia) {
            resultado = (tasaCalor * distancia) / (conductividad * area);
        } else {
            resultado = "Por favor, ingrese todos los valores necesarios.";
        }
    } else if (variableFourier === "distancia") {
        if (tasaCalor && conductividad && area && diferenciaTemperatura) {
            resultado = (conductividad * area * diferenciaTemperatura) / tasaCalor;
        } else {
            resultado = "Por favor, ingrese todos los valores necesarios.";
        }
    }

    document.getElementById("resultadoConduccion").innerHTML = `Resultado: ${resultado ? resultado.toPrecision(15) : "Error en el cálculo"}`;
}

// Conversor de unidades
function convertirUnidad() {
    const valor = parseFloat(document.getElementById("valorConvertir").value);
    const unidadOrigen = document.getElementById("unidadOrigen").value;
    const unidadDestino = document.getElementById("unidadDestino").value;
    let resultado;

    if (unidadOrigen === unidadDestino) {
        resultado = valor;
    } else if (unidadOrigen === "metros" && unidadDestino === "centimetros") {
        resultado = valor * 100;
    } else if (unidadOrigen === "centimetros" && unidadDestino === "metros") {
        resultado = valor / 100;
    } else if (unidadOrigen === "metros cuadrados" && unidadDestino === "centimetros cuadrados") {
        resultado = valor * 10000;
    } else if (unidadOrigen === "centimetros cuadrados" && unidadDestino === "metros cuadrados") {
        resultado = valor / 10000;
    }
    // Aquí agregar más conversiones como se necesiten

    // Conversiones adicionales
    else if (unidadOrigen === "julios" && unidadDestino === "calorias") {
        resultado = valor / 4.184;
    } else if (unidadOrigen === "calorias" && unidadDestino === "julios") {
        resultado = valor * 4.184;
    } else if (unidadOrigen === "julios" && unidadDestino === "kilocalorias") {
        resultado = valor / 4184;
    } else if (unidadOrigen === "kilocalorias" && unidadDestino === "julios") {
        resultado = valor * 4184;
    } else if (unidadOrigen === "celsius" && unidadDestino === "fahrenheit") {
        resultado = (valor * 9/5) + 32;
    } else if (unidadOrigen === "fahrenheit" && unidadDestino === "celsius") {
        resultado = (valor - 32) * 5/9;
    } else if (unidadOrigen === "celsius" && unidadDestino === "kelvin") {
        resultado = valor + 273.15;
    } else if (unidadOrigen === "kelvin" && unidadDestino === "celsius") {
        resultado = valor - 273.15;
    } else if (unidadOrigen === "celsius" && unidadDestino === "rankine") {
        resultado = (valor + 273.15) * 9/5;
    } else if (unidadOrigen === "rankine" && unidadDestino === "celsius") {
        resultado = (valor - 491.67) * 5/9;
    }
    // Agregar más conversiones según sea necesario

    document.getElementById("resultadoConversion").innerHTML = `Resultado de conversión: ${resultado}`;
}