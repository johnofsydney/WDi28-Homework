console.log("connected");

const difference = {
  nums: [1,2,3,4,5,6,7,8,9,10],

  sum: function(a, b) {
    return(a + b);
  },

  square: function(a) {
    return a ** 2
  },

  squareNums: function() {
    return this.nums.map( this.square )
  },

  sumOfNaturals: function() {
    return this.nums.reduce( this.sum )
  },

  sumOfSquares: function() {
    return this.squareNums().reduce( this.sum )
  },

  squareOfSum: function() {
    return this.square( this.sumOfNaturals() )
  },

  difference: function() {
    return this.squareOfSum() - this.sumOfSquares()
  }


}

let answer = difference.difference()
console.log(answer);
