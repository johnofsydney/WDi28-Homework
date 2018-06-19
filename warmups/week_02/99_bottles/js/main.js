console.log("connected");

// 99 bottles of beer
// "99 Bottles of Beer" is a traditional reverse counting song.
//
// It is popular to sing on long trips, as it is repetitive and easy to memorise but -- it can take a long time to sing.
//
// Lets try and make it run a little quicker using code:
//
// The song's lyrics are as follows:
//
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down, pass it around, 98 bottles of beer on the wall...
// The same verse is repeated, each time with one bottle fewer, until there are none left.
//
// Bear in mind, not all verses are the same:
//
// The verse for 1 bottle is as follows:
//
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take it down and pass it around, no more bottles of beer on the wall.
// The verse for 0 bottles is as follows:
//
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// Bonus:
// Count through any number of bottles.
// Be able to count between a range of numbers (ie, 20 to 10).

const bottlesOfBeer = function (num ) {

  for (var i = num; i >= 0; i--) {
    if ( i === 0 ) {
      console.log( `No more bottles of beer on the wall`);
      console.log(` Go to the store and biy some more`);
    } else if (i === 1 ) {
      console.log(` 1 bottle of beer on the wall, 1 bottle of beer`);
      console.log(`take it down pass it around`);
    } else {
      console.log(`${i} bottles of beer, ${i} bottles of beer`);
      console.log(`Take on dow pass it around ${i - 1} bottles of beer on the wall`);
    }
    for (var i = 0; i < array.length; i++) {
      array[i]
    }
  }
}

bottlesOfBeer( 5 )


// ***********************
// Here is an all in one object approach, using methods within the object, and  "this"
// you can call each method using syntax such as beer.action(5), 
// and the whole thing is invoked with beer.song(100,0)


const beer = {

  pluralise: function ( num ) {
    if (num ===1) {
      return "1 bottle of beer"
    } else if ( num === 0 ) {
      return "no more bottles of beer"
    } else {
      return num + " bottles of beer"
    }
  },

  action: function (num) {
    if (num === 1) {
      return "Take one down, pass it around"
    } else if ( num === 0) {
      return "Go to the store, buy some more"
    } else {
      return "Take one down, pass it around"
    }
  },

  getMoreBeer: function (num) {
    if (num === 0) {
      return 99;
    } else {
      return (num - 1);
    }
  },

  makeVerse: function (num) {
    let verse1 = `${ this.pluralise(num) } on the wall, ${ this.pluralise( num)}`
    let verse2 = `${ this.action( num) }, ${ this.pluralise( this.getMoreBeer (num) ) } bottles of beer on the wall`

    return verse1 + "\n" + verse2
  },

  song: function (startNum, endNum) {
    for (var i = startNum; i >= endNum; i--) {
      console.log( this.makeVerse( i ));
    }
  }

};
