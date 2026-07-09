const menu = document.querySelector('.menu');

menu?.addEventListener('click', () => {
    const is_expanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', `${!is_expanded}`);
});