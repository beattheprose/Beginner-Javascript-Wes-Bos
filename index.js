const hamburger = document.querySelector(`#hamburger`);

hamburger.addEventListener(`click`, function() {
  const vertNav = document.querySelector(`#vertNav`);
  if (vertNav.style.display === `none`) {
    vertNav.style.display = `flex`;
  } else {
    vertNav.style.display = `none`;
  }
});
