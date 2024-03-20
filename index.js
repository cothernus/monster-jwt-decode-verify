const jwt = require('jsonwebtoken');

// Decode JWT without verifying the signature
function decode(token) {
  return jwt.decode(token, { complete: true });
}

// Verify JWT signature
function verify(token, secretOrPublicKey, options = {}) {
  try {
    return jwt.verify(token, secretOrPublicKey, options);
  } catch (error) {
    return { valid: false, error };
  }
}

module.exports = { decode, verify };
