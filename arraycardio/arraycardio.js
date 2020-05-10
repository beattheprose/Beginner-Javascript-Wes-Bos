const toppings = [
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

const buns = [`egg`, `wonder`, `brioche`];

const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: `Love the burgs`, rating: 4 },
  { comment: `Horrible Service`, rating: 2 },
  { comment: `Smoothies are great, liked the burger too`, rating: 5 },
  { comment: `Ambiance needs work`, rating: 3 },
  { comment: `I DONT LIKE BURGERS`, rating: 1 },
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
const lastItem = toppings.pop();
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
    return review => review.rating > rating;
  },
  filterByMaximumRating(rating) {
    return review => review.rating <= rating;
  },
  filterByMentions(mention) {
    return review => review.comment.includes(mention);
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

const goodFeedback = feedback.filter(review => review.rating > 1);
console.table(goodFeedback);
// check if there is at least 5 of one type of meat with some()
const checkMinimumMeat = Object.values(meats).some(amount => amount >= 5);
console.log(checkMinimumMeat);

// make sure we have at least 3 of every meat with every()
const baselineMeat = Object.values(meats).every(amount => amount >= 3);
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
