var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;
var resultado = document.getElementById("resultado");

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto && tentativas > 0) {
    resultado.innerHTML = `Parabéns, você acertou!!!`
    numeroSecreto = parseInt(Math.random() * 11);
    document.querySelector(".btnChutar").disabled = true;
  } else if (document.getElementById("valor").value == "" || chute < 0 || chute > 10) {
    resultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else if (numeroSecreto < chute && tentativas > 1) {
    tentativas--
    resultado.innerHTML = `Você errou, o número secreto é MENOR que ${chute}. <br><br>Restam ${tentativas} tentativas.`
  } else if (numeroSecreto > chute && tentativas > 1) {
    tentativas--
    resultado.innerHTML = `Você errou, o número secreto é MAIOR que ${chute}. <br><br>Restam ${tentativas} tentativas.`
  } else {
    resultado.innerHTML = `Acabou o numero de tentativas. <br><br>O número secreto era ${numeroSecreto}.`
    document.querySelector(".btnChutar").disabled = true;
  }
}

function Resetar() {
  tentativas = 3
  numeroSecreto = parseInt(Math.random() * 11)
  resultado.innerHTML = ""
  document.getElementById("valor").value = ""
  document.querySelector(".btnChutar").disabled = false;
}