import { alergenos } from './alergenos.js';

export const sandwichs = [
    {
        selectorTitle: '.sandwichs .sandwichs1 h2',
        selectorDescription: '.sandwichs .sandwichs1 .descripcion-plato',
        selectorAllergens: '.sandwichs .sandwichs1 .texto-alergenos',
        es: {
            title: "SÁNDWICH MIXTO",
            description: "Jamón york y queso.",
            allergens: [alergenos.gluten.es,alergenos.leche.es]
        },
        en: {
            title: "LOIN AND CHEESE BAGUETTE",
            description: "Ham and cheese.",
            allergens: [alergenos.gluten.en,alergenos.leche.en]
        },
        fr: {
            title: "BAGUETTE AU LOMO ET FROMAGE",
            description: "Jambon et fromage.",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr]
        }
    },
    {
        selectorTitle: '.sandwichs .sandwichs2 h2',
        selectorDescription: '.sandwichs .sandwichs2 .descripcion-plato',
        selectorAllergens: '.sandwichs .sandwichs2 .texto-alergenos',
        es: {
            title: "SÁNDWICH MIXTO CON HUEVO",
            description: "Jamón york,queso y huevo.",
            allergens: [alergenos.gluten.es,alergenos.leche.es,alergenos.huevos.es]
        },
        en: {
            title: "MIXED EGG SANDWICH",
            description: "Ham, cheese and egg.",
            allergens: [alergenos.gluten.en,alergenos.leche.en,alergenos.huevos.en]
        },
        fr: {
            title: "SANDWICH AUX ŒUFS MIXTES",
            description: "Jambon, fromage et œuf.",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr,alergenos.huevos.fr]
        }
    },
    {
        selectorTitle: '.sandwichs .sandwichs3 h2',
        selectorDescription: '.sandwichs .sandwichs3 .descripcion-plato',
        selectorAllergens: '.sandwichs .sandwichs3 .texto-alergenos',
        es: {
            title: "Sándwich vegetal",
            description: "Mayonesa, lechuga, cebolla, tomate, atún, huevo y esparrago.",
            allergens: [alergenos.gluten.es,alergenos.pescado.es,alergenos.huevos.es]
        },
        en: {
            title: "VEGETABLE SANDWICH",
            description: "Mayonnaise, lettuce, onion, tomato, tuna, egg and asparagus.",
            allergens: [alergenos.gluten.en,alergenos.pescado.en,alergenos.huevos.en]
        },
        fr: {
            title: "SANDWICH AUX LÉGUMES",
            description: "Mayonnaise, laitue, oignon, tomate, thon, œuf et asperges.",
            allergens: [alergenos.gluten.fr,alergenos.pescado.fr,alergenos.huevos.fr]
        }
    },
    {
        selectorTitle: '.sandwichs .sandwichs4 h2',
        selectorDescription: '.sandwichs .sandwichs4 .descripcion-plato',
        selectorAllergens: '.sandwichs .sandwichs4 .texto-alergenos',
        es: {
            title: "Sándwich mixto vegetal",
            description: "Jamón york, queso, mayonesa, lechuga, cebolla, tomate, atún, huevo y esparrago.",
            allergens: [alergenos.gluten.es,alergenos.leche.es,alergenos.pescado.es,alergenos.huevos.es]
        },
        en: {
            title: "MIXED VEGETABLE SANDWICH",
            description: "Ham, cheese, mayonnaise, lettuce, onion, tomato, tuna, egg and asparagus.",
            allergens: [alergenos.gluten.en,alergenos.leche.en,alergenos.pescado.en,alergenos.huevos.en]
        },
        fr: {
            title: "SANDWICH AUX LÉGUMES MÉLANGÉS",
            description: "Jambon, fromage, mayonnaise, laitue, oignon, tomate, thon, œuf et asperges.",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr,alergenos.pescado.fr,alergenos.huevos.fr]
        }
    },
];
