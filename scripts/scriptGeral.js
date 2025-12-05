const input = document.getElementById("textoDigitado")

input.focus()
input.addEventListener("blur", function() {
    input.focus()
})



// alert("oi")



const displayTempo = document.getElementById("tempo")
const iniciarTimer = document.getElementById("iniciarTempo")

let tempo = 0.0

iniciarTimer.addEventListener("click", function() {
    // alert("foi")
    tempo = 0.0
    window.intervalo = setInterval(() => {
        displayTempo.innerText = tempo.toFixed(1) + "s"
        tempo = tempo + 0.1

        if (tempo > 60.1) {
            clearInterval(intervalo)
        }
    }, 100);
})




