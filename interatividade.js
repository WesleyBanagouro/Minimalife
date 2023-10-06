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
  
  if (linhas[0].hasAttribute('id')) {
    linhas[0].removeAttribute('id');
    linhas[1].removeAttribute('id');
    linhas[2].removeAttribute('id');
  } else {
    linhas[0].setAttribute('id', 'linha-1');
    linhas[1].setAttribute('id', 'linha-2');
    linhas[2].setAttribute('id', 'linha-3');
  }
}


hamburguer.addEventListener('click', burguer)

  

