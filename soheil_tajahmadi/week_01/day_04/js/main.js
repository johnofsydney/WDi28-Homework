
//--------------------------------------------------
//Rectangle


const rectangleA = {
  length: 4,
  width: 5
};

//isSquare
const isSquare = function (rectangle) {
  if (rectangle.length === rectangle.width) {
    return "Rectangle is square";
  }
}
//calculate area for rectangle
const rectArea = function (rectangle) {
  return (rectangle.length * rectangle.width)
}

//calculate perimeter for rectangle
const rectPerimeter = function (rectangle) {
  return (rectangle.length * 2 + rectangle.width * 2)
}

//--------------------------------------------------
//Triangle


const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 5
};

const isEquilateral = function(triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC && triangle.sideB === triangle.sideC) {

    return "Triangle is equilateral!"
  }
}

const isIsosceles = function(triangle) {


  if (triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC) {
    return "Triangle is isosceles!"
  }
}

const triArea =  function (triangle) {
  let halfP = triangle.sideA + triangle.sideB + triangle.sideC;

  let area = Math.sqrt(halfP * (halfP - triangle.sideA) * (halfP - triangle.sideB) * (halfP - triangle.sideC))
  return area;
}



const isObtuse = function(triangle) {
  sides = Object.values(triangle);
  let sideSqrd = [];
  for (i = 0; i < sides.length ; i++)  {
    sideSqrd.push(Math.pow(sides[i], 2))

  }
  if (((sideSqrd[0] + sideSqrd[1]) < sideSqrd[2]) || ((sideSqrd[1] + sideSqrd[2]) < sideSqrd[0]) || ((sideSqrd[2] + sideSqrd[1]) < sideSqrd[0])) {
    return "Triangle is Obtuse!"
  }
}

//--------------------------------------------------
//Cash Register

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister =  function(list) {
  let cash = Object.values(list)
  let result = 0;
  for (i = 0; i < cash.length ; i++) {
    result += Number(cash[i]);
  }
  return result;
}

//--------------------------------------------------
//Credit card validation

const validateCreditCard = function(cardNum) {
  ccNum =cardNum.replace(/-/g,"");
  if (ccNum.length !== 16) {
    return false;
  };

  if (ccNum % 2 !== 0) {
    return false;
  };

  let result = 0;
  for (i = 0; i < ccNum.length ; i++) {
    result += Number(ccNum[i]);
  };
  if (result < 16 ) {
    return false;
  };

  for (i = 0; i < ccNum.length ; i++) {
    if (ccNum[0] !== ccNum[i]) {
      break;
    } else if (i === 15) {
      return false;
    };
  };
return true;
};


//--------------------------------------------------
//The bank


const bank = {
  soheil : 500,
  addAcc : function(name, amount)  {
    bank[name]=amount;
    return (`${name} :` + bank[name])
  },
  deposit : function(name, amount) {
    bank[name] += amount;
    return (`${name} :` + bank[name])
  },
  showBank : function() {
    for (let account in bank) {

        console.log(`${account} : ${bank[account]} `);
    }
  },
  withdraw : function(name, amount) {
     if (bank[name] - amount >= 0 ) {
       bank[name] -= amount;
       return (`${name} :` + bank[name])

     }
    return "Overdrafting is not allowed!"
  },
  transfer : function(name1,amount,name2) {
    if (bank[name1] - amount >= 0 ) {
      bank[name1] -= amount;
      bank[name2] += amount;
      return (`${name1} :` + bank[name1] + "\n" + `${name2} :` + bank[name2])
    }
    return "Overdrafting is not allowed!"

  }
}

bank.addAcc("Jess", 3500)
bank.addAcc("Tom", 1000)
bank.addAcc("Brad", 1200)
bank.addAcc("Roy", 500)
bank.addAcc("Julia", 5500)
bank.addAcc("Sol", 200)



//----------------------------------------------------------------------------------------------------
//MTA

