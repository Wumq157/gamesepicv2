
// botão da barra lateral
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}
// ano do rodapé
const yearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;  


/*const checkButton = () => {
    const verify = document.getElementById('submit-button');
    if (!verify) {
        return console.log('Não foi encontrado')
    }
    verify.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Twice', location.href)
    })
    return console.log('Foi encontrado', verify)
} 
checkButton();*/ 
