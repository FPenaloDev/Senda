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
    },
    {
        selectorTitle: '.pizzas .pizzas2 h2',
        selectorDescription: '.pizzas .pizzas2 .descripcion-plato',
        selectorAllergens: '.pizzas .pizzas2 .texto-alergenos',
        es: {
            title: "Pizza pepperoni",
            description: "Base de tomate, queso, carne picada, cebolla, maiz, bacon y salsa barbacoa",
            allergens: [alergenos.gluten.es,alergenos.leche.es]
        },
        en: {
            title: "PEPPERONI PIZZA",
            description: "Tomato, cheese, pepperoni and oregano base",
            allergens: [alergenos.gluten.en,alergenos.leche.en]
        },
        fr: {
            title: "PIZZA AU PEPPERONI",
            description: "Base de tomates, de fromage, de pepperoni et d'origan",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr]
        }
    },
    {
        selectorTitle: '.pizzas .pizzas3 h2',
        selectorDescription: '.pizzas .pizzas3 .descripcion-plato',
        selectorAllergens: '.pizzas .pizzas3 .texto-alergenos',
        es: {
            title: "Pizza cuatro quesos",
            description: "Base de tomate y cuatro quesos",
            allergens: [alergenos.gluten.es,alergenos.leche.es]
        },
        en: {
            title: "4 CHEESE PIZZA",
            description: "Tomato and four cheese base",
            allergens: [alergenos.gluten.en,alergenos.leche.en]
        },
        fr: {
            title: "PIZZA AUX 4 FROMAGES",
            description: "Base de tomates et de quatre fromages",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr]
        }
    },
    {
        selectorTitle: '.pizzas .pizzas4 h2',
        selectorDescription: '.pizzas .pizzas4 .descripcion-plato',
        selectorAllergens: '.pizzas .pizzas4 .texto-alergenos',
        es: {
            title: "Pizza de verduras",
            description: "Base de tomate, queso, pimiento rojo y verde, cebolla, tomate cherry, champiñón y aceitunas negras.",
            allergens: [alergenos.gluten.es,alergenos.leche.es]
        },
        en: {
            title: "Vegetable pizza",
            description: "Tomato base, cheese, red and green pepper, onion, cherry tomato, mushroom and black olives.",
            allergens: [alergenos.gluten.en,alergenos.leche.en]
        },
        fr: {
            title: "Pizza aux légumes",
            description: "Base de tomate, fromage, poivron rouge et vert, oignon, tomate cerise, champignon et olives noires.",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr]
        }
    },
    {
        selectorTitle: '.pizzas .pizzas5 h2',
        selectorDescription: '.pizzas .pizzas5 .descripcion-plato',
        selectorAllergens: '.pizzas .pizzas5 .texto-alergenos',
        es: {
            title: "Pizza hawaiana",
            description: "Base de tomate, queso, jamón, piña y oregano.",
            allergens: [alergenos.gluten.es,alergenos.leche.es]
        },
        en: {
            title: "Hawaiian pizza",
            description: "Tomato, cheese, ham, pineapple and oregano base.",
            allergens: [alergenos.gluten.en,alergenos.leche.en]
        },
        fr: {
            title: "Pizza hawaïenne",
            description: "Base de tomates, fromage, jambon, ananas et origan.",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr]
        }
    },
    {
        selectorTitle: '.pizzas .pizzas6 h2',
        selectorDescription: '.pizzas .pizzas6 .descripcion-plato',
        selectorAllergens: '.pizzas .pizzas6 .texto-alergenos',
        es: {
            title: "Pizza jamón y queso",
            description: "Base de tomate, queso, jamón y oregano.",
            allergens: [alergenos.gluten.es,alergenos.leche.es]
        },
        en: {
            title: "Ham and cheese pizza",
            description: "Tomato, cheese, ham, and oregano base.",
            allergens: [alergenos.gluten.en,alergenos.leche.en]
        },
        fr: {
            title: "Pizza au jambon et au fromage",
            description: "Base de tomates, de fromage, de jambon et d'origan.",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr]
        }
    },
];
