// Simulador iteractivo para comprar juegos en steam o tarjetas de regalo
class Juego {
    //constructor
    constructor(juego, precio, stock, genero) {
        this.juego = juego;
        this.precio = precio;
        this.stock = stock;
        this.genero = genero;
        this.cvendida = 0;
    }
    // método
    descripcion() {
        return `Juego: ${this.juego}
        \nPrecio: ${this.precio}
        \nStock: ${this.stock}
        \nGénero: ${this.genero}`
    }
}

class Factura {
    constructor(precio) {
        this.precio = precio;
    }
    precio_normal() {
        return this.precio;
    }
    precio_con_igv() {
        return this.precio + (this.precio * 0.18);
    }
}


const JuegosLista = [];

JuegosLista.push(new Juego("CSGO", 90, 150, "Acción"))
JuegosLista.push(new Juego("Destiny 2", 50, 350, "Acción"))
JuegosLista.push(new Juego("Dota 2", 60, 200, "Acción"))
JuegosLista.push(new Juego("Warframe", 200, 400, "Acción"))
JuegosLista.push(new Juego("Gta V", 150, 100, "Acción - Aventura"))
JuegosLista.push(new Juego("PUBG", 120, 330, "Acción - Battle Royale"))
JuegosLista.push(new Juego("Doki Doki", 55, 750, "Roleplay"))

const TarjetasLista = [];

TarjetasLista.push(new Juego("ROBLOX", 90, 150, "FPS"))
TarjetasLista.push(new Juego("Steam", 50, 350, "-"))
TarjetasLista.push(new Juego("Minecraft", 60, 200, "Aventura"))
TarjetasLista.push(new Juego("Valorant", 200, 400, "FPS"))
TarjetasLista.push(new Juego("Google Play", 150, 100, "-"))
TarjetasLista.push(new Juego("PS4", 20, 330, "-"))
TarjetasLista.push(new Juego("XBOX", 5, 750, "-"))

let rta = " ";

let carroUser = [];

let cajaFiltro = [];


let i = 0;

while (!(rta == "ESC")) {
    let recibidor = Number(prompt("Escoja una de las dos opciones\n1.- Juegos de steam\n2.- Tarjetas de regalo"));
    if (recibidor == 1) {
        for (const juego of JuegosLista) {
            alert(juego.descripcion())
        }
        let presupuesto = Number(prompt("Ingrese su presupuesto de 10$ a 500$"));
        if ((presupuesto <= 100) && (presupuesto >= 50)) {
            for (const juego of JuegosLista) {
                if(juego.precio <= presupuesto){
                    alert((i+ 1) + ") " + juego.descripcion())
                    cajaFiltro.push((i+ 1) + ") " + juego.precio + "$ - " + juego.juego + " - STOCK -> " + juego.stock)
                    i ++
                }
            }
            let op1 = Number(prompt ("Diga el número del producto que quiere adquirir: \n" + cajaFiltro.join("\n")));
            if ((op1  <= cajaFiltro.length)) {
                alert("Gracias por su compra!");
                carroUser.push(cajaFiltro[op1 + 1])
            } else {
                alert("Ingrese una cantidad válida");
            }
        } else if (presupuesto >= 100 && presupuesto <= 500) {
            for (const juego of JuegosLista) {
                if(juego.precio <= presupuesto){
                    alert((i+ 1) + ") " + juego.descripcion())
                    cajaFiltro.push((i+ 1) + ") " + juego.precio + "$ - " + juego.juego + " - STOCK -> " + juego.stock)
                    i ++
                }
            }
            let op1 = Number(prompt ("Diga el número del producto que quiere adquirir: \n" + cajaFiltro.join("\n")));
            //switch agregar carro de compras y mostrar factura
            if ((op1  <= cajaFiltro.length)) {
                alert("Gracias por su compra!");
                carroUser.push(cajaFiltro[op1 + 1])
            } else {
                alert("Ingrese una cantidad válida");
            }
        }
    } else if (recibidor == 2) {
        for (const juego of TarjetasLista) {
            alert(juego.descripcion())
        }
        let presupuesto = Number(prompt("Ingrese su presupuesto de 10$ a 200$"));
        if ((presupuesto <= 100) && (presupuesto >= 5)) {
            for (const juego of TarjetasLista) {
                if(juego.precio <= presupuesto){
                    alert((i+ 1) + ") " + juego.descripcion())
                    cajaFiltro.push((i+ 1) + ") " + juego.precio + "$ - " + juego.juego + " - STOCK -> " + juego.stock)
                    i ++
                }
            }
            let op1 = Number(prompt ("Diga el número del producto que quiere adquirir: \n" + cajaFiltro.join("\n")));
            if ((op1  <= cajaFiltro.length)) {
                alert("Gracias por su compra!");
                carroUser.push(cajaFiltro[op1 + 1])
            } else {
                alert("Ingrese una cantidad válida");
            }
        } else if ((presupuesto >= 100 && presupuesto <= 200)) {
            for (const juego of TarjetasLista) {
                if(juego.precio <= presupuesto){
                    alert((i+ 1) + ") " + juego.descripcion())
                    cajaFiltro.push((i+ 1) + ") " + juego.precio + "$ - " + juego.juego + " - STOCK -> " + juego.stock)
                    i ++
                }
            }
            let op1 = Number(prompt ("Diga el número del producto que quiere adquirir: \n" + cajaFiltro.join("\n")));
            //switch agregar carro de compras y mostrar factura
            if ((op1  <= cajaFiltro.length)) {
                alert("Gracias por su compra!");
                carroUser.push(cajaFiltro[op1 + 1])
            } else {
                alert("Ingrese una cantidad válida");
            }
        }      
    } else {
        alert("Porfavor ingrese una cantidad válida")
    }
    rta = prompt("Escriba ESC para salir o cualquier otro carácter para continuar");
}
