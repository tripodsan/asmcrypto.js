"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pbkdf2HmacSha1 = Pbkdf2HmacSha1;

var _hmacSha = require("../hmac/hmac-sha1");

function Pbkdf2HmacSha1(password, salt, count, length) {
  const hmac = new _hmacSha.HmacSha1(password);
  const result = new Uint8Array(length);
  const blocks = Math.ceil(length / hmac.HMAC_SIZE);

  for (let i = 1; i <= blocks; ++i) {
    const j = (i - 1) * hmac.HMAC_SIZE;
    const l = (i < blocks ? 0 : length % hmac.HMAC_SIZE) || hmac.HMAC_SIZE;
    hmac.reset().process(salt);
    hmac.hash.asm.pbkdf2_generate_block(hmac.hash.pos, hmac.hash.len, i, count, 0);
    result.set(hmac.hash.heap.subarray(0, l), j);
  }

  return result;
}