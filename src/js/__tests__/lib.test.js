import {bonus} from "../lib.js";

test('it should calculate bonus ', () =>{
    const sales = [12000, 8000, 10000, 15000, 2000];
    const expected = 1350;
    const result = bonus(sales);

    expect(result).toBe(expected);

});


