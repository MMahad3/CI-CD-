// Counter functionality
let count = 0;
const countBtn = document.getElementById('countBtn');
const countDisplay = document.getElementById('count');

countBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
  
  // Add a subtle animation when counter updates
  countDisplay.style.transform = 'scale(1.1)';
  setTimeout(() => {
    countDisplay.style.transform = 'scale(1)';
  }, 150);
});