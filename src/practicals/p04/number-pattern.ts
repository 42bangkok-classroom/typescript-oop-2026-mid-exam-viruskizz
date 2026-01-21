// Write your code below
const m = +process.argv[2]
if (Number.isNaN(m) || m <= 0) {
  // console.log('Invalid Input');
} else {
  for (let i = 1; i<= m; i++) {
    let line = '';
    for (let j = m; j > 0; j--) {
      if (j > i) {
        line += ' ';
      } else {
        line += j;
      }
    }
    console.log(line)
  }
}