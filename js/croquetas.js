import { alergenos } from './alergenos.js';

export const croquetas = [
    {
        selectorTitle: '.croquetas .croquetas1 h2',
        selectorDescription: '.croquetas .croquetas1 .descripcion-plato', // Descripción del plato
        selectorAllergens: '.croquetas .croquetas1 .texto-alergenos', // Párrafo de los alérgenos
        es: {
            title: 'Jamon',
            description: '',
            allergens: [alergenos.gluten.es,alergenos.leche.es,alergenos.huevos.es]
        },
        en: {
            title: 'HAM',
            description: '',
            allergens: [alergenos.gluten.en,alergenos.leche.en,alergenos.huevos.en]
        },
        fr: {
            title: "JAMBON",
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr,alergenos.huevos.fr]
        }
    },
    {
        selectorTitle: '.croquetas .croquetas2 h2',
        selectorDescription: '.croquetas .croquetas2 .descripcion-plato',
        selectorAllergens: '.croquetas .croquetas2 .texto-alergenos',
        es: {
            title: 'Queso Azul',
            description: '',
            allergens: [alergenos.gluten.es,alergenos.leche.es,alergenos.huevos.es]
        },
        en: {
            title: 'BLUE CHEESE',
            description: '',
            allergens: [alergenos.gluten.en,alergenos.leche.en,alergenos.huevos.en]
        },
        fr: {
            title: 'FROMAGE BLEU',
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr,alergenos.huevos.fr]
        }
    },
    {
        selectorTitle: '.croquetas .croquetas3 h2',
        selectorDescription: '.croquetas .croquetas3 .descripcion-plato',
        selectorAllergens: '.croquetas .croquetas3 .texto-alergenos',
        es: {
            title: 'Rabo de Toro',
            description: '',
            allergens: [alergenos.gluten.es,alergenos.leche.es,alergenos.huevos.es]
        },
        en: {
            title: 'OX TAIL',
            description: '',
            allergens: [alergenos.gluten.en,alergenos.leche.en,alergenos.huevos.en]
        },
        fr: {
            title: 'QUEUE DE BŒUF',
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr,alergenos.huevos.fr]
        }
    },
    {
        selectorTitle: '.croquetas .croquetas4 h2',
        selectorDescription: '.croquetas .croquetas4 .descripcion-plato',
        selectorAllergens: '.croquetas .croquetas4 .texto-alergenos',
        es: {
            title: 'BOLETUS',
            description: '',
            allergens: [alergenos.gluten.es,alergenos.leche.es,alergenos.huevos.es]
        },
        en: {
            title: 'BOLETUS',
            description: '',
            allergens: [alergenos.gluten.en,alergenos.leche.en,alergenos.huevos.en]
        },
        fr: {
            title: 'BOLET',
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr,alergenos.huevos.fr]
        }
    },
    {
        selectorTitle: '.croquetas .croquetas5 h2',
        selectorDescription: '.croquetas .croquetas5 .descripcion-plato',
        selectorAllergens: '.croquetas .croquetas5 .texto-alergenos',
        es: {
            title: 'Jamon (sin gluten)',
            description: '',
            allergens: [alergenos.leche.es,alergenos.huevos.es]
        },
        en: {
            title: 'HAM (GLUTEN-FREE)',
            description: '',
            allergens: [alergenos.leche.en,alergenos.huevos.en]
        },
        fr: {
            title: 'JAMBON (SANS GLUTEN)',
            description: "",
            allergens: [alergenos.leche.fr,alergenos.huevos.fr]
        }
    },
];
