const faqs = document.querySelectorAll('.container');

faqs.forEach((container) => {
  container.addEventListener('click', () => {
    container.classList.toggle('active');
  });
});
