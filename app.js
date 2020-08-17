
// INPUTS
let inputs = document.querySelectorAll('input')
let numeroUno = document.querySelector('input[name=numeroUno]')
let numeroDos = document.querySelector('input[name=numeroDos]')
let numeroTres = document.querySelector('input[name=numeroTres]')
let numeroCuatro = document.querySelector('input[name=numeroCuatro]')
// BOTONES
let rendirse = document.querySelector('#rendirse')
let reiniciar = document.querySelector('#reiniciar')
let arriesgar = document.querySelector("#arriesgar")
let noJugar = document.querySelector('#noJugar')

// VARIABLES GLOBALES
let vidas = 9
let numeroJuagadoCompleto = numeroUno.value + numeroDos.value + 
numeroTres.value + numeroCuatro.value
// ARREGLO PARA CREACIÓN DE TABLA
let numerosFila = []


//NUMEROS ALEATORIOS
var numeroAleatorioUno = Math.floor(Math.random() * 10); 
var numeroAleatorioDos = Math.floor(Math.random() * 10); 
var numeroAleatorioTres = Math.floor(Math.random() * 10); 
var numeroAleatorioCuatro = Math.floor(Math.random() * 10); 

//PARA EVITAR REPETICIÓN DE DIGITOS EN EL NUMERO ALEATORIO
while (numeroAleatorioUno == 0) {
    var numeroAleatorioUno = Math.floor(Math.random() * 10);     
} while (numeroAleatorioUno == numeroAleatorioDos) {
    var numeroAleatorioDos = Math.floor(Math.random() * 10);     
} while (numeroAleatorioUno == numeroAleatorioTres || 
        numeroAleatorioDos == numeroAleatorioTres){
    var numeroAleatorioTres = Math.floor(Math.random() * 10); 
} while (numeroAleatorioUno == numeroAleatorioCuatro || 
        numeroAleatorioDos == numeroAleatorioCuatro || 
        numeroAleatorioTres == numeroAleatorioCuatro){
    var numeroAleatorioCuatro = Math.floor(Math.random() * 10); 
} 

//NUMERO ALEATORIO COMPLETO
let numeroAletorioCompleto = parseFloat(""+ numeroAleatorioUno + numeroAleatorioDos + 
                             numeroAleatorioTres + numeroAleatorioCuatro);


//AL CARGAR PÁGINA
function aJugar(){
    let audioJugar = new Audio('Comienza.wav')
    audioJugar.play();
}

// AL RENDIRSE
rendirse.addEventListener("click", e=>{
    e.preventDefault();
    rendirse()
})

rendirse = function(){
    var perdioGano = document.querySelector("#perdioGano")
    perdioGano.innerHTML = `El número era ${numeroAletorioCompleto}`
    perdioGano.setAttribute('class','alert alert-danger')
    let numeroUno = document.querySelector('input[name=numeroUno]').disabled = true;
    let numeroDos = document.querySelector('input[name=numeroDos]').disabled = true;
    let numeroTres = document.querySelector('input[name=numeroTres]').disabled = true;
    let numeroCuatro = document.querySelector('input[name=numeroCuatro]').disabled = true;
    let arriesgar = document.querySelector('#arriesgar').disabled = true
    let audioRendirse = new Audio('Rendirse.wav')
    audioRendirse.play();
}


// AL REINICIAR
reiniciar.addEventListener("click", e=>{
    e.preventDefault
    location.reload();
    
})


  
// VALIDACIÓN NUMÉRICA PARA INPUTS
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keypress', e=>{
        var char = e.keyCode;
        if (char < 48 || char > 57) {
            e.preventDefault();
  
        }     
    }) 
}

