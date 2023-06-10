
document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var nome = sanitizeHTML(document.getElementById('nome').value);
  var email = sanitizeHTML(document.getElementById('email').value);
  var telefone = sanitizeHTML(document.getElementById('fone').value);
  var mensagem = document.getElementById('msm').value; // Campo de mensagem vulneravel a ataques XSS
  var contato = sanitizeHTML(document.querySelector('input[name="contato"]:checked').value);
  var horario = sanitizeHTML(document.querySelector('select[name="horario"]').value);
  var receberNovidades = document.getElementById('novidades').checked ? 'Sim' : 'Não';

  var novaJanela = window.open('', '_blank');
  novaJanela.document.write('<h2>Dados do Formulário</h2>');
  novaJanela.document.write('<p>Nome: ' + nome + '</p>');
  novaJanela.document.write('<p>Email: ' + email + '</p>');
  novaJanela.document.write('<p>Telefone: ' + telefone + '</p>');
  novaJanela.document.write('<p>Mensagem: ' + mensagem + '</p>'); // Campo de mensagem vulneravel a ataques XSS
  novaJanela.document.write('<p>Contato preferido: ' + contato + '</p>');
  novaJanela.document.write('<p>Horário preferido: ' + horario + '</p>');
  novaJanela.document.write('<p>Gostaria de receber novidades por email? ' + receberNovidades + '</p>');
  novaJanela.document.close();
});

function sanitizeHTML(value) {
  var element = document.createElement('div');
  element.innerText = value;
  return element.innerHTML;
}
