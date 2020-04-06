"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AES_ECB = void 0;

var _aes = require("./aes");

var _utils = require("../other/utils");

class AES_ECB extends _aes.AES {
  static encrypt(data, key, padding = false) {
    return new AES_ECB(key, padding).encrypt(data);
  }

  static decrypt(data, key, padding = false) {
    return new AES_ECB(key, padding).decrypt(data);
  }

  constructor(key, padding = false) {
    super(key, undefined, padding, 'ECB');
  }

  encrypt(data) {
    const r1 = this.AES_Encrypt_process(data);
    const r2 = this.AES_Encrypt_finish();
    return (0, _utils.joinBytes)(r1, r2);
  }

  decrypt(data) {
    const r1 = this.AES_Decrypt_process(data);
    const r2 = this.AES_Decrypt_finish();
    return (0, _utils.joinBytes)(r1, r2);
  }

}

exports.AES_ECB = AES_ECB;