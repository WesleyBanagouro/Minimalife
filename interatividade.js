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
  for (var i = 0; i < linhas.length; i++) {
    var linha = linhas[i];
    var linhaId = 'linha-' + (i + 1);

    if (linha.getAttribute('id') === linhaId) {
      linha.removeAttribute('id'); // Remove o ID se estiver presente
    } else {
      linha.setAttribute('id', linhaId); // Adiciona o ID se não estiver presente
    }
  }
}

hamburguer.addEventListener('click', burguer)

  

