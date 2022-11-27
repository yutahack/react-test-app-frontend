import CryptoJS from 'crypto-js';
import { CRYPTO_KEY } from '../config/consts';

const privateKey = CRYPTO_KEY; // 대칭형 키

const encrypt = (message) => {
  return CryptoJS.AES.encrypt(message, privateKey).toString();
};

const decrypt = (message) => {
  return CryptoJS.AES.decrypt(message, privateKey);
};

export default { encrypt, decrypt };