// AL ARRIESGAR
arriesgar.addEventListener("click", e=>{
    e.preventDefault();
   
// VALIDACIÓN DE NO REPETICIÓN
    if(numeroUno.value === numeroDos.value || 
      numeroUno.value === numeroTres.value || 
      numeroUno.value === numeroCuatro.value){
        alert("No leíste la pista? Sin repeticiones!")
    }if(numeroDos.value === numeroTres.value ||
        numeroDos.value === numeroCuatro.value){
        alert("No leíste la pista? Sin repeticiones!")
    }if(numeroTres.value === numeroCuatro.value){
        alert("No leíste la pista? Sin repeticiones!")
    } 
    
    //EJECUCIÓN DE COORDENADAS
    var alerta =  document.querySelector('#alerta')
    alerta.setAttribute('class','alert alert-primary')
    var regulares = document.querySelector('#regulares')
    regulares.innerHTML =  numeroRegular()
    var buenos = document.querySelector('#buenos')
    buenos.innerHTML =  numeroBueno()


    // CONSTRUCTOR
    function nuevoNumero (numeroUno, numeroDos, numeroTres, numeroCuatro){
    this.numeroUno = numeroUno.value
    this.numeroDos = numeroDos.value
    this.numeroTres = numeroTres.value
    this.numeroCuatro = numeroCuatro.value
    }
    
    intento = new nuevoNumero (numeroUno, numeroDos, numeroTres, numeroCuatro)
    numerosFila.push(intento)
    
    // CONTADOR DE INTENTOS
    let veces = 1

    // TABLA
    mostrarTabla = function(){
        document.querySelector('#tabla').classList.remove("d-none")
        document.querySelector("#tbody").innerHTML = ""
        numerosFila.forEach((value) =>{
            var tR = document.createElement('tr')
            var contador = document.createElement('th')
            var historial = document.createElement('td')

            contador.innerHTML = veces++
            historial.innerHTML = value.numeroUno + value.numeroDos + value.numeroTres + value.numeroCuatro

            document.querySelector("#tbody").appendChild(tR)
            document.querySelector("#tbody").appendChild(contador)
            document.querySelector("#tbody").appendChild(historial)
        })
    }

    mostrarTabla()

    //VIDAS
    let restarVidas = document.querySelector('#vidas')
    restarVidas.innerHTML = `${vidas--}   CHANCES`

    if(vidas < 3){
        restarVidas.classList.remove("badge-primary")
        restarVidas.classList.add("badge-danger")
    } if(vidas < 0 && numeroAletorioCompleto !=  (numeroUno.value + numeroDos.value + 
        numeroTres.value + numeroCuatro.value)){
        rendirse()
    }
})
    

/*
  ----------------------
   MÉTODOS "COORDENADAS"
  ----------------------
*/



// NUMERO REGULAR
var regulares = 0
var regularesA = 0
var regularesB = 0
var regularesC = 0
var regularesD = 0

numeroRegular = function(){
    if(numeroUno.value == numeroAleatorioUno ||
        numeroUno.value == numeroAleatorioDos ||
        numeroUno.value == numeroAleatorioTres ||
        numeroUno.value == numeroAleatorioCuatro && 
        regularesA <= 1) 
            {regularesA = 1
    }else{regularesA = 0}
     
    if(numeroDos.value == numeroAleatorioUno ||
        numeroDos.value == numeroAleatorioDos ||
        numeroDos.value == numeroAleatorioTres ||
        numeroDos.value == numeroAleatorioCuatro &&
        regularesB <= 1)
            {regularesB = 1
    }else{regularesB = 0}
     
    if(numeroTres.value == numeroAleatorioUno ||
        numeroTres.value == numeroAleatorioDos ||
        numeroTres.value == numeroAleatorioTres ||
        numeroTres.value == numeroAleatorioCuatro &&
        regularesC <= 1)
            {regularesC = 1
    }else{regularesC = 0}

    if(numeroCuatro.value == numeroAleatorioUno ||
        numeroCuatro.value == numeroAleatorioDos ||
        numeroCuatro.value == numeroAleatorioTres ||
        numeroCuatro.value == numeroAleatorioCuatro &&
        regularesD <= 1)
            {regularesD = 1
    }else{regularesD = 0}
    
   var regulares = regularesA + regularesB 
                 + regularesC + regularesD;

    if(regulares == 0){
        let risas = new Audio('Risas.wav')
        risas.play();
    }
    return `Cantidad de números regulares: ${regulares}`
    
}



// NUMERO BUENO


var buenosA = 0
var buenosB = 0
var buenosC = 0
var buenosD = 0



numeroBueno = function(){
 
    
    if(numeroAletorioCompleto ==  (numeroUno.value + numeroDos.value + 
        numeroTres.value + numeroCuatro.value)){
        let arriesgar = document.querySelector('#arriesgar').disabled = true
        let rendirse = document.querySelector('#rendirse').disabled = true
        let audioGanaste = new Audio('Ganar.mp3')
        audioGanaste.play();
        var perdioGano = document.querySelector("#perdioGano")
        perdioGano.innerHTML = `GANASTE!!!`
        perdioGano.setAttribute('class','alert alert-success alert-heading"')
        return ""
   

            }else{ if(numeroAleatorioUno != numeroUno.value &&
            numeroAleatorioDos != numeroDos.value &&
            numeroAleatorioTres != numeroTres.value&&
            numeroAleatorioCuatro != numeroCuatro.value
            ){return "No hay números buenos"; 
                }else{ if(numeroAleatorioUno == numeroUno.value){
                    buenosA = numeroUno.value}
                    else{ buenosA = ""}
                    if(numeroAleatorioDos == numeroDos.value){
                    buenosB = numeroDos.value}
                    else{ buenosB = ""}
                    if(numeroAleatorioTres == numeroTres.value){
                    buenosC = numeroTres.value}
                    else{ buenosC = ""}
                    if(numeroAleatorioCuatro == numeroCuatro.value){
                    buenosD = numeroCuatro.value}
                    else{ buenosD = ""}
                    return `Los siguientes números son buenos: ${buenosA} ${buenosB} ${buenosC} ${buenosD} `
                    }    

            }

}


