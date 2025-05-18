import { alergenos } from './alergenos.js';

export const hamburguesas = [
    {
        selectorTitle: '.hamburguesas .hamburguesas1 h2',
        selectorDescription: '.hamburguesas .hamburguesas1 .descripcion-plato',
        selectorAllergens: '.hamburguesas .hamburguesas1 .texto-alergenos',
        es: {
            title: "Hamburguesa",
            description: "Carne, lechuga, cebolla y tomate.",
            allergens: [alergenos.gluten.es,alergenos.sésamo.es,alergenos.leche.es]
        },
        en: {
            title: "Hamburger",
            description: "Meat, lettuce, onion and tomato",
            allergens: [alergenos.gluten.en,alergenos.sésamo.en,alergenos.leche.en]
        },
        fr: {
            title: "Hamburger",
            description: "Viande, laitue, oignon et tomate",
            allergens: [alergenos.gluten.fr,alergenos.sésamo.fr,alergenos.leche.fr]
        }
    },
];
