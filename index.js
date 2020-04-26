// function outer() {
//   const outervar = `hey I'm outervar!!`;
//   function inner() {
//     const innervar = `inner var for lifeeeeee`;
//     console.log(innervar);
//     console.log(outervar);
//   }
//   return inner;
// }

// const innerFn = outer();

// innerFn();

function createTheGreeting(greeting = ``) {
  const customGreeting = greeting.toUpperCase();
  return function(nomDePlume) {
    return `${customGreeting} ${nomDePlume}`;
  };
}

const hello = createTheGreeting(`hello`);
const hey = createTheGreeting(`hey`);
console.log(hello(`alex`));
console.log(hey(`alex`));

function gameCreate(gameName) {
  let score = 0;
  return function winner() {
    score++;
    return `Your game ${gameName} score is ${score}`;
  };
}

const basketball