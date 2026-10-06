/**
 * Plantilla de la manada.
 *
 * Completa aquí los textos de cada perro.
 * Las fotos van en src/assets/fotos/<carpeta>/.
 * Para sumar otro perro: agrégalo a `dogs`, crea su carpeta de fotos y ajusta la familia.
 */

import grandparentsPhoto from "../assets/icon/familia/papas.png";
import marthaPhoto from "../assets/icon/familia/martha.jpg";
import rominaPhoto from "../assets/icon/familia/romina.jpg";
import goldenIcon from "../assets/icon/icongolden.png";
import salchichaIcon from "../assets/icon/iconsalchicha.png";

export const pending = "Por completar";

export type DogSlug = "maddy" | "blacky" | "simba" | "charlotte";

export interface Favorite {
  label: string;
  value: string;
}

export interface Dog {
  slug: DogSlug;
  name: string;
  siblingSlug: DogSlug;
  cousinSlugs: [DogSlug, DogSlug];
  breed: string;
  sex: string;
  birthdate: string;
  age: string;
  arrived: string;
  color: string;
  weight: string;
  story: string;
  personality: string;
  likes: string[];
  dislikes: string[];
  favorites: Favorite[];
  quirks: string[];
  routine: string;
  care: string;
  anecdotes: string[];
}

export interface Accent {
  wash: string;
  ink: string;
  chip: string;
  dot: string;
  ring: string;
}

export const breedIcons = {
  maddy: salchichaIcon,
  blacky: salchichaIcon,
  simba: goldenIcon,
  charlotte: goldenIcon,
} as const;

export const accents: Record<DogSlug, Accent> = {
  maddy: {
    wash: "bg-amber-100",
    ink: "text-amber-950",
    chip: "bg-amber-100 text-amber-950",
    dot: "bg-amber-500",
    ring: "ring-amber-300",
  },
  blacky: {
    wash: "bg-stone-800",
    ink: "text-stone-50",
    chip: "bg-stone-800 text-stone-50",
    dot: "bg-stone-800",
    ring: "ring-stone-400",
  },
  simba: {
    wash: "bg-orange-100",
    ink: "text-orange-950",
    chip: "bg-orange-100 text-orange-950",
    dot: "bg-orange-500",
    ring: "ring-orange-300",
  },
  charlotte: {
    wash: "bg-rose-100",
    ink: "text-rose-950",
    chip: "bg-rose-100 text-rose-950",
    dot: "bg-rose-500",
    ring: "ring-rose-300",
  },
};

function profile(name: string): Omit<Dog, "slug" | "name" | "siblingSlug" | "cousinSlugs"> {
  return {
    breed: pending,
    sex: pending,
    birthdate: pending,
    age: pending,
    arrived: pending,
    color: pending,
    weight: pending,
    story: `Aquí va la historia de ${name}: cómo llegó a casa, de dónde viene y el recuerdo que no quieres olvidar.`,
    personality: `Describe cómo es ${name} cada día: la energía, la forma de saludar y cómo se lleva con el resto de la manada.`,
    likes: [pending, pending, pending],
    dislikes: [pending, pending],
    favorites: [
      { label: "Comida", value: pending },
      { label: "Juguete", value: pending },
      { label: "Lugar de la casa", value: pending },
      { label: "Paseo", value: pending },
    ],
    quirks: [pending, pending],
    routine: `Cuenta un día con ${name}: a qué hora come, cuándo pasea, dónde es la siesta y en qué momento se le nota más feliz.`,
    care: "Veterinario, alimentación, alergias o cualquier cuidado especial. Por completar.",
    anecdotes: [pending, pending],
  };
}

export const dogs: Dog[] = [
  {
    slug: "maddy",
    name: "Maddy",
    siblingSlug: "blacky",
    cousinSlugs: ["simba", "charlotte"],
    ...profile("Maddy"),
    birthdate: "01/10/2023",
    arrived: "01/12/2023",
    personality: "Es chiquitita y se cree una princesa.",
  },
  {
    slug: "blacky",
    name: "Blacky",
    siblingSlug: "maddy",
    cousinSlugs: ["simba", "charlotte"],
    ...profile("Blacky"),
    birthdate: "17/09/2022",
    arrived: "17/11/2022",
    personality: "Siempre quiere estar con sus juguetes y que se lo tiren.",
  },
  {
    slug: "simba",
    name: "Simba",
    siblingSlug: "charlotte",
    cousinSlugs: ["maddy", "blacky"],
    ...profile("Simba"),
    birthdate: "01/09/2025",
    arrived: "04/11/2026",
    personality: "Siempre anda con algo en la boca.",
  },
  {
    slug: "charlotte",
    name: "Charlotte",
    siblingSlug: "simba",
    cousinSlugs: ["maddy", "blacky"],
    ...profile("Charlotte"),
    birthdate: "01/09/2025",
    arrived: "04/11/2026",
    personality: "Es cariñosa y le gusta meterse a la piscina.",
  },
];

export function getDog(slug: string): Dog {
  const dog = dogs.find((item) => item.slug === slug);
  if (!dog) {
    throw new Error(`No existe el perro "${slug}".`);
  }
  return dog;
}

export function packLine(dog: Dog): string {
  const sibling = getDog(dog.siblingSlug);
  const cousins = dog.cousinSlugs.map((slug) => getDog(slug).name).join(" y ");
  return `Con ${sibling.name} son hermanos. Con ${cousins} son primos.`;
}

export const pedigree = {
  grandparentsLabel: "Abuelos en común",
  grandparentsName: "Alfredo Llanos e Ingrid Frelijj",
  grandparentsPhoto,
  branches: [
    {
      parentsLabel: "Mamá de Maddy y Blacky",
      parentsName: "Romina Llanos",
      photo: rominaPhoto,
      photoPosition: "center 42%",
      slugs: ["maddy", "blacky"] as const,
    },
    {
      parentsLabel: "Mamá de Charlotte y Simba",
      parentsName: "Martha Llanos",
      photo: marthaPhoto,
      photoPosition: "center 22%",
      slugs: ["charlotte", "simba"] as const,
    },
  ],
};

export const household = {
  intro:
    "Cuando quieras, cuenta cómo conviven los cuatro: quién empieza el juego, quién ocupa el sofá y cómo es un paseo con toda la manada.",
  notes: [
    {
      title: "Maddy y Blacky",
      text: "Son hermanos. Aquí va cómo se buscan, si duermen cerca o quién manda en casa. Por completar.",
    },
    {
      title: "Charlotte y Simba",
      text: "Son hermanos. Aquí va su forma de jugar y de estar juntos. Por completar.",
    },
    {
      title: "Primos",
      text: "Maddy y Blacky son primos de Charlotte y Simba. Cuenta cómo se llevan las dos parejas. Por completar.",
    },
  ],
};
