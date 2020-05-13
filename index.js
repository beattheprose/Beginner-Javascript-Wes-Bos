const hamburger = document.querySelector(`#hamburger`);
<<<<<<< HEAD
hamburger.addEventListener(`click`, () => {
    const vertNav = document.querySelector(`#vertNav`);
    if (vertNav.style.display === `none`) {
        vertNav.style.display = `flex`;
    }
    else {
        vertNav.style.display = `none`;
    }
});
const headshot = document.getElementById(`headshot`);
const modalOuter = document.querySelector(`.modal-outer`);
const showModal = () => modalOuter.classList.add(`open`);
const closeModal = () => modalOuter.classList.remove(`open`);
const clickOutsideHandler = (e) => {
    const clickOutside = !e.target.closest(`.modal-inner`);
    if (clickOutside) {
        closeModal();
    }
};
headshot.addEventListener(`click`, showModal);
modalOuter.addEventListener(`click`, clickOutsideHandler);
//# sourceMappingURL=index.js.map
=======

hamburger.addEventListener(`click`, () => {
  const vertNav = document.querySelector(`#vertNav`);
  if (vertNav.style.display === `none`) {
    vertNav.style.display = `flex`;
  } else {
    vertNav.style.display = `none`;
  }
});

const headshot = document.getElementById(`headshot`);
const modalOuter = document.querySelector(`.modal-outer`);

const showModal = () => modalOuter.classList.add(`open`);
const closeModal = () => modalOuter.classList.remove(`open`);

const handleClickOutside = e => {
  const clickOutside = !e.target.closest(`.modal-inner`);
  if (clickOutside) {
    closeModal();
  }
};

headshot.addEventListener(`click`, showModal);
modalOuter.addEventListener(`click`, handleClickOutside);

const slugify = (sentence, lowercase) => {
  if (lowercase) return sentence.replace(/\s/g, `-`).toLowerCase();
  return sentence.replace(/\s/g, `-`);
};

const handleKeyDown = e => {
  switch (e.key) {
  }
};
>>>>>>> 2848571ad4f6f49e180a5e71bc5d0c5eae19240c
