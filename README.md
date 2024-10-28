# @xiaozhu2007/uppercase

[![NPM Version](https://img.shields.io/npm/v/@xiaozhu2007/uppercase.svg)](https://www.npmjs.com/package/@xiaozhu2007/uppercase)
[![License](https://img.shields.io/npm/l/@xiaozhu2007/uppercase.svg)](https://github.com/xiaozhu2007/uppercase/blob/master/LICENSE)

A Node.js module to convert strings to uppercase and provide related utilities.

## Installation

```bash
npm install @xiaozhu2007/uppercase
```

## Usage

### Convert a String to Uppercase

```javascript
const { toUpperCase } = require('@xiaozhu2007/uppercase');

console.log(toUpperCase("hello world"));  // Output: HELLO WORLD
```

### Convert the First Letter of Each Word to Uppercase

```javascript
const { toTitleCase } = require('@xiaozhu2007/uppercase');

console.log(toTitleCase("hello world"));  // Output: Hello World
```

### Check if a String is All Uppercase

```javascript
const { isUpperCase } = require('@xiaozhu2007/uppercase');

console.log(isUpperCase("HELLO WORLD"));  // Output: true
console.log(isUpperCase("Hello World"));  // Output: false
```

### Convert Characters at Specific Positions to Uppercase

```javascript
const { uppercaseAtPositions } = require('@xiaozhu2007/uppercase');

console.log(uppercaseAtPositions("hello world", [0, 6]));  // Output: Hello World
```

## API

### `toUpperCase(str)`

- **Parameters:**
  - `str` (string): The string to convert to uppercase.
- **Returns:**
  - (string): The converted uppercase string.

### `toTitleCase(str)`

- **Parameters:**
  - `str` (string): The string to convert.
- **Returns:**
  - (string): The title-cased string.

### `isUpperCase(str)`

- **Parameters:**
  - `str` (string): The string to check.
- **Returns:**
  - (boolean): Returns true if the string is all uppercase, otherwise false.

### `uppercaseAtPositions(str, positions)`

- **Parameters:**
  - `str` (string): The string to convert.
  - `positions` (number[]): An array of character positions (0-indexed).
- **Returns:**
  - (string): The converted string.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
