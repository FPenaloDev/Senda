import { alergenos } from './alergenos.js';

export const arroces = [
    {
        selectorTitle: '.arroces .arroces1 h2',
        selectorDescription: '.arroces .arroces1 .descripcion-plato', // Descripción del plato
        selectorAllergens: '.arroces .arroces1 .texto-alergenos', // Párrafo de los alérgenos
        es: {
            title: 'Arroz Negro',
            description: 'Arroz bomba, calamares o sepia, tinta de calamar, caldo de pescado, cebolla, ajo, pimiento, tomate triturado, aceite de oliva, sal, pimienta, vino blanco, alioli.',
            allergens: [alergenos.gluten.es,alergenos.pescado.es, alergenos.huevos.es]
        },
        en: {
            title: 'Black Rice',
            description: 'Bomba rice, squid or cuttlefish, squid ink, fish stock, onion, garlic, bell pepper, crushed tomato, olive oil, salt, pepper, white wine, aioli.',
            allergens: [alergenos.gluten.fr,alergenos.pescado.en, alergenos.huevos.en]
        },
        fr: {
            title: 'Riz noir',
            description: "Riz bomba, calamars ou seiche, encre de seiche, bouillon de poisson, oignon, ail, poivron, tomate concassée, huile d'olive, sel, poivre, vin blanc, aïoli.",
            allergens: [alergenos.gluten.fr,alergenos.pescado.fr, alergenos.huevos.fr]
        }
    },
    {
        selectorTitle: '.arroces .arroces2 h2',
        selectorDescription: '.arroces .arroces2 .descripcion-plato', // Descripción del plato
        selectorAllergens: '.arroces .arroces2 .texto-alergenos', // Párrafo de los alérgenos
        es: {
            title: 'Paella Mixta',
            description: 'Arroz bomba, pollo, conejo, gambas, mejillones, calamares, judías verdes, garrofón, pimiento rojo, tomate triturado, ajo, aceite de oliva, caldo de pollo o pescado, azafrán, sal, pimienta, limón.',
            allergens: [alergenos.gluten.es,alergenos.pescado.es, alergenos.huevos.es]
        },
        en: {
            title: 'Mixed Paella',
            description: 'Bomba rice, chicken, rabbit, shrimp, mussels, squid, green beans, butter beans (garrofón), red bell pepper, crushed tomato, garlic, olive oil, chicken or fish stock, saffron, salt, pepper, lemon.',
            allergens: [alergenos.gluten.en,alergenos.pescado.en, alergenos.huevos.en]
        },
        fr: {
            title: 'Paella mixte',
            description: "Riz bomba, poulet, lapin, crevettes, moules, calmars, haricots verts, haricots de Lima (garrofón), poivron rouge, tomate concassée, ail, huile d'olive, bouillon de volaille ou de poisson, safran, sel, poivre, citron.",
            allergens: [alergenos.gluten.fr,alergenos.pescado.fr, alergenos.huevos.fr]
        }
    }
];
