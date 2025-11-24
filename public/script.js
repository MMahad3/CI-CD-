import { increment } from '../utils.js';

const btn = document.getElementById('countBtn');
const display = document.getElementById('count');
const a = ;  // <-- Missing value after =

let value = 0;
btn.addEventListener('click', () => {
  value = increment(value);
  display.textContent = value;
});
