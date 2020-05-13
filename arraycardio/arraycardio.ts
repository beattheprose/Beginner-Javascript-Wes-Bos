const toppings: string[] = [
  `Mushrooms `,
  `Tomatoes`,
  `Eggs`,
  `Chili`,
  `Lettuce`,
  `Avocado`,
  `Chiles`,
  `Bacon`,
  `Pickles`,
  `Onions`,
  `Cheese`,
];

const buns: string[] = [`egg`, `wonder`, `brioche`];

interface Meat {
  beyond: number;
  beef: number;
  pork: number;
}

const meats: Meat = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

interface Prices {
  hotDog: number;
  burger: number;
  sausage: number;
  corn: number;
}

const prices: Prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const orderTotals: number[] = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback: {
  comment: string;
  rating: number;
}[] = [
  { comment: `Love the burgs`, rating: 4 },
  { comment: `Horrible Service`, rating: 2 },
  { comment: `Smoothies are great, liked the burger too`, rating: 5 },
  { comment: `Ambiance needs work`, rating: 3 },
  { comment: `I DONT LIKE BURGERS`, rating: 1 },
];

interface StudentValue {
  id: string;
  first_name: string;
  last_name: string;
}

const students = [
  {
    id: "11ce",
    first_name: "Dall",
    last_name: "Puckring",
  },
  {
    id: "2958",
    first_name: "Margarete",
    last_name: "Brandi",
  },
  {
    id: "565a",
    first_name: "Bendicty",
    last_name: "Woodage",
  },
  {
    id: "3a16",
    first_name: "Micki",
    last_name: "Mattes",
  },
  {
    id: "f396",
    first_name: "Flory",
    last_name: "Gladeche",
  },
  {
    id: "de5f",
    first_name: "Jamill",
    last_name: "Emilien",
  },
  {
    id: "54cb",
    first_name: "Brett",
    last_name: "Aizikowitz",
  },
  {
    id: "9135",
    first_name: "Lorry",
    last_name: "Smallman",
  },
  {
    id: "978f",
    first_name: "Gilly",
    last_name: "Flott",
  },
];

interface PeopleValue {
  birthday: string;
  names: {
    first: string;
    last: string;
  };
}

const people = [
  {
    birthday: "April 22, 1993",
    names: {
      first: "Keith",
      last: "Buckley",
    },
  },
  {
    birthday: "January 3, 1975",
    names: {
      first: "Larry",
      last: "Heep",
    },
  },
  {
    birthday: "February 12, 1944",
    names: {
      first: "Linda",
      last: "Bermeer",
    },
  },
];
/*
Static Methods
*/

// Array.of();

// Make a function that creates a range from x to y with Array.from();
const rangeCreate = (x, y) => {
  Array.from({ length: y - x + 1 }, (_, index) => index + x);
};
// Check if the last array you created is really an array with Array.isArray();

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()
console.log(Object.entries(meats));
console.log(Object.keys(meats));
console.log(Object.values(meats));

Object.entries(meats).forEach(([meat, qty]) => console.log(meat, qty));

/*
Instance Methods
*/

// Display all bun types with " or " - use join()
console.log(buns.join(` or `));

// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into a string
const foodString = `hot dogs,hamburgers,sausages,corn`;
console.log(foodString.split(`,`));

// take the last item off toppings with pop()
const lastItem: any = toppings.pop();
console.log(lastItem);
toppings.push(lastItem);
// add it back with push()
// take the first item off toppings with shift()
// add it back in with unshift()
// Do the last four,but immutable (with spreads and new variables)
const noLast = [...toppings.slice(0, toppings.length - 1)];
console.log(noLast);

const newLast = [...noLast, toppings[toppings.length - 1]];
console.log(newLast);

const noFirst = [...toppings.slice(1, toppings.length)];
console.log(noFirst);

// Make a copy of the toppings array with slice()
const copyToppings = toppings.slice(0);

// Make a copy of the toppings array with a spread
// take out items 3 to 5 of your new toppings array with splice()
// find the index of Avocado with indexOf() / lastIndexOf()
const avoIndex = copyToppings.indexOf(`Avocado`);
// Check if hot sauce is in the toppings with includes()

const hotToppings = [...copyToppings];
if (!copyToppings.includes(`hot sauce`)) {
  hotToppings.push(`Hot Sauce`);
}
// add it if it's not
// flip those toppings around with reverse()

/*
Callback Methods
*/

