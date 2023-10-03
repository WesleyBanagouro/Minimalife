var botao = document.getElementById('newsletter-button');
var burguer = document.getElementById('burguer')

function clicouNewsletter() {
  var nome = document.getElementById('nome-newsletter').value;
  var email = document.getElementById('email-newsletter').value;

  alert(`Olá ${nome}. Obrigado por visitar meu site. O email não foi cadastrado, isso é apenas uma demonstração.`);
}

botao.addEventListener('click', clicouNewsletter);

function clicouBurguer() {
  if (document.querySelector('#links ul').style.display == 'inline-block') {
    document.querySelector('#links ul').style.display = 'none';
    document.querySelector('#links').style.top = '-100%'; /* Move o #links para fora da tela */
  } else {
    document.querySelector('#links ul').style.display = 'inline-block';
    document.querySelector('#links').style.top = '100%'; /* Move o #links para a posição inicial */
    document.querySelector('#links').style.left = '100%'; /* Move o #links para a posição inicial */
  }
}

burguer.addEventListener('click', clicouBurguer);

  

