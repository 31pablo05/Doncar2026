export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export const reviews: Review[] = [
  { id: 1, name: "María González", rating: 5, comment: "¡Las mejores hamburguesas de Trelew! La calidad es excepcional y el delivery súper rápido. Recomiendo la Hamburguesa Doncar, es espectacular.", date: "2026-03-15", avatar: "MG" },
  { id: 2, name: "Carlos Rodríguez", rating: 5, comment: "Pizza espectacular, masa perfecta y ingredientes frescos. Volveremos seguro.", date: "2026-03-10", avatar: "CR" },
  { id: 3, name: "Ana López", rating: 5, comment: "Excelente atención y sabor único. Las chips con cheddar son adictivas!", date: "2026-02-28", avatar: "AL" },
  { id: 4, name: "Roberto Silva", rating: 4, comment: "Muy buena comida y precios justos. El delivery llega siempre en tiempo y forma.", date: "2026-02-14", avatar: "RS" },
  { id: 5, name: "Lucía Martínez", rating: 5, comment: "Un lugar increíble para comer en familia. Los chicos aman el Combo Kids y nosotros las hamburguesas gourmet.", date: "2026-01-30", avatar: "LM" },
  { id: 6, name: "Diego Fernández", rating: 5, comment: "Probé la Pizza Café Doncar y me voló la cabeza. Una pizza con hamburguesas adentro... genial.", date: "2025-12-20", avatar: "DF" },
];
