//Despleegar Menu Filtro//
const btnMenu = document.querySelector(".boton");
const menu = document.querySelector(".submenu__fundas");
btnMenu.addEventListener("click", () => {
    menu.classList.toggle("activado");
    btnMenu.classList.toggle("animado");
});
const btnMenuMotorola = document.querySelector(".boton2");
const menuMotorola = document.querySelector("#motorola__submenu");
btnMenuMotorola.addEventListener("click", () => {
    menuMotorola.classList.toggle("activado");
    btnMenuMotorola.classList.toggle("animado");
});
const btnMenuHuawei = document.querySelector(".boton3");
const menuHuawei = document.querySelector("#huawei__submenu");
btnMenuHuawei.addEventListener("click", () => {
    menuHuawei.classList.toggle("activado");
    btnMenuHuawei.classList.toggle("animado");
});
const btnMenuApple = document.querySelector(".boton4");
const menuApple = document.querySelector("#apple__submenu");
btnMenuApple.addEventListener("click", () => {
    menuApple.classList.toggle("activado");
    btnMenuApple.classList.toggle("animado");
});
const btnFiltrarResponsive = document.querySelector(".boton__filtro");
const menuFiltrarResponsive = document.querySelector(".menu-responsive");
btnFiltrarResponsive.addEventListener("click", () => {
    menuFiltrarResponsive.classList.toggle("filtro__activo");
});
const btnSubMenuResponsiveSamsung = document.querySelector("#submenu_btn-1");
const subMenuResponsiveSamsung = document.querySelector("#submenu_samsung");
const iconSubmenuSamsung = document.querySelector("#sumbenu_icon-1");
btnSubMenuResponsiveSamsung.addEventListener("click", () => {
    subMenuResponsiveSamsung.classList.toggle("desplegado");
    iconSubmenuSamsung.classList.toggle("animado");
});
const btnSubMenuResponsiveMotorola = document.querySelector("#submenu_btn-2");
const subMenuResponsiveMotorola = document.querySelector("#submenu_motorola");
const iconSubmenuMotorola = document.querySelector("#sumbenu_icon-2");
btnSubMenuResponsiveMotorola.addEventListener("click", () => {
    subMenuResponsiveMotorola.classList.toggle("desplegado");
    iconSubmenuMotorola.classList.toggle("animado");
});
const btnSubMenuResponsiveHuawei = document.querySelector("#submenu_btn-3");
const subMenuResponsiveHuawei = document.querySelector("#submenu_huawei");
const iconSubmenuHuawei = document.querySelector("#sumbenu_icon-3");
btnSubMenuResponsiveHuawei.addEventListener("click", () => {
    subMenuResponsiveHuawei.classList.toggle("desplegado");
    iconSubmenuHuawei.classList.toggle("animado");
});
const btnSubMenuResponsiveApple = document.querySelector("#submenu_btn-4");
const subMenuResponsiveApple = document.querySelector("#submenu_apple");
const iconSubmenuApple = document.querySelector("#sumbenu_icon-4");
btnSubMenuResponsiveApple.addEventListener("click", () => {
    subMenuResponsiveApple.classList.toggle("desplegado");
    iconSubmenuApple.classList.toggle("animado");
});
//Productos

let productList = [];
let carrito = [];
let total = 0;
let nombre = '';



function add(productId, price, name) {
    const product = productList.find((p) => p.product_id === productId);
    product.stock--;

    console.log(productId, price, name);
    carrito.push(productId);
    total = total + price;
    nombre = (nombre + name) + ',';
    let textoCarrito = '';
    productList.forEach(p => {
        if (p.product_id === productId) {
            textoCarrito +=
                `<p>Importe total en el carrito = ${nombre} con <b class"carrito_b" style="color:green; font-size:20px;">Total de $${total}</b></p>`
        }

    })
    document.getElementById("carrito").innerHTML = textoCarrito;
    displayProducts();
}

async function pay() {
    try {
        const productList = await (await fetch("/api/pay", {
            method: "post",
            body: JSON.stringify(carrito),
            headers: {
                "Content-Type": "application/json",
            },
        })).json();
    } catch {
        window.alert("Sin Stock");
    }
    carrito = [];
    total = 0;
    await fetchProducts();
    document.getElementById("#carrito").innerHTML = `Pagar Funda con valor de $${total}`;

}

function displayProducts() {
    let productsHtml = '';
    productList.forEach(p => {
        let buttonHTML = `<button class="card__button" onclick="add(${p.product_id},${p.price},'${p.name}')">Agregar <i class="fas fa-cart-plus"></i></button>`;

        if (p.stock <= 0) {
            buttonHTML = `<button disabled class="card__button disabled" onclick="add(${p.product_id},${p.price},'${p.name}')">Sin Stock<i class="fas fa-cart-plus"></i></button>`;
        }
        productsHtml +=
            `<div class="card product-item" category="${p.category}">
        <img src="${p.image}" alt="Imagen Funda">
        <h3 class="card__title">${p.name}</h3>
        <p class="card__price"><b>Precio:$${p.price}</p><p class="card__stock">Unidades Disponibles: ${p.stock}</p><p>ID: ${p.product_id}</p>
        ${buttonHTML}
    </div>`;
    });
    document.getElementById("flex_container").innerHTML = productsHtml;
}

async function fetchProducts() {
    productList = await (await fetch("/api/products")).json();
    displayProducts();
}
window.onload = async() => {
    await fetchProducts();
};