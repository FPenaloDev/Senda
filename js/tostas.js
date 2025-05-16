import { alergenos } from './alergenos.js';

export const tostas = [
    {
        selectorTitle: '.tostas .tostas1 h2',
        selectorDescription: '.tostas .tostas1 .descripcion-plato',
        selectorAllergens: '.tostas .tostas1 .texto-alergenos',
        es: {
            title: 'Tosta de solomillo al romero con salsa de limón',
            description: '',
            allergens: [alergenos.gluten.es]
        },
        en: {
            title: 'Toast of sirloin with rosemary and lemon sauce',
            description: '',
            allergens: [alergenos.gluten.en]
        },
        fr: {
            title: "Toast d'aloyau au romarin et à la sauce au citron",
            description: "",
            allergens: [alergenos.gluten.fr]
        }
    },
];
