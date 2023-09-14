var botao = document.getElementById('newsletter-button');

function clicou() {
  var nome = document.getElementById('nome-newsletter').value;
  var email = document.getElementById('email-newsletter').value;

  alert(`Olá ${nome}. Obrigado por visitar meu site. O email não foi cadastrado, isso é uma demonstração apenas.`);
}

botao.addEventListener('click', clicou);

document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('#links').style.display = 
      document.querySelector('#links').style.display === 'none' ? 'block' : 'none';
});

  

