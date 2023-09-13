var botao = document.getElementById('newsletter-button');

function clicou() {
  var nome = document.getElementById('nome-newsletter').value;
  var email = document.getElementById('email-newsletter').value;

  alert(`Olá ${nome}. Obrigado por visitar meu site. O email não foi cadastrado, isso é uma demonstração apenas.`);
}

botao.addEventListener('click', clicou);


  // Fixar barra de navegação
  var navbar = document.getElementById('navbar');


  var navbarOffset = navbar.offsetTop;

  function fixarNavbar() {
    if (window.pageYOffset >= navbarOffset) {
      navbar.classList.add('navbar-fixed');
    } else {
      navbar.classList.remove('navbar-fixed');
    }
  }

  window.addEventListener('scroll', fixarNavbar);

