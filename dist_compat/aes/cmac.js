"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AES_CMAC = void 0;

var _ecb = require("./ecb");

var _cbc = require("./cbc");

function mul2(data) {
  const t = data[0] & 0x80;

  for (let i = 0; i < 15; i++) {
    data[i] = data[i] << 1 ^ (data[i + 1] & 0x80 ? 1 : 0);
  }

  data[15] = data[15] << 1 ^ (t ? 0x87 : 0);
}

class AES_CMAC {
  constructor(key) {
    this.bufferLength = 0;
    this.k = new _ecb.AES_ECB(key).encrypt(new Uint8Array(16));
    mul2(this.k);
    this.cbc = new _cbc.AES_CBC(key, new Uint8Array(16), false);
    this.buffer = new Uint8Array(16);
    this.result = null;
  }

  static bytes(data, key) {
    return new AES_CMAC(key).process(data).finish().result;
  }

  process(data) {
    if (this.bufferLength + data.length > 16) {
      this.cbc.encrypt(this.buffer.subarray(0, this.bufferLength));
      const offset = (this.bufferLength + data.length - 1 & ~15) - this.bufferLength;
      this.cbc.encrypt(data.subarray(0, offset));
      this.buffer.set(data.subarray(offset));
      this.bufferLength = data.length - offset;
    } else {
      this.buffer.set(data, this.bufferLength);
      this.bufferLength += data.length;
    }

    return this;
  }

  finish() {
    if (this.bufferLength !== 16) {
      this.buffer[this.bufferLength] = 0x80;

      for (let i = this.bufferLength + 1; i < 16; i++) {
        this.buffer[i] = 0;
      }

      mul2(this.k);
    }

    for (let i = 0; i < 16; i++) {
      this.buffer[i] ^= this.k[i];
    }

    this.result = this.cbc.encrypt(this.buffer);
    return this;
  }

}

exports.AES_CMAC = AES_CMAC;