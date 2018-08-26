/*
 * @Copyright: 2018
 *
 * @Author: Mohammed Odunayo
 * @Email: factman60@gmail.com
 * @Date: 2018-08-24 00:37:17
 * @Last Modified by: Mohammed Odunayo
 * @Last Modified time: 2018-08-27 00:17:49
 */

const { expect } = require("chai");
const { describe, it } = require("mocha");
const { capitalize } = require("../index");

describe("Testing Capitalize", () => {
    it("Should return a 'Capitalized' string.", () => {
        expect(capitalize("string")).to.equal("String");
    });
    it("Should return a 'Title Case' string.", () => {
        expect(capitalize("title case string")).to.equal("Title Case String");
    });
});
