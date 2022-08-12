// localStorage.clear();

fetch("../pizzas.json")
    .then( (response) => response.json() )
    .then( (data) => {
        data.forEach( (pizza) => {
            const div = document.createElement("div");
            const h5 = document.createElement("h5");
            h5.innerHTML = `${pizza.nombre}`;
            const p = document.createElement("p");
            p.innerHTML = `$${pizza.precio}`;
            const boton = document.createElement("button");
            boton.innerText = "Agregar al carrito";
            boton.addEventListener("click", () => {
                    let carrito = [];
                    const carritoJson = localStorage.getItem("carrito");
                    if(carritoJson) {
                        carrito = JSON.parse(carritoJson);
                    }
                    carrito.push(pizza);
                    localStorage.setItem("carrito", JSON.stringify(carrito));
                    mostrarCarrito();
                    Toastify({
                        text: "Se agregó el producto al carrito",
                        duration: 2000,
                        style: {
                            background: "lightblue",
                            color: "black",
                             border: "2px solid black",
                        }
                    }).showToast();
                }   
            );
            
            div.append(h5, p, boton);
            
            productos.append(div);
            
            div.className = "contenedor";
        });

    })

    const div = document.getElementById("carro");
    div.className = "carro";

    const productos = document.getElementById("productos");

    function mostrarCarrito () {
        const ul = document.getElementById("carritoDeProductos");
        ul.innerHTML = "";
        const carritoJson = localStorage.getItem("carrito");
        const carrito = JSON.parse(carritoJson);
        carrito.forEach( (pizza) => {
            const li = document.createElement("li");
            const pNombre = document.createElement("p");
            pNombre.innerHTML = `Gusto: ${pizza.nombre}`;
            const pPrecio = document.createElement("p");
            pPrecio.innerHTML = `Precio: $${pizza.precio}`;
            li.append(pNombre, pPrecio);
            ul.append(li);
        })
    }

    mostrarCarrito();


