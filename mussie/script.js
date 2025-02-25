// Seleciona o ícone de menu e a barra de navegação
menu = document.querySelector('.menu i');
navbar = document.querySelector('.header .navbar');

// Adiciona o evento de clique no ícone do menu
menu.onclick = () => {
    navbar.classList.toggle('active');  // Alterna a classe "active"
}
