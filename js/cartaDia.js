export function cartaDia() {
    const baguettes = document.querySelector('.baguettes.seccion');
    baguettes.style.display = 'none';
    const pizzas = document.querySelector('.pizzas.seccion');
    pizzas.style.display = 'none';
    const sandwichs = document.querySelector('.sandwichs.seccion');
    sandwichs.style.display = 'none';
    const hamburguesaDia = [1, 2, 3, 4].map(num => `.hamburguesas${num}`).join(', ');
    const hamburguesas = document.querySelectorAll(hamburguesaDia);

    hamburguesas.forEach(hamburguesa => {
        hamburguesa.style.display = 'none';
    });

}