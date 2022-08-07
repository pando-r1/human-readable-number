module.exports = function toReadable (number) {

  const numberDictionaryTeens = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  }

  const numberDictionaryDozens = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };

  const numberDictionaryHundreds = {
    3: 'hundred',
  };

  let result = [];
  let count = 1

  if (number.length === 0) return ''
  else if (Number(number) === 0) return 'zero'
  else if (Number(number) < 10) return numberDictionaryTeens[number.toString()]
  else {
    number = number.toString().split('').reverse();
    for (let i = 0; i < number.length; i++) {
      if (count === 1 && (Number(number[i + 1]) + number[i] < 20 && Number(number[i + 1]) + number[i] > 0)) {
        if (number[i + 1] && Number(number[i + 1]) !== 0) {
          result.push(numberDictionaryTeens[number[i + 1] + number[i]])
          console.log(number[i + 1], '+', number[i])
        }
        else { result.push(numberDictionaryTeens[number[i]]) }
        count = 3;
        i = 1;
      }
      else if (count === 1 && Number(number[i + 1] + number[i]) > 19) {
        if (Number(number[i]) !== 0) {
          result.push(numberDictionaryTeens[number[i]])
        }
        result.push(numberDictionaryDozens[number[i + 1]])
        count = 3;
        i = 1;
      }
      else if (count === 3) {
        result.push(numberDictionaryHundreds[count])
        result.push(numberDictionaryTeens[number[i]])
      }
      else count++
    }
  }
  return result.reverse().join(' ')
}
