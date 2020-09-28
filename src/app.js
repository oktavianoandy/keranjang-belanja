import { 
  incrementQty, 
  decrementQty, 
  subTotal,
  disableDecrement,
  kodePromo
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const txtSubtotal = document.querySelector('#subtotal');
const priceInput = document.querySelector('#price');
const codeButton = document.querySelector('#confirmButton');
const codeInput = document.querySelector('#code');

var hasil;

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  decrButton.disabled = disableDecrement(qtyInput.value);
  txtSubtotal.textContent = subTotal(priceInput.value, qtyInput.value);
  codeInput.value = null;

});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  decrButton.disabled = disableDecrement(qtyInput.value);
  txtSubtotal.textContent = subTotal(priceInput.value, qtyInput.value);
  codeInput.value = null;
});

codeButton.addEventListener('click', () => {
  hasil = kodePromo(subTotal(priceInput.value, qtyInput.value),codeInput.value);
  if (hasil == "errorIsEmpty") {
    alert("Ups! Kode masih kosong loh!");
  } else if(hasil == "errorCodeNotFound"){
    alert("Ups! Sepertinya kode tidak tersedia!");
  }else{
    txtSubtotal.textContent = hasil;
  } 
});