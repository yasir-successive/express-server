export default function diamods(n) {
  console.log(`diamond for ${n} row`);
  let pattern = '';
  for (let i = 1; i <= n; i++) {
    for (let j = n - 1; j >= i; j--) pattern += ' ');
    for (let j = 1; j <= i; j++) pattern += '* ');
    pattern += '\n';
  }
  console.log(pattern);
}
