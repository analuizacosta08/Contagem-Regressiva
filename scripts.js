var countdownInterval; // Declarar countdownInterval fora da função startCountdown

function startCountdown() {
  var countdown = document.getElementById("countdown");
  var number = 10; // número inicial
  countdown.innerHTML = number;

  countdownInterval = setInterval(function() { // Armazenar o intervalo em countdownInterval
    number--;
    countdown.innerHTML = number;

    if (number == 0) {
      clearInterval(countdownInterval);
      alert("Contagem regressiva finalizada!");
    }
  }, 1000);
}

function stopCountdown() { // Criar a função stopCountdown
  clearInterval(countdownInterval); // Limpar o intervalo de tempo armazenado em countdownInterval
  alert("Contagem regressiva interrompida!"); // Exibir uma mensagem informando que a contagem regressiva foi interrompida
}
