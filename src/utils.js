/**
 * Capitalizes the first character of a given string.
 * @param {string} string - The input string to capitalize.
 * @returns {string} - The input string with the first character capitalized.
 */
export function capitalizeFirstChar(string) {
  // Get the first character of the string and convert it to uppercase,
  // then concatenate it with the rest of the string starting from the second character.
  return string.charAt(0).toUpperCase() + string.slice(1);
}
