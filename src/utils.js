// public/utils.js
function increment(n) {
  if (typeof n !== "number") throw new TypeError("Not a number");
  return n + 1;
}

module.exports = { increment };
