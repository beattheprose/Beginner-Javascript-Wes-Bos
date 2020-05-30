const tabs = document.querySelector(`.tabs`);
const tabButtons = tabs.querySelectorAll(`[role="tab"]`);
const tabPanels = Array.from(tabs.querySelectorAll(`[role="tabpanel"]`));

const handleTabClick = e => {
  // un-select panels and buttons
  tabPanels.forEach(panel => (panel.hidden = true));
  tabButtons.forEa  ch(button => button.setAttribute(`aria-selected`, false));

  // make aria select the clicked tab
  e.currentTarget.setAttribute(`aria-selected`, true);

  // bring up the associated tab (this method is better because of loops)
  const { id } = e.currentTarget;
  const tabPanel = tabPanels.find(
    panel => panel.getAttribute(`aria-labelledby`) === id
  );
  tabPanel.hidden = false;
};

tabButtons.forEach(button => button.addEventListener(`click`, handleTabClick));
// tabButtons.forEach(button => button.addEventListener(`focus`, handleTabClick));
