function adicionarConteudoPrincipal(usuario) {
    const nomeSpan = document.querySelector("#nome");
    const perfilSpan = document.querySelector("#perfil");
    
    const nome = "Wumq";
    const profileImageUrl = "https://static-cdn.jtvnw.net/jtv_user_pictures/14f847f0-a15a-4df8-8dc7-9e32795f589d-profile_image-300x300.jpeg";
    const profileImageArquivo = "imagens/550.png"; // Caso queira colocar uma imagem local remova o ling de cima
    
    nomeSpan.textContent = nome;
    
    if (profileImageUrl) {
      perfilSpan.innerHTML = `<img src="${profileImageUrl}">`;
    } else if (profileImageArquivo) {
      perfilSpan.innerHTML = `<img src="${profileImageArquivo}">`;
    }
  }
  
  // Exemplo de uso da função
  adicionarConteudoPrincipal();
  setTimeout(function() {
    changeSHeaderBackground(url);
  }, 1);