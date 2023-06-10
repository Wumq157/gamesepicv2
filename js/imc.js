window.alert("Olá")
var peso = Number(window.prompt("Diga qual o seu peso:"));
var altura = Number(window.prompt("Diga qual a sua altura:"));
var altura2 = altura ** 2;
var imc = peso / altura2;
var imcFormatted = parseFloat(imc).toFixed(2);

document.getElementById("imcValue").textContent = `Seu IMC é de ${imcFormatted}, com base nesse valor você deve procurar a ajuda correta.`;
