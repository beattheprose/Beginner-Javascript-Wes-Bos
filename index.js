function doctorize(firstName) {
  return `Dr. ${firstName}`;
}

// function (firstName) {
//   return `Dr. ${firstName}`;
// }

const button = document.querySelector(`.clickMe`);

button.addEventListener(`click`, function() {
  console.log(`Great Clicking!!!`);
});
