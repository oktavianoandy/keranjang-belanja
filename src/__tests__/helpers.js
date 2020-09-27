const helper = require('../helpers');

test('jika qty adalah 1, ketika ditambah 1 jadi = 2', () => {
    expect(helper.incrementQty(1)).toBe(2);
});

test('jika qty adalah 2, ketika dikurang 1 jadi = 2', () => {
    expect(helper.decrementQty(2)).toBe(1);
});

test('jika qty adalah 1, decrement button disabled = true', () => {
    expect(helper.disableDecrement(1)).toBeTruthy();
});

test('jika price 50000 dan qty adalah 2, maka sub total 100000', () => {
    expect(helper.subTotal(50000,2)).toBe(100000);
});