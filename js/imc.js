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

    document.getElementById("imcValue").textContent = `Seu IMC é de ${imcFormatted}, com base nesse valor você deve procurar a ajuda correta.`;
    alturaInput.value = alturaFormatted; // Atualizar o campo de altura com o valor formatado
}

document.getElementById("submit-button").addEventListener("click", function(event) {
    event.preventDefault();
    imcCalcule();
});

