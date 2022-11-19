function telephoneCheck(str) {
  const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/gm;
  return regex.test(str);
}

const telehoneInput = document.getElementById("telephone-input");
const telehoneOutputTag = document.getElementById("telephone-output");

telehoneInput.addEventListener("blur", (event) => {
  const inputValue = event.target.value;
  if (inputValue === "") {
    telehoneOutputTag.innerHTML = "Output will go here";
  } else {
    const telehoneIsValid = telephoneCheck(inputValue.trim());
    if (telehoneIsValid)
      telehoneOutputTag.innerHTML = `${String.fromCodePoint(0x2705)} Valid`;
    else
      telehoneOutputTag.innerHTML = `${String.fromCodePoint(0x274c)} Not Valid`;
  }
});
