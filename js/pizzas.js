import { alergenos } from './alergenos.js';

export const pizzas = [
    {
        selectorTitle: '.pizzas .pizzas1 h2',
        selectorDescription: '.pizzas .pizzas1 .descripcion-plato',
        selectorAllergens: '.pizzas .pizzas1 .texto-alergenos',
        es: {
            title: "Pizza barbacoa",
            description: "Base de tomate, queso, carne picada, cebolla, maiz, bacon y salsa barbacoa",
            allergens: [alergenos.gluten.es,alergenos.leche.es]
        },
        en: {
            title: "BBQ PIZZA",
            description: "Tomato base, cheese, minced meat, onion, corn, bacon and barbecue sauce",
            allergens: [alergenos.gluten.en,alergenos.leche.en]
        },
        fr: {
            title: "PIZZA AU BARBECUE",
            description: "Base de tomates, fromage, viande hachée, oignon, maïs, bacon et sauce barbecue",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr]
        }
    }
];
