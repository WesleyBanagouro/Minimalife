var botao = document.getElementById('newsletter-button');
var burguer = document.getElementById('burguer')

function clicouNewsletter() {
  var nome = document.getElementById('nome-newsletter').value;
  var email = document.getElementById('email-newsletter').value;

  alert(`Olá ${nome}. Obrigado por visitar meu site. O email não foi cadastrado, isso é apenas uma demonstração.`);
}

botao.addEventListener('click', clicouNewsletter);

function clicouBurguer() {
  if (document.querySelector('#links ul').style.display == 'block') {
    document.querySelector('#links ul').style.display = 'none';
  } else {
    document.querySelector('#links ul').style.display = 'block';
  }
  
}

burguer.addEventListener('click', clicouBurguer);
  

