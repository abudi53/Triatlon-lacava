
function getTime(time) {// PARA OBTENER TIEMPO EN FORMATO HH:MM:SS
    return time.split(":");
}

function caminar(tiempo) {//************CAMINATA
    var h = parseInt(tiempo[0])
    var m = parseInt(tiempo[1])
    var s = parseInt(tiempo[2])
    var distancia = 0.001;//DISTANCIA 10KM
    var dRecorrida = 0;
    var vMax = 0.00194444;//VELOCIDAD MAXIMA 7KM/H-0.00194 KM/S
    var tllegada = 0;


    var intervalo = setInterval(() => {

        if (s === 59) {
            s = 0;
            if (m === 59) {
                m = 0;
                if (h === 23) {//************ENCARGADO DEL TIEMPO */
                    h = 0
                }else{ h += 1}
            }else{ m += 1}
        }else{s += 1}
    
        var vrandom = parseFloat((Math.random() * vMax).toPrecision(3));//VELOCIDAD RANDOM
        dRecorrida += vrandom;
        console.log(dRecorrida.toPrecision(4)); //DISTANCIA RECORRIDA
        console.log(vrandom * 3600); //VELOCIDAD/S
        console.log(h + ":" + m + ":" + s); //TIEMPO TRANSCURRIDO
    
        if (vrandom * 3600 < 1) {
            console.log("***DESCALIFICADO***");
            clearInterval(intervalo);
        }
        if (dRecorrida >= distancia) {
            var tllegada = h + ":" + m + ":" + s;
            console.log("HAS LLEGADO A LA META DE LA CAMINATA EN: " + tllegada);
            clearInterval(intervalo);
            natacion(tllegada.split(":"));    
        }


    }, 1000);
    
    
}

function natacion(tiempo) { //**********NATACION */
    var h = parseInt(tiempo[0])
    var m = parseInt(tiempo[1])
    var s = parseInt(tiempo[2])
    var distancia = 0.001;
    var dRecorrida = 0;
    var vMax = 0.0017;


    var intervalo = setInterval(() => {
        if (s === 59) {
            s = 0;
            if (m === 59) {
                m = 0;
                if (h === 23) {
                    h = 0
                }else{ h += 1}
            }else{ m += 1}
        }else{s += 1}
    
        var vrandom = parseFloat((Math.random() * vMax).toPrecision(3));
        dRecorrida += vrandom;
        console.log(dRecorrida.toPrecision(4)); //DISTANCIA RECORRIDA
        console.log(vrandom * 3600); //VELOCIDAD/S
        console.log(h + ":" + m + ":" + s); //TIEMPO TRANSCURRIDO
    
        if (vrandom * 3600 < 1) {
            console.log("***DESCALIFICADO***");
            clearInterval(intervalo);
        }
        if (dRecorrida >= distancia) {
            clearInterval(intervalo);   
            var tllegada = h + ":" + m + ":"+ s
            console.log("HAS LLEGADO A LA META DEL CIRCUITO DE NATACION EN: " + tllegada);
            ciclismo(tllegada.split(":"));
        }


    }, 1000);   
}

function ciclismo(tiempo) {//************CICLISMO */
    var h = parseInt(tiempo[0])
    var m = parseInt(tiempo[1])
    var s = parseInt(tiempo[2])
    var distancia = 0.1;
    var dRecorrida = 0;
    var vMax = 0.0125;


    var intervalo = setInterval(() => {
        if (s === 59) {
            s = 0;
            if (m === 59) {
                m = 0;
                if (h === 23) {
                    h = 0
                }else{ h += 1}
            }else{ m += 1}
        }else{s += 1}
    
        var vrandom = parseFloat((Math.random() * vMax).toPrecision(3));
        dRecorrida += vrandom;
        console.log(dRecorrida.toPrecision(4)); //DISTANCIA RECORRIDA
        console.log(vrandom * 3600); //VELOCIDAD/S
        console.log(h + ":" + m + ":" + s); //TIEMPO TRANSCURRIDO
    
        if (vrandom * 3600 < 1) {
            console.log("***DESCALIFICADO***");
            clearInterval(intervalo);
        }
        if (dRecorrida >= distancia) {
            clearInterval(intervalo);   
            var tllegada = h + ":" + m + ":"+ s
            console.log("HAS LLEGADO EN EL TIEMPO: " + tllegada);
        }


    }, 1000);   
}

function maraton() {//PRINCIPAL
    var tiempo = getTime(prompt())
    console.log(tiempo);
    caminar(tiempo)
}
maraton()