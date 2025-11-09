function decrypt(ciphertext, key) {
  // This function converts letters to numerical values/numbers (A -> 0, B -> 1, ..., Z -> 25)
  function letterToNumber(letter) {
    return letter.charCodeAt(0) - "A".charCodeAt(0);
  }

  // This function Converts numerical values back to letters (0 -> A, 1 -> B, ..., 25 -> Z)
  function numberToLetter(number) {
    return String.fromCharCode((number % 26) + "A".charCodeAt(0));
  }

  // To convert ciphertext and key to uppercase (Assumption is they are in uppercase)
  ciphertext = ciphertext.toUpperCase();
  key = key.toUpperCase();

  // To ensure the key is at least as long as the ciphertext
  if (key.length < ciphertext.length) {
    throw new Error("Key must be at least as long as the ciphertext.");
  }

  // Decrypt the ciphertext using the key
  let plaintext = "";
  for (let i = 0; i < ciphertext.length; i++) {
    const cipherLetter = letterToNumber(ciphertext[i]);
    const keyLetter = letterToNumber(key[i]);
    let plainLetter = (cipherLetter - keyLetter + 26) % 26; // ADD 26 TO ENSURE NON-NEGATIVE RESULT
    plaintext += numberToLetter(plainLetter);
  }

  return plaintext;
}

// USAGES
const ciphertext = "ZHJJQWL";
const key = "THISISANEXAMPLEKEYINCOMPUTERSECURITYEXAM";
const decryptedText = decrypt(ciphertext, key);
console.log("Cipher text:", ciphertext); // Outputs: ZHJJQWL
console.log("Decrypted text:", decryptedText); // Outputs: GABRIEL
