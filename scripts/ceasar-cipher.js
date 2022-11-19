function rot13(str) {
  // Deciphered reference letters
  let decoded = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M",
    a: "n",
    b: "o",
    c: "p",
    d: "q",
    e: "r",
    f: "s",
    g: "t",
    h: "u",
    i: "v",
    j: "w",
    k: "x",
    l: "y",
    m: "z",
    n: "a",
    o: "b",
    p: "c",
    q: "d",
    r: "e",
    s: "f",
    t: "g",
    u: "h",
    v: "i",
    w: "j",
    x: "k",
    y: "l",
    z: "m",
  };

  // Initialize the return variable
  let decipher = "";

  for (const char of str) {
    if (decoded.hasOwnProperty(char)) decipher += decoded[char];
    else decipher += char;
  }

  return decipher;
}

const ceasarInput = document.getElementById("ceasar-input");
const ceasarOutputTag = document.getElementById("ceasar-output");

ceasarInput.addEventListener("blur", (event) => {
  const inputValue = event.target.value.trim();
  if (inputValue === "") {
    ceasarOutputTag.innerHTML = "Output will go here";
  } else {
    const outputValue = rot13(inputValue);
    ceasarOutputTag.innerHTML = outputValue;
  }
});
