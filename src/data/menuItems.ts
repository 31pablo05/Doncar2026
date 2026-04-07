export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  priceDouble?: number;
  priceExtra?: number;
  category: string;
  type: string;
  image: string;
  sizes?: string[];
  featured?: boolean;
  popular?: boolean;
}

export const menuItems: MenuItem[] = [

  // 🍔 HAMBURGUESAS
  // Nota: todas las burgers tienen opción "Medallón extra" por $4000 adicional
  // Medallón de tapa de asado 150grs cada uno

  { id: 1,  name: "Clásica",
    description: "Medallón de tapa de asado 150grs, queso, jamón, tomate, aros de cebolla morada y lechuga",
    price: 14000, priceDouble: 18000,
    category: "Hamburguesas", type: "Clásica",
    image: "/images/burgerclásica.jpg",
    sizes: ["Simple", "Doble medallón"],
    featured: true, popular: true },

  { id: 2,  name: "Yankee",
    description: "Medallón de tapa de asado 150grs, barbacoa casera, bacon, cheddar, tomate, aros de cebolla morada y lechuga",
    price: 14000, priceDouble: 18000,
    category: "Hamburguesas", type: "Premium",
    image: "/images/doblebacon cheeseDoble medallónDoblecheddar.jpg",
    sizes: ["Simple", "Doble medallón"],
    popular: true },

  { id: 3,  name: "Blue",
    description: "Medallón de tapa de asado 150grs, cebolla caramelizada, queso azul y hongos salteados",
    price: 14000, priceDouble: 18000,
    category: "Hamburguesas", type: "Gourmet",
    image: "/placeholder.svg?text=Blue",
    sizes: ["Simple", "Doble medallón"] },

  { id: 4,  name: "Doncar",
    description: "Medallón de tapa de asado 150grs, corona de provolone, cheddar, aros de cebolla morada y hongos salteados",
    price: 14000, priceDouble: 18000,
    category: "Hamburguesas", type: "Especial",
    image: "/placeholder.svg?text=Doncar",
    sizes: ["Simple", "Doble medallón"],
    featured: true, popular: true },

  { id: 5,  name: "Bacon",
    description: "Medallón de tapa de asado 150grs, mucho bacon y mucho cheddar",
    price: 14000, priceDouble: 18000,
    category: "Hamburguesas", type: "Clásica",
    image: "/images/hamburguesa bacon.jpg",
    sizes: ["Simple", "Doble medallón"] },

  { id: 6,  name: "Three Cheese",
    description: "Doble medallón de tapa de asado 150grs, queso tybo, queso azul y corona de provolone",
    price: 17000,
    category: "Hamburguesas", type: "Premium",
    image: "/placeholder.svg?text=ThreeCheese",
    featured: true },

  { id: 7,  name: "Burger Opción 2",
    description: "Medallón de tapa de asado 150grs, jamón, queso, morrón asado y cebolla caramelizada",
    price: 14000, priceDouble: 18000,
    category: "Hamburguesas", type: "Clásica",
    image: "/placeholder.svg?text=BurgerOpc2",
    sizes: ["Simple", "Doble medallón"] },

  { id: 8,  name: "Cheese Bacon",
    description: "Doble medallón de tapa de asado 150grs, cheddar, bacon, corona de provolone y salsa Doncar",
    price: 17000,
    category: "Hamburguesas", type: "Premium",
    image: "/placeholder.svg?text=CheeseBacon",
    popular: true },

  { id: 9,  name: "Cheddar",
    description: "Medallón de tapa de asado 150grs y mucho cheddar",
    price: 12000, priceDouble: 16000,
    category: "Hamburguesas", type: "Clásica",
    image: "/placeholder.svg?text=Cheddar",
    sizes: ["Simple", "Doble medallón"] },

  { id: 10, name: "Simple",
    description: "Medallón de tapa de asado 150grs y pan",
    price: 10000,
    category: "Hamburguesas", type: "Básica",
    image: "/placeholder.svg?text=Simple" },

  { id: 11, name: "Hawaiana",
    description: "Medallón de tapa de asado 150grs, jamón, queso, dos rodajas de ananá, rúcula y encurtido de cebolla morada",
    price: 17000, priceDouble: 21000,
    category: "Hamburguesas", type: "Especial",
    image: "/placeholder.svg?text=Hawaiana",
    sizes: ["Simple", "Doble medallón"] },

  { id: 12, name: "Napolitana",
    description: "Doble medallón de tapa de asado 150grs, mozzarella, rodaja de tomate, pesto y salsa casera",
    price: 17000,
    category: "Hamburguesas", type: "Gourmet",
    image: "/placeholder.svg?text=Napolitana" },

  { id: 13, name: "Mediterránea",
    description: "Medallón de tapa de asado 150grs, rúcula, parmesano rallado, cherrys y corona de provolone",
    price: 14000, priceDouble: 18000,
    category: "Hamburguesas", type: "Gourmet",
    image: "/placeholder.svg?text=Mediterranea",
    sizes: ["Simple", "Doble medallón"] },

  // 🥪 SANDWICHES DE CERDO

  { id: 20, name: "Bondiola",
    description: "Lechuga, cebolla, tomate, queso y huevo",
    price: 17000,
    category: "Sandwiches", type: "Cerdo",
    image: "/placeholder.svg?text=Bondiola",
    featured: true, popular: true },

  { id: 21, name: "Bondiola Agridulce",
    description: "Rúcula, cebolla caramelizada, ananá y queso",
    price: 19000,
    category: "Sandwiches", type: "Cerdo",
    image: "/placeholder.svg?text=BondiolaAgridulce",
    featured: true },

  { id: 22, name: "Churrasquito Opc. 1",
    description: "Lechuga, tomate, doble churrasquito de cerdo, jamón, queso y huevo",
    price: 11000,
    category: "Sandwiches", type: "Cerdo",
    image: "/placeholder.svg?text=Churrasquito1" },

  { id: 23, name: "Churrasquito Opc. 2",
    description: "Cebolla caramelizada, doble churrasquito de cerdo, jamón, queso y huevo",
    price: 11000,
    category: "Sandwiches", type: "Cerdo",
    image: "/placeholder.svg?text=Churrasquito2" },

  // 🥪 SANDWICHES DE CARNE

  { id: 24, name: "Milanesa Opc. 1",
    description: "Lechuga, tomate, milanesa de ternera, jamón, queso y huevo",
    price: 22000,
    category: "Sandwiches", type: "Carne",
    image: "/placeholder.svg?text=Milanesa1",
    featured: true },

  { id: 25, name: "Milanesa Opc. 2",
    description: "Cebolla caramelizada, morrón asado, milanesa de ternera, jamón, queso y huevo",
    price: 22000,
    category: "Sandwiches", type: "Carne",
    image: "/placeholder.svg?text=Milanesa2" },

  { id: 26, name: "Bifecito de Cuadril Opc. 1",
    description: "Lechuga, tomate, 300grs de cuadril, jamón, queso y huevo",
    price: 21000,
    category: "Sandwiches", type: "Carne",
    image: "/placeholder.svg?text=Bifecito1",
    popular: true },

  { id: 27, name: "Bifecito de Cuadril Opc. 2",
    description: "Cebolla caramelizada, morrón asado, 300grs de cuadril, jamón, queso y huevo",
    price: 21000,
    category: "Sandwiches", type: "Carne",
    image: "/placeholder.svg?text=Bifecito2" },

  // 🥪 SANDWICHES DE POLLO

  { id: 28, name: "Pollo Opción 1",
    description: "Pan, pechuga a la plancha, cebolla y tomates cherrys caramelizados, queso y mayonesa",
    price: 11000,
    category: "Sandwiches", type: "Pollo",
    image: "/placeholder.svg?text=Pollo1",
    popular: true },

  { id: 29, name: "Pollo Opción 2",
    description: "Pan, pechuga a la plancha, rúcula, tomate, aros de cebolla morada y mayonesa con verdeo",
    price: 11000,
    category: "Sandwiches", type: "Pollo",
    image: "/placeholder.svg?text=Pollo2" },

  { id: 30, name: "Pollo Opción 1 XL",
    description: "Pan grande, pechuga a la plancha, cebolla y tomates cherrys caramelizados, queso y mayonesa",
    price: 17000,
    category: "Sandwiches", type: "Pollo",
    image: "/placeholder.svg?text=PolloXL1" },

  { id: 31, name: "Pollo Opción 2 XL",
    description: "Pan grande, pechuga a la plancha, rúcula, tomate, aros de cebolla morada y mayonesa con verdeo",
    price: 17000,
    category: "Sandwiches", type: "Pollo",
    image: "/placeholder.svg?text=PolloXL2" },

  // 🍟 CHIPS

  { id: 40, name: "Chips Clásicas",
    description: "Papas fritas tradicionales crujientes",
    price: 8500, priceExtra: 12000,
    category: "Chips", type: "Clásicas",
    image: "/placeholder.svg?text=Chips",
    sizes: ["500g", "800g"],
    featured: true, popular: true },

  { id: 41, name: "Chips con Huevos Revueltos",
    description: "Papas fritas con huevos revueltos",
    price: 9500, priceExtra: 12000,
    category: "Chips", type: "Especiales",
    image: "/placeholder.svg?text=ChipsHuevos",
    sizes: ["500g", "800g"] },

  { id: 42, name: "Chips con Cheddar",
    description: "Papas fritas con queso cheddar derretido",
    price: 10500, priceExtra: 19000,
    category: "Chips", type: "Especiales",
    image: "/placeholder.svg?text=ChipsCheddar",
    sizes: ["500g", "800g"],
    popular: true },

  { id: 43, name: "Chips con Verdeo, Cheddar y Bacon",
    description: "Papas fritas con verdeo, queso cheddar y bacon",
    price: 12000, priceExtra: 19000,
    category: "Chips", type: "Premium",
    image: "/placeholder.svg?text=ChipsVerdeo",
    sizes: ["500g", "800g"],
    featured: true },

  { id: 44, name: "Chips con Ketchup o Mayonesa",
    description: "Papas fritas con salsa a elección",
    price: 10500, priceExtra: 17000,
    category: "Chips", type: "Clásicas",
    image: "/placeholder.svg?text=ChipsSalsa",
    sizes: ["500g", "800g"] },

  // 🍟 OTROS

  { id: 45, name: "Nuggets y Papas",
    description: "12 unidades de nuggets con papas fritas y ketchup",
    price: 12000,
    category: "Chips", type: "Otros",
    image: "/placeholder.svg?text=Nuggets",
    popular: true },

  { id: 46, name: "Aros de Cebolla y Papas",
    description: "12 aros de cebolla con papas fritas",
    price: 12000,
    category: "Chips", type: "Otros",
    image: "/placeholder.svg?text=Aros" },

  { id: 47, name: "Nuggets Cheddar y Papas",
    description: "12 unidades de nuggets de pollo rellenas con cheddar, papas fritas y ketchup",
    price: 14000,
    category: "Chips", type: "Otros",
    image: "/placeholder.svg?text=NuggetsCheddar",
    featured: true },

  // 🥗 ENSALADAS

  { id: 50, name: "Ensalada Completa",
    description: "Hojas verdes, pollo, jamón y queso, aceitunas verdes, huevo duro y tomates cherry",
    price: 6000,
    category: "Ensaladas", type: "Completas",
    image: "/placeholder.svg?text=EnsaladaCompleta",
    featured: true, popular: true },

  { id: 51, name: "Ensalada Roquefort & Nuez",
    description: "Hojas verdes, roquefort, apio, nuez, aceitunas verdes y tomates cherry",
    price: 5500,
    category: "Ensaladas", type: "Gourmet",
    image: "/placeholder.svg?text=EnsaladaRoquefort",
    featured: true },

  { id: 52, name: "Ensalada Mediterránea",
    description: "Hojas verdes, jamón crudo, parmesano, aceitunas negras y tomates cherry",
    price: 5500,
    category: "Ensaladas", type: "Gourmet",
    image: "/placeholder.svg?text=EnsaladaMediterranea" },

  { id: 53, name: "Ensalada César",
    description: "Lechuga, parmesano, pechuga salteada, crutons y aderezo César",
    price: 6000,
    category: "Ensaladas", type: "Clásicas",
    image: "/placeholder.svg?text=EnsaladaCesar",
    popular: true },

  // 🍰 POSTRES — Delicias Cosas Ricas

  { id: 60, name: "Flan Casero",
    description: "Flan casero artesanal",
    price: 6000,
    category: "Postres", type: "Postres",
    image: "/placeholder.svg?text=Flan" },

  { id: 61, name: "Choco Torta",
    description: "Torta de chocolate artesanal",
    price: 9000,
    category: "Postres", type: "Postres",
    image: "/placeholder.svg?text=ChocoTorta",
    popular: true },

  { id: 62, name: "Choco Oreo",
    description: "Postre de chocolate con galletitas Oreo",
    price: 9000,
    category: "Postres", type: "Postres",
    image: "/placeholder.svg?text=ChocoOreo",
    featured: true },

  { id: 63, name: "Cheesecake de Frutos Rojos",
    description: "Cheesecake artesanal con coulis de frutos rojos",
    price: 8000,
    category: "Postres", type: "Postres",
    image: "/placeholder.svg?text=Cheesecake",
    featured: true, popular: true },

  { id: 64, name: "Tiramisú",
    description: "Tiramisú tradicional artesanal",
    price: 8000,
    category: "Postres", type: "Postres",
    image: "/placeholder.svg?text=Tiramisu" },

  // 🥧 TARTAS — Delicias Cosas Ricas

  { id: 70, name: "Tarta de Frutilla",
    description: "Tarta artesanal de frutillas frescas",
    price: 18000,
    category: "Tartas", type: "Tartas",
    image: "/placeholder.svg?text=TartaFrutilla",
    featured: true, popular: true },

  { id: 71, name: "Lemon Pie",
    description: "Lemon pie con merengue tostado",
    price: 18000,
    category: "Tartas", type: "Tartas",
    image: "/placeholder.svg?text=LemonPie",
    popular: true },

  { id: 72, name: "Tarta de Crema",
    description: "Tarta artesanal de crema pastelera",
    price: 18000,
    category: "Tartas", type: "Tartas",
    image: "/placeholder.svg?text=TartaCrema" },

  { id: 73, name: "Tarta Cabsha",
    description: "Tarta artesanal con relleno de Cabsha",
    price: 18000,
    category: "Tartas", type: "Tartas",
    image: "/placeholder.svg?text=TartaCabsha",
    featured: true },

  { id: 74, name: "Brownie",
    description: "Brownie artesanal de chocolate",
    price: 28000,
    category: "Tartas", type: "Tartas",
    image: "/placeholder.svg?text=Brownie" },
];
