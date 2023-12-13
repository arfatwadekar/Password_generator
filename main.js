let passwordBox = document.getElementById("password");
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*(){}~!|?/=-";

const allchars = uppercase + lowerCase + number + symbol;
function createPassword() {
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }
  passwordBox.value = password;
}

// copy password
function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}

