"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AES_OFB = void 0;

var _aes = require("./aes");

var _utils = require("../other/utils");

class AES_OFB extends _aes.AES {
  static encrypt(data, key, iv) {
    return new AES_OFB(key, iv).encrypt(data);
  }

  static decrypt(data, key, iv) {
    return new AES_OFB(key, iv).decrypt(data);
  }

  constructor(key, iv) {
    super(key, iv, false, 'OFB');
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

exports.AES_OFB = AES_OFB;