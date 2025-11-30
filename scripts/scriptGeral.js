const input = document.getElementById("textoDigitado")

input.focus()
input.addEventListener("blur", function() {
    input.focus()
})



// alert("oi")



const displayTempo = document.getElementById("tempo")
const iniciarTimer = document.getElementById("iniciarTempo")

let tempo = 10.0

iniciarTimer.addEventListener("click", function() {
    // alert("foi")
    tempo = 10.0
    const intervalo = setInterval(() => {
        displayTempo.innerText = tempo.toFixed(1)
        tempo = tempo - 0.1

        if (tempo < 0) {
            clearInterval(intervalo)
        }
    }, 100);
})




