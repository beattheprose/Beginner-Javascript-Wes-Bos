// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// function (firstName) {
//   return `Dr. ${firstName}`;
// }

const doctorize = firstName => `Dr. ${firstName}`;

const add = (a, b = 3) => a + b;

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });
