"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sha512 = exports._sha512_hash_size = exports._sha512_block_size = void 0;

var _sha = require("./sha512.asm");

var _hash = require("../hash");

const _sha512_block_size = 128;
exports._sha512_block_size = _sha512_block_size;
const _sha512_hash_size = 64;
exports._sha512_hash_size = _sha512_hash_size;

class Sha512 extends _hash.Hash {
  constructor() {
    super(...arguments);
    this.NAME = 'sha512';
    this.BLOCK_SIZE = _sha512_block_size;
    this.HASH_SIZE = _sha512_hash_size;
  }

  static bytes(data) {
    return new Sha512().process(data).finish().result;
  }

}

exports.Sha512 = Sha512;
Sha512.NAME = 'sha512';
Sha512.heap_pool = [];
Sha512.asm_pool = [];
Sha512.asm_function = _sha.sha512_asm;