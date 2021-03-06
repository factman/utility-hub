/*
 * @Copyright: 2018
 *
 * @Author: Mohammed Odunayo
 * @Email: factman60@gmail.com
 * @Date: 2018-09-05 07:19:23
 * @Last Modified by: Mohammed Odunayo
 * @Last Modified time: 2018-09-05 08:32:23
 */

module.exports = {
    /**
    * @description Returns a Capitalized string.
    * @example capitalize("string") will return "String", capitalize("more strings") will return "More Strings".
    * @param  {string} str The string to capitalize.
    * @returns {string} string
    */
    capitalize: function(str) {
        let arr;
        switch (str.split("").includes(" ")) {
        case false:
            arr = str.split("");
            arr[0] = arr[0].toUpperCase();
            return arr.join("");
        case true:
            arr = str.split(" ");
            arr = arr.map(((item) => {
                const arrChar = item.split("");
                arrChar[0] = arrChar[0].toUpperCase();
                return arrChar.join("");
            }));
            return arr.join(" ");
        default:
            return null;
        }
    },
};
