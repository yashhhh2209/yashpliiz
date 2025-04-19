document.addEventListener('DOMContentLoaded', () => {
  // Handle "No" button behavior on the index page
  const noButton = document.querySelector('.no');
  if (noButton && document.body.classList.contains('start-page')) {
    noButton.addEventListener('click', (e) => {
      e.preventDefault();
      alert("Aww come on, Shreya 😅 Say Yes na!");
    });
  }
});