
function adicionarConteudoPrincipal(conteudo) {
    var novoHTML = `<!DOCTYPE html>
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" type="text/css" href="style/reset.css">
        <link rel="stylesheet" type="text/css" href="style/style.css">
        <link rel="stylesheet" type="text/css" href="style/resolucao.css">
        <link rel="stylesheet" type="text/css" href="style/barra.css">
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400&display=swap" rel="stylesheet">
    </head>
    <body>
        <header>
            <div class="div1">
                <button type="checkbox" onclick="toggleSidebar()" class="btn2">=</button>
                
                <span id="perfil"></span>
               
            </div>
    
            <div class="div2">
                <h1>Games Epic V2</h1>
            </div>
            
            <div class="div3">
                <ul>
                    <li><a class="btn" href="#">Home</a></li>
                    <li><a class="btn" href="#">Jogos</a></li>
                    <li><a class="btn" href="#">Saúde</a></li>
                </ul>
            </div>
        </header>
        <section class="sHeader">
            ${sHeader}
            <div class="sHeaderBack"></div>
        </section>
    
        <aside class="sidebar" id="sidebar">
    
          </label>   
                <button type="checkbox" onclick="toggleSidebar()" class="btn2">=</button>       
                <div class="btn-container">
                <ul class="menu">
                    <li><a class="btn3" href="index.html">Home</a></li>
                    <li><a class="btn3" href="clips.html">Clips</a></li>
                    <li><a class="btn3" href="contato.html">Contato</a></li>
                    <li><a class="btn3" href="loja.html">Loja</a></li>
                    <li><a class="btn3" href="imc.html">Saúde</a></li>
                    <li><a class="btn3" href="jogos.html">Jogos</a></li>
                    <li><a class="btn3" href="luan.html">Academia</a></li>
                    <li><a class="btn3" href="suporte.html">Suporte</a></li>
                    <li><a class="btn3" href="https://wumq157.github.io/GamesEpic/">GamesEpic</a></li>
                    <!-- Adicione mais opções conforme necessário -->
                </ul>
                </div>
            </aside>
        <main>
        ${conteudo}
    
        </main>
        <footer id="footer">
            <div class="fTitulo">
                <h1>Games Epic V2</h1>
                <span id="year"></span>
            </div>
            <div class="fConteudo">
                <ul>
                    <li><a class="btn" href="#">Home</a></li>
                    <li><a class="btn" href="#">Jogos</a></li>
                    <li><a class="btn" href="#">Saúde</a></li>
                </ul>
            </div>
        </footer>
        
    </body>
    </html>`;
  
    document.documentElement.insertAdjacentHTML('beforeend', novoHTML);
  }
  

  function changeSHeaderBackground(url) {
    var language = "en-US";
  
    if (language === "en-US") {
      var sHeader = document.querySelector(".sHeader");
      sHeader.style.backgroundImage = `url('${url}')`;
    }
  }
  
  
  // Executa a função com um atraso de 1 segundo (1000 milissegundos) após o carregamento do elemento sHeader
  setTimeout(function() {
    changeSHeaderBackground(url);
  }, 1);
  