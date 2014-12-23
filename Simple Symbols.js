function SimpleSymbols(str) { 
  
  function isLetter(x) {
    if( x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90 || x.charCodeAt(0) >= 97 && x.charCodeAt(0) <=122) 
      return true;
    return false;
  }
    // takes care of errors
  if (str.length < 3 ) return false;
  if ( isLetter(str[0]) || isLetter(str[str.length - 1]) ) return false;

  for ( var i = 1; i < str.length - 1; i++ ){
    if ( isLetter(str[i]) ) {
      if ( str[i-1] !== "+" || str[i+1] !== "+" ) return false;
    }
  }
  return true;
}

console.log(SimpleSymbols("+d+=3=+s+"));