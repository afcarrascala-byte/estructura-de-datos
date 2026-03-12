fetch("./components/header/header.html")
  .then(respuesta => respuesta.text())
  .then(html => {
    document.getElementById("header-container").innerHTML = html;
  });

fetch("./components/footer/footer.html")
  .then(respuesta => respuesta.text())
  .then(html => {
    document.getElementById("footer-container").innerHTML = html;
  });

const productos = [
  {
    nombre: "Toyota Corolla 2024",
    precio: "$85.000.000",
    descripcion: "Sedán automático, 1.8L, 140HP. Bajo consumo y alta confiabilidad."
  },
  {
    nombre: "Mazda CX-5 2024",
    precio: "$112.000.000",
    descripcion: "SUV con motor 2.5L, tracción AWD y pantalla táctil de 10 pulgadas."
  },
  {
    nombre: "Ford Mustang GT",
    precio: "$195.000.000",
    descripcion: "Motor V8 5.0L, 450HP. Deportivo icónico con modo de conducción activo."
  },
  {
    nombre: "Kia Carnival 2024",
    precio: "$130.000.000",
    descripcion: "Minivan familiar para 8 pasajeros, pantallas traseras y techo panorámico."
  },
  {
    nombre: "Plan de Mantenimiento",
    precio: "$1.200.000",
    descripcion: "3 cambios de aceite, revisión de frenos y diagnóstico computarizado."
  },
  {
    nombre: "Seguro Todo Riesgo",
    precio: "$3.800.000/año",
    descripcion: "Cobertura completa contra choques, robo, incendio y daños a terceros."
  }
];

class ProductCard extends HTMLElement {

  connectedCallback() {
    const nombre      = this.getAttribute("nombre");
    const precio      = this.getAttribute("precio");
    const descripcion = this.getAttribute("descripcion");

    this.innerHTML = `
      <h3>${nombre}</h3>
      <p>${descripcion}</p>
      <p class="precio">${precio}</p>
    `;
  }
}

customElements.define("product-card", ProductCard);

const catalogo = document.getElementById("catalogo");

for (let i = 0; i < productos.length; i++) {
  const tarjeta = document.createElement("product-card");

  tarjeta.setAttribute("nombre",      productos[i].nombre);
  tarjeta.setAttribute("precio",      productos[i].precio);
  tarjeta.setAttribute("descripcion", productos[i].descripcion);

  catalogo.appendChild(tarjeta);
}