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

  // ===================================================
  // 🍔 HAMBURGUESAS
  // Todas usan medallón de tapa de asado 150grs
  // Medallón extra disponible: $4000
  // ===================================================

  { id: 1, name: "Burger Clásica",
    description: "Medallón de tapa de asado 150grs, huevo, queso, jamón, tomate, aros de cebolla morada y lechuga",
    price: 14000, priceDouble: 18000,
    category: "Hamburguesas", type: "Clásica",
    image: "/images/burgerclásica.jpg",
    sizes: ["Simple", "Doble medallón"],
    featured: true, popular: true },

  { id: 2, name: "Burger Yankee",
    description: "Medallón de tapa de asado 150grs, panceta, cheddar, bacon, cebolla caramelizada, lechuga y tomate",
    price: 14000, priceDouble: 18000,
    category: "Hamburguesas", type: "Premium",
    image: "/images/doblebacon cheeseDoble medallónDoblecheddar.jpg",
    sizes: ["Simple", "Doble medallón"],
    popular: true },

  { id: 3, name: "Burger Blue",
    description: "Medallón de tapa de asado 150grs, queso azul, cebolla caramelizada y hongos salteados",
    price: 14000, priceDouble: 18000,
    category: "Hamburguesas", type: "Gourmet",
    image: "/placeholder.svg?text=Blue",
    sizes: ["Simple", "Doble medallón"] },

  { id: 4, name: "Burger Doncar",
    description: "Medallón de tapa de asado 150grs, huevo, queso, panceta, tomate, lechuga y pepinos",
    price: 14000, priceDouble: 18000,
    category: "Hamburguesas", type: "Especial",
    image: "/placeholder.svg?text=Doncar",
    sizes: ["Simple", "Doble medallón"],
    featured: true, popular: true },

  { id: 5, name: "Burger Bacon",
    description: "Medallón de tapa de asado 150grs, bacon, tomate y lechuga",
    price: 14000, priceDouble: 18000,
    category: "Hamburguesas", type: "Clásica",
    image: "/images/hamburguesa bacon.jpg",
    sizes: ["Simple", "Doble medallón"] },

  { id: 6, name: "Three Cheese",
    description: "Doble medallón de tapa de asado 150grs, queso tybo, queso azul y corona de provolone",
    price: 17000,
    category: "Hamburguesas", type: "Premium",
    image: "/placeholder.svg?text=ThreeCheese",
    featured: true },

  { id: 7, name: "Cheese Bacon",
    description: "Doble medallón de tapa de asado 150grs, cheddar, bacon, corona de provolone y salsa Doncar",
    price: 17000,
    category: "Hamburguesas", type: "Premium",
    image: "/placeholder.svg?text=CheeseBacon",
    popular: true },

  { id: 8, name: "Burger Cheddar",
    description: "Medallón de tapa de asado 150grs y mucho cheddar",
    price: 12000, priceDouble: 16000,
    category: "Hamburguesas", type: "Clásica",
    image: "/placeholder.svg?text=Cheddar",
    sizes: ["Simple", "Doble medallón"] },

  { id: 9, name: "Burger Simple",
    description: "Medallón de tapa de asado 150grs",
    price: 10000,
    category: "Hamburguesas", type: "Básica",
    image: "/placeholder.svg?text=Simple" },

  { id: 10, name: "Burger Hawaiana",
    description: "Medallón de tapa de asado 150grs, jamón, ananá, queso tybo, panceta, rúcula y tomate",
    price: 17000,
    category: "Hamburguesas", type: "Especial",
    image: "/placeholder.svg?text=Hawaiana",
    featured: true },

  { id: 11, name: "Burger Napolitana",
    description: "Medallón de tapa de asado 150grs, salsa de tomate, queso tybo y tomate",
    price: 17000,
    category: "Hamburguesas", type: "Gourmet",
    image: "/placeholder.svg?text=Napolitana" },

  { id: 12, name: "Medallón Extra",
    description: "Medallón de tapa de asado 150grs adicional para tu burger",
    price: 4000,
    category: "Hamburguesas", type: "Adicional",
    image: "/placeholder.svg?text=MedallonExtra" },

  // ===================================================
  // 🥪 SANDWICHES
  // ===================================================

  // — CERDO —
  { id: 20, name: "Bondiola",
    description: "Lechuga, cebolla, tomate, queso y huevo",
    price: 15000,
    category: "Sandwiches", type: "Cerdo",
    image: "/placeholder.svg?text=Bondiola",
    featured: true, popular: true },

  { id: 21, name: "Bondiola Agridulce",
    description: "Rúcula, cebolla caramelizada, queso y huevo",
    price: 17000,
    category: "Sandwiches", type: "Cerdo",
    image: "/placeholder.svg?text=BondiolaAgridulce",
    featured: true },

  { id: 22, name: "Churrasquito Opción 1",
    description: "Lechuga, tomate, doble churrasquito de cerdo, jamón, queso y huevo",
    price: 9500,
    category: "Sandwiches", type: "Cerdo",
    image: "/placeholder.svg?text=Churrasquito1" },

  { id: 23, name: "Churrasquito Opción 2",
    description: "Lechuga, tomate, cebolla caramelizada, doble churrasquito de cerdo, jamón, queso y huevo",
    price: 9500,
    category: "Sandwiches", type: "Cerdo",
    image: "/placeholder.svg?text=Churrasquito2" },

  // — CARNE —
  { id: 24, name: "Milanesa Opción 1",
    description: "Lechuga, tomate, milanesa de ternera, jamón, queso y huevo",
    price: 20000,
    category: "Sandwiches", type: "Carne",
    image: "/placeholder.svg?text=Milanesa1",
    featured: true },

  { id: 25, name: "Milanesa Opción 2",
    description: "Cebolla caramelizada, morrón asado, milanesa de ternera, jamón, queso y huevo",
    price: 20000,
    category: "Sandwiches", type: "Carne",
    image: "/placeholder.svg?text=Milanesa2" },

  { id: 26, name: "Bife de Cuadril Opción 1",
    description: "Bife de cuadril 300grs, lechuga, tomate, jamón, queso y huevo",
    price: 19000,
    category: "Sandwiches", type: "Carne",
    image: "/placeholder.svg?text=Bifecito1",
    popular: true },

  { id: 27, name: "Bife de Cuadril Opción 2",
    description: "Cebolla caramelizada, morrón asado, bife de cuadril 300grs, jamón, queso y huevo",
    price: 19000,
    category: "Sandwiches", type: "Carne",
    image: "/placeholder.svg?text=Bifecito2" },

  // — POLLO —
  { id: 28, name: "Pollo Opción 1",
    description: "Pechuga a la plancha, cebolla y tomates cherry caramelizados, queso y mayonesa",
    price: 10500,
    category: "Sandwiches", type: "Pollo",
    image: "/placeholder.svg?text=Pollo1",
    popular: true },

  { id: 29, name: "Pollo Opción 2",
    description: "Pechuga a la plancha, rúcula, tomate, aros de cebolla morada y mayonesa con verdeo",
    price: 10500,
    category: "Sandwiches", type: "Pollo",
    image: "/placeholder.svg?text=Pollo2" },

  // ===================================================
  // 🍕 PIZZAS
  // ===================================================

  // — CLÁSICAS —
  { id: 100, name: "Mozzarella",
    description: "Salsa, mozzarella y aceitunas",
    price: 17000,
    category: "Pizzas", type: "Clásica",
    image: "/placeholder.svg?text=Mozzarella",
    featured: true, popular: true },

  { id: 101, name: "Doble Mozzarella",
    description: "Salsa, 1½kg de mozzarella y aceitunas",
    price: 20000,
    category: "Pizzas", type: "Clásica",
    image: "/placeholder.svg?text=DobleMozza" },

  { id: 102, name: "Napolitana",
    description: "Salsa, mozzarella, rodajas de tomate y aceitunas",
    price: 18000,
    category: "Pizzas", type: "Clásica",
    image: "/placeholder.svg?text=PizzaNapo" },

  { id: 103, name: "Napolitana c/jamón",
    description: "Salsa, mozzarella, jamón, rodajas de tomate y aceitunas",
    price: 20000,
    category: "Pizzas", type: "Clásica",
    image: "/placeholder.svg?text=NapoJamon" },

  { id: 104, name: "Jamón y Mozzarella",
    description: "Salsa, mozzarella, jamón y aceitunas",
    price: 19000,
    category: "Pizzas", type: "Clásica",
    image: "/placeholder.svg?text=JamonMozza" },

  { id: 105, name: "Fugazza",
    description: "Cebolla y mozzarella",
    price: 19000,
    category: "Pizzas", type: "Clásica",
    image: "/placeholder.svg?text=Fugazza" },

  { id: 106, name: "Mozzarella c/ajo",
    description: "Salsa, mozzarella, aceitunas y orégano",
    price: 18000,
    category: "Pizzas", type: "Clásica",
    image: "/placeholder.svg?text=MozzaAjo" },

  { id: 107, name: "Mozzarella c/verdeo",
    description: "Salsa, mozzarella, aceitunas y verdeo picado",
    price: 18000,
    category: "Pizzas", type: "Clásica",
    image: "/placeholder.svg?text=MozzaVerdeo" },

  // — QUESOS —
  { id: 110, name: "Provolone",
    description: "Salsa, mozzarella, provolone y aceitunas",
    price: 21000,
    category: "Pizzas", type: "Quesos",
    image: "/placeholder.svg?text=Provolone" },

  { id: 111, name: "Provolone con Jamón",
    description: "Salsa, mozzarella, jamón y provolone",
    price: 22000,
    category: "Pizzas", type: "Quesos",
    image: "/placeholder.svg?text=ProvoloneJamon" },

  { id: 112, name: "Provolone Napolitano",
    description: "Salsa, mozzarella, provolone y tomate",
    price: 23000,
    category: "Pizzas", type: "Quesos",
    image: "/placeholder.svg?text=ProvoloneNapo" },

  { id: 113, name: "Cuatro Quesos",
    description: "Salsa, mozzarella, provolone, roquefort y parmesano",
    price: 24000,
    category: "Pizzas", type: "Quesos",
    image: "/placeholder.svg?text=CuatroQuesos",
    featured: true },

  { id: 114, name: "Roquefort",
    description: "Salsa, mozzarella, roquefort y aceitunas",
    price: 21000,
    category: "Pizzas", type: "Quesos",
    image: "/placeholder.svg?text=Roquefort" },

  { id: 115, name: "Roquefort con Jamón",
    description: "Salsa, mozzarella, jamón, roquefort y aceitunas",
    price: 23000,
    category: "Pizzas", type: "Quesos",
    image: "/placeholder.svg?text=RoquefortJamon" },

  { id: 116, name: "Roquefort, Apio y Nuez",
    description: "Salsa, mozzarella, roquefort, apio y nuez",
    price: 20000,
    category: "Pizzas", type: "Quesos",
    image: "/placeholder.svg?text=RoquefortNuez" },

  { id: 117, name: "Tres Quesos con Jamón",
    description: "Mozzarella, provolone, roquefort y jamón",
    price: 24000,
    category: "Pizzas", type: "Quesos",
    image: "/placeholder.svg?text=TresQuesosJamon" },

  { id: 118, name: "Tres Quesos Napolitano",
    description: "Salsa, mozzarella, provolone, roquefort y rodajas de tomate",
    price: 24000,
    category: "Pizzas", type: "Quesos",
    image: "/placeholder.svg?text=TresQuesosNapo" },

  { id: 119, name: "3 Quesos Napo c/jamón",
    description: "Mozzarella, provolone y roquefort con jamón",
    price: 27000,
    category: "Pizzas", type: "Quesos",
    image: "/placeholder.svg?text=3QNapoJamon" },

  { id: 120, name: "Especial con Provolone",
    description: "Salsa, mozzarella, jamón, morrón y provolone",
    price: 24000,
    category: "Pizzas", type: "Quesos",
    image: "/placeholder.svg?text=EspProvolone" },

  { id: 121, name: "Pepperoni con Provolone",
    description: "Salsa, mozzarella, pepperoni y provolone",
    price: 23000,
    category: "Pizzas", type: "Quesos",
    image: "/placeholder.svg?text=PeppProvolone" },

  // — ESPECIALES —
  { id: 130, name: "Especial",
    description: "Salsa, mozzarella, jamón, huevo y aceitunas",
    price: 21000,
    category: "Pizzas", type: "Especial",
    image: "/placeholder.svg?text=Especial" },

  { id: 131, name: "Primavera",
    description: "Salsa, mozzarella, jamón, morrón, huevo duro y aceitunas",
    price: 23000,
    category: "Pizzas", type: "Especial",
    image: "/placeholder.svg?text=Primavera" },

  { id: 132, name: "Especial con Fritas",
    description: "Salsa, mozzarella, jamón cocido, morrón y 5 huevos fritos",
    price: 24000,
    category: "Pizzas", type: "Especial",
    image: "/placeholder.svg?text=EspFritas",
    featured: true },

  { id: 133, name: "Tricolor",
    description: "Salsa, mozzarella, huevo rallado, verdeo y tomate",
    price: 20000,
    category: "Pizzas", type: "Especial",
    image: "/placeholder.svg?text=Tricolor" },

  { id: 134, name: "Americana",
    description: "Salsa, mozzarella, panceta salteada, huevo revuelto, morrón y aceitunas",
    price: 23000,
    category: "Pizzas", type: "Especial",
    image: "/placeholder.svg?text=Americana" },

  { id: 135, name: "Pepperoni",
    description: "Salsa, mozzarella, pepperoni y aceitunas",
    price: 22000,
    category: "Pizzas", type: "Especial",
    image: "/placeholder.svg?text=Pepperoni" },

  { id: 136, name: "Anchoas",
    description: "Salsa, mozzarella, anchoas, morrones y aceitunas",
    price: 20000,
    category: "Pizzas", type: "Especial",
    image: "/placeholder.svg?text=Anchoas" },

  { id: 137, name: "Serrana",
    description: "Salsa, mozzarella, jamón crudo, morrón y aceitunas",
    price: 24000,
    category: "Pizzas", type: "Especial",
    image: "/placeholder.svg?text=Serrana" },

  { id: 138, name: "Don Jorge",
    description: "Salsa, mozzarella, rúcula, rodajas de tomate, jamón crudo y aceitunas",
    price: 27000,
    category: "Pizzas", type: "Especial",
    image: "/placeholder.svg?text=DonJorge",
    featured: true },

  { id: 139, name: "Mediterránea Pizza",
    description: "Salsa, mozzarella, jamón crudo, tomates cherry, rúcula y aceitunas negras",
    price: 24000,
    category: "Pizzas", type: "Especial",
    image: "/placeholder.svg?text=MedPizza" },

  { id: 140, name: "Panceta y Verdeo",
    description: "Mozzarella, panceta salteada, verdeo y aceitunas",
    price: 21000,
    category: "Pizzas", type: "Especial",
    image: "/placeholder.svg?text=PancetaVerdeo" },

  { id: 141, name: "Panceta y Champi",
    description: "Salsa, mozzarella, panceta salteada y champiñones",
    price: 25000,
    category: "Pizzas", type: "Especial",
    image: "/placeholder.svg?text=PancetaChampi" },

  // — FUGAZZA —
  { id: 142, name: "Fugazza con Crudo",
    description: "Mozzarella, jamón crudo, cebolla y aceitunas",
    price: 25000,
    category: "Pizzas", type: "Especial",
    image: "/placeholder.svg?text=FugazzaCrudo",
    featured: true },

  { id: 143, name: "Fugazza Especial",
    description: "Cebolla, mozzarella, roquefort, jamón y morrones",
    price: 24000,
    category: "Pizzas", type: "Especial",
    image: "/placeholder.svg?text=FugazzaEsp" },

  // — PALMITOS —
  { id: 144, name: "Palmitos",
    description: "Salsa, mozzarella, jamón, palmitos, salsa golf y aceitunas",
    price: 24000,
    category: "Pizzas", type: "Especial",
    image: "/placeholder.svg?text=Palmitos" },

  { id: 145, name: "Palmitos Especial",
    description: "Salsa, mozzarella, jamón, roquefort y palmitos",
    price: 26000,
    category: "Pizzas", type: "Especial",
    image: "/placeholder.svg?text=PalmitosEsp",
    featured: true },

  { id: 146, name: "Palmitos con Crudo",
    description: "Mozzarella con jamón crudo, palmitos, salsa golf y aceitunas",
    price: 25000,
    category: "Pizzas", type: "Especial",
    image: "/placeholder.svg?text=PalmitosCrudo" },

  // — POLLO / VEGETARIANAS / DULCES —
  { id: 150, name: "Pizza Pollo",
    description: "Salsa, mozzarella, morrón, pollo, verdeo y aceitunas",
    price: 27000,
    category: "Pizzas", type: "Pollo",
    image: "/placeholder.svg?text=PizzaPollo",
    popular: true },

  { id: 151, name: "Champiñones",
    description: "Salsa, mozzarella, champiñones y verdeo",
    price: 21000,
    category: "Pizzas", type: "Vegetariana",
    image: "/placeholder.svg?text=Champis" },

  { id: 152, name: "Veggie",
    description: "Salsa, salteado de verduras y mozzarella",
    price: 20000,
    category: "Pizzas", type: "Vegetariana",
    image: "/placeholder.svg?text=Veggie" },

  { id: 153, name: "Capresse",
    description: "Salsa, mozzarella, cherry, albahaca y parmesano",
    price: 20000,
    category: "Pizzas", type: "Vegetariana",
    image: "/placeholder.svg?text=Capresse" },

  { id: 154, name: "Rúcula",
    description: "Salsa, mozzarella, jamón crudo, parmesano, rúcula y cherry",
    price: 23000,
    category: "Pizzas", type: "Gourmet",
    image: "/placeholder.svg?text=PizzaRucula" },

  { id: 155, name: "Ananá",
    description: "Salsa, mozzarella, jamón crudo, ananá caramelizado y aceitunas",
    price: 24000,
    category: "Pizzas", type: "Dulce",
    image: "/placeholder.svg?text=Anana" },

  { id: 156, name: "Tropical",
    description: "Salsa, mozzarella, jamón crudo, ananá caramelizado y cerezas al marrasquino",
    price: 26000,
    category: "Pizzas", type: "Dulce",
    image: "/placeholder.svg?text=Tropical" },

  { id: 157, name: "Ananá con Roquefort",
    description: "Salsa, mozzarella, jamón crudo, ananá caramelizado y roquefort",
    price: 27000,
    category: "Pizzas", type: "Dulce",
    image: "/placeholder.svg?text=AnanáRoquefort" },

  // — SIGNATURE —
  { id: 160, name: "Yankee Pizza",
    description: "Salsa, mozzarella, panceta salteada, cheddar y papas fritas",
    price: 27000,
    category: "Pizzas", type: "Signature",
    image: "/placeholder.svg?text=YankeePizza",
    popular: true },

  { id: 161, name: "Yankee 2",
    description: "Salsa, mozzarella, panceta salteada, papas fritas, ketchup y verdeo",
    price: 27000,
    category: "Pizzas", type: "Signature",
    image: "/placeholder.svg?text=Yankee2" },

  { id: 162, name: "Pizza Café Doncar",
    description: "Salsa, mozzarella, burritos, tomate en rodajas, huevo frito, verdeo, jamón y aceitunas",
    price: 40000,
    category: "Pizzas", type: "Signature",
    image: "/placeholder.svg?text=CafeDoncar",
    featured: true, popular: true },

  // ===================================================
  // 🍟 CHIPS & OTROS
  // ===================================================

  { id: 200, name: "Chips Clásicas",
    description: "Papas fritas tradicionales crujientes",
    price: 8500, priceExtra: 15000,
    category: "Chips", type: "Clásicas",
    image: "/placeholder.svg?text=Chips",
    sizes: ["500g", "800g"],
    featured: true, popular: true },

  { id: 201, name: "Chips con Huevos Revueltos",
    description: "Papas fritas con huevos revueltos",
    price: 9500, priceExtra: 17000,
    category: "Chips", type: "Especiales",
    image: "/placeholder.svg?text=ChipsHuevos",
    sizes: ["500g", "800g"] },

  { id: 202, name: "Chips con Cheddar",
    description: "Papas fritas con queso cheddar derretido",
    price: 17000, priceExtra: 19000,
    category: "Chips", type: "Especiales",
    image: "/placeholder.svg?text=ChipsCheddar",
    sizes: ["500g", "800g"],
    popular: true },

  { id: 203, name: "Chips con Verdeo, Cheddar y Bacon",
    description: "Papas fritas con verdeo, queso cheddar y bacon",
    price: 17000, priceExtra: 19000,
    category: "Chips", type: "Premium",
    image: "/placeholder.svg?text=ChipsVerdeo",
    sizes: ["500g", "800g"],
    featured: true },

  { id: 204, name: "Chips con Ketchup o Mayonesa",
    description: "Papas fritas 500grs con salsa a elección",
    price: 9000,
    category: "Chips", type: "Clásicas",
    image: "/placeholder.svg?text=ChipsSalsa" },

  { id: 205, name: "Adicional Papas en Burger",
    description: "Porción de papas fritas para acompañar tu hamburguesa",
    price: 4000,
    category: "Chips", type: "Adicional",
    image: "/placeholder.svg?text=AdicionalPapas" },

  { id: 206, name: "Nuggets y Papas",
    description: "12 unidades de nuggets con papas fritas y ketchup",
    price: 12000,
    category: "Chips", type: "Otros",
    image: "/placeholder.svg?text=Nuggets",
    popular: true },

  { id: 207, name: "Aros de Cebolla y Papas",
    description: "12 aros de cebolla con papas fritas",
    price: 12000,
    category: "Chips", type: "Otros",
    image: "/placeholder.svg?text=Aros" },

  { id: 208, name: "Nuggets Cheddar y Papas",
    description: "12 unidades de nuggets de pollo rellenas con cheddar, papas fritas y ketchup",
    price: 14000,
    category: "Chips", type: "Otros",
    image: "/placeholder.svg?text=NuggetsCheddar",
    featured: true },

  // ===================================================
  // 🥗 ENSALADAS
  // ===================================================

  { id: 300, name: "Ensalada Completa",
    description: "Hojas verdes, pollo, jamón y queso, aceitunas verdes, huevo duro y tomates cherry",
    price: 6000,
    category: "Ensaladas", type: "Completas",
    image: "/placeholder.svg?text=EnsaladaCompleta",
    featured: true, popular: true },

  { id: 301, name: "Ensalada Roquefort & Nuez",
    description: "Hojas verdes, roquefort, apio, nuez, aceitunas verdes y tomates cherry",
    price: 5500,
    category: "Ensaladas", type: "Gourmet",
    image: "/placeholder.svg?text=EnsaladaRoquefort",
    featured: true },

  { id: 302, name: "Ensalada Mediterránea",
    description: "Hojas verdes, jamón crudo, parmesano, aceitunas negras y tomates cherry",
    price: 5500,
    category: "Ensaladas", type: "Gourmet",
    image: "/placeholder.svg?text=EnsaladaMed" },

  { id: 303, name: "Ensalada César",
    description: "Lechuga, parmesano, pechuga salteada, crutons y aderezo César",
    price: 6000,
    category: "Ensaladas", type: "Clásicas",
    image: "/placeholder.svg?text=EnsaladaCesar",
    popular: true },

  // ===================================================
  // 🍰 POSTRES — Delicias Cosas Ricas
  // ===================================================

  { id: 400, name: "Flan Casero",
    description: "Flan casero artesanal",
    price: 6000,
    category: "Postres", type: "Postres",
    image: "/placeholder.svg?text=Flan" },

  { id: 401, name: "Choco Torta",
    description: "Torta de chocolate artesanal",
    price: 9000,
    category: "Postres", type: "Postres",
    image: "/placeholder.svg?text=ChocoTorta",
    popular: true },

  { id: 402, name: "Choco Oreo",
    description: "Postre de chocolate con galletitas Oreo",
    price: 9000,
    category: "Postres", type: "Postres",
    image: "/placeholder.svg?text=ChocoOreo",
    featured: true },

  { id: 403, name: "Cheesecake de Frutos Rojos",
    description: "Cheesecake artesanal con coulis de frutos rojos",
    price: 8000,
    category: "Postres", type: "Postres",
    image: "/placeholder.svg?text=Cheesecake",
    featured: true, popular: true },

  { id: 404, name: "Tiramisú",
    description: "Tiramisú tradicional artesanal",
    price: 8000,
    category: "Postres", type: "Postres",
    image: "/placeholder.svg?text=Tiramisu" },

  // ===================================================
  // 🥧 TARTAS — Delicias Cosas Ricas
  // ===================================================

  { id: 500, name: "Tarta de Frutilla",
    description: "Tarta artesanal de frutillas frescas",
    price: 18000,
    category: "Tartas", type: "Tartas",
    image: "/placeholder.svg?text=TartaFrutilla",
    featured: true, popular: true },

  { id: 501, name: "Lemon Pie",
    description: "Lemon pie con merengue tostado",
    price: 18000,
    category: "Tartas", type: "Tartas",
    image: "/placeholder.svg?text=LemonPie",
    popular: true },

  { id: 502, name: "Tarta de Crema",
    description: "Tarta artesanal de crema pastelera",
    price: 18000,
    category: "Tartas", type: "Tartas",
    image: "/placeholder.svg?text=TartaCrema" },

  { id: 503, name: "Tarta Cabsha",
    description: "Tarta artesanal con relleno de Cabsha",
    price: 18000,
    category: "Tartas", type: "Tartas",
    image: "/placeholder.svg?text=TartaCabsha",
    featured: true },

  { id: 504, name: "Brownie",
    description: "Brownie artesanal de chocolate",
    price: 28000,
    category: "Tartas", type: "Tartas",
    image: "/placeholder.svg?text=Brownie" },

];
