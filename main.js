let stockColchones = 200
let valorColchonesEfectivo = 30000
let credito
let debito
let cuotas
let cantidadCompra = parseInt(prompt("Ingrese la cantidad de colchones"))
let totalCredito = ((((valorColchonesEfectivo  * cantidadCompra)* 25)/ 100) + valorColchonesEfectivo*cantidadCompra)
/*proceso*/
if ((stockColchones < cantidadCompra)) {
    console.log("Sin stock")
} else {
    (stockColchones >= cantidadCompra)
    let formaPago = (prompt("Ingrese forma de pago"))
    switch (formaPago) {
        case "credito":
            console.log(totalCredito)

        case "debito":
            console.log(valorColchonesEfectivo * cantidadCompra)

        case "efectivo":
            console.log(valorColchonesEfectivo * cantidadCompra)

        default:
            break;
    }
}





