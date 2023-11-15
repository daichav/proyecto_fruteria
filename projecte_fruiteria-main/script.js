
let totalCompra = 0
let mensajeCompra = ""

// cuando se haga click en uno de los elementos pase algo, esto se llama evento o event
function comprar(fruta, precio, unidad) {

    // pedimos al cliente qué cantidad desea comprar
    let cantidad = prompt(`¿Qué cantidad de ${fruta} quiere?`)

    // ***IMPORTANTE*** : Falta la validación del dato que escribe el usuario
    // *** No deberiamos aceptar cantidades menores de cero ni texto, ni espacios
    if (cantidad <= 0 || isNaN(cantidad) || null === cantidad) {
        let mensajeCompra = "Por favor, ingrese un número valido para continuar su compra."
        alert(mensajeCompra)
    } else{ 


    let parcialCompra = precio * cantidad
    // PARA REDONDEAR A DOS DECIMALES
    parcialCompra = parcialCompra.toFixed(2)
    // redondear a dos decimales
    // alert(typeof parcialCompra)
    // alert(`${precio} x ${cantidad} = ${parcialCompra}`)
    totalCompra = totalCompra + Number(parcialCompra)
    // alert(typeof totalCompra)
    // alert(totalCompra)
    cantidad = parceFloat(cantidad).toFixed(2)//parceFloat transforma el string a numero

    document.getElementById("pendiente").innerText = "Está comprando lo siguiente:"
    document.getElementById ("carrito").innerHTML += `<p class="parcialCompra">${fruta} : 
    ${cantidad} ${unidad} x ${precio} €/${unidad} = ${parcialCompra} €</p>`

    document.getElementById("totalCompra").innerHTML = `<p id="finalCompra"> Total : ${totalCompra.toFixed(2)} €</p>`
    }
}
