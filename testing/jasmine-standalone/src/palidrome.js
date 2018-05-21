var palidromes = function(s) {
  var myStr = s.toLowerCase().match(/\w+/g).join('');
  console.log(myStr)
  return myStr == myStr.split('').reverse().join('') ? true : false;
}


// console.log(palindromes(`  r a ce %c %$#$#^#$%^$ar `))