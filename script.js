let boton = document.getElementById("boton")
boton.addEventListener("click", function (event) {
    console.log("me tocaste uwu")
    let selector = document.getElementById("select").value
    console.log("Seleccionaste el numero " + selector)
    switch (selector) {
        case "1":
            alert("Escojiste la 1")
            break

        case "2":
            alert("Escojiste la 2")
            break

        case "3":
            alert("Escojiste la 3")
            break

        case "4":
            alert("Escojiste la 4")
            break

        case "5":
            alert("Escojiste la 5")
            break

        case "6":
            alert("Escojiste la 6")
            break

        case "7":
            alert("Escojiste la 7")
            break

        case "8":
            alert("Escojiste la 8")
            break

        case "9":
            alert("Escojiste la 9")
            break

        case "10":
            alert("Escojiste la 10")
            break

        default:
            alert("Opcion no valida")
    }
})