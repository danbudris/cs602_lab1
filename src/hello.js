sayHelloInEnglish = function() {
  console.log("Hello!");
};
sayHelloInSpanish = function() {
  console.log("Hola!");
};

module.exports = {
  sayEnglish: sayHelloInEnglish,
  saySpanish: sayHelloInSpanish
}
