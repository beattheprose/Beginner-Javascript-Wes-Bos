const tabs = document.querySelector(`.tabs`);
const tabButtons = tabs.querySelectorAll(`[role="tab"]`);
const tabPanels = tabs.querySelectorAll(`[role="tabpanel"]`);

const handleTabClick = e => {
  tabPanels.forEach(panel => {
    // unset the current selection
    tabButtons.forEach(button => {
      button.attributes[1].value = false;
    });
    panel.hidden = true;

    // make aria select the clicked tab
    e.currentTarget.attributes[1].value = true;

    // bring up the associated tab
    if (panel.attributes[1].value === e.currentTarget.id) {
      panel.hidden = false;
    }
  });
};

tabButtons.forEach(button => button.addEventListener(`click`, handleTabClick));
