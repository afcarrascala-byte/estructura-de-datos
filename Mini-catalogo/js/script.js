// Definir la estructura de los productos
const products = [
    {
        id: 1,
        name: "Camiseta de Algodón",
        price: 19.99,
        description: "Camiseta cómoda y ligera de algodón."
    },
    {
        id: 2,
        name: "Jeans Azul",
        price: 39.99,
        description: "Jeans ajustados de alta calidad."
    },
    {
        id: 3,
        name: "Zapatos Deportivos",
        price: 59.99,
        description: "Zapatos deportivos de cuero para correr."
    },
    // Agregar más productos según sea necesario
];

// Función para mostrar los productos
function displayProducts(productsToDisplay) {
    const productList = document.getElementById("productList");
    productList.innerHTML = ''; // Limpiar productos previos

    if (productsToDisplay.length === 0) {
        productList.innerHTML = '<p>No se encontraron productos.</p>';
        return;
    }

    productsToDisplay.forEach(product => {
        const productCard = `
            <div class="product-card">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Precio: $${product.price}</p>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}

// Mostrar todos los productos inicialmente
displayProducts(products);