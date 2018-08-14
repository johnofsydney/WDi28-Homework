console.log("connected");


const isPrime = function(num) {
  for (var i = 2; i < num; i++) {
    if( num % i === 0) {
      return false
    }
  }
  return true
}


const getRange = function (num) {
  let range = [];

  for (var i = 2; i <= num; i++) {
    range.push(i)
  }
  return range
}


const getPrimeRange = function(arr) {
  let primeRange = []

  for (var i = 0; i < arr.length; i++) {
    if( isPrime(arr[i]) ) {
      primeRange.push( arr[i] )
    }
  }

  return primeRange
}


const getPrimeFactors = function(num) {
  let primeFactors = [];

  let range = getRange(num);
  let primeRange = getPrimeRange( range );

  for (var i = 0; i < primeRange.length; i++) {
    while ( num % primeRange[i] === 0 ) {
      primeFactors.push( primeRange[i] );
      num = num / primeRange[i];
    }
  }

  return primeFactors;
}


let answer = getPrimeFactors(120);
console.log(answer);

























// const prime = {
//   range: [],
//   primeRange: [],
//   primeFactorRange: [],
//
//   getRange: function( num ){
//     this.range = [];
//     for( let i = 2; i <= num; i++ ){
//       this.range.push( i );
//     }
//     return this.range;
//   },
//
//   getPrimeRange: function( arr ){
//     this.primeRange = [];
//     for (let i = 0; i < arr.length; i++) {
//       let isPrime = true;
//       let potentialPrime = arr[i];
//
//       for( let j = 2; j < potentialPrime; j++ ){
//         if( potentialPrime % j === 0 ){
//           isPrime = false;
//           break;
//         }
//       }
//       if( isPrime ){
//         this.primeRange.push( potentialPrime );
//       }
//     }
//     return this.primeRange;
//   },
//
//   getPrimeFactorRange: function( num ){
//     this.primeFactorRange = [];
//
//     const numPrimes = prime.getPrimeRange( prime.getRange( num ) );
//     for( let i = 0; i < numPrimes.length; i++ ){
//       while( num % numPrimes[i] === 0 ){
//         this.primeFactorRange.push( numPrimes[i] );
//         num /= numPrimes[i];
//       }
//     }
//     return this.primeFactorRange;
//   }
//
// };
//
// console.log( prime.getPrimeFactorRange( 60 ) );
