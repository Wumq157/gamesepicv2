    // botão da barra lateral
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
  }
  // ano do rodapé
  const yearElement = document.getElementById('year');
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;  