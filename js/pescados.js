import { alergenos } from './alergenos.js';

export const pescados = [
    {
        selectorTitle: '.pescados .pescados1 h2',
        selectorDescription: '.pescados .pescados1 .descripcion-plato', // Descripción del plato
        selectorAllergens: '.pescados .pescados1 .texto-alergenos', // Párrafo de los alérgenos
        es: {
            title: 'Dorada',
            description: '',
            allergens: []
        },
        en: {
            title: 'Gilt-head bream',
            description: '',
            allergens: []
        },
        fr: {
            title: "Dorade royale",
            description: "",
            allergens: []
        }
    },
    {
        selectorTitle: '.pescados .pescados2 h2',
        selectorDescription: '.pescados .pescados2 .descripcion-plato',
        selectorAllergens: '.pescados .pescados2 .texto-alergenos',
        es: {
            title: 'LUBINA',
            description: '',
            allergens: []
        },
        en: {
            title: 'Sea bass',
            description: '',
            allergens: []
        },
        fr: {
            title: 'Bar',
            description: "",
            allergens: []
        }
    },
    {
        selectorTitle: '.pescados .pescados3 h2',
        selectorDescription: '.pescados .pescados3 .descripcion-plato',
        selectorAllergens: '.pescados .pescados3 .texto-alergenos',
        es: {
            title: 'EMPERADOR',
            description: '',
            allergens: []
        },
        en: {
            title: 'Swordfish',
            description: '',
            allergens: []
        },
        fr: {
            title: 'Espadon',
            description: "",
            allergens: []
        }
    },
    {
        selectorTitle: '.pescados .pescados4 h2',
        selectorDescription: '.pescados .pescados4 .descripcion-plato',
        selectorAllergens: '.pescados .pescados4 .texto-alergenos',
        es: {
            title: 'SEPIA A LA PLANCHA',
            description: '',
            allergens: []
        },
        en: {
            title: 'Grilled cuttlefish',
            description: '',
            allergens: []
        },
        fr: {
            title: 'Seiche grillée',
            description: "",
            allergens: []
        }
    }];
