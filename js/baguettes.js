import { alergenos } from './alergenos.js';

export const baguettes = [
    {
        selectorTitle: '.baguettes .baguettes1 h2',
        selectorDescription: '.baguettes .baguettes1 .descripcion-plato',
        selectorAllergens: '.baguettes .baguettes1 .texto-alergenos',
        es: {
            title: 'Baguette de lomo y queso',
            description: '',
            allergens: [alergenos.gluten.es,alergenos.leche.es]
        },
        en: {
            title: 'LOIN AND CHEESE BAGUETTE',
            description: '',
            allergens: [alergenos.gluten.en,alergenos.leche.en]
        },
        fr: {
            title: "BAGUETTE AU LOMO ET FROMAGE",
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr]
        }
    },
    {
        selectorTitle: '.baguettes .baguettes2 h2',
        selectorDescription: '.baguettes .baguettes2 .descripcion-plato',
        selectorAllergens: '.baguettes .baguettes2 .texto-alergenos',
        es: {
            title: 'Baguette de lomo y queso',
            description: '',
            allergens: [alergenos.gluten.es,alergenos.leche.es]
        },
        en: {
            title: 'BACON AND CHEESE BAGUETTE',
            description: '',
            allergens: [alergenos.gluten.en,alergenos.leche.en]
        },
        fr: {
            title: "BAGUETTE AU BACON ET FROMAGE",
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr]
        }
    },
    {
        selectorTitle: '.baguettes .baguettes3 h2',
        selectorDescription: '.baguettes .baguettes3 .descripcion-plato',
        selectorAllergens: '.baguettes .baguettes3 .texto-alergenos',
        es: {
            title: 'Baguette de calamares',
            description: '',
            allergens: [alergenos.gluten.es,alergenos.pescado.es]
        },
        en: {
            title: 'CALAMARI BAGUETTE',
            description: '',
            allergens: [alergenos.gluten.en,alergenos.pescado.en]
        },
        fr: {
            title: "BAGUETTE AUX CALAMARS",
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.pescado.fr]
        }
    },
    {
        selectorTitle: '.baguettes .baguettes4 h2',
        selectorDescription: '.baguettes .baguettes4 .descripcion-plato',
        selectorAllergens: '.baguettes .baguettes4 .texto-alergenos',
        es: {
            title: 'Baguette de jamón y tomate',
            description: '',
            allergens: [alergenos.gluten.es]
        },
        en: {
            title: 'HAM AND TOMATO BAGUETTE',
            description: '',
            allergens: [alergenos.gluten.en]
        },
        fr: {
            title: "BAGUETTE AU JAMBON ET TOMATE",
            description: "",
            allergens: [alergenos.gluten.fr]
        }
    },
    {
        selectorTitle: '.baguettes .baguettes5 h2',
        selectorDescription: '.baguettes .baguettes5 .descripcion-plato',
        selectorAllergens: '.baguettes .baguettes5 .texto-alergenos',
        es: {
            title: 'Baguette de panceta',
            description: '',
            allergens: [alergenos.gluten.es]
        },
        en: {
            title: 'BACON BAGUETTE',
            description: '',
            allergens: [alergenos.gluten.en]
        },
        fr: {
            title: "BAGUETTE À LA POITRINE DE PORC",
            description: "",
            allergens: [alergenos.gluten.fr]
        }
    },
    {
        selectorTitle: '.baguettes .baguettes6 h2',
        selectorDescription: '.baguettes .baguettes6 .descripcion-plato',
        selectorAllergens: '.baguettes .baguettes6 .texto-alergenos',
        es: {
            title: 'Baguette de pollo',
            description: '',
            allergens: [alergenos.gluten.es]
        },
        en: {
            title: 'BACON BAGUETTE',
            description: '',
            allergens: [alergenos.gluten.en]
        },
        fr: {
            title: "BAGUETTE À LA POITRINE DE PORC",
            description: "",
            allergens: [alergenos.gluten.fr]
        }
    },
    {
        selectorTitle: '.baguettes .baguettes7 h2',
        selectorDescription: '.baguettes .baguettes7 .descripcion-plato',
        selectorAllergens: '.baguettes .baguettes7 .texto-alergenos',
        es: {
            title: 'Baguette de pepito de ternera',
            description: '',
            allergens: [alergenos.gluten.es]
        },
        en: {
            title: 'BEEF PEPPITO BAGUETTE',
            description: '',
            allergens: [alergenos.gluten.en]
        },
        fr: {
            title: "BAGUETTE AU PEPITO DE BŒUF",
            description: "",
            allergens: [alergenos.gluten.fr]
        }
    },
    {
        selectorTitle: '.baguettes .baguettes8 h2',
        selectorDescription: '.baguettes .baguettes8 .descripcion-plato',
        selectorAllergens: '.baguettes .baguettes8 .texto-alergenos',
        es: {
            title: 'Baguette vegetal',
            description: "Mayonesa, lechuga, tomate, cebolla, atún, huevo y esparrago.",
            allergens: [alergenos.gluten.es,alergenos.pescado.es,alergenos.leche.es]
        },
        en: {
            title: 'VEGETABLE BAGUETTE',
            description: "Mayonnaise, lettuce, tomato, onion, tuna, egg and asparagus.",
            allergens: [alergenos.gluten.en,alergenos.pescado.en,alergenos.leche.en]
        },
        fr: {
            title: "BAGUETTE VÉGÉTARIENNE",
            description: "Mayonnaise, laitue, tomate, oignon, thon, œuf et asperges.",
            allergens: [alergenos.gluten.fr,alergenos.pescado.fr,alergenos.leche.fr]
        }
    },
    {
        selectorTitle: '.baguettes .baguettes9 h2',
        selectorDescription: '.baguettes .baguettes9 .descripcion-plato',
        selectorAllergens: '.baguettes .baguettes9 .texto-alergenos',
        es: {
            title: 'Baguette de atún y pimientos rojos',
            description: "",
            allergens: [alergenos.gluten.es,alergenos.pescado.es]
        },
        en: {
            title: 'TUNA AND ROASTED RED PEPPER BAGUETTE',
            description: "",
            allergens: [alergenos.gluten.en,alergenos.pescado.en]
        },
        fr: {
            title: "BAGUETTE AU THON ET POIVRONS ROUGES RÔTIS",
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.pescado.fr]
        }
    },
    {
        selectorTitle: '.baguettes .baguettes10 h2',
        selectorDescription: '.baguettes .baguettes10 .descripcion-plato',
        selectorAllergens: '.baguettes .baguettes10 .texto-alergenos',
        es: {
            title: 'Baguette de boquerones, anchoas y queso',
            description: "",
            allergens: [alergenos.gluten.es,alergenos.pescado.es]
        },
        en: {
            title: "ANCHOVY, MARINATED ANCHOVIES, AND CHEESE BAGUETTE",
            description: "",
            allergens: [alergenos.gluten.en,alergenos.pescado.en]
        },
        fr: {
            title: "BAGUETTE AUX ANCHOIS, BOQUERONES ET FROMAGE",
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.pescado.fr]
        }
    },
];
