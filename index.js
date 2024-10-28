/**
 * Converts the input string to uppercase.
 * @param {string} str - The string to convert to uppercase.
 * @returns {string} The converted uppercase string.
 */
function toUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Converts the first letter of each word in the string to uppercase.
 * @param {string} str - The string to convert.
 * @returns {string} The title-cased string.
 */
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

/**
 * Checks if the string is all uppercase.
 * @param {string} str - The string to check.
 * @returns {boolean} Returns true if the string is all uppercase, otherwise false.
 */
function isUpperCase(str) {
  return str === str.toUpperCase();
}

/**
 * Converts characters at specific positions to uppercase.
 * @param {string} str - The string to convert.
 * @param {number[]} positions - An array of character positions (0-indexed).
 * @returns {string} The converted string.
 */
function uppercaseAtPositions(str, positions) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (positions.includes(i)) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = {
  toUpperCase,
  toTitleCase,
  isUpperCase,
  uppercaseAtPositions
};