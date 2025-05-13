import { alergenos } from './alergenos.js';

export const ensaladas = [
    {
        selectorTitle: '.ensaladas .ensalada1 h2',
        selectorDescription: '.ensaladas .ensalada1 .descripcion-plato', // Descripción del plato
        selectorAllergens: '.ensaladas .ensalada1 .texto-alergenos', // Párrafo de los alérgenos
        es: {
            title: 'Ensalada de la casa',
            description: 'Lechuga, tomate, cebolla, zanahoria, remolacha, huevo, esparrago y atún.',
            allergens: [alergenos.pescado.es, alergenos.huevos.es]
        },
        en: {
            title: 'House Salad',
            description: 'Lettuce, tomato, onion, carrot, beetroot, egg, asparagus and tuna.',
            allergens: [alergenos.pescado.en, alergenos.huevos.en]
        },
        fr: {
            title: 'Salade de la maison',
            description: 'Laitue, tomate, oignon, carotte, betterave, œuf, asperges et thon.',
            allergens: [alergenos.pescado.fr, alergenos.huevos.fr]
        }
    },
    {
        selectorTitle: '.ensaladas .ensalada2 h2',
        selectorDescription: '.ensaladas .ensalada2 .descripcion-plato', 
        selectorAllergens: '.ensaladas .ensalada2 .texto-alergenos', 
        es: {
            title: 'Ensalada de rulo',
            description: 'Lechuga, tomates cherry, nueces, queso de rulo, orégano y vinagre balsamico de frutos del bosque.',
            allergens: [alergenos.pescado.es, alergenos.huevos.es]
        },
        en: {
            title: 'Roller salad',
            description: 'Lettuce, cherry tomatoes, walnuts, cheese, oregano and balsamic vinegar with berries.',
            allergens: [alergenos.pescado.en, alergenos.huevos.en]
        },
        fr: {
            title: 'Salade roulante',
            description: 'Laitue, tomates cerises, noix, fromage, origan et vinaigre balsamique avec des baies.',
            allergens: [alergenos.pescado.fr, alergenos.huevos.fr]
        }
    },
    {
        selectorTitle: '.ensaladas .ensalada3 h2',
        selectorDescription: '.ensaladas .ensalada3 .descripcion-plato', 
        selectorAllergens: '.ensaladas .ensalada3 .texto-alergenos', 
        es: {
            title: 'Ensalada cesar',
            description: "Lechuga, tomates cherry, nueces, queso de rulo, orégano y vinagre balsamico de frutos del bosque.",
            allergens: [alergenos.leche.es, alergenos.gluten.es,alergenos.huevos.es]
        },
        en: {
            title: 'CESAR SALAD',
            description: "Lettuce, cherry tomatoes, cheese, breaded chicken, and caesar sauce.",
            allergens: [alergenos.leche.en, alergenos.gluten.en,alergenos.huevos.en]
        },
        fr: {
            title: 'SALADE CESAR',
            description: "Laitue, tomates cerises, fromage, poulet pané et sauce césar sauce.",
            allergens: [alergenos.leche.fr, alergenos.gluten.fr,alergenos.huevos.fr]
        }
    },
    {
        selectorTitle: '.ensaladas .ensalada4 h2',
        selectorDescription: '.ensaladas .ensalada4 .descripcion-plato', 
        selectorAllergens: '.ensaladas .ensalada4 .texto-alergenos', 
        es: {
            title: 'Ensalada de ahumados',
            description: "Lechuga, tomate, ahumados, frutos secos y vinagre balsámico de módena.",
            allergens: [alergenos.pescado.es, alergenos.frutosSecos.es]
        },
        en: {
            title: 'Smoked fish salad',
            description: "Lettuce, tomato, smoked meats, nuts and balsamic vinegar of modena.",
            allergens: [alergenos.pescado.en, alergenos.frutosSecos.en]
        },
        fr: {
            title: 'Salade de poisson fumé',
            description: "Laitue, tomate, viandes fumées, noix et vinaigre balsamique de modène.",
            allergens: [alergenos.pescado.fr, alergenos.frutosSecos.fr]
        }
    },
];
