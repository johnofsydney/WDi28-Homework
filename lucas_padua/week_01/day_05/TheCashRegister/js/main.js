console.log(`Hello Lucas!!!`)

/*
The Cash Register
Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
cashRegister(cartForParty)); // 60.55
*/
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

function cashRegister(cart){
  let items = Object.keys(cart);
  let sum = 0;

  for (let i = 0; i < items.length; i++) {
    let itemName = items[i];
    let itemPrice = cart[itemName];
    sum += Number.parseFloat(itemPrice);
  }

  return sum;
}
