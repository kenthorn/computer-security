function encrypt(plaintext, key) {
  // This function converts letters to numerical values/numbers (A -> 0, B -> 1, ..., Z -> 25)
  function letterToNumber(letter) {
    return letter.charCodeAt(0) - "A".charCodeAt(0);
  }

  // This function Converts numerical values back to letters (0 -> A, 1 -> B, ..., 25 -> Z)
  function numberToLetter(number) {
    return String.fromCharCode((number % 26) + "A".charCodeAt(0));
  }

  // To convert plaintext and key to uppercase (Assumption is they are in uppercase)
  plaintext = plaintext.toUpperCase();
  key = key.toUpperCase();

  // To ensure the key is at least as long as the plaintext
  if (key.length < plaintext.length) {
    throw new Error("Key must be at least as long as the plaintext.");
  }

  // encrypt the plaintext using the key
  let cipher = "";
  for (let i = 0; i < plaintext.length; i++) {
    const plainLetter = letterToNumber(plaintext[i]);
    const keyLetter = letterToNumber(key[i]);
    const cipherLetter = (plainLetter + keyLetter) % 26;
    cipher += numberToLetter(cipherLetter);
  }

  return cipher;
}

// USAGES
const plaintext = "GABRIEL";
const key = "THISISANEXAMPLEKEYINCOMPUTERSECURITYEXAM";
const cipher = encrypt(plaintext, key);
console.log("Plain text:", plaintext); // Outputs: GABRIEL
console.log("Cipher text:", cipher); // Outputs: ZHJJQWL
