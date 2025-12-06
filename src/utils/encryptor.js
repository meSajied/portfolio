import CryptoJS from "crypto-js";

export function encrypt(data, password) {
  const text = JSON.stringify(data);

  const iv = CryptoJS.lib.WordArray.random(16);

  const key = CryptoJS.SHA256(password);

  const encrypted = CryptoJS.AES.encrypt(text, key, {
    iv: CryptoJS.enc.Base64.parse(import.meta.env.VITE_APP_IV),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });

  return {
    data: encrypted.toString()
  };
}
