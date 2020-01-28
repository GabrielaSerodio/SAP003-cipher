document.querySelector(".btn-cipher").addEventListener("click", clickCipher);
document.querySelector(".btn-decipher").addEventListener("click", clickDecipher);

function clickCipher(e) {
  e.preventDefault();
  const mesage = document.querySelector(".texta-mesage").value;
  const offset = parseInt(document.querySelector(".inpt-offset").value);
  const cipherEncode = window.cipher.encode(offset, mesage);
  document.querySelector(".texta-result").value = cipherEncode;
}

function clickDecipher(e) {
  e.preventDefault();
  const mesage = document.querySelector(".texta-mesage").value;
  const offset = parseInt(document.querySelector(".inpt-offset").value);
  const cipherDecode = window.cipher.decode(offset, mesage);
  document.querySelector(".texta-result").value = cipherDecode;
}

