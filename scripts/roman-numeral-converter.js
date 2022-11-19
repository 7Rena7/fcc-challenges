const convertToRoman = (num, arr = []) => {
  if (num >= 1000) {
    arr.push("M");
    convertToRoman(num - 1000, arr);
  } else if (num >= 900 && num < 1000) {
    arr.push("CM");
    convertToRoman(num - 900, arr);
  } else if (num >= 500 && num < 900) {
    arr.push("D");
    convertToRoman(num - 500, arr);
  } else if (num >= 400 && num < 500) {
    arr.push("CD");
    convertToRoman(num - 400, arr);
  } else if (num >= 100 && num < 400) {
    arr.push("C");
    convertToRoman(num - 100, arr);
  } else if (num >= 90 && num < 100) {
    arr.push("XC");
    convertToRoman(num - 90, arr);
  } else if (num >= 50 && num < 90) {
    arr.push("L");
    convertToRoman(num - 50, arr);
  } else if (num >= 40 && num < 50) {
    arr.push("XL");
    convertToRoman(num - 40, arr);
  } else if (num >= 10 && num < 40) {
    arr.push("X");
    convertToRoman(num - 10, arr);
  } else if (num >= 9 && num < 10) {
    arr.push("IX");
    convertToRoman(num - 9, arr);
  } else if (num >= 5 && num < 9) {
    arr.push("V");
    convertToRoman(num - 5, arr);
  } else if (num >= 4 && num < 5) {
    arr.push("IV");
    convertToRoman(num - 4, arr);
  } else if (num >= 1 && num < 4) {
    arr.push("I");
    convertToRoman(num - 1, arr);
  }

  return arr.join("");
};

const romanInput = document.getElementById("roman-input");
const romanOutputTag = document.getElementById("roman-output");

romanInput.addEventListener("blur", (event) => {
  const inputValue = event.target.value;
  if (inputValue === "") {
    romanOutputTag.innerHTML = "Output will go here";
  } else {
    parseInt(inputValue);
    if (inputValue < 0) {
      romanOutputTag.innerHTML = "The minimum number is 0";
    } else if (inputValue > 25000) {
      romanOutputTag.innerHTML = "The max number is 25000";
    } else {
      const romanOutput = convertToRoman(inputValue);
      romanOutputTag.innerHTML = romanOutput;
    }
  }
});
