import { alergenos } from './alergenos.js';

export const croquetas = [
    {
        selectorTitle: '.croquetas .croquetas1 h2',
        selectorDescription: '.croquetas .croquetas1 .descripcion-plato', // Descripción del plato
        selectorAllergens: '.croquetas .croquetas1 .texto-alergenos', // Párrafo de los alérgenos
        es: {
            title: 'Jamon',
            description: '',
            allergens: []
        },
        en: {
            title: 'HAM',
            description: '',
            allergens: []
        },
        fr: {
            title: "JAMBON",
            description: "",
            allergens: []
        }
    },
    {
        selectorTitle: '.croquetas .croquetas2 h2',
        selectorDescription: '.croquetas .croquetas2 .descripcion-plato',
        selectorAllergens: '.croquetas .croquetas2 .texto-alergenos',
        es: {
            title: 'Queso Azul',
            description: '',
            allergens: []
        },
        en: {
            title: 'BLUE CHEESE',
            description: '',
            allergens: []
        },
        fr: {
            title: 'FROMAGE BLEU',
            description: "",
            allergens: []
        }
    },
    {
        selectorTitle: '.croquetas .croquetas3 h2',
        selectorDescription: '.croquetas .croquetas3 .descripcion-plato',
        selectorAllergens: '.croquetas .croquetas3 .texto-alergenos',
        es: {
            title: 'Rabo de Toro',
            description: '',
            allergens: []
        },
        en: {
            title: 'OX TAIL',
            description: '',
            allergens: []
        },
        fr: {
            title: 'QUEUE DE BŒUF',
            description: "",
            allergens: []
        }
    },
    {
        selectorTitle: '.croquetas .croquetas4 h2',
        selectorDescription: '.croquetas .croquetas4 .descripcion-plato',
        selectorAllergens: '.croquetas .croquetas4 .texto-alergenos',
        es: {
            title: 'BOLETUS',
            description: '',
            allergens: []
        },
        en: {
            title: 'BOLETUS',
            description: '',
            allergens: []
        },
        fr: {
            title: 'BOLET',
            description: "",
            allergens: []
        }
    },
    {
        selectorTitle: '.croquetas .croquetas5 h2',
        selectorDescription: '.croquetas .croquetas5 .descripcion-plato',
        selectorAllergens: '.croquetas .croquetas5 .texto-alergenos',
        es: {
            title: 'Jamon (sin gluten)',
            description: '',
            allergens: []
        },
        en: {
            title: 'HAM (GLUTEN-FREE)',
            description: '',
            allergens: []
        },
        fr: {
            title: 'JAMBON (SANS GLUTEN)',
            description: "",
            allergens: []
        }
    },
];
