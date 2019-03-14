"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AES_CBC = void 0;

var _aes = require("./aes");

var _utils = require("../other/utils");

class AES_CBC extends _aes.AES {
  static encrypt(data, key, padding = true, iv) {
    return new AES_CBC(key, iv, padding).encrypt(data);
  }

  static decrypt(data, key, padding = true, iv) {
    return new AES_CBC(key, iv, padding).decrypt(data);
  }

  constructor(key, iv, padding = true) {
    super(key, iv, padding, 'CBC');
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

exports.AES_CBC = AES_CBC;