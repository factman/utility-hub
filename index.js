/*
 * @Copyright: 2018
 *
 * @Author: Mohammed Odunayo
 * @Email: factman60@gmail.com
 * @Date: 2018-08-24 00:16:08
 * @Last Modified by: Mohammed Odunayo
 * @Last Modified time: 2018-09-05 07:28:10
 */

/**
 * @description Returns a Capitalized string
 * @example capitalize("string") will return "String".
 * @param  {string} str The string to capitalize.
 * @returns {string} string
 */

const { capitalize } = require("./src/string");

module.exports = {
    String: {
        capitalize,
    },
};
