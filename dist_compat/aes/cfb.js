"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AES_CFB = void 0;

var _aes = require("./aes");

var _utils = require("../other/utils");

class AES_CFB extends _aes.AES {
  static encrypt(data, key, iv) {
    return new AES_CFB(key, iv).encrypt(data);
  }

  static decrypt(data, key, iv) {
    return new AES_CFB(key, iv).decrypt(data);
  }

  constructor(key, iv) {
    super(key, iv, true, 'CFB');
    delete this.padding;
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

exports.AES_CFB = AES_CFB;