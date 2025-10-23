// questao1
let A = parseFloat(prompt("Digite o valor de A:"));
let B = parseFloat(prompt("Digite o valor de B:"));
let C = parseFloat(prompt("Digite o valor de C:"));
let soma = A + B;
console.log("A soma entre A e B é: " + soma);
if (soma < C) {
  console.log("A soma é menor que C.");
} else {
  console.log("A soma não é menor que C.");

}
let numero = parseFloat(prompt("Digite um número:"));

// questao 2
if (numero % 2 === 0) {
  alert("O número é par.");
} else {
  alert("O número é ímpar.");
}

if (numero > 0) {
  alert("O número é positivo.");
} else if (numero < 0) {
  alert("O número é negativo.");
} else {
  alert("O número é zero (neutro).");
}
//questao 3
let num1 = parseInt(prompt("Digite o valor de A:"));
let num2 = parseInt(prompt("Digite o valor de B:"));
let num3;
if (num1 === num2) {
  C = A + B;
  alert("Os valores são iguais. Soma: " + C);
} else {
  num3 = num1 * num2;
  alert("Os valores são diferentes. Multiplicação: " + C);
}
//questao 4
let num = parseInt(prompt("Digite um número inteiro:"));

let antecessor = num - 1;
let sucessor = num + 1;

alert("O antecessor de " + num + " é " + antecessor + 
      " e o sucessor é " + sucessor + ".");
//questao 5
let salarioMinimo = 1293.20; 
let salarioUsuario = parseFloat(prompt("Digite o valor do seu salário:"));
let qtdSalarios = salarioUsuario / salarioMinimo;
alert("Você ganha aproximadamente " + qtdSalarios.toFixed(2) + " salários mínimos.");

//questao 6
let valor = parseFloat(prompt("Digite um valor:"));
let reajuste = valor * 1.05; 
alert("O valor com reajuste de 5% é: R$ " + reajuste.toFixed(2));

//questao 7 
let valor1 = prompt("Digite o primeiro valor lógico (true ou false):").toLowerCase() === "true";
let valor2 = prompt("Digite o segundo valor lógico (true ou false):").toLowerCase() === "true";

if (valor1 && valor2) {
  alert("Ambos são VERDADEIROS.");
} else if (!valor1 && !valor2) {
  alert("Ambos são FALSOS.");
} else {
  alert("Um é VERDADEIRO e o outro é FALSO.");
}

//questao 8

let a = parseInt(prompt("Digite o primeiro número inteiro:"));
let b = parseInt(prompt("Digite o segundo número inteiro:"));
let c = parseInt(prompt("Digite o terceiro número inteiro:"));
if (a === b || a === c || b === c) {
    console.log("Os números devem ser diferentes!");
} else {
    let numeros = [a, b, c];
    numeros.sort((x, y) => y - x); 
    console.log("Números em ordem decrescente:", numeros.join(", "));
}

// questao 9
let peso = parseFloat(prompt("Digite seu peso (em kg):"));
let altura = parseFloat(prompt("Digite sua altura (em metros):"));
let imc = peso / (altura * altura);
let condicao = ""
if (imc < 18.5) {
    condicao = "Abaixo do peso";
} else if (imc >= 18.6 && imc <= 24.9) {
    condicao = "Peso ideal (parabéns)";
} else if (imc >= 25.0 && imc <= 29.9) {
    condicao = "Levemente acima do peso";
} else if (imc >= 30.0 && imc <= 34.9) {
    condicao = "Obesidade grau I";
} else if (imc >= 35.0 && imc <= 39.9) {
    condicao = "Obesidade grau II (severa)";
} else {
    condicao = "Obesidade grau III (mórbida)";
}
alert(`Seu IMC é ${imc.toFixed(2)} — ${condicao}`);

//questao 19
for (let i = 1; i <= 10; i++) {
    document.write(`<h3>Tabuada do ${i}</h3>`);
    for (let j = 1; j <= 10; j++) {
        document.write(`${i} x ${j} = ${i * j}<br>`);
    }
    document.write("<hr>");
}
//questao 20
let nummm = parseInt(prompt("Digite um número para ver sua tabuada:"));
document.write(`<h3>Tabuada do ${nummm}</h3>`);
for (let i = 1; i <= 10; i++) {
    document.write(`${nummm} x ${i} = ${numm * i}<br>`);
}
