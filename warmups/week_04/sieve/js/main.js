console.log("conected");


const isPrime = function (num) {
  // console.log(num);
  for (var i = 2; i < Math.sqrt(num); i++) {
    if ( num % i === 0 ) {
      return false
    }
  }
  return true
}

const noSieve = function (num) {
  let tStart = Date.now()

  let range = [] // will hold our range of numbers to check
  let primes = [] // holds the list of primes we will return

  for (var i = 2; i <= num; i++) {
    range.push(i)
  }

  while ( range.length > 0 ) {
    let candidate = range.shift()
    if ( isPrime(candidate) ) {
      primes.push(candidate)

      // sieve part
      // range = range.filter( function(num) {
      //   // return ( num % candidate !== 0 )
      //   return ( true )
      // })

    }
  }

  let tFinish = Date.now()
  let tElapsed = tFinish - tStart
  console.log(primes);
  console.log(num, tElapsed);
}


const sieve = function (num) {
  let tStart = Date.now()

  let range = [] // will hold our range of numbers to check
  let primes = [] // holds the list of primes we will return

  for (var i = 2; i <= num; i++) {
    range.push(i)
  }

  while ( range.length > 0 ) {
    let candidate = range.shift()
    if ( isPrime(candidate) ) {
      primes.push(candidate)

      // sieve part
      range = range.filter( function(num) {
        return ( num % candidate !== 0 )
        // return ( true )
      })

    }
  }

  let tFinish = Date.now()
  let tElapsed = tFinish - tStart
  console.log(primes);
  console.log(num, tElapsed);
}


const forSieve = function (num) {
  let tStart = Date.now()

  let range = [] // will hold our range of numbers to check
  let primes = [] // holds the list of primes we will return

  for (var i = 2; i <= num; i++) {
    range.push(i)
  }

  while ( range.length > 0 ) {
    let candidate = range.shift()
    if ( isPrime(candidate) ) {
      primes.push(candidate)

      // // sieve part
      // range = range.filter( function(num) {
      //   return ( num % candidate !== 0 )
      //   // return ( true )
      // })

      // throw away method
      for (var i = 0; i < range.length; i++) {
        if ( range[i] % candidate === 0 ) {
          range.splice(i, 1)
        }
      }
    }
  }

  let tFinish = Date.now()
  let tElapsed = tFinish - tStart
  console.log(primes);
  console.log(num, tElapsed);
}


const sieveFilter = function( range, candidate ) {
  let filteredArray = []
  for (var i = 0; i < range.length; i++) {
    if ( range[i] % candidate !== 0 ) {
      filteredArray.push( range[i] )
    }
  }

  return filteredArray

}


const forSieve2 = function (num) {
  let tStart = Date.now()

  let range = [] // will hold our range of numbers to check
  let primes = [] // holds the list of primes we will return

  for (var i = 2; i <= num; i++) {
    range.push(i)
  }

  while ( range.length > 0 ) {
    let candidate = range.shift()
    if ( isPrime(candidate) ) {
      primes.push(candidate)

      // // sieve part
      // range = range.filter( function(num) {
      //   return ( num % candidate !== 0 )
      //   // return ( true )
      // })

      // keep method
      // let rangeTemp = range
      // range = []
      // for (var i = 0; i < rangeTemp.length; i++) {
      //   if ( rangeTemp[i] % candidate !== 0 ) {
      //     range.push( rangeTemp[i] )
      //   }
      // }

      range = sieveFilter ( range, candidate )
    }
  }

  let tFinish = Date.now()
  let tElapsed = tFinish - tStart
  console.log(primes);
  console.log(num, tElapsed);
}
