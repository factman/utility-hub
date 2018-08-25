/*
 * @Copyright: 2018
 *
 * @Author: Mohammed Odunayo
 * @Email: factman60@gmail.com
 * @Date: 2018-08-24 00:16:08
 * @Last Modified by: Mohammed Odunayo
 * @Last Modified time: 2018-08-25 17:08:07
 */

/**
 * @description Returns a Capitalized string
 * @example capitalize("string") will return "String".
 * @param  {string} str The string to capitalize.
 * @returns {string} string
 */
module.exports = {
  capitalize(str) {
    const arr = str.split('');
    arr[0] = arr[0].toUpperCase();
    return arr.join('');
  },
};
