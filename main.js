
// psuedo code

// need to check if the string is a valid MongoDB string And get the time stamp as well.
// 1.
//   - to check if the string is valid run the string into the regex
// 2. to get the time stamp..
//    - get the first  8 char and radix 16 and multiply by 1000


var Mongo = {
  isValid: function(s){
    return /^[a-f\d]{24}$/.test(s);
  },
  getTimestamp: function(s){
    return this.isValid(s) && new Date(parseInt(s.substr(0, 8), 16) * 1000);
  }
}
