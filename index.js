var hiddenDiv = document.getElementById("botao");
var getDiv = document.getElementById("second");
var nomeFuncionario = document.getElementById("nomeFuncionario");
let valorHora = document.getElementById("ValorHora");
var textoInformacao = document.getElementById("retornoNomeFuncionario");
var btnFechar = document.querySelector("#fechar");

let nomeFuncionarioValue = nomeFuncionario.value;

// Pegando os paragrafos para colocar o value
const mod1 = document.getElementById("mod1");
const mod2 = document.getElementById("mod2");
const mod4 = document.getElementById("mod4");
const mod5 = document.getElementById("mod5");
const mod7 = document.getElementById("mod7");
const mod8 = document.getElementById("mod8");
const modDesconto = document.querySelector("#modDesconto");
const totalSujo = document.querySelector("#modTotalSujo");
const pagamentoLimpo = document.querySelector("#pagamentoLimpo");
//abaixo declaramos as letras permitidas e numeros permitidos em cada input
const justWords = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "ã",
  "õ",

  //
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "Ç",
  "Ã",
  "Õ",
  //
];
const justNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
//validar elas em baixo
nomeFuncionario.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (justWords.includes(ev.key)) {
    nomeFuncionario.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    nomeFuncionario.value = nomeFuncionario.value.slice(0, -1);
  }

  //Configurando o Backspace acima
});
valorHora.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (justNumber.includes(ev.key)) {
    valorHora.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    valorHora.value = valorHora.value.slice(0, -1);
  }

  //Configurando o Backspace acima
});

