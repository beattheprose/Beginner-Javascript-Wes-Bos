const toppings2: string[] = [
  `Mushrooms`,
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

const buns2: string[] = [`egg`, `wonder`, `brioche`];

interface Meat {
  beyond: number;
  beef: number;
  pork: number;
}

const meats2: Meat = {
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

const prices2: Prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const trueOrderTotals: number[] = [342, 1002, 523, 34, 634, 854, 1644, 2222];

interface EnumFeedbackBy {
  comment: string;
  rating: number;
}

const feedback2: EnumFeedbackBy[] = [
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

const students2 = [
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

const people2 = [
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

interface InventoryInt {
  type: string;
  price: number;
}

const inventory: InventoryInt[] = [
  { type: "shirt", price: 4000 },
  { type: "pants", price: 4532 },
  { type: "socks", price: 234 },
  { type: "shirt", price: 2343 },
  { type: "pants", price: 2343 },
  { type: "socks", price: 542 },
  { type: "pants", price: 123 },
];

interface OrderFunc {
  (tally: number, currentTotal: number): number;
}

const tallyNumbers: OrderFunc = (tally, currentTotal) => {
  return tally + currentTotal;
};

const allOrders = trueOrderTotals.reduce(tallyNumbers, 0);

interface InventoryOut {
  shirts: number;
  pants: number;
  socks: number;
  [index: string]: number;
}

const inventoryReducer: any = (acc: InventoryOut, item: InventoryInt) => {
  // console.log(`loop over ${item.type}`);
  // take the item found, log it, and increment it by 1
  acc[item.type] = acc[item.type] + 1 || 1;
  // return totals so that the next loop can add on top of it
  return acc;
};

const inventoryCount = inventory.reduce(inventoryReducer, {}) as InventoryOut;
console.log(inventoryCount);
console.log(inventoryCount);

const inventoryPriceReducer = (total: number, item: InventoryInt) =>
  total + item.price;
const totalInventoryPrice: number = inventory.reduce(inventoryPriceReducer, 0);
console.log(totalInventoryPrice);
