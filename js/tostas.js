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
    {
        selectorTitle: '.tostas .tostas2 h2',
        selectorDescription: '.tostas .tostas2 .descripcion-plato',
        selectorAllergens: '.tostas .tostas2 .texto-alergenos',
        es: {
            title: 'Tosta de queso de rulo con mermelada',
            description: '',
            allergens: [alergenos.gluten.es,alergenos.leche.es]
        },
        en: {
            title: 'Toast of curl cheese with marmalade',
            description: '',
            allergens: [alergenos.gluten.en,alergenos.leche.en]
        },
        fr: {
            title: "Toast de fromage frisé avec marmelade",
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr]
        }
    },
    {
        selectorTitle: '.tostas .tostas3 h2',
        selectorDescription: '.tostas .tostas3 .descripcion-plato',
        selectorAllergens: '.tostas .tostas3 .texto-alergenos',
        es: {
            title: 'Tosta de chipirones con alioli',
            description: '',
            allergens: [alergenos.gluten.es,alergenos.leche.es,alergenos.pescado.es]
        },
        en: {
            title: 'Baby squid toast with aioli',
            description: '',
            allergens: [alergenos.gluten.en,alergenos.leche.en,alergenos.pescado.en]
        },
        fr: {
            title: "Toast de calamars avec aïoli",
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr,alergenos.pescado.fr]
        }
    },
    {
        selectorTitle: '.tostas .tostas4 h2',
        selectorDescription: '.tostas .tostas4 .descripcion-plato',
        selectorAllergens: '.tostas .tostas4 .texto-alergenos',
        es: {
            title: 'Tosta de gulas con gambas',
            description: '',
            allergens: [alergenos.gluten.es,alergenos.pescado.es,alergenos.moluscos.es]
        },
        en: {
            title: 'Toast with prawns',
            description: '',
            allergens: [alergenos.gluten.en,alergenos.pescado.en,alergenos.moluscos.en]
        },
        fr: {
            title: "Toast aux crevettes",
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.pescado.fr,alergenos.moluscos.fr]
        }
    },
    {
        selectorTitle: '.tostas .tostas5 h2',
        selectorDescription: '.tostas .tostas5 .descripcion-plato',
        selectorAllergens: '.tostas .tostas5 .texto-alergenos',
        es: {
            title: 'Tosta thai',
            description: '',
            allergens: [alergenos.gluten.es,alergenos.huevos.es]
        },
        en: {
            title: 'thai toast',
            description: '',
            allergens: [alergenos.gluten.en,alergenos.huevos.en]
        },
        fr: {
            title: "Tosta thaï",
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.huevos.fr]
        }
    },
    {
        selectorTitle: '.tostas .tostas6 h2',
        selectorDescription: '.tostas .tostas6 .descripcion-plato',
        selectorAllergens: '.tostas .tostas6 .texto-alergenos',
        es: {
            title: 'Tosta de secreto iberico',
            description: '',
            allergens: [alergenos.gluten.es]
        },
        en: {
            title: 'Iberian secret toast',
            description: '',
            allergens: [alergenos.gluten.en]
        },
        fr: {
            title: "Toast secret ibérique",
            description: "",
            allergens: [alergenos.gluten.fr]
        }
    },
    {
        selectorTitle: '.tostas .tostas7 h2',
        selectorDescription: '.tostas .tostas7 .descripcion-plato',
        selectorAllergens: '.tostas .tostas7 .texto-alergenos',
        es: {
            title: 'Tosta de boquerones, anchoas y queso',
            description: '',
            allergens: [alergenos.gluten.es,alergenos.leche.es,alergenos.pescado.es]
        },
        en: {
            title: 'Toast with anchovies, anchovies and cheese',
            description: '',
            allergens: [alergenos.gluten.en,alergenos.leche.en,alergenos.pescado.en]
        },
        fr: {
            title: "Toast aux anchois, anchois et fromage",
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr,alergenos.pescado.fr]
        }
    },
];
