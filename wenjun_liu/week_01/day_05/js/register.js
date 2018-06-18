const cashRegister = (cart) => {
  let total = 0;
  for (item in cart ){
    total += parseFloat(cart[item],10);
  }
  return total;
}
