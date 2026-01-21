// Write your code below
const input = +process.argv[1]

if (Number.isNaN(input) || input < 0 || input > 100) {
  console.log('Invalid Input');
} else {
  let grade = ''
  if (input >= 80) {
    grade = 'A';
  } else if (input >= 70) {
    grade = 'B';
  } else if (input >= 60) {
    grade = 'C';
  } else if (input >= 50) {
    grade = 'D';
  } else {
    grade = 'F';
  }
  console.log(`Grade is ${grade}`);
}