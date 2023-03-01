const productos = [
    {
        "id": 1,
        "nombre": "Arroz",
        "marca": "Asahi",
        "descripcion": "Bolsa de arroz japonés (doble carolina) de 30kg",
        "detalle": "nuevo",
        "img": "#",
        "precio": "1000"
    },
    {
        "id": 2,
        "nombre": "Bonito",
        "marca": "Bonito Flake",
        "descripcion": "Hojuelas de bonito",
        "img": "",
        "precio": "1965"
    },
    {
        "id": 3,
        "nombre": "Arroz",
        "marca": "Asahi",
        "descripcion": "Bolsa de arroz japonés (doble carolina) de 10kg",
        "img": "src/assets/img/Arroz5kg.jpg",
        "precio": "1500"
    },
    {
        "id": 4,
        "nombre": "Arrocera japonesa",
        "marca": "Zojirushi",
        "descripcion": "Olla para cocción de arroz japonés",
        "detalle": "usado",
        "img": "/assets/img/Zojirushi.jpg",
        "precio": "60505"
    }
];

export const getProductos = () => {
    return new Promise((resolve, reject) => {
    productos.length ? resolve(productos) : reject("No hay productos")
    });
};
