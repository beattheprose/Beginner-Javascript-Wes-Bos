const wes = document.querySelector(`.wes`);

wes.addEventListener(`click`, e => {
  console.log(`Clicked!`);
  const shouldChange = prompt(`This Website will change?`);
  if (!shouldChange) {
    e.preventDefault();
  }
  console.log(shouldChange);
});

const signupForm = document.querySelector(`[name='signup']`);
signupForm.addEventListener(`submit`, e => {
  const name = e.currentTarget.name.value;
  if (name.includes(`chad`)) {
    alert(`get out of my swamp`);
    e.preventDefault();
  }
});

const logEvent = e => {
  console.log(e.type);
  console.log(e.currentTarget.value);
};
signupForm.name.addEventListener(`keyup`, logEvent);
signupForm.name.addEventListener(`keydown`, logEvent);
