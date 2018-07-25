const DrEvil = function (amount){
  var value = amount
  if (amount < 1000000) {
  value = value + ' dollars'
}
else {
  value = `${value} dollars (pinky)`
}
console.log(value)
return value;
}

DrEvil(100000000);
DrEvil(10);

const mixUp = function(str1, str2){
  const prep1 =  str1.split("")
  const prep2 =  str2.split("")
  const endword1 = prep1.slice(1)
  const endword2 = prep2.slice(1 )
  const startword1 = prep1.slice(0,1)
const startword2 = prep2.slice(0,1)
const final1 = startword1.join("")+endword2.join("")
const final2 = startword2.join("")+endword1.join("")
console.log(final1, final2)

const mixStringOne = str1.slice(0,2) + str2.slice(2)
const mixStringTwo = str2.slice(0,2) + str1.slice(2)
console.log (mixStringOne + ' ' + mixStringTwo)

}

mixUp('cat', 'dog');
mixUp('catalot', 'godtastic');

const fixStart = function(word) {
    const length = word.length;
    const word1 = word.split("");
    for (i = 1; i < length; i++){
      if (word1[i] == word1[0]) {
        word1[i] = '*'
      }

    }
    const final = word1.join("")
    console.log(final)
}

fixStart('bubble');
fixStart('lollipop');

const notBad = function(word) {
  var word1 = word
  var search = word1.search('not')
  var search2 = word1.search('bad')
  console.log(search, search2)
  const distance = search2 - search
  String.prototype.replaceBetween = function(start, end, what) {
    return this.substring(0, start) + what + this.substring(end);
};

if (search  > 0 && search2 > 0 && (search2 > search)) {
    const replaced = word1.replaceBetween(search, search2+3, 'good')
    console.log(replaced)
}
else {
  console.log(word1)
  console.log(notBad('i am not bad'))
  }
}
 notBad('i am not bad')
 notBad('how bout them tacos')
 notBad('i am not that bad')



const verbing = function(word){
  let check= word.search('ing')
  console.log(check)
const wordLength = word.length
  if (check > 0 && wordLength >= 3){
    var newWord = word.replace('ing', 'ly')
    console.log(newWord)
  }
  else if(wordLength >= 3 && check < 0  ){
  console.log(word + 'ing')

  }
  else {
    console.log(word)
  }
}
verbing('swim')
verbing('swimming')
verbing('xa')


const palindrome = function(str) {
  var count = 0
  if (str === "") {
    console.log('nothing found')
    return false
  }
if (str.length % 2 === 0 ){
  count = str.length / 2
}
else {
  if (str.length === 1){
    console.log('palindrome')
    return true
  }
  else {
    count = (str.length -1) /2
  }
}
for (i = 0; i < count; i ++){
  if (str[i] != str.slice(-1 -i)[0]){
  console.log('not a palindrome')
  return false
  }
}
console.log('palindrome')
return true

}


const alphabetise = function (str){
  const reorder = str.split("").sort().join("")
  console.log(reorder)
  return reorder

}

alphabetise('sdasvrevwesefsef')

const capitalise = function (str) {
  const array1 = str.split(" ")
  const newArray = []
  for (i= 0; i < array1.length; i++){
  newArray.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1))
}
  return newArray.join(' ')
}


const biggestWord = function(str) {
  const array1 = str.split(" ")
  var big = array1[0]
  for (i=0; i < array1.length; i++){
    if (array1[i].length > big.length){
      big = array1[i]
    }

  }
  console.log(big)


}


const vowel = function(str){
  var count = 0
  for (i=0; i < str.length; i++){
    if (str.charAt(i) === 'a' || str.charAt(i) === 'e' ||  str.charAt(i) === 'i' || str.charAt(i) === 'o'|| str.charAt(i) === 'u'){
      count += 1
}
}
return count
}

// 2nd and 2nd last number

const sort1 = function(num) {
  const sort2 = num.sort()
  console.log(sort2);
  return `${sort2[1]} ${sort2[sort2.length-2]}`
  //sort2[sort2.length-1]
};






// const verbing = function(word){
//   let word1= word
// const wordLength = word.length
// const splitWord = word1.split("")
// const last3 = splitWord.slice(-3, word.length)
//
// if (wordLength >= 3 &&  last3[0] !== 'i' && last3[1] !== 'n' && last3[2] !== 'g'){
//   word1 = (word1+'ing')
//   console.log(word1)
// }
// if (wordLength >= 3 && last3[0] == 'i' && last3[1] == 'n' && last3[2] == 'g') {
//   var word2 = (word1 + 'ly' )
//   console.log(word2)
//
// }
// else {
//   console.log(word1)
// }
// }
