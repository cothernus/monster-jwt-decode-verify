# monster-jwt-decode-verify

A utility library for decoding and verifying JWTs (JSON Web Tokens).

## Installation

Install `monster-jwt-decode-verify` using npm:

```bash
npm install monster-jwt-decode-verify
```

## Usage

### Decoding JWT

To decode a JWT without verifying its signature:

```javascript
const { decode } = require('monster-jwt-decode-verify');

const decodedToken = decode(yourJWT);
console.log(decodedToken);
```

### Verifying JWT

To verify the signature of a JWT:

```javascript
const { verify } = require('monster-jwt-decode-verify');

const verificationResult = verify(yourJWT, 'yourSecretOrPublicKey');
if (verificationResult.valid) {
console.log('JWT is valid:', verificationResult);
} else {
console.log('JWT validation failed:', verificationResult.error);
}
```