nyLines = {
  N : ["Times Square", "34th", "28th", "23rd", "Union Square",  "8th"],
  L : ["8th", "6th", "Union Square", "3rd", "1st"],
  6 : ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
  recursion : false,


  howToGo : function(line1, start,line2,dest) {
   let startRoute = nyLines[line1];
   let endRoute = nyLines[line2];
   let startIndex = startRoute.indexOf(start);
   let stopIndex = endRoute.indexOf(dest);
   let pathSame = '';
   let pathFirst
   let pathSecond


//when getting off on the same line, decision making
   if (line1 === line2) {
     if (startIndex < stopIndex) {
        pathSame = startRoute.slice(startIndex + 1 ,stopIndex + 1);
     } else {
        pathSame = startRoute.slice(stopIndex ,startIndex).reverse();
     };
//when getting  off on a different line, decision making
    } else if (line1 !== line2 ) {
        nyLines.recursion = true;
        pathFirst = nyLines.howToGo(line1,start,line1,'Union Square');
        pathSecond = nyLines.howToGo(line2,'Union Square',line2,dest);
        nyLines.recursion = false;
   }

  let stops = 0;

//when getting off on the same line, reply
  if (line1 === line2 && nyLines.recursion === false) {
    console.log(`You must travel through the following stops on the ${line1} line: ${pathSame.join()} \n
    ${pathSame.length} stops in total`)
    return pathSame;
  }
//when breaking down a trip
  else if (line1 === line2 && nyLines.recursion === true) {

    return pathSame;
  }
//when getting  off on a different line, reply

  else if (line1 !== line2 ) {
    console.log(`You must travel through the following stops on the ${line1} line: ${pathFirst.join()} \n
    Change to line ${line2} at Union Square
    Your journey continues through the following stops: ${pathSecond.join()} \n
    ${pathSecond.length + pathFirst.length} stops in total`)
    return pathFirst, pathSecond;
    }

 }
}

//alternative solution to MTA without recursion
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

// nyLines = {
//   N : ["Times Square", "34th", "28th", "23rd", "Union Square",  "8th"],
//   L : ["8th", "6th", "Union Square", "3rd", "1st"],
//   6 : ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
//
//
//   howToGo : function(line1, start,line2,dest) {
//    let startRoute = nyLines[line1];
//    let endRoute = nyLines[line2];
//    let startIndex = startRoute.indexOf(start);
//    let stopIndex = endRoute.indexOf(dest);
//    let pathSame = '';
//    let pathFirst
//    let pathSecond
//
//
// //when getting off on the same line, decision making
//    if (line1 === line2) {
//      if (startIndex < stopIndex) {
//         pathSame = startRoute.slice(startIndex + 1 ,stopIndex + 1);
//      } else {
//         pathSame = startRoute.slice(stopIndex ,startIndex).reverse();
//      };
// //when getting  off on a different line, decision making
//     } else if (line1 !== line2 ) {
//
// //first part of the path
//       let indexUsqStart = startRoute.indexOf("Union Square")
//       if (startIndex < indexUsqStart) {
//          pathFirst = startRoute.slice(startIndex + 1 ,indexUsqStart + 1);
//       } else {
//          pathFirst = startRoute.slice(indexUsqStart ,startIndex).reverse();
//       };
//
// //second part of the path
//       let indexUsqStop = endRoute.indexOf("Union Square")
//       if (stopIndex > indexUsqStop) {
//          pathSecond = endRoute.slice( indexUsqStop + 1 ,stopIndex + 1);
//       } else {
//          pathSecond = endRoute.slice(stopIndex , indexUsqStop).reverse();
//       };
//    }
//
//   let stops = 0;
//
// //when getting off on the same line, reply
//   if (line1 === line2) {
//     console.log(`You must travel through the following stops on the ${line1} line: ${pathSame.join()} \n
//     ${pathSame.length} stops in total`)
//     // return pathSame;
//   }
//
//
//   else if (line1 !== line2 ) {
//     console.log(`You must travel through the following stops on the ${line1} line: ${pathFirst.join()} \n
//     Change to line ${line2} at Union Square
//     Your journey continues through the following stops: ${pathSecond.join()} \n
//     ${pathSecond.length + pathFirst.length} stops in total`)
//
//     }
//
//  }
// }


//
nyLines.howToGo('N','23rd','N','8th');
nyLines.howToGo('L','3rd','L','8th');
nyLines.howToGo('L','6th','L','1st');
nyLines.howToGo('6','33rd','6','23rd');
nyLines.howToGo('6','Union Square','6','Grand Central');

nyLines.howToGo('N','23rd','L','3rd');
nyLines.howToGo('L','3rd','6','Astor Place');
nyLines.howToGo('6','33rd','L','1st');
