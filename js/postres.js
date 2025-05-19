import { alergenos } from './alergenos.js';

export const postres = [
    {
        selectorTitle: '.postres .postres1 h2',
        selectorDescription: '.postres .postres1 .descripcion-plato',
        selectorAllergens: '.postres .postres1 .texto-alergenos',
        es: {
            title: "Coulant de chocolate",
            description: "",
            allergens: [alergenos.gluten.es,alergenos.leche.es]
        },
        en: {
            title: "Chocolate coulant",
            description: "",
            allergens: [alergenos.gluten.en,alergenos.leche.en]
        },
        fr: {
            title: "Coulant au chocolat",
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr]
        }
    },
    {
        selectorTitle: '.postres .postres2 h2',
        selectorDescription: '.postres .postres2 .descripcion-plato',
        selectorAllergens: '.postres .postres2 .texto-alergenos',
        es: {
            title: "Coulant de queso",
            description: "",
            allergens: [alergenos.gluten.es,alergenos.leche.es]
        },
        en: {
            title: "Cheese coulant",
            description: "",
            allergens: [alergenos.gluten.en,alergenos.leche.en]
        },
        fr: {
            title: "Fromage coulant",
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr]
        }
    },
    {
        selectorTitle: '.postres .postres3 h2',
        selectorDescription: '.postres .postres3 .descripcion-plato',
        selectorAllergens: '.postres .postres3 .texto-alergenos',
        es: {
            title: "Coulant de chocolate blanco",
            description: "",
            allergens: [alergenos.gluten.es,alergenos.leche.es]
        },
        en: {
            title: "White chocolate coulant",
            description: "",
            allergens: [alergenos.gluten.en,alergenos.leche.en]
        },
        fr: {
            title: "Coulant au chocolat blanc",
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr]
        }
    },
    {
        selectorTitle: '.postres .postres4 h2',
        selectorDescription: '.postres .postres4 .descripcion-plato',
        selectorAllergens: '.postres .postres4 .texto-alergenos',
        es: {
            title: "Brownie",
            description: "",
            allergens: [alergenos.gluten.es,alergenos.leche.es,alergenos.frutosSecos.es]
        },
        en: {
            title: "Brownie",
            description: "",
            allergens: [alergenos.gluten.en,alergenos.leche.en,alergenos.frutosSecos.en]
        },
        fr: {
            title: "Brownie",
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr,alergenos.frutosSecos.fr]
        }
    },
    {
        selectorTitle: '.postres .postres5 h2',
        selectorDescription: '.postres .postres5 .descripcion-plato',
        selectorAllergens: '.postres .postres5 .texto-alergenos',
        es: {
            title: "Gofre",
            description: "<strong>Nata / Sirope:</strong> chocolate negro o blanco, fresa, caramelo, frutos del bosque y vainilla",
            allergens: [alergenos.gluten.es]
        },
        en: {
            title: "Waffle",
            description: "<strong>Cream / Syrup:</strong> dark or white chocolate, strawberry, caramel, berries and vanilla",
            allergens: [alergenos.gluten.en]
        },
        fr: {
            title: "Gaufre",
            description: "<strong>Crème / Sirop:</strong> chocolat noir ou blanc, fraise, caramel, baies et vanille",
            allergens: [alergenos.gluten.fr]
        }
    },
    {
        selectorTitle: '.postres .postres6 h2',
        selectorDescription: '.postres .postres6 .descripcion-plato',
        selectorAllergens: '.postres .postres6 .texto-alergenos',
        es: {
            title: "Tortitas",
            description: "<strong>Nata / sirope:</strong> chocolate negro o blanco, fresa, caramelo, frutos del bosque y vainilla",
            allergens: [alergenos.gluten.es,alergenos.leche.es]
        },
        en: {
            title: "Pancakes",
            description: "<strong>Cream / Syrup:</strong> dark or white chocolate, strawberry, caramel, berries and vanilla",
            allergens: [alergenos.gluten.en,alergenos.leche.en]
        },
        fr: {
            title: "Crêpes",
            description: "<strong>Crème / Sirop:</strong> chocolat noir ou blanc, fraise, caramel, baies et vanille",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr]
        }
    },
    {
        selectorTitle: '.postres .postres7 h2',
        selectorDescription: '.postres .postres7 .descripcion-plato',
        selectorAllergens: '.postres .postres7 .texto-alergenos',
        es: {
            title: "Tarta de queso",
            description: "",
            allergens: [alergenos.gluten.es,alergenos.leche.es]
        },
        en: {
            title: "Cheesecake",
            description: "",
            allergens: [alergenos.gluten.en,alergenos.leche.en]
        },
        fr: {
            title: "Gâteau au fromage",
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr]
        }
    },
    {
        selectorTitle: '.postres .postres8 h2',
        selectorDescription: '.postres .postres8 .descripcion-plato',
        selectorAllergens: '.postres .postres8 .texto-alergenos',
        es: {
            title: "Torrija de pan brioche",
            description: "",
            allergens: [alergenos.gluten.es,alergenos.leche.es]
        },
        en: {
            title: "Brioche bread torrija",
            description: "",
            allergens: [alergenos.gluten.en,alergenos.leche.en]
        },
        fr: {
            title: "Pain brioché torrija",
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr]
        }
    },
    {
        selectorTitle: '.postres .postres9 h2',
        selectorDescription: '.postres .postres9 .descripcion-plato',
        selectorAllergens: '.postres .postres9 .texto-alergenos',
        es: {
            title: "Crepe de chocolate",
            description: "",
            allergens: [alergenos.gluten.es,alergenos.leche.es,alergenos.huevos.es]
        },
        en: {
            title: "Chocolate crêpe",
            description: "",
            allergens: [alergenos.gluten.en,alergenos.leche.en,alergenos.huevos.en]
        },
        fr: {
            title: "Crêpe au chocolat",
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr,alergenos.huevos.fr]
        }
    },
    {
        selectorTitle: '.postres .postres10 h2',
        selectorDescription: '.postres .postres10 .descripcion-plato',
        selectorAllergens: '.postres .postres10 .texto-alergenos',
        es: {
            title: "Fondant de baileys",
            description: "",
            allergens: [alergenos.gluten.es,alergenos.leche.es,alergenos.huevos.es,alergenos.soja.es]
        },
        en: {
            title: "Danzays Fondant",
            description: "",
            allergens: [alergenos.gluten.en,alergenos.leche.en,alergenos.huevos.en,alergenos.soja.en]
        },
        fr: {
            title: "Fondant Baileys",
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr,alergenos.huevos.fr,alergenos.soja.fr]
        }
    },
    {
        selectorTitle: '.postres .postres11 h2',
        selectorDescription: '.postres .postres11 .descripcion-plato',
        selectorAllergens: '.postres .postres11 .texto-alergenos',
        es: {
            title: "Brookies",
            description: "<strong>Helado:</strong> fresa, nata, chocolate o vainilla.",
            allergens: [alergenos.gluten.es,alergenos.leche.es,alergenos.frutosSecos.es]
        },
        en: {
            title: "Brookies",
            description: "<strong>Ice cream:</strong> strawberry, cream, chocolate or vanilla.",
            allergens: [alergenos.gluten.en,alergenos.leche.en,alergenos.frutosSecos.en]
        },
        fr: {
            title: "Brookies",
            description: "<strong>Crème glacée:</strong> fraise, crème, chocolat ou vanille.",
            allergens: [alergenos.gluten.fr,alergenos.leche.fr,alergenos.frutosSecos.fr]
        }
    },
    {
        selectorTitle: '.postres .postres12 h2',
        selectorDescription: '.postres .postres12 .descripcion-plato',
        selectorAllergens: '.postres .postres12 .texto-alergenos',
        es: {
            title: "TARTA DE MANZANA",
            description: "",
            allergens: [alergenos.gluten.es,alergenos.frutosSecos.es]
        },
        en: {
            title: "APPLE CAKE",
            description: "",
            allergens: [alergenos.gluten.en,alergenos.frutosSecos.en]
        },
        fr: {
            title: "GÂTEAU AUX POMMES",
            description: "",
            allergens: [alergenos.gluten.fr,alergenos.frutosSecos.fr]
        }
    },
];
