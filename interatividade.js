var botao = document.getElementById('newsletter-button');
var linha1 = document.querySelector('.linha-1');
var linha2 = document.querySelector('.linha-2');
var linha3 = document.querySelector('.linha-3');
var hamburguer = document.querySelector('.hamburguer')

function clicouNewsletter() {
  var nome = document.getElementById('nome-newsletter').value;
  var email = document.getElementById('email-newsletter').value;

  alert(`Olá ${nome}. Obrigado por visitar meu site. O email não foi cadastrado, isso é apenas uma demonstração.`);
}

botao.addEventListener('click', clicouNewsletter);

function burguer() {
  var linhas = document.querySelectorAll('.linha');
  
  linhas[0].classList.toggle('aberto');
  linhas[1].classList.toggle('aberto');
  linhas[2].classList.toggle('aberto');
}

var hamburguer = document.querySelector('.menu-toggle');
hamburguer.addEventListener('click', burguer);

var linksMobile = document.querySelector('.links-mobile');

hamburguer.addEventListener('click', function () {
    linksMobile.classList.toggle('oculto');
});


  

