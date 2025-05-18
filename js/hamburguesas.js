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
    {
        selectorTitle: '.hamburguesas .hamburguesas2 h2',
        selectorDescription: '.hamburguesas .hamburguesas2 .descripcion-plato',
        selectorAllergens: '.hamburguesas .hamburguesas2 .texto-alergenos',
        es: {
            title: "Hamburguesa con queso",
            description: "Carne, queso, lechuga, cebolla y tomate",
            allergens: [alergenos.gluten.es,alergenos.sésamo.es,alergenos.leche.es]
        },
        en: {
            title: "Cheeseburger",
            description: "Meat, cheese, lettuce, onion and tomato",
            allergens: [alergenos.gluten.en,alergenos.sésamo.en,alergenos.leche.en]
        },
        fr: {
            title: "Cheeseburger",
            description: "Viande, fromage, laitue, oignon et tomate",
            allergens: [alergenos.gluten.fr,alergenos.sésamo.fr,alergenos.leche.fr]
        }
    },
    {
        selectorTitle: '.hamburguesas .hamburguesas3 h2',
        selectorDescription: '.hamburguesas .hamburguesas3 .descripcion-plato',
        selectorAllergens: '.hamburguesas .hamburguesas3 .texto-alergenos',
        es: {
            title: "Hamburguesa con queso y bacon",
            description: "Carne, queso, bacon, lechuga, cebolla y tomate",
            allergens: [alergenos.gluten.es,alergenos.sésamo.es,alergenos.leche.es]
        },
        en: {
            title: "CHEESE BACON BURGER",
            description: "Meat, cheese, bacon, lettuce, onion and tomato",
            allergens: [alergenos.gluten.en,alergenos.sésamo.en,alergenos.leche.en]
        },
        fr: {
            title: "BURGER AU FROMAGE ET AU BACON",
            description: "Viande, fromage, bacon, laitue, oignon et tomate",
            allergens: [alergenos.gluten.fr,alergenos.sésamo.fr,alergenos.leche.fr]
        }
    },
    {
        selectorTitle: '.hamburguesas .hamburguesas4 h2',
        selectorDescription: '.hamburguesas .hamburguesas4 .descripcion-plato',
        selectorAllergens: '.hamburguesas .hamburguesas4 .texto-alergenos',
        es: {
            title: "Hamburguesa queso bacon huevo",
            description: "Carne, queso, bacon, lechuga, cebolla y tomate",
            allergens: [alergenos.gluten.es,alergenos.sésamo.es,alergenos.leche.es,alergenos.huevos.es]
        },
        en: {
            title: "Bacon and Egg Cheeseburger",
            description: "Meat, cheese, bacon, egg, lettuce, onion and tomato",
            allergens: [alergenos.gluten.en,alergenos.sésamo.en,alergenos.leche.en,alergenos.huevos.en]
        },
        fr: {
            title: "Cheeseburger, bacon, œuf",
            description: "Viande, fromage, bacon, œuf, laitue, oignon et tomate",
            allergens: [alergenos.gluten.fr,alergenos.sésamo.fr,alergenos.leche.fr,alergenos.huevos.fr]
        }
    },
    {
        selectorTitle: '.hamburguesas .hamburguesas5 h2',
        selectorDescription: '.hamburguesas .hamburguesas5 .descripcion-plato',
        selectorAllergens: '.hamburguesas .hamburguesas5 .texto-alergenos',
        es: {
            title: "Hamburguesa krispy chicken",
            description: "Pollo, lechuga y tomate",
            allergens: [alergenos.gluten.es,alergenos.sésamo.es,alergenos.leche.es]
        },
        en: {
            title: "Krispy Chicken Burger",
            description: "Chicken, lettuce and tomato",
            allergens: [alergenos.gluten.en,alergenos.sésamo.en,alergenos.leche.en]
        },
        fr: {
            title: "Burger de poulet croustillant",
            description: "Poulet, laitue et tomate",
            allergens: [alergenos.gluten.fr,alergenos.sésamo.fr,alergenos.leche.fr]
        }
    },
    {
        selectorTitle: '.hamburguesas .hamburguesas6 h2',
        selectorDescription: '.hamburguesas .hamburguesas6 .descripcion-plato',
        selectorAllergens: '.hamburguesas .hamburguesas6 .texto-alergenos',
        es: {
            title: "Hamburguesa ciervo en pan brioche",
            description: "Carne de ciervo, queso de rulo, cebolla caramelizada,salsa miel y mostaza, tomate y lechuga",
            allergens: [alergenos.gluten.es,alergenos.leche.es,alergenos.mostaza.es]
        },
        en: {
            title: "Deer burger in brioche bun",
            description: "Venison, curd cheese, caramelized onion, honey and mustard sauce, tomato and lettuce",
            allergens: [alergenos.gluten.en,alergenos.leche.en,alergenos.mostaza.en]
        },
        fr: {
            title: "Burger de cerf dans un pain brioché",
            description: "Venaison, fromage blanc, oignon caramélisé, sauce miel et moutarde, tomate et laitue",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr,alergenos.mostaza.fr]
        }
    },
    {
        selectorTitle: '.hamburguesas .hamburguesas7 h2',
        selectorDescription: '.hamburguesas .hamburguesas7 .descripcion-plato',
        selectorAllergens: '.hamburguesas .hamburguesas7 .texto-alergenos',
        es: {
            title: "Hamburguesa angus en pan brioche",
            description: "Carne angus, queso de rulo, cebolla caramelizada, salsa miel y mostaza, jamon serrano, tomate y lechuga",
            allergens: [alergenos.gluten.es,alergenos.leche.es,alergenos.mostaza.es]
        },
        en: {
            title: "Angus burger on brioche bun",
            description: "Angus beef, curd cheese, caramelized onion, honey and mustard sauce, Serrano ham, tomato and lettuce",
            allergens: [alergenos.gluten.en,alergenos.leche.en,alergenos.mostaza.en]
        },
        fr: {
            title: "Burger Angus sur pain brioché",
            description: "Bœuf Angus, fromage blanc, oignon caramélisé, sauce miel et moutarde, jambon Serrano, tomate et laitue",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr,alergenos.mostaza.fr]
        }
    },
    {
        selectorTitle: '.hamburguesas .hamburguesas8 h2',
        selectorDescription: '.hamburguesas .hamburguesas8 .descripcion-plato',
        selectorAllergens: '.hamburguesas .hamburguesas8 .texto-alergenos',
        es: {
            title: "HAMBURGUESA DE BUEY 100% (220G)",
            description: "Carne de buey, queso, cebolla, salsa de la casa, tomate y lechuga",
            allergens: [alergenos.gluten.es,alergenos.leche.es]
        },
        en: {
            title: "100% OX BURGER (220G)",
            description: "Beef, cheese, onion, house sauce, tomato and lettuce",
            allergens: [alergenos.gluten.en,alergenos.leche.en]
        },
        fr: {
            title: "BURGER 100% BOEUF (220G)",
            description: "Bœuf, fromage, oignon, sauce maison, tomate et laitue",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr]
        }
    },
];
