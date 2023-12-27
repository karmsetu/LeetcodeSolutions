const { filter, greaterThan10 } = require("./filterElem");
// import { filter } from "./filterElem";

test("filters nums greater than 4", () => {
    expect(filter([0, 10, 20, 30], greaterThan10)).toEqual([20, 30]);
});
