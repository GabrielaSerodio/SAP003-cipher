window.cipher = {
  encode,
  decode
};

function encode(offset, mesage) {
  let resultEncode = "";
  for (let i = 0; i < mesage.length; i++) {
    if (mesage.charCodeAt(i) >= 65 && mesage.charCodeAt(i) <= 90) {
      resultEncode += String.fromCharCode(((mesage.charCodeAt(i) - 65) + (offset % 26 + 26)) % 26 + 65);
    } else if (mesage.charCodeAt(i) >= 97 && mesage.charCodeAt(i) <= 122) {
      resultEncode += String.fromCharCode(((mesage.charCodeAt(i) - 97) + (offset % 26 + 26)) % 26 + 97);
    } else {
      resultEncode += mesage[i];
    }
  }
  return resultEncode;
}

function decode(offset, mesage) {
  let resultDecode = "";
  for (let i = 0; i < mesage.length; i++) {
    if (mesage.charCodeAt(i) >= 65 && mesage.charCodeAt(i) <= 90) {
      resultDecode += String.fromCharCode(((((mesage.charCodeAt(i) - 65 - offset) % 26) + 26) % 26) + 65);
    } else if (mesage.charCodeAt(i) >= 97 && mesage.charCodeAt(i) <= 122) {
      resultDecode += String.fromCharCode(((((mesage.charCodeAt(i) - 97 - offset) % 26) + 26) % 26) + 97);
    } else {
      resultDecode += mesage[i];
    }
  }
  return resultDecode;
}