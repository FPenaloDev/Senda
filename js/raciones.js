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
];
