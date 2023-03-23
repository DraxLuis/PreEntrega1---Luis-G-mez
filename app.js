const seccion_productos = document.getElementById("contenedor-juegos");
const seccion_carrito = document.getElementById("contenedor-carrito");
let botonconfirmar = document.getElementById("confirmarboton");

class Juego {
    //constructor
    constructor(juego, precio, stock, genero, img, id) {
        this.juego = juego;
        this.precio = precio;
        this.stock = stock;
        this.genero = genero;
        this.cvendida = 0;
        this.img = img;
        this.id = id;
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

JuegosLista.push(new Juego("CSGO", 90, 150, "Acción", "https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1668125812", 1))
JuegosLista.push(new Juego("Destiny 2", 50, 350, "Acción", "https://elcomercio.pe/resizer/ON6nse48U_LHEnuir6bogHFWuXs=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/MIOBUOEBBZF2NNNTKGE7U2V7GU.jpg", 2))
JuegosLista.push(new Juego("Dota 2", 60, 200, "Acción", "https://cdn.cloudflare.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1678300512", 3))
JuegosLista.push(new Juego("Warframe", 200, 400, "Acción", "http://n9e5v4d8.ssl.hwcdn.net/images/longlanding/warframe-metacard.png", 4))
JuegosLista.push(new Juego("Gta V", 150, 100, "Acción - Aventura", "https://e.rpp-noticias.io/normal/2022/09/06/381638_1309936.jpg", 5))
JuegosLista.push(new Juego("PUBG", 120, 330, "Acción - Battle Royale", "https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-offer-nyz0s.jpg", 6))
JuegosLista.push(new Juego("Doki Doki", 55, 750, "Roleplay", "https://www.internetmatters.org/wp-content/uploads/2018/06/Doki.Doki-1200.png", 7))
JuegosLista.push(new Juego("Fortnite", 100, 750, "Battle Royale", "https://i.ytimg.com/vi/UqUXUpJdYcA/maxresdefault.jpg", 8))
JuegosLista.push(new Juego("Resident Evil 3", 155, 750, "Horror", "https://f.rpp-noticias.io/2020/04/14/re3remake_927450.jpg", 9))
JuegosLista.push(new Juego("Halo", 95, 750, "Acción", "https://compass-ssl.xbox.com/assets/74/69/7469c0b6-7b21-423f-9bf0-ea08c6bca469.jpg?n=Halo-Franchise-2020_Super-Hero-1400_1920x1080_02.jpg", 10))
JuegosLista.push(new Juego("Resident evil 2", 55, 750, "Horror", "https://image.api.playstation.com/vulcan/ap/rnd/202206/0608/9cJzlUE7sOpwvrCmOzxubniq.jpg", 11))
JuegosLista.push(new Juego("Portal 2", 87, 750, "Aventura", "https://cdn.cloudflare.steamstatic.com/steam/apps/620/header.jpg", 12))
JuegosLista.push(new Juego("TF2", 133, 750, "Acción", "https://www.gamerfocus.co/wp-content/uploads/2020/10/tf2up.png", 13))
JuegosLista.push(new Juego("Apex Legends", 230, 750, "Acción", "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg", 14))
JuegosLista.push(new Juego("Stray", 122, 750, "Acción", "https://prod.assets.earlygamecdn.com/images/Stray1A.jpg?mtime=1664787525", 15))

const juegosJson = JSON.stringify(JuegosLista);
localStorage.setItem("Juegos", juegosJson)

const TarjetasLista = [];

TarjetasLista.push(new Juego("ROBLOX", 90, 150, "FPS"))
TarjetasLista.push(new Juego("Steam", 50, 350, "-"))
TarjetasLista.push(new Juego("Minecraft", 60, 200, "Aventura"))
TarjetasLista.push(new Juego("Valorant", 200, 400, "FPS"))
TarjetasLista.push(new Juego("Google Play", 150, 100, "-"))
TarjetasLista.push(new Juego("PS4", 20, 330, "-"))
TarjetasLista.push(new Juego("XBOX", 5, 750, "-"))



JuegosLista.forEach(juego => {
    seccion_productos.innerHTML += `            
    <div class="col-3">
    <div class="card" style="width: 18rem;">
      <img src=${juego.img} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${juego.juego}</h5>
        <p class="card-text text-center">$${juego.precio}</p>
        <a href="#" class="btn btn-dark d-flex justify-content-center text-light" id="juego${juego.id}">Comprar</a>
      </div>
    </div>
  </div>
`
})

let carritoLista = [];

botonconfirmar.addEventListener("click", () =>{
    localStorage.removeItem("CarritoStorage");
    seccion_carrito.innerHTML = "";
    carritoLista = [];
})

const obtenerCarrito = localStorage.getItem("CarritoStorage");
if (obtenerCarrito) {
    carritoLista = JSON.parse(obtenerCarrito);
    seccion_carrito.innerHTML = "";
        carritoLista.forEach(producto => {
        seccion_carrito.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src= ${producto.img} class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-5 d-flex">
                    <div class="card-body w-200 letra-modal">
                        <h5 class="card-title">${producto.juego}</h5>
                        <p class="card-text">$${producto.precio}</p>
                    </div>
                    <form class="botones-formulario">
                        <input type="number" id="numero" name="numero" value="0">
                    </form>
                </div>
            </div>
        </div>
        `;
    });

} else{
    carritoLista = [];
}
JuegosLista.forEach(juego => {
    const listaCarro = document.getElementById(`juego${juego.id}`);
    listaCarro.addEventListener("click", () => {
        carritoLista.push(juego)
        const carritoenjson = JSON.stringify(carritoLista);
        localStorage.setItem("CarritoStorage", carritoenjson);
        const obtenerCarrito = localStorage.getItem("CarritoStorage")
        if (obtenerCarrito) {
            carritoLista = JSON.parse(carritoenjson);
        } else {
            carritoLista = [];
        }
        seccion_carrito.innerHTML = ""
        carritoLista.forEach(producto => {
            seccion_carrito.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
     <div class="col-md-4">
      <img src= ${producto.img} class="img-fluid rounded-start" alt="...">
        </div>
    <div class="col-md-5 d-flex">
      <div class="card-body w-200 letra-modal">
        <h5 class="card-title">${producto.juego}</h5>
        <p class="card-text">$${producto.precio}</p>
      </div>
      <form class="botones-formulario">
      <input type="number" id="numero" name="numero" value="0">
    </form>
    </div>
  </div>
</div>
            `
        })
    })
})


