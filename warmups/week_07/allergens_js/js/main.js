console.log("connected");

// # Allergies Warmup
//
// An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).
//
// The list of items (and their value) that were tested are:
//
// * eggs (1)
// * peanuts (2)
// * shellfish (4)
// * strawberries (8)
// * tomatoes (16)
// * chocolate (32)
// * pollen (64)
// * cats (128)
//
// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.
//
// Now, given just that score of 34, your program should be able to say:
//
// - Whether Tom is allergic to any one of those allergens listed above.
// - All the allergens Tom is allergic to.

const allergies = {
  scores: {
    1: "eggs",
    2: "peanuts",
    4: "shellfish",
    8: "strawbs",
    16: "tomatoes",
    32: "choclate",
    64: "pollen",
    128: "cats"
  },

  getAllTheNumbers: function() {
    // this method just goes and gets all the numbers from the scores object.
    return Object.keys(this.scores).reverse().map(Number);
  },

  makeIndividualsNumberList: function(num) {
    // this method will reduce the list of all numbers to just those
    // that add up to the argument we pass in.
    let allNumbers = this.getAllTheNumbers();
    let list = [];

    // standard for-loop way
    // for (var i = 0; i < allNumbers.length; i++) {
    //   if (num >= allNumbers[i]) {
    //     num = num - allNumbers[i]
    //     list.push( allNumbers[i])
    //   }
    // }

    // tiny refactor to use .forEach
    // allNumbers.forEach(function(element) {
    //   if (num >= element) {
    //     num = num - element;
    //     list.push(element);
    //   }
    // });

    // 2nd tiny refactor to use filter instead
    list = allNumbers.filter( function(element) {
      if (num >= element) {
        num = num - element;
        return element
      }
    })

    return list;
  },

  showWordList: function(num) {
    let list = this.makeIndividualsNumberList(num);
    let scores = this.scores;
    console.log(list);

    list = list.map(function(key) {
      return scores[key];
    });

    return list;
  }
};

console.log(allergies.getAllTheNumbers());
console.log(allergies.makeIndividualsNumberList(98));
console.log(allergies.showWordList(34));
