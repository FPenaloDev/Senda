import { alergenos } from './alergenos.js';

export const carnes = [
    {
        selectorTitle: '.carnes .carnes1 h2',
        selectorDescription: '.carnes .carnes1 .descripcion-plato', // Descripción del plato
        selectorAllergens: '.carnes .carnes1 .texto-alergenos', // Párrafo de los alérgenos
        es: {
            title: 'CHULETILLAS DE CORDERO',
            description: '',
            allergens: []
        },
        en: {
            title: 'LAMB CHOPS',
            description: '',
            allergens: []
        },
        fr: {
            title: "AIGUILLES D'AGNEAU",
            description: "",
            allergens: []
        }
    },
    {
        selectorTitle: '.carnes .carnes2 h2',
        selectorDescription: '.carnes .carnes2 .descripcion-plato',
        selectorAllergens: '.carnes .carnes2 .texto-alergenos',
        es: {
            title: 'CHULETÓN DE TERNERA 1KG',
            description: '',
            allergens: []
        },
        en: {
            title: 'VEAL CHOP 1KG',
            description: '',
            allergens: []
        },
        fr: {
            title: 'ÉCOUTE DE VEAU 1KG',
            description: "",
            allergens: []
        }
    },
    {
        selectorTitle: '.carnes .carnes3 h2',
        selectorDescription: '.carnes .carnes3 .descripcion-plato',
        selectorAllergens: '.carnes .carnes3 .texto-alergenos',
        es: {
            title: 'CHULETÓN DE VACA VIEJA',
            description: '',
            allergens: []
        },
        en: {
            title: 'T-BONE STEAK OF OLD BEEF',
            description: '',
            allergens: []
        },
        fr: {
            title: 'T-BONE DE BŒUF VIEUX',
            description: "",
            allergens: []
        }
    },
    {
        selectorTitle: '.carnes .carnes4 h2',
        selectorDescription: '.carnes .carnes4 .descripcion-plato',
        selectorAllergens: '.carnes .carnes4 .texto-alergenos',
        es: {
            title: 'ENTRECOT DE TERNERA',
            description: '',
            allergens: []
        },
        en: {
            title: 'VEAL ENTRECÔTE',
            description: '',
            allergens: []
        },
        fr: {
            title: 'ENTRECÔTE DE VEAU',
            description: "",
            allergens: []
        }
    },

    {
        selectorTitle: '.carnes .carnes5 h2',
        selectorDescription: '.carnes .carnes5 .descripcion-plato',
        selectorAllergens: '.carnes .carnes5 .texto-alergenos',
        es: {
            title: "CACHOPO",
            description: "Ternera, jamón, queso y pimiento de piquillo",
            allergens: [alergenos.leche.es, alergenos.gluten.es]
        },
        en: {
            title: "CACHOPO",
            description: "Beef, ham, cheese and piquillo peppers",
            allergens: [alergenos.leche.en, alergenos.gluten.en]
        },
        fr: {
            title: "CACHOPO",
            description: "Viande de bœuf, jambon, fromage et poivrons du piquillo",
            allergens: [alergenos.leche.fr, alergenos.gluten.fr]
        }
    },
    {
        selectorTitle: '.carnes .carnes6 h2',
        selectorDescription: '.carnes .carnes6 .descripcion-plato',
        selectorAllergens: '.carnes .carnes6 .texto-alergenos',
        es: {
            title: 'SECRETO DE CERDO',
            description: '',
            allergens: []
        },
        en: {
            title: 'PORK SECRET',
            description: '',
            allergens: []
        },
        fr: {
            title: 'SECRET DE PORC',
            description: "",
            allergens: []
        }
    },
    {
        selectorTitle: '.carnes .carnes7 h2',
        selectorDescription: '.carnes .carnes7 .descripcion-plato',
        selectorAllergens: '.carnes .carnes7 .texto-alergenos',
        es: {
            title: "COSTILLAR A LA BARBACOA",
            description: "",
            allergens: []
        },
        en: {
            title: "BARBECUED RIBS",
            description: "",
            allergens: []
        },
        fr: {
            title: "RIBS BARBECUÉS",
            description: "",
            allergens: []
        }
    },
    {
        selectorTitle: '.carnes .carnes8 h2',
        selectorDescription: '.carnes .carnes8 .descripcion-plato',
        selectorAllergens: '.carnes .carnes8 .texto-alergenos',
        es: {
            title: "SOLOMILLO DE CERDO",
            description: "",
            allergens: []
        },
        en: {
            title: "PORK FILLET",
            description: "",
            allergens: []
        },
        fr: {
            title: "FILET DE PORC",
            description: "",
            allergens: []
        }
    },
    {
        selectorTitle: '.carnes .carnes9 h2',
        selectorDescription: '.carnes .carnes9 .descripcion-plato',
        selectorAllergens: '.carnes .carnes9 .texto-alergenos',
        es: {
            title: "LACÓN A LA GALLEGA",
            description: "",
            allergens: []
        },
        en: {
            title: "GALICIAN STYLE HAM",
            description: "",
            allergens: []
        },
        fr: {
            title: "JAMBON À LA GALICIENNE",
            description: "",
            allergens: []
        }
    },
    {
        selectorTitle: '.carnes .carnes10 h2',
        selectorDescription: '.carnes .carnes10 .descripcion-plato',
        selectorAllergens: '.carnes .carnes10 .texto-alergenos',
        es: {
            title: "MOLLEJAS DE CORDERO AL AJILLO",
            description: "",
            allergens: []
        },
        en: {
            title: "LAMB SWEETBREADS WITH GARLIC",
            description: "",
            allergens: []
        },
        fr: {
            title: "RIS D'AGNEAU À L'AIL",
            description: "",
            allergens: []
        }
    },
];
