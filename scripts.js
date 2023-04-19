var countdownInterval; 

function startCountdown() {
  var countdown = document.getElementById("countdown");
  var number = 10; // número inicial
  countdown.innerHTML = number;

  countdownInterval = setInterval(function() { 
    number--;
    countdown.innerHTML = number;

    if (number == 0) {
      clearInterval(countdownInterval);
      alert("Contagem regressiva finalizada!");
    }
  }, 1000);
}

function stopCountdown() { 
  clearInterval(countdownInterval); 
  alert("Contagem regressiva interrompida!"); 
}
