const DrEvil = (number) => {
  let result = `${number} dollars`;
  if (number === 1000000){
    result += ' (pinky)'
  }
  return result
}

const mixUp = (string1, string2) => {
  const result = `${string2.substr(0,2)}${string1.substr(2,string1.length)} ${string1.substr(0,2)}${string2.substr(2,string2.length)}`
  console.log(result);
}

const fixStart = (string) => {
  const firstLetter = string[0];
  let result = firstLetter;
  for(let i=1;i<string.length;i++){
    if(string[i]===firstLetter){
      result += '*';
    } else {
      result += string[i];
    }
  }
  console.log(result);
}

const verbing = (string) => {
  const length = string.length;
  if (length >= 3){
    if (string.substr(length-3,length-1) === 'ing'){
      string += 'ly';
    } else {
      string += 'ing';
    }
  }
  console.log(string);
}

const notBad = (string) => {
  const not = string.indexOf('not');
  const bad = string.indexOf('bad');
  if (not >=0 && bad>=0){
    const result = `${string.substr(0,not-1)} good${string.substr(bad+3,string.length-1)}`;
    console.log(result);
  } else {
    console.log(string);
  }
}
