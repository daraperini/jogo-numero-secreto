function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute; //converte a string para número (tenta converter por causa do +)

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += "<div>Valor inválido</div>";
    return;
  }

  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `;
    return;
  }

  if (numero === numeroSecreto) {
    console.log("oi");

    document.body.innerHTML = `
        <h2 class= "acertou">Você acertou!</h2>
        <h3 class = "numero-secreto">O número secreto era ${numeroSecreto}</h3>

        <button id="jogar__novamente" class="btn__jogar"> Jogar Novamente</button>
        `;

    const botaoJogarNovamente = document.getElementById("jogar__novamente");
    botaoJogarNovamente.addEventListener("click", reiniciaOJogo);
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `;
  } else {
    elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `;
  }

  if (chute === "game over") {
    document.body.innerHTML = `
        <h2 class= "game-over">Game over!</h2>
        <h3 class = "numero-secreto">Pressione o botão para jogar novamente</h3>

        <button id="jogar__novamente" class="btn__jogar"> Jogar Novamente</button>
        `;
    const botaoJogarNovamente = document.getElementById("jogar__novamente");
    botaoJogarNovamente.addEventListener("click", reiniciaOJogo);
  }
}

function chuteForInvalido(numero) {
  if (chute === "game over") {
    return;
  } else {
    return Number.isNaN(numero);
  }
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

function reiniciaOJogo() {
  window.location.reload();
}
