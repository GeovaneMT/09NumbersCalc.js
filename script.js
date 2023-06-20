alert("Vamos realizar cálculos!");

let inputnum1 = parseFloat(prompt("Qual é o número 1?"));
let inputnum2 = parseFloat(prompt("Qual é o número 2?"));

const math = {
  sum: (inputnum1 + inputnum2).toFixed(2),
  sub: (inputnum1 - inputnum2).toFixed(2),
  div: (inputnum1 / inputnum2).toFixed(2),
  isSumEven: (inputnum1 + inputnum2) % 2 === 0,
  areNumbersEqual: inputnum1 === inputnum2,
};

function PrintMath(calcs) {
  return `
    Soma: ${calcs.sum}
    Subtração: ${calcs.sub}
    Divisão: ${calcs.div}
    A soma é par? ${calcs.isSumEven ? "Sim" : "Não"}
    Os números são iguais? ${calcs.areNumbersEqual ? "Sim" : "Não"}
  `;
}

let mathmessage = PrintMath(math);
alert(mathmessage);