const util = {
  filterByMinimumRating(rating) {
    return (review) => review.rating > rating;
  },
  filterByMaximumRating(rating) {
    return (review) => review.rating <= rating;
  },
  filterByMentions(mention) {
    return (review) => review.comment.includes(mention);
  },
};

// find the first rating that talks about a burger with find()
const burgFinder = util.filterByMentions(`burg`);
const smoothieFinder = util.filterByMentions(`Smoothie`);
const burgerRating = feedback.find(burgFinder);
const smoothieRating = feedback.find(smoothieFinder);
console.log(burgerRating, smoothieRating);

// const burgerRating = feedback.find(findBurgerRating);
// find all ratings that are above 2 with filter()

const bestReviews = feedback.filter(util.filterByMinimumRating(2));
console.table(bestReviews);

// find all ratings that talk about a burger with filter()
const burgerRatings = feedback.filter(util.filterByMentions(`burg`));
console.table(burgerRatings);

// Remove the one star rating however you like!
const lowRatings = feedback.filter(util.filterByMaximumRating(1));
console.table(lowRatings);

const goodFeedback = feedback.filter((review) => review.rating > 1);
console.table(goodFeedback);
// check if there is at least 5 of one type of meat with some()
const checkMinimumMeat = Object.values(meats).some((amount) => amount >= 5);
console.log(checkMinimumMeat);

// make sure we have at least 3 of every meat with every()
const baselineMeat = Object.values(meats).every((amount) => amount >= 3);
console.log(baselineMeat);

// sort the toppings alphabetically with sort()
const sortedToppings = [...toppings];
sortedToppings.sort();
console.log(sortedToppings);

// Sort the prices with sort()
const sortedPrices = Object.values(prices).sort((x, y) => x - y);
const productsSortedByPrice = Object.entries(prices).sort(
  (x, y) => x[1] - y[1]
);
// sort the order totals from most expensive to least with .sort()
const sortedTotals = orderTotals.sort((x, y) => y - x);
console.log(sortedTotals);

/*
Looping Methods (next)
*/

function logTopping(topping, index, array) {
  const previousTopping = array[index - 1];
  const nextTopping = array[index + 1];
  console.log(topping);
  previousTopping ? console.log(previousTopping) : null;
  nextTopping ? console.log(nextTopping) : null;
  index === array.length - 1 && console.log(`goodbye`);
  console.log(`---------`);
}

toppings.forEach(logTopping);

// Map, Filter, Reduce

console.clear();

const faces: string[] = [`:)`, `:(`, `:/`];

function addArms(face: string) {
  return `hand ${face} hand`;
}

const toys = faces.map(addArms);
console.log(toys);

interface NameFunc {
  (name: string): string;
}
const appendJackson: NameFunc = (name: string) => `${name} Jackson`;
const capitalize: NameFunc = (lowercase: string) =>
  lowercase[0].toUpperCase() + lowercase.slice(1);
const fullNames: string[] = [`alex`, `jackson`, `grace`, `bobber`]
  .map(capitalize)
  .map(appendJackson);
console.log(fullNames);

const orderTotalsPlusTax = orderTotals.map((total) => total * 1.13);

console.log(orderTotalsPlusTax);

console.clear();

interface CleanPeopleFunc {
  (person: PeopleValue): {
    age: number;
    name: string;
  };
}

let handlePeople: CleanPeopleFunc;

handlePeople = function(person: PeopleValue) {
  //get bday
  const bday: number = new Date(person.birthday).getTime();
  const present: number = Date.now();
  const age: number = Math.floor((present - bday) / 31536000000);
  //return full name and bday as obj
  return {
    age: age,
    name: `${person.names.first} ${person.names.last}`,
  };
};

const cleanPeople = people.map(handlePeople);

console.log(cleanPeople);

const over40 = cleanPeople.filter((person) => person.age > 40);
const firstOver40 = cleanPeople.find((person) => person.age > 40);

console.table(over40);
console.log(typeof over40);

// interface FindStudentFunc {
//   (id: string) (student:StudentValue) => id;
// }

const findStudentById = (id: string) => {
  return function(student: StudentValue) {
    return student.id === id;
  };
};

interface Find {
  (prop: string, propLooking: string): boolean;
}

function findByProp(prop: string, propLookingFor: string) {
  return function isStudent(student: StudentValue) {
    return student[prop] === propLookingFor;
  };
}

const findDamnProp = (prop: string, propLooking: string) =>
  students.find(findByProp(prop, propLooking));
