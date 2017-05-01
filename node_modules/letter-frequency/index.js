'use strict';

var count = [];
var tuples = [];

var chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

for(var i = 0; i < chars.length; i++){
  if(isNaN(count[chars[i]])){
    count[chars[i]] = 0;
  }
}

module.exports = (str, opts) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }

  str = str.toLowerCase();
  opts = opts || 'name';

  for(var i = 0; i < str.length; i++){
    if(str[i] != '\n' && str[i] != ' '){
      count[str[i]] += 1;
    }
  }

  for (var key in count)
  tuples.push([key, count[key]]);

  if(opts == 'name'){
    tuples.sort(function(a, b){
      return a < b ? -1 : (a > b ? 1 : 0);
    });
  }
  else if(opts == 'value'){
    tuples.sort(function(a, b){
      a = a[1];
      b = b[1];

      return a > b ? -1 : (a < b ? 1 : 0);
    });
  }

  return tuples;
};
