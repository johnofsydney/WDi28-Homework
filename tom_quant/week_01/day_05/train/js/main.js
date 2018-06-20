const LineN = ['N','times square', '34th', '28th', '23rd', 'union square', '8th']
const LineL = ['L','8th', '6th', 'union square', '3rd', '1st']
const Line6 = ['6','grand central', '33rd', '28th', '23rd', 'union square', 'astor place']

const amountStopSameLine = function(num1, num2) {
  if (num1 > num2) {
    return (num1 - num2) - 1
  } else {
    return (num2 - num1) - 1
  }
}
const amountStopToChange = function(num1, num2) {
  if (num1 > num2) {
    return (num1 - num2)
  } else {
    return (num2 - num1)
  }
}

const planTrip = function(line1, stop1, line2, stop2) {
  const start = line1.indexOf(stop1)
  const finish = line2.indexOf(stop2)
  const stopChange = line1.indexOf('union square')
  const stopChange2 = line2.indexOf('union square')
  const stopsBetween = amountStopSameLine(start, finish)
  const stopsToLinechange = amountStopToChange(start, stopChange)
  const stopsToLinechange2 = amountStopSameLine(stopChange2, finish)
  let totalStops = 0
  const stopArr = []
  const stopArr2 = []
  const line22 = line2

  console.log(`Line${line1[0]}, ${stop1}, Line${line2[0]}, ${stop2}`)
  if (start < 0 || finish < 0){
    console.log('Sorry stop does not exist')
    return false
  }
  // for the same line
  if (line1 === line2) {
    for (var i = 1; i < stopsBetween + 2; i++) {
      if (start < finish) {
        stopArr.push(line1[start + i])
      } else {
        stopArr.push(line1[start - i])
      }
    }
    totalStops += (stopsBetween + 1)
    console.log(`You must travel through the following stops: ${stopArr.join(", ")}`)
    console.log(`there are ${totalStops} stops`)
  }
  // different line
  //get to union square
  else {
    for (var i = 1; i < stopsToLinechange + 1; i++) {
      if (start < stopChange) {
        stopArr.push(line1[start + i])
      } else {
          stopArr.push(line1[start - i])
      }
    }
    totalStops += stopsToLinechange
    console.log(`You must travel through the following stops: ${stopArr.join(", ")} `)
    console.log(`change lines at Union Square to ${line22[0]}`)
    // get to last stop
    //line2.indexChange2
    for (var i = 1; i < stopsToLinechange2 + 2; i++) {
      if (finish < stopChange2) {
        stopArr2.push(line2[stopChange2 - i])
      } else {
        stopArr2.push(line2[stopChange2 + i])
      }
    }
    totalStops += stopsToLinechange2
    console.log(`Your journey continues through the following stops: ${stopArr2.join(", ")}`)
    console.log(`there are ${totalStops + 1} stops`)
  }
}
planTrip(LineN, 'times square', Line6, '33rd')
planTrip(LineN, 'times square', LineN, '8th')
planTrip(Line6, 'grand central', LineN, '34th')
planTrip(Line6, 'grand central', Line6, 'astor place')
planTrip(Line6, 'astor place', LineN, 'times square')
planTrip(Line6, '53rd', LineN, '39th')
planTrip(line6, '53rd', LineN, '39th')
