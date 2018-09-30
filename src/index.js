module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let closeBrackets = [];

  bracketsConfig.forEach(function(e) {
      openBrackets.push(e[0]);
      closeBrackets.push(e[1]);
  });

  let check = [];

  str.split('').forEach(function(e) {
      if (openBrackets.includes(e) && !closeBrackets.includes(e)) {
          check.push(e);
      }
      if (closeBrackets.includes(e)) {
          if (check[check.length - 1] == openBrackets[closeBrackets.indexOf(e)]) {
              check.pop();
          } else {
              check.push(e);
          }
      }
  });

  return !check.join('');
}

