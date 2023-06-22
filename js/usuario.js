setTimeout(function() {
  adicionarConteudoPrincipal();
}, 2);

function adicionarConteudoPrincipal() {
  const nomeElement = document.querySelector('.nome');
  const perfilElement = document.querySelector('#perfil');

  const nome = 'Wumq';
  const profileImageUrl = 'https://static-cdn.jtvnw.net/jtv_user_pictures/14f847f0-a15a-4df8-8dc7-9e32795f589d-profile_image-300x300.jpeg';

  nomeElement.textContent = nome;

  if (profileImageUrl) {
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', profileImageUrl);
    perfilElement.innerHTML = '';
    perfilElement.appendChild(imgElement);
  }
}
