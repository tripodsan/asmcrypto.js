"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecurityError = exports.IllegalArgumentError = exports.IllegalStateError = void 0;

class IllegalStateError extends Error {
  constructor(...args) {
    super(...args);
    Object.create(Error.prototype, {
      name: {
        value: 'IllegalStateError'
      }
    });
  }

}

exports.IllegalStateError = IllegalStateError;

class IllegalArgumentError extends Error {
  constructor(...args) {
    super(...args);
    Object.create(Error.prototype, {
      name: {
        value: 'IllegalArgumentError'
      }
    });
  }

}

exports.IllegalArgumentError = IllegalArgumentError;

class SecurityError extends Error {
  constructor(...args) {
    super(...args);
    Object.create(Error.prototype, {
      name: {
        value: 'SecurityError'
      }
    });
  }

}

exports.SecurityError = SecurityError;