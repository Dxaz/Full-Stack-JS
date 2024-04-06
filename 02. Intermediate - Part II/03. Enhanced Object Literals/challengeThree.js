// -------------------------------------
// REFACTOR THIS CODE TO ES6 ARROW FUNCTIONS.

setTimeout(() => {
  console.log("Hello");
  setTimeout(() => {
    setTimeout(() => {
      console.log("Namaste");
      setTimeout(() => {
        console.log("Hi");
        setTimeout(() => console.log("Bonjour"), 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
