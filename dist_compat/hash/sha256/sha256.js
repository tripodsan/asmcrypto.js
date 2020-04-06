"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sha256 = exports._sha256_hash_size = exports._sha256_block_size = void 0;

var _sha = require("./sha256.asm");

var _hash = require("../hash");

const _sha256_block_size = 64;
exports._sha256_block_size = _sha256_block_size;
const _sha256_hash_size = 32;
exports._sha256_hash_size = _sha256_hash_size;

class Sha256 extends _hash.Hash {
  constructor() {
    super(...arguments);
    this.NAME = 'sha256';
    this.BLOCK_SIZE = _sha256_block_size;
    this.HASH_SIZE = _sha256_hash_size;
  }

  static bytes(data) {
    return new Sha256().process(data).finish().result;
  }

}

exports.Sha256 = Sha256;
Sha256.NAME = 'sha256';
Sha256.heap_pool = [];
Sha256.asm_pool = [];
Sha256.asm_function = _sha.sha256_asm;