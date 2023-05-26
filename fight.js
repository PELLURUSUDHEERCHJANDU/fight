document.addEventListener('DOMContentLoaded', function() {
    var leePicture = document.getElementById('leePicture');
    var scoreDisplay = document.getElementById('score');
    var timeDisplay = document.getElementById('time');
    var end=document.getElementById('end');
    var score = 0;
    var timeLeft = 15;
  
    document.addEventListener('click', function() {
      score++;
      scoreDisplay.textContent = 'Score: ' + score;
    });
  
    var countdown = setInterval(function() {
      timeLeft--;
      timeDisplay.textContent = timeLeft + ' wacky seconds';
      if (timeLeft <= 0) {
        clearInterval(countdown);
        end.textContent="you won the match";
        scoreDisplay.textContent=score;
      }
    }, 1000);
  });