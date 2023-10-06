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

function temId(elemento) {
  return elemento.id !== null;
}

function burguer() {
  const linhas = document.querySelectorAll('.linha');

  for (const linha of linhas) {
    if (temId(linha)) {
      linha.removeAttribute('id');
    } else {
      linha.setAttribute('id', 'linha-' + linha.index);
    }
  }
}

hamburguer.addEventListener('click', burguer)

  

