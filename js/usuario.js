setTimeout(adicionarNome, 2);

function adicionarImagemPerfil() {
  const perfilElement = document.querySelector('#perfil');
  const profileImageUrl = 'https://static-cdn.jtvnw.net/jtv_user_pictures/14f847f0-a15a-4df8-8dc7-9e32795f589d-profile_image-300x300.jpeg';

  if (profileImageUrl) {
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', profileImageUrl);
    perfilElement.innerHTML = '';
    perfilElement.appendChild(imgElement);
  }
}

function adicionarNome() {
  const nomeElement = document.querySelector('.nome');
  
  const nome = 'Wumq';
  
  nomeElement.textContent = nome;
  
  adicionarImagemPerfil();
}
