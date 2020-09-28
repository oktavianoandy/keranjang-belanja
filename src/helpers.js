const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => qty - 1;
const subTotal = (price, qty) => price * qty;

function disableDecrement(qty) {
    if (qty == 1) {
        return disabled = true;
    } else {
        return disabled = false;
    }
}

function kodePromo(price, code) {
    var priceAfterDiscount = 0;
    if (code == "KD100") {
        priceAfterDiscount = price - (price / 100 * 100);
    } else if (code == "KD75") {
        priceAfterDiscount = price - (price / 100 * 75);
    } else if (code == "KD50") {
        priceAfterDiscount = price - (price / 100 * 50);
    } else if (code == "KD25") {
        priceAfterDiscount = price - (price / 100 * 25);
    } else if (code == "") {
        priceAfterDiscount = "errorIsEmpty";
    } else {
        priceAfterDiscount = "errorCodeNotFound";
    }
    return priceAfterDiscount;
}

module.exports = {
    incrementQty,
    decrementQty,
    subTotal,
    disableDecrement,
    kodePromo
};
