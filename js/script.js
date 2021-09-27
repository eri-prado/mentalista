var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;

function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute === numeroSecreto) {
    resultado.innerHTML = "Parabéns, você acertou!";
    var tentativa = 3;
    numeroSecreto = parseInt(Math.random() * 11);
  } else if (chute < 0 || chute > 10) {
    resultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else if (numeroSecreto < chute) {
    resultado.innerHTML =
      "Você errou, o número secreto é menor. Restam" + tentativa + "tentativas";
    tentativa--;
  } else if (numeroSecreto > chute) {
    resultado.innerHTML =
      "Você errou, o número secreto é maior. Restam" + tentativa + "tentativas";
    tentativa--;
  }
}