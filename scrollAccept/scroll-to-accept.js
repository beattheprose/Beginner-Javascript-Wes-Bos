const scrollToAccept = () => {
  const terms = document.querySelector(`.terms-and-conditions`);
  const button = document.querySelector(`.accept`);

  if (!terms) {
    return; // quit if there isn't the terms item on the page
  }

  const obCallback = payload => {
    if (payload[0].intersectionRatio === 1) {
      button.disabled = false;
      ob.unobserve(terms.lastElementChild);
    }
  };
  const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
  });

  ob.observe(terms.lastElementChild);
};

scrollToAccept();