//funções para o nome
hiddenDiv.addEventListener("click", function () {
  //aqui vemos se o valor no input de nome é um número ou não
  if (isNaN(nomeFuncionario.value)) {
    textoInformacao.innerText = `Funcionário: ${nomeFuncionario.value}`;
  } else {
    alert("Há um erro de digitação no nome do funcionário");
  }
  if (nomeFuncionario.value === "") {
    textoInformacao.innerText = "Funcionário:";
  }
});
// funções para os valores
// verificação de calculo para cada tipo de valor a hora
hiddenDiv.addEventListener("click", function () {
  if (valorHora.value <= 0) {
    alert("Informe um valor válido");
    mod1.innerText = "";
    mod2.innerText = "";
    mod5.innerText = "";
    mod7.innerText = "";
    mod8.innerText = "";
    totalSujo.innerText = "";
    modDesconto.innerText = "";
    pagamentoLimpo.innerText = "";
  } else if (valorHora.value <= 5.9181) {
    console.log("Até 5%");
    mod1.innerText = `${parseFloat(valorHora.value) * 183},00`;
    mod2.innerText = `${parseFloat(valorHora.value) * 44},00`;
    mod5.innerText = `${parseFloat(valorHora.value) * 220 * 0.075},00`;
    mod7.innerText = `${parseFloat(valorHora.value) * 220 * 0.25},00`;
    mod8.innerText = `${parseFloat(valorHora.value) * 0.8}`;
    totalSujo.innerText = `${
      parseFloat(valorHora.value) * 183 + parseFloat(valorHora.value) * 44
    },00`;
    modDesconto.innerText = `${
      parseFloat(valorHora.value) * 220 * 0.25 +
      parseFloat(valorHora.value) * 220 * 0.25 * 0.075 +
      parseFloat(valorHora.value) * 220 * 0.25 * 0.075 * 0.8
    }`;
    pagamentoLimpo.innerText =
      parseFloat(valorHora.value) * 183 +
      parseFloat(valorHora.value) * 44 -
      (parseFloat(valorHora.value) * 220 * 0.25 +
        parseFloat(valorHora.value) * 220 * 0.25 * 0.075 +
        parseFloat(valorHora.value) * 220 * 0.25 * 0.075 * 0.8);
  } else if (valorHora.value <= 11.6876) {
    console.log("Até 9%");
    mod1.innerText = `${parseFloat(valorHora.value) * 183},00`;
    mod2.innerText = `${parseFloat(valorHora.value) * 44},00`;
    mod5.innerText = `${parseFloat(valorHora.value) * 220 * 0.09},00`;
    mod7.innerText = `${parseFloat(valorHora.value) * 220 * 0.25},00`;
    mod8.innerText = `${parseFloat(valorHora.value) * 0.8}`;
    totalSujo.innerText = `${
      parseFloat(valorHora.value) * 183 + parseFloat(valorHora.value) * 44
    },00`;
    modDesconto.innerText = `${
      parseFloat(valorHora.value) * 220 * 0.25 +
      parseFloat(valorHora.value) * 220 * 0.25 * 0.09 +
      parseFloat(valorHora.value) * 220 * 0.25 * 0.09 * 0.8
    }`;
    pagamentoLimpo.innerText =
      parseFloat(valorHora.value) * 183 +
      parseFloat(valorHora.value) * 44 -
      (parseFloat(valorHora.value) * 220 * 0.25 +
        parseFloat(valorHora.value) * 220 * 0.25 * 0.09 +
        parseFloat(valorHora.value) * 220 * 0.25 * 0.09 * 0.8);
  } else if (valorHora.value <= 17.5315) {
    console.log("Até 12%");
    mod1.innerText = `${parseFloat(valorHora.value) * 183},00`;
    mod2.innerText = `${parseFloat(valorHora.value) * 44},00`;
    mod5.innerText = `${parseFloat(valorHora.value) * 220 * 0.12},00`;
    mod7.innerText = `${parseFloat(valorHora.value) * 220 * 0.25},00`;
    mod8.innerText = `${parseFloat(valorHora.value) * 0.8}`;
    totalSujo.innerText = `${
      parseFloat(valorHora.value) * 183 + parseFloat(valorHora.value) * 44
    },00`;
    modDesconto.innerText = `${
      parseFloat(valorHora.value) * 220 * 0.25 +
      parseFloat(valorHora.value) * 220 * 0.25 * 0.12 +
      parseFloat(valorHora.value) * 220 * 0.25 * 0.12 * 0.8
    }`;
    pagamentoLimpo.innerText =
      parseFloat(valorHora.value) * 183 +
      parseFloat(valorHora.value) * 44 -
      (parseFloat(valorHora.value) * 220 * 0.25 +
        parseFloat(valorHora.value) * 220 * 0.25 * 0.12 +
        parseFloat(valorHora.value) * 220 * 0.25 * 0.12 * 0.8);
  } else if (valorHora.value <= 34.1249) {
    console.log("Até 14%");
    mod1.innerText = `${parseFloat(valorHora.value) * 183},00`;
    mod2.innerText = `${parseFloat(valorHora.value) * 44},00`;
    mod5.innerText = `${parseFloat(valorHora.value) * 220 * 0.14},00`;
    mod7.innerText = `${parseFloat(valorHora.value) * 220 * 0.25},00`;
    mod8.innerText = `${parseFloat(valorHora.value) * 0.8}`;
    totalSujo.innerText = `${
      parseFloat(valorHora.value) * 183 + parseFloat(valorHora.value) * 44
    },00`;
    modDesconto.innerText = `${
      parseFloat(valorHora.value) * 220 * 0.25 +
      parseFloat(valorHora.value) * 220 * 0.25 * 0.14 +
      parseFloat(valorHora.value) * 220 * 0.25 * 0.14 * 0.8
    }`;
    pagamentoLimpo.innerText =
      parseFloat(valorHora.value) * 183 +
      parseFloat(valorHora.value) * 44 -
      (parseFloat(valorHora.value) * 220 * 0.25 +
        parseFloat(valorHora.value) * 220 * 0.25 * 0.14 +
        parseFloat(valorHora.value) * 220 * 0.25 * 0.14 * 0.8);
  } else if (valorHora.value > 34.1249) {
    console.log("Apenas 14% ");
    mod1.innerText = `${parseFloat(valorHora.value) * 183},00`;
    mod2.innerText = `${parseFloat(valorHora.value) * 44},00`;
    mod5.innerText = `${parseFloat(valorHora.value) * 220 * 0.14},00`;
    mod7.innerText = `${parseFloat(valorHora.value) * 220 * 0.25},00`;
    mod8.innerText = `${parseFloat(valorHora.value) * 0.8}`;
    totalSujo.innerText = `${
      parseFloat(valorHora.value) * 183 + parseFloat(valorHora.value) * 44
    },00`;
    modDesconto.innerText = `${
      parseFloat(valorHora.value) * 220 * 0.25 +
      parseFloat(valorHora.value) * 220 * 0.25 * 0.14 +
      parseFloat(valorHora.value) * 220 * 0.25 * 0.14 * 0.8
    }`;
    pagamentoLimpo.innerText =
      parseFloat(valorHora.value) * 183 +
      parseFloat(valorHora.value) * 44 -
      (parseFloat(valorHora.value) * 220 * 0.25 +
        parseFloat(valorHora.value) * 220 * 0.25 * 0.14 +
        parseFloat(valorHora.value) * 220 * 0.25 * 0.14 * 0.8);
  }
});

// Colocando os valores no second (none&&block)
hiddenDiv.addEventListener("click", function (ev) {
  ev.preventDefault();
  if (ev.key === "Enter") {
    console.log("enter");
  }
  if ((getDiv.style.display = "none")) {
    getDiv.style.display = "block";
  }
});
btnFechar.addEventListener("click", function (ev) {
  ev.preventDefault();
  if (getDiv.style.display === "block") {
    getDiv.style.display = "none";
  }
});
