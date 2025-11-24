export function increment(n){
  if (typeof n !== 'number') throw new TypeError('n must be number');
  return n + 1;
}
