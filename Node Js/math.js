// math.js
function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

// Export multiple functions (CommonJS style)
module.exports = {
  square,
  cube,
};