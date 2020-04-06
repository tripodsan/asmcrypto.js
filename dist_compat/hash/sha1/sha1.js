"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sha1 = exports._sha1_hash_size = exports._sha1_block_size = void 0;

var _sha = require("./sha1.asm");

var _hash = require("../hash");

const _sha1_block_size = 64;
exports._sha1_block_size = _sha1_block_size;
const _sha1_hash_size = 20;
exports._sha1_hash_size = _sha1_hash_size;

class Sha1 extends _hash.Hash {
  constructor() {
    super(...arguments);
    this.NAME = 'sha1';
    this.BLOCK_SIZE = _sha1_block_size;
    this.HASH_SIZE = _sha1_hash_size;
  }

  static bytes(data) {
    return new Sha1().process(data).finish().result;
  }

}

exports.Sha1 = Sha1;
Sha1.NAME = 'sha1';
Sha1.heap_pool = [];
Sha1.asm_pool = [];
Sha1.asm_function = _sha.sha1_asm;