function adicionarConteudoPrincipal(conteudo) {
  var novoHTML = `<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="style/reset.css">
        <link rel="stylesheet" type="text/css" href="style/style.css">
        <link rel="stylesheet" type="text/css" href="style/barra.css">
        <title>Document</title>
    </head>
    <body>
        <header>
            <h1>Cabeçalho</h1>
        </header>
        <div class="container">
            <aside class="sidebar" id="sidebar">
            <label class="switch">
            <input type="checkbox" onclick="toggleSidebar()">
            <span class="slider"></span>
          </label>          
                <div class="btn-container">
                <ul class="menu">
                    <li><a class="btn" href="index.html">Home</a></li>
                    <li><a class="btn" href="clips.html">Clips</a></li>
                    <li><a class="btn" href="contato.html">Contato</a></li>
                    <li><a class="btn" href="loja.html">Loja</a></li>
                    <li><a class="btn" href="imc.html">Saúde</a></li>
                    <li><a class="btn" href="jogos.html">Jogos</a></li>
                    <li><a class="btn" href="luan.html">Academia</a></li>
                    <li><a class="btn" href="suporte.html">OSuporte</a></li>
                    <!-- Adicione mais opções conforme necessário -->
                </ul>
                </div>
            </aside>
            <main>${conteudo}</main>
        </div>
        <footer>
            <div class="footer-content">
                <p>&copy;<span id="year"></span>GameEpicV2</p>
            </div>
        </footer>
        <script src="js/script.js"></script>
    </body>
    </html>`;

  document.documentElement.insertAdjacentHTML('beforeend', novoHTML);
}
