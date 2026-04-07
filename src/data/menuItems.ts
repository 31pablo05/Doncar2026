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
  { id: 1, name: "Hamburguesa Clásica", description: "Queso, jamón, huevo, lechuga, tomate y aros de cebolla", price: 1100, priceDouble: 2100, category: "Hamburguesas", type: "Clásica", image: "/images/burgerclásica.jpg", sizes: ["Simple", "Doble"], featured: true, popular: true },
  { id: 2, name: "Hamburguesa Yankee", description: "Cheddar, bacón, lechuga, barbacoa, tomate y aros de cebolla morada", price: 1200, priceDouble: 2300, category: "Hamburguesas", type: "Premium", image: "/images/doblebacon cheeseDoble medallónDoblecheddar.jpg", sizes: ["Simple", "Doble"] },
  { id: 3, name: "Hamburguesa Blue", description: "Cebolla caramelizada, queso azul, hongos", price: 1300, priceDouble: 2500, category: "Hamburguesas", type: "Gourmet", image: "/placeholder.svg?text=Blue", sizes: ["Simple", "Doble"] },
  { id: 4, name: "Hamburguesa Bacón", description: "Cheddar y bacón", price: 1100, priceDouble: 2100, category: "Hamburguesas", type: "Clásica", image: "/images/hamburguesa bacon.jpg", sizes: ["Simple", "Doble"] },
  { id: 5, name: "Hamburguesa Mediterránea", description: "Rúcula, cherrys y parmesano", price: 1200, priceDouble: 2300, category: "Hamburguesas", type: "Premium", image: "/placeholder.svg?text=Mediterranea", sizes: ["Simple", "Doble"] },
  { id: 6, name: "Hamburguesa Doncar", description: "Cheddar, provolone, aros de cebolla, huevo y hongos", price: 1300, priceDouble: 2500, category: "Hamburguesas", type: "Especial", image: "/placeholder.svg?text=Doncar", sizes: ["Simple", "Doble"], featured: true, popular: true },
  { id: 7, name: "Hamburguesa Simple", description: "Pan y carne", price: 800, category: "Hamburguesas", type: "Básica", image: "/placeholder.svg?text=Simple", sizes: ["Simple"] },
  { id: 8, name: "Super Burger 1Kg", description: "Hamburguesa gigante de 1 kilogramo", price: 3500, category: "Hamburguesas", type: "Especial", image: "/placeholder.svg?text=1Kg" },

  // 🍟 CHIPS
  { id: 9, name: "Chips Clásicas", description: "Papas fritas tradicionales", price: 600, priceExtra: 900, category: "Chips", type: "Clásicas", image: "/placeholder.svg?text=Chips", sizes: ["500g", "800g"], featured: true, popular: true },
  { id: 10, name: "Chips con Huevos Revueltos", description: "Papas fritas con huevos revueltos", price: 680, priceExtra: 980, category: "Chips", type: "Especiales", image: "/placeholder.svg?text=Chips+Huevos", sizes: ["500g", "800g"] },
  { id: 11, name: "Chips con Cheddar", description: "Papas fritas con queso cheddar derretido", price: 680, priceExtra: 980, category: "Chips", type: "Especiales", image: "/placeholder.svg?text=Chips+Cheddar", sizes: ["500g", "800g"], featured: true },
  { id: 12, name: "Chips con Verdeo y Cheddar", description: "Papas fritas con verdeo y queso cheddar", price: 900, priceExtra: 1200, category: "Chips", type: "Premium", image: "/placeholder.svg?text=Chips+Verdeo", sizes: ["500g", "800g"] },
  { id: 60, name: "Combo Kids", description: "Nuggets de pollo, papas crinkle y ketchup", price: 850, category: "Chips", type: "Infantil", image: "/placeholder.svg?text=Kids", popular: true },

  // 🍕 PIZZAS CLÁSICAS
  { id: 13, name: "Pizza Mozzarella", description: "Salsa, mozzarella y aceitunas", price: 1250, category: "Pizzas", type: "Clásicas", image: "/placeholder.svg?text=Mozzarella", featured: true, popular: true },
  { id: 14, name: "Pizza Doble Mozzarella", description: "Salsa, 1/2 Kg de mozzarella y aceitunas", price: 1400, category: "Pizzas", type: "Clásicas", image: "/placeholder.svg?text=DobleQueso" },
  { id: 15, name: "Pizza Provolone", description: "Salsa, mozzarella, provolone y aceitunas", price: 1700, category: "Pizzas", type: "Quesos", image: "/placeholder.svg?text=Provolone" },
  { id: 16, name: "Pizza Napolitana con Jamón", description: "Salsa, mozzarella, rodajas de tomate, ajo y jamón", price: 1550, category: "Pizzas", type: "Clásicas", image: "/placeholder.svg?text=Napolitana" },
  { id: 17, name: "Pizza Napolitana", description: "Salsa, mozzarella, rodajas de tomate y ajo", price: 1350, category: "Pizzas", type: "Clásicas", image: "/placeholder.svg?text=Napolitana2" },
  { id: 18, name: "Pizza Jamón y Mozzarella", description: "Salsa, mozzarella, jamón y aceitunas", price: 1450, category: "Pizzas", type: "Clásicas", image: "/placeholder.svg?text=Jamon", featured: true, popular: true },
  { id: 19, name: "Pizza Fugazzeta", description: "Salsa, mozzarella, cebolla y aceitunas", price: 1350, category: "Pizzas", type: "Clásicas", image: "/placeholder.svg?text=Fugazzeta" },
  { id: 20, name: "Pizza Fugazzeta con Jamón", description: "Salsa, mozzarella, cebolla, jamón y aceitunas", price: 1500, category: "Pizzas", type: "Clásicas", image: "/placeholder.svg?text=FugazzettaJamon" },

  // 🍕 PIZZAS GOURMET
  { id: 21, name: "Pizza Morrones Asados", description: "Salsa, mozzarella, morrones asados, provolone y ajo", price: 1600, category: "Pizzas", type: "Gourmet", image: "/placeholder.svg?text=Morrones" },
  { id: 22, name: "Pizza Don Bosco", description: "Salsa, mozzarella, salami, morrones, jamón y aceitunas", price: 1750, category: "Pizzas", type: "Gourmet", image: "/placeholder.svg?text=DonBosco" },
  { id: 23, name: "Pizza Calabresa", description: "Salsa, mozzarella, salamín picante y aceitunas", price: 1600, category: "Pizzas", type: "Gourmet", image: "/placeholder.svg?text=Calabresa" },
  { id: 24, name: "Pizza Americana", description: "Salsa, mozzarella, roquefort, cebolla, morrones y aceitunas", price: 1700, category: "Pizzas", type: "Gourmet", image: "/placeholder.svg?text=Americana" },
  { id: 25, name: "Pizza Pollo", description: "Salsa, mozzarella, pollo, cebolla y morrones", price: 1700, category: "Pizzas", type: "Gourmet", image: "/placeholder.svg?text=Pollo" },
  { id: 26, name: "Pizza Pollo y Morrones", description: "Salsa, mozzarella, pollo, morrones y aceitunas", price: 1700, category: "Pizzas", type: "Gourmet", image: "/placeholder.svg?text=PolloMorrones" },
  { id: 27, name: "Pizza Pollo y Champiñones", description: "Salsa, mozzarella, pollo, champiñones y verdeo", price: 1750, category: "Pizzas", type: "Gourmet", image: "/placeholder.svg?text=PolloChamp" },
  { id: 28, name: "Pizza Pollo al Verdeo", description: "Salsa, mozzarella, pollo, verdeo y aceitunas", price: 1700, category: "Pizzas", type: "Gourmet", image: "/placeholder.svg?text=PolloVerdeo" },
  { id: 29, name: "Pizza Pollo y Provolone", description: "Salsa, mozzarella, pollo, provolone y verdeo", price: 1800, category: "Pizzas", type: "Gourmet", image: "/placeholder.svg?text=PolloProvolone" },
  { id: 30, name: "Pizza Pollo con Hongos y Verdeo", description: "Salsa, mozzarella, pollo, hongos y verdeo", price: 1800, category: "Pizzas", type: "Gourmet", image: "/placeholder.svg?text=PolloHongos" },
  { id: 31, name: "Pizza Muzarela con Topping de Pollo", description: "Salsa, mozzarella doble y topping de pollo al verdeo", price: 1850, category: "Pizzas", type: "Gourmet", image: "/placeholder.svg?text=ToppingPollo" },
  { id: 32, name: "Pizza Bondiola", description: "Salsa, mozzarella, bondiola, morrón y aceitunas", price: 1800, category: "Pizzas", type: "Gourmet", image: "/placeholder.svg?text=Bondiola" },
  { id: 33, name: "Pizza Pesto", description: "Salsa pesto, mozzarella, tomates cherrys y parmesano", price: 1750, category: "Pizzas", type: "Gourmet", image: "/placeholder.svg?text=Pesto" },
  { id: 34, name: "Pizza Rúcula", description: "Salsa, mozzarella, jamón crudo, parmesano, rúcula y cherrys", price: 1850, category: "Pizzas", type: "Gourmet", image: "/placeholder.svg?text=Rucula" },

  // 🍕 PIZZAS DULCES
  { id: 35, name: "Pizza Ananá", description: "Salsa, mozzarella, jamón, ananá caramelizada y aceitunas", price: 1900, category: "Pizzas", type: "Dulces", image: "/placeholder.svg?text=Anana" },
  { id: 36, name: "Pizza Tropical", description: "Salsa, mozzarella, jamón crudo, ananá caramelizada y cerezas al marrasquino", price: 2000, category: "Pizzas", type: "Dulces", image: "/placeholder.svg?text=Tropical" },

  // 🍕 PIZZAS VEGETARIANAS
  { id: 37, name: "Pizza Capresse", description: "Salsa, mozzarella, cherrys, albahaca y aceitunas", price: 1600, category: "Pizzas", type: "Vegetarianas", image: "/placeholder.svg?text=Capresse" },
  { id: 40, name: "Pizza Veggie", description: "Salsa, mozzarella y salteado de verduras", price: 1750, category: "Pizzas", type: "Vegetarianas", image: "/placeholder.svg?text=Veggie" },
  { id: 41, name: "Pizza Champiñones", description: "Salsa, mozzarella, champiñones y verdeo", price: 1750, category: "Pizzas", type: "Vegetarianas", image: "/placeholder.svg?text=Champinones" },

  // 🍕 PIZZAS ESPECIALES
  { id: 38, name: "Pizza Anchoas", description: "Salsa, mozzarella, anchoas, morrones y aceitunas", price: 1650, category: "Pizzas", type: "Especiales", image: "/placeholder.svg?text=Anchoas" },
  { id: 39, name: "Pizza Cuatro Quesos", description: "Salsa, mozzarella, provolone, roquefort, pategrás y aceitunas", price: 1850, category: "Pizzas", type: "Quesos", image: "/assets/images/pizzacuatroquesos.jpg" },
  { id: 42, name: "Pizza Yankee", description: "Salsa, mozzarella, panceta salteada, cheddar y papas fritas", price: 1950, category: "Pizzas", type: "Premium", image: "/placeholder.svg?text=YankeePizza" },
  { id: 43, name: "Pizza Café Doncar", description: "Salsa, mozzarella, 4 burgers, tomate en rodajas, verdeo, 4 huevos fritos, jamón y morrones", price: 3500, category: "Pizzas", type: "Especiales", image: "/placeholder.svg?text=CafeDoncar", featured: true, popular: true },
  { id: 44, name: "Pizza Tres Quesos con Jamón", description: "Salsa, mozzarella, provolone, roquefort y jamón", price: 1850, category: "Pizzas", type: "Quesos", image: "/placeholder.svg?text=TresQuesosJamon" },
  { id: 45, name: "Pizza Tres Quesos Napolitana", description: "Salsa, mozzarella, provolone, roquefort y rodajas de tomate", price: 1650, category: "Pizzas", type: "Quesos", image: "/placeholder.svg?text=TresQuesosNapo" },
  { id: 46, name: "Pizza Panceta y Verdeo", description: "Salsa, mozzarella, panceta salteada, verdeo y aceitunas", price: 1750, category: "Pizzas", type: "Especiales", image: "/placeholder.svg?text=PancetaVerdeo" },
  { id: 47, name: "Pizza Yankee 2", description: "Salsa, mozzarella, panceta salteada, papas fritas, ketchup y verdeo", price: 1950, category: "Pizzas", type: "Premium", image: "/placeholder.svg?text=Yankee2" },
  { id: 48, name: "Pizza Panceta y Champiñones", description: "Salsa, mozzarella, panceta salteada y champiñones", price: 1900, category: "Pizzas", type: "Especiales", image: "/placeholder.svg?text=PancetaChamp" },
  { id: 49, name: "Pizza Don Jorge", description: "Salsa, mozzarella, ajo, rodajas de tomate, jamón, morrón, provolone, huevo rallado, aceitunas verdes y negras", price: 1950, category: "Pizzas", type: "Premium", image: "/placeholder.svg?text=DonJorge" },
  { id: 50, name: "Pizza Tri Color", description: "Salsa, mozzarella, huevo rallado, verdeo y tomate", price: 1600, category: "Pizzas", type: "Especiales", image: "/placeholder.svg?text=TriColor" },
  { id: 51, name: "Pizza Especial con Huevos Fritos", description: "Salsa, mozzarella, jamón, morrón y huevos fritos", price: 1850, category: "Pizzas", type: "Especiales", image: "/placeholder.svg?text=HuevosFritos" },
  { id: 52, name: "Pizza Pepperoni con Provolone", description: "Salsa, mozzarella, pepperoni y provolone", price: 1900, category: "Pizzas", type: "Premium", image: "/placeholder.svg?text=Pepperoni" },
  { id: 53, name: "Pizza Especial con Provolone", description: "Salsa, mozzarella, jamón, morrón y provolone", price: 1900, category: "Pizzas", type: "Premium", image: "/placeholder.svg?text=EspecialProvolone" },

  // 🥪 SANDWICHES
  { id: 54, name: "Sandwich de Pollo 1", description: "Cebolla, tomates cherrys caramelizados, mozzarella y mayonesa", price: 1000, category: "Sandwiches", type: "Pollo", image: "/placeholder.svg?text=Pollo1", featured: true, popular: true },
  { id: 55, name: "Sandwich de Pollo 2", description: "Rúcula, tomate, aros de cebolla morada y mayonesa con ciboulette", price: 1000, category: "Sandwiches", type: "Pollo", image: "/placeholder.svg?text=Pollo2" },
  { id: 56, name: "Sandwich de Bondiola de Cerdo", description: "Pan, lechuga, tomate, aros de cebolla, bondiola, mozzarella y queso", price: 1350, category: "Sandwiches", type: "Cerdo", image: "/placeholder.svg?text=Bondiola", featured: true },
  { id: 57, name: "Sandwich de Bondiola Agridulce", description: "Pan, rúcula, bondiola, ananá caramelizada, cebolla caramelizada, pepinillos y mozzarella", price: 1450, category: "Sandwiches", type: "Cerdo", image: "/placeholder.svg?text=Agridulce" },

  // 🥩 GRILLE
  { id: 58, name: "Pechuga de Pollo", description: "Papas fritas a caballo / opcional salsa criolla", price: 950, category: "Grille", type: "Pollo", image: "/placeholder.svg?text=Pechuga", featured: true, popular: true },
  { id: 59, name: "Milanesa de Carne", description: "A caballo con papas fritas", price: 1000, category: "Grille", type: "Carne", image: "/placeholder.svg?text=Milanesa", featured: true },
];
