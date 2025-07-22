import { alergenos } from './alergenos.js';

export const croquetas = [
    {
        selectorTitle: '.raciones .raciones22 h2',
        selectorDescription: '.raciones .raciones22 .descripcion-plato', // Descripción del plato
        selectorAllergens: '.raciones .raciones22 .texto-alergenos', // Párrafo de los alérgenos
        es: {
            title: 'Croquetas de Jamon',
            description: '',
            allergens: [alergenos.gluten.es,alergenos.leche.es,alergenos.huevos.es]
        },
        en: {
            title: 'Croquettes of HAM',
            description: '',
            allergens: [alergenos.gluten.en,alergenos.leche.en,alergenos.huevos.en]
        },
        fr: {
            title: "croquettes de JAMBON",
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr,alergenos.huevos.fr]
        }
    },
    {
        selectorTitle: '.raciones .raciones23 h2',
        selectorDescription: '.raciones .raciones23 .descripcion-plato',
        selectorAllergens: '.raciones .raciones23 .texto-alergenos',
        es: {
            title: 'Croquetas de Queso Azul',
            description: '',
            allergens: [alergenos.gluten.es,alergenos.leche.es,alergenos.huevos.es]
        },
        en: {
            title: 'Croquettes of BLUE CHEESE',
            description: '',
            allergens: [alergenos.gluten.en,alergenos.leche.en,alergenos.huevos.en]
        },
        fr: {
            title: 'croquettes de FROMAGE BLEU',
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr,alergenos.huevos.fr]
        }
    },
    {
        selectorTitle: '.raciones .raciones24 h2',
        selectorDescription: '.raciones .raciones24 .descripcion-plato',
        selectorAllergens: '.raciones .raciones24 .texto-alergenos',
        es: {
            title: 'Croquetas de Rabo de Toro',
            description: '',
            allergens: [alergenos.gluten.es,alergenos.leche.es,alergenos.huevos.es]
        },
        en: {
            title: 'Croquettes of OX TAIL',
            description: '',
            allergens: [alergenos.gluten.en,alergenos.leche.en,alergenos.huevos.en]
        },
        fr: {
            title: 'croquettes de QUEUE DE BŒUF',
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr,alergenos.huevos.fr]
        }
    },
    {
        selectorTitle: '.raciones .raciones25 h2',
        selectorDescription: '.raciones .raciones25 .descripcion-plato',
        selectorAllergens: '.raciones .raciones25 .texto-alergenos',
        es: {
            title: 'Croquetas de BOLETUS',
            description: '',
            allergens: [alergenos.gluten.es,alergenos.leche.es,alergenos.huevos.es]
        },
        en: {
            title: 'Croquettes of BOLETUS',
            description: '',
            allergens: [alergenos.gluten.en,alergenos.leche.en,alergenos.huevos.en]
        },
        fr: {
            title: 'croquettes de BOLET',
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr,alergenos.huevos.fr]
        }
    },
    {
        selectorTitle: '.raciones .raciones26 h2',
        selectorDescription: '.raciones .raciones26 .descripcion-plato',
        selectorAllergens: '.raciones .raciones26 .texto-alergenos',
        es: {
            title: 'Croquetas de Jamon (sin gluten)',
            description: '',
            allergens: [alergenos.leche.es,alergenos.huevos.es]
        },
        en: {
            title: 'Croquettes of HAM (GLUTEN-FREE)',
            description: '',
            allergens: [alergenos.leche.en,alergenos.huevos.en]
        },
        fr: {
            title: 'croquettes de JAMBON (SANS GLUTEN)',
            description: "",
            allergens: [alergenos.leche.fr,alergenos.huevos.fr]
        }
    },
];
