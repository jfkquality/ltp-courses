var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var plainText = "howdoyoucomfortajavascriptbug";
var cipherText = "wmsamlqmjcgr"; //youconsoleit
let offset = 2;
function encrypt(plainText){
  let riddleChar = "";
  let riddleEncrypted = "";
  for (let i=0; i < plainText.length; i++) {
    riddleChar = alphabet.indexOf(plainText.charAt(i));
    if ((riddleChar - offset) < 0) {
      riddleChar = riddleChar + alphabet.length;
    }
    riddleEncrypted += alphabet[riddleChar - offset];
  }
  return riddleEncrypted;

}

function decrypt(cipherText){
  let answerChar = ""
  let answerDecrypted = "";
  for (let i=0; i < cipherText.length; i++) {
    answerChar = alphabet.indexOf(cipherText.charAt(i));
    if ((answerChar + offset) > (alphabet.length - 1)) {
      answerChar = answerChar - alphabet.length;
    }
    answerDecrypted += alphabet[answerChar + offset];
  }
  return answerDecrypted;
}

console.log(encrypt(plainText), encrypt(plainText).length, plainText, plainText.length);
console.log(decrypt(cipherText));
