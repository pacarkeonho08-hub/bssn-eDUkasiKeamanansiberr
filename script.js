let skor = 0;

function jawab(benar) {
  const feedback = document.getElementById("feedback");
  const scoreText = document.getElementById("score");

  if (benar) {
    skor += 100;
    feedback.innerText = "Benar! Jangan pernah klik link mencurigakan.";
  } else {
    feedback.innerText = "Salah! Itu bisa jadi phishing.";
  }

  scoreText.innerText = "Skor Kamu: " + skor;
}

document.addEventListener("DOMContentLoaded", function () {

  const questionsFaq = document.querySelectorAll(".faq-question");

  questionsFaq.forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

});

const cards = document.querySelectorAll(".tips-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  observer.observe(card);
});