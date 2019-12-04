const fs = require('fs');
const input = fs.readFileSync('./input/day4.txt', 'utf8').trim().split('-').map(value => parseInt(value));

const isValid = (password) => {
  const passString = password.toString();
  const groups = [];
  let hasDouble = false;

  for (let i = 0; i < passString.length; i++) {
    if (parseInt(passString[i+1]) < parseInt(passString[i])) {
      return false;
    }

    if (passString[i] === passString[i+1]) {
      if (!((passString[i] === passString[i+2]) || (passString[i] === passString[i-1]))) {
        groups.push(passString[i]+passString[i]);
        hasDouble = true;
      }
    }
  }

  return hasDouble;
}

const validPasswords = [];

for (let i = input[0]; i < input[1]; i++) {
  if (isValid(i)) {
    validPasswords.push(i);
  }
}

console.info('Answer:', validPasswords.length);
