
    var peso = Number(window.prompt("Diga qual o seu peso:"));
    var altura = Number(window.prompt("Diga qual a sua altura:"));
    var altura2 = altura ** 2;
    var imc = peso / altura2;
    var imc = parseFloat(imc).toFixed(2);
    document.write(`Seu IMC é de ${imc}, com base nesse valor você deve procurar a ajuda correta.`);
