window.addEventListener(
  `load`,
  () => {
    const nav = document.querySelector(`nav`);

    const obCallback = payload => {
      if (payload[0].intersectionRatio < 1) {
        nav.classList.add(`pinned`);
      }
      console.log(payload);
    };

    const ob = new IntersectionObserver(obCallback, { threshold: 1 });

    ob.observe(nav);
  },
  { once: false }
);

// Tabs Code
