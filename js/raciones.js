import { alergenos } from './alergenos.js';

export const raciones = [
    {
        selectorTitle: '.raciones .raciones1 h2',
        selectorDescription: '.raciones .raciones1 .descripcion-plato', // Descripción del plato
        selectorAllergens: '.raciones .raciones1 .texto-alergenos', // Párrafo de los alérgenos
        es: {
            title: 'Huevos rotos con jamón o picadillo',
            description: '',
            allergens: [alergenos.huevos.es]
        },
        en: {
            title: 'SCRAMBLED EGGS WITH IBERIAN HAM OR SPICY MINCED PORK',
            description: '',
            allergens: [alergenos.huevos.en]
        },
        fr: {
            title: "ŒUFS SAUTÉS AU JAMBON IBERIQUE OU AU PICADILLO ÉPICÉ",
            description: "",
            allergens: [alergenos.huevos.fr]
        }
    },
    {
        selectorTitle: '.raciones .raciones2 h2',
        selectorDescription: '.raciones .raciones2 .descripcion-plato',
        selectorAllergens: '.raciones .raciones2 .texto-alergenos',
        es: {
            title: 'Huevos rotos con gulas',
            description: '',
            allergens: [alergenos.huevos.es,alergenos.pescado.es]
        },
        en: {
            title: 'BROKEN EGGS WITH BABY EELS',
            description: '',
            allergens: [alergenos.huevos.en,alergenos.pescado.en]
        },
        fr: {
            title: 'ŒUFS CASSÉS AUX GULES (PETITES ANGUILLES)',
            description: "",
            allergens: [alergenos.huevos.fr,alergenos.pescado.fr]
        }
    },
    {
        selectorTitle: '.raciones .raciones3 h2',
        selectorDescription: '.raciones .raciones3 .descripcion-plato',
        selectorAllergens: '.raciones .raciones3 .texto-alergenos',
        es: {
            title: 'Revuelto de morcilla',
            description: '',
            allergens: [alergenos.huevos.es]
        },
        en: {
            title: 'SCRAMBLED EGGS WITH BLOOD SAUSAGE',
            description: '',
            allergens: [alergenos.huevos.en]
        },
        fr: {
            title: 'ŒUFS BROUILLÉS À LA BOUDIN NOIR',
            description: "",
            allergens: [alergenos.huevos.fr]
        }
    },
    {
        selectorTitle: '.raciones .raciones4 h2',
        selectorDescription: '.raciones .raciones4 .descripcion-plato',
        selectorAllergens: '.raciones .raciones4 .texto-alergenos',
        es: {
            title: 'Oreja a la plancha',
            description: '',
            allergens: []
        },
        en: {
            title: 'GRILLED PORK EAR',
            description: '',
            allergens: []
        },
        fr: {
            title: 'OREILLE DE PORC GRILLÉE',
            description: "",
            allergens: []
        }
    },
    {
        selectorTitle: '.raciones .raciones5 h2',
        selectorDescription: '.raciones .raciones5 .descripcion-plato',
        selectorAllergens: '.raciones .raciones5 .texto-alergenos',
        es: {
            title: 'Alitas de pollo (12 UND)',
            description: '',
            allergens: []
        },
        en: {
            title: 'CHICKEN WINGS (12 UND)',
            description: '',
            allergens: []
        },
        fr: {
            title: 'AILES DE POULET (12 UND)',
            description: "",
            allergens: []
        }
    },
    {
        selectorTitle: '.raciones .raciones6 h2',
        selectorDescription: '.raciones .raciones6 .descripcion-plato',
        selectorAllergens: '.raciones .raciones6 .texto-alergenos',
        es: {
            title: 'Pollo al ajillo',
            description: '',
            allergens: []
        },
        en: {
            title: 'GARLIC CHICKEN',
            description: '',
            allergens: []
        },
        fr: {
            title: 'POULET À L’AIL',
            description: "",
            allergens: []
        }
    },
    {
        selectorTitle: '.raciones .raciones7 h2',
        selectorDescription: '.raciones .raciones7 .descripcion-plato',
        selectorAllergens: '.raciones .raciones7 .texto-alergenos',
        es: {
            title: 'BANDIDOS',
            description: '',
            allergens: [alergenos.gluten.es]
        },
        en: {
            title: 'BANDIDOS',
            description: '',
            allergens: [alergenos.gluten.en]
        },
        fr: {
            title: 'BANDIDOS',
            description: "",
            allergens: [alergenos.gluten.fr]
        }
    },
    {
        selectorTitle: '.raciones .raciones8 h2',
        selectorDescription: '.raciones .raciones8 .descripcion-plato',
        selectorAllergens: '.raciones .raciones8 .texto-alergenos',
        es: {
            title: 'Nuggets de pollo',
            description: '',
            allergens: [alergenos.gluten.es]
        },
        en: {
            title: 'CHICKEN NUGGETS',
            description: '',
            allergens: [alergenos.gluten.en]
        },
        fr: {
            title: 'NUGGETS DE POULET',
            description: "",
            allergens: [alergenos.gluten.fr]
        }
    },
    {
        selectorTitle: '.raciones .raciones9 h2',
        selectorDescription: '.raciones .raciones9 .descripcion-plato',
        selectorAllergens: '.raciones .raciones9 .texto-alergenos',
        es: {
            title: 'POLLO SENDA 44',
            description: '',
            allergens: [alergenos.gluten.es,alergenos.huevos.es,alergenos.moluscos.es,alergenos.pescado.es,alergenos.soja.es,alergenos.mostaza.es,alergenos.leche.es]
        },
        en: {
            title: 'CHICKEN SENDA 44',
            description: '',
            allergens: [alergenos.gluten.en,alergenos.huevos.en,alergenos.moluscos.en,alergenos.pescado.en,alergenos.soja.en,alergenos.mostaza.en,alergenos.leche.en]
        },
        fr: {
            title: 'Poulet Senda 44',
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.huevos.fr,alergenos.moluscos.fr,alergenos.pescado.fr,alergenos.soja.fr,alergenos.mostaza.fr,alergenos.leche.fr]
        }
    },
    {
        selectorTitle: '.raciones .raciones10 h2',
        selectorDescription: '.raciones .raciones10 .descripcion-plato',
        selectorAllergens: '.raciones .raciones10 .texto-alergenos',
        es: {
            title: 'SALCHIPAPAS',
            description: '',
            allergens: []
        },
        en: {
            title: 'FRIES WITH SAUSAGE',
            description: '',
            allergens: []
        },
        fr: {
            title: 'FRITES AVEC SAUCISSES',
            description: "",
            allergens: []
        }
    },
    {
        selectorTitle: '.raciones .raciones11 h2',
        selectorDescription: '.raciones .raciones11 .descripcion-plato',
        selectorAllergens: '.raciones .raciones11 .texto-alergenos',
        es: {
            title: 'PATATAS FRITAS',
            description: '',
            allergens: []
        },
        en: {
            title: 'FRENCH FRIES',
            description: '',
            allergens: []
        },
        fr: {
            title: 'FRITES',
            description: "",
            allergens: []
        }
    },
    {
        selectorTitle: '.raciones .raciones12 h2',
        selectorDescription: '.raciones .raciones12 .descripcion-plato',
        selectorAllergens: '.raciones .raciones12 .texto-alergenos',
        es: {
            title: 'PATATAS BRAVAS',
            description: '',
            allergens: []
        },
        en: {
            title: 'SPICY POTATOES',
            description: '',
            allergens: []
        },
        fr: {
            title: 'POMMES DE TERRE ÉPICÉES',
            description: "",
            allergens: []
        }
    },
    {
        selectorTitle: '.raciones .raciones13 h2',
        selectorDescription: '.raciones .raciones13 .descripcion-plato',
        selectorAllergens: '.raciones .raciones13 .texto-alergenos',
        es: {
            title: 'PATATAS BRAVIOLIS',
            description: '',
            allergens: [alergenos.leche.es]
        },
        en: {
            title: 'BRAVIOLI POTATOES',
            description: '',
            allergens: [alergenos.leche.en]
        },
        fr: {
            title: 'POMMES DE TERRE BRAVIOLIS',
            description: "",
            allergens: [alergenos.leche.fr]
        }
    },
    {
        selectorTitle: '.raciones .raciones14 h2',
        selectorDescription: '.raciones .raciones14 .descripcion-plato',
        selectorAllergens: '.raciones .raciones14 .texto-alergenos',
        es: {
            title: 'PATATAS BACON CHEESE',
            description: '',
            allergens: [alergenos.leche.es]
        },
        en: {
            title: 'BACON & CHEESE FRIES',
            description: '',
            allergens: [alergenos.leche.en]
        },
        fr: {
            title: 'FRITES AU FROMAGE ET BACON',
            description: "",
            allergens: [alergenos.leche.fr]
        }
    },
    {
        selectorTitle: '.raciones .raciones15 h2',
        selectorDescription: '.raciones .raciones15 .descripcion-plato',
        selectorAllergens: '.raciones .raciones15 .texto-alergenos',
        es: {
            title: 'FINGER MOZZARELLA',
            description: '',
            allergens: [alergenos.leche.es,alergenos.gluten.es]
        },
        en: {
            title: 'MOZZARELLA STICKS',
            description: '',
            allergens: [alergenos.leche.en,alergenos.gluten.en]
        },
        fr: {
            title: 'BÂTONNETS DE MOZZARELLA',
            description: "",
            allergens: [alergenos.leche.fr,alergenos.gluten.fr]
        }
    },
    {
        selectorTitle: '.raciones .raciones16 h2',
        selectorDescription: '.raciones .raciones16 .descripcion-plato',
        selectorAllergens: '.raciones .raciones16 .texto-alergenos',
        es: {
            title: 'JALAPEÑOS',
            description: '',
            allergens: [alergenos.leche.es,alergenos.gluten.es]
        },
        en: {
            title: 'JALAPEÑOS',
            description: '',
            allergens: [alergenos.leche.en,alergenos.gluten.en]
        },
        fr: {
            title: 'JALAPEÑOS',
            description: "",
            allergens: [alergenos.leche.fr,alergenos.gluten.fr]
        }
    },
    {
        selectorTitle: '.raciones .raciones17 h2',
        selectorDescription: '.raciones .raciones17 .descripcion-plato',
        selectorAllergens: '.raciones .raciones17 .texto-alergenos',
        es: {
            title: 'CALAMARES',
            description: '',
            allergens: [alergenos.gluten.es,alergenos.pescado.es]
        },
        en: {
            title: 'SQUID',
            description: '',
            allergens: [alergenos.gluten.en,alergenos.pescado.en]
        },
        fr: {
            title: 'CALAMARS',
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.pescado.fr]
        }
    },
    {
        selectorTitle: '.raciones .raciones18 h2',
        selectorDescription: '.raciones .raciones18 .descripcion-plato',
        selectorAllergens: '.raciones .raciones18 .texto-alergenos',
        es: {
            title: 'CHOPITOS',
            description: '',
            allergens: [alergenos.gluten.es,alergenos.pescado.es]
        },
        en: {
            title: 'BABY SQUID',
            description: '',
            allergens: [alergenos.gluten.en,alergenos.pescado.en]
        },
        fr: {
            title: 'PETIT CALAMARS',
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.pescado.fr]
        }
    },
    {
        selectorTitle: '.raciones .raciones19 h2',
        selectorDescription: '.raciones .raciones19 .descripcion-plato',
        selectorAllergens: '.raciones .raciones19 .texto-alergenos',
        es: {
            title: 'GAMBAS AL AJILLO',
            description: '',
            allergens: [alergenos.pescado.es]
        },
        en: {
            title: 'GARLIC SHRIMP',
            description: '',
            allergens: [alergenos.pescado.en]
        },
        fr: {
            title: 'CREVETTES À L’AIL',
            description: "",
            allergens: [alergenos.pescado.fr]
        }
    },
    {
        selectorTitle: '.raciones .raciones20 h2',
        selectorDescription: '.raciones .raciones20 .descripcion-plato',
        selectorAllergens: '.raciones .raciones20 .texto-alergenos',
        es: {
            title: 'BOQUERONES FRITOS',
            description: '',
            allergens: [alergenos.pescado.es,alergenos.gluten.es]
        },
        en: {
            title: 'FRIED ANCHOVIES',
            description: '',
            allergens: [alergenos.pescado.en,alergenos.gluten.en]
        },
        fr: {
            title: 'ANCHOIS FRITS',
            description: "",
            allergens: [alergenos.pescado.fr,alergenos.gluten.fr]
        }
    },
    {
        selectorTitle: '.raciones .raciones21 h2',
        selectorDescription: '.raciones .raciones21 .descripcion-plato',
        selectorAllergens: '.raciones .raciones21 .texto-alergenos',
        es: {
            title: 'Gambas a la gabardina',
            description: '',
            allergens: [alergenos.moluscos.es,alergenos.gluten.es,alergenos.leche.es,alergenos.soja.es,alergenos.mostaza.es]
        },
        en: {
            title: 'BATTERED SHRIMP',
            description: '',
            allergens: [alergenos.moluscos.en,alergenos.gluten.en,alergenos.leche.en,alergenos.soja.en,alergenos.mostaza.en]
        },
        fr: {
            title: 'CREVETTES EN GABARDINE',
            description: "",
            allergens: [alergenos.moluscos.fr,alergenos.gluten.fr,alergenos.leche.fr,alergenos.soja.fr,alergenos.mostaza.fr]
        }
    },
];
