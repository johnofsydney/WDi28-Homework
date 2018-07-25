// The Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit.
//
// A prime number is a natural number that has exactly two distinct natural number divisors: 1 and itself.
//
// Create your range, starting at two and ending at the given limit.
//
// The algorithm consists of repeating the following over and over:
//
// take the next available unmarked number in your list (it is prime)
// remove all the multiples of that number (they are not prime)
// Repeat until you don't have any possible primes left in your range.
//
// When the algorithm terminates, all the numbers in the list that have not been removed are prime.
//CHECKS TO SEE IF PRIME
const isPrime = function( num ) {
  for (var i = 2; i < num; i++) {
    if ( num % i === 0 ) {
      return false;
    }
  }
  return  true;
}

const sieve = function(num) {
  let tStart = Date.now()

  let range = []
  let primes = []

  for (var i = 1; i < num; i++) {
    range.push(i)
  }

  while (range.length > 0) {
    let candidate = range.shift()
    if ( isPrime(candidate)) {
      primes.push(candidate)
      //SIEVE PART
      range = range.filter( function( num ) {
        return ( num % candidate !== 0)
        // return = ( true )

      })
    }
  }

  let tEnd = Date.now()
  let telapsed = tFinish = tStart
  console.log(primes);
  console.log(num, telapsed);
}
