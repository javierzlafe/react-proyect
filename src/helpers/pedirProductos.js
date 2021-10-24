import { stock } from "../data/stock"


export const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(stock)
            // reject("Rechazado")
        }, 1000)

    })
}