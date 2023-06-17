
function imcCalcule() {
    var peso = Number(document.getElementById('peso').value);
    peso = Math.abs(peso); // Converter valor negativo para positivo
    peso = peso.toFixed(3); // Limitar a 3 dígitos
    peso = parseFloat(peso); // Converter de volta para número

    var alturaInput = document.getElementById('altura');
    var alturaValue = alturaInput.value.replace(/[,\.]/g, ''); // Remover vírgulas
    var altura = parseFloat(alturaValue.slice(0, 1) + '.' + alturaValue.slice(1)); // Adicionar vírgula após o primeiro dígito

    var alturaFormatted = alturaValue.slice(0, 1) + ',' + alturaValue.slice(1); // Formatar a altura com vírgula

    var altura2 = altura ** 2;
    var imc = peso / altura2;
    var imcFormatted = imc.toFixed(2);
if (imcFormatted <= 18.4) {
    document.getElementById("imcValue").innerHTML = `Seu IMC é de ${imcFormatted}, Você está na linha de magreza, recomendamos que procure ajuda de <strong>um</strong> nutricionista.`;
} else if (imcFormatted <= 24.9) {
    document.getElementById("imcValue").textContent = `Seu IMC é de ${imcFormatted}, Você está com um pesso saúdavel com base no seu imc.`;
} else if (imcFormatted <= 29.9){
    document.getElementById("imcValue").textContent = `Seu IMC é de ${imcFormatted}, Você está sobre peso de acordo com o seu imc, recomendamos que procure ajuda de um nutricionista.`;
} else if (imcFormatted <= 34.9){
    document.getElementById("imcValue").textContent = `Seu IMC é de ${imcFormatted}, Você está com no primeiro grau de obesidade de acordo com seu imc, recomendamos que procure ajuda de um nutricionista.`;
}  else if (imcFormatted <= 39.9){
    document.getElementById("imcValue").textContent = `Seu IMC é de ${imcFormatted}, Você está no segundo grau de obesidade de acordo com seu imc, recomendamos que procure ajuda de um nutricionista.`;
}  else if (imcFormatted > 40){
    document.getElementById("imcValue").textContent = `Seu IMC é de ${imcFormatted}, Você está no terceiro grau de obesidade de acordo com seu imc, recomendamos que procure ajuda de um nutricionista URGENTE!!!`;
} 


alturaInput.value = alturaFormatted; // Atualizar o campo de altura com o valor formatado
}
document.getElementById("submit-button").addEventListener("click", function(event) {
    event.preventDefault();
    imcCalcule();
});

