var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var plainText = "howdoyoucomfortajavascriptbug";
var cipherText = "wmsamlqmjcgr";

function encrypt(plainText){
  text = plainText.split('');
  for(var i = 0; i < text.length; i++){
    var change = alphabet.indexOf(text[i]);
    text[i] = alphabet[change - 2];
  }
  text = text.join('');
  return text;
}

function decrypt(cipherText){
  text = cipherText.split('');
  for(var i = 0; i < text.length; i++){
    var change = alphabet.indexOf(text[i]);
    text[i] = alphabet[change + 2];
  }
  text = text.join('');
  return text;
}

console.log(encrypt(plainText));
console.log(decrypt(cipherText));