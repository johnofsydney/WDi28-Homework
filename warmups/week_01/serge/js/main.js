// Serge Says
// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response.


console.log("conected");

const sergeSays = function (text) {
  let response = ""

  if ( text === "" | text === undefined ) {
    response = "Fine be that way"
  }

  else if ( text.endsWith("?") ) {
    response = "Sure."
  }

  else if ( text.toUpperCase() ===  text ) {
    response = 'Woah, chill out!'
  }

  else {
    response = "Whatever"
  }

  return response
}


console.log ( sergeSays("Hello Serge?")  )
console.log ( sergeSays("HELLO SERGE")  )
console.log ( sergeSays()  )
console.log ( sergeSays("nice day today")  )
