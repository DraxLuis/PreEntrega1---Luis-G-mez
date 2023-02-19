// Simulador iteractivo para comprar juegos en steam o tarjetas de regalo

let rta = " ";
alert("Nuestros juegos disponibles son los siguientes: \n1.- CSGO: Global Offensive\n2.- Destiny 2\n3.-Dota 2\n4.- Warframe\n5.- GTA V\n6.-PUBG\n7.- Doki Doki")
alert("Nuestras tarjetas de regalo disponibles son las siguientes: \n1.ROBLOX\n2.- Steam 2\n3.- Minecraft\n4.- Valorant\n5.- Google Play\n6.-PS4\n7.- Xbox")

while (!(rta == "ESC")) {
    let recibidor = Number(prompt("Escoja una de las dos opciones\n1.- Juegos de steam\n2.- Tarjetas de regalo"));
    if (recibidor == 1) {
        let presupuesto = Number(prompt("Ingrese su presupuesto de 10$ a 500$"));
        if ((presupuesto <= 100) && (presupuesto >= 50)) {
            let op1 = Number(prompt("Escoja uno de nuestros juegos:\n1.- CSGO: Global Offensive\n2.- Destiny 2\n3.-Dota 2"));
            if ((op1 == 1 || op1 == 2 || op1 == 3)) {
                alert("Gracias por su compra!");
            } else {
                alert("Ingrese una cantidad válida");
            }
        } else if (presupuesto >= 100 && presupuesto <= 500) {
            let op1 = Number(prompt("Escoja uno de nuestros juegos:\n4.- Warframe\n5.- GTA V\n6.-PUBG\n7.- Doki Doki"));
            if ((op1 == 4 || op1 == 5 || op1 == 6 || op1 == 7)) {
                alert("Gracias por su compra!")
            } else {
                alert("Ingrese una cantidad válida");
            }
        } else {
            alert("No tiene el presupuesto suficiente");
        }
    }else if(recibidor == 2){
        let presupuesto = Number(prompt("Ingrese su presupuesto de 10$ a 100$"));
        if ((presupuesto <= 50) && (presupuesto >= 10)) {
            let op1 = Number(prompt("Escoja una de nuestras tarjetas de regalo\n1.ROBLOX\n2.- Steam 2\n3.- Minecraft"));
            if ((op1 == 1 || op1 == 2 || op1 == 3)) {
                alert("Gracias por su compra!");
            } else {
                alert("Ingrese una cantidad válida");
            }
        } else if (presupuesto >= 50 && presupuesto <= 100) {
            let op1 = Number(prompt("Escoja una de nuestras tarjetas de regalo\n4.- Valorant\n5.- Google Play V\n6.-PS4\n7.- Xbox"));
            if ((op1 == 4 || op1 == 5 || op1 == 6)) {
                alert("Gracias por su compra!")
            } else {
                alert("Ingrese una cantidad válida");
            }
        } else {
            alert("No tiene el presupuesto suficiente");
        }
    }else {
        alert("Porfavor ingrese una cantidad válida")
    }
    rta = prompt("Escriba ESC para salir o cualquier otro carácter para continuar");
}
