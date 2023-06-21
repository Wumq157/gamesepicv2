const listContainer = document.querySelector(".list-container");
const listItems = Array.from(listContainer.querySelectorAll(".list-item"));
const radioInputs = document.querySelectorAll(".input");
let selectedIndex = 0;

function scrollToSelectedIndex() {
  const selectedItem = listItems[selectedIndex];
  const containerWidth = listContainer.offsetWidth;
  const scrollPosition = selectedItem.offsetLeft - (containerWidth - selectedItem.offsetWidth) / 2;
  listContainer.scroll({
    left: scrollPosition,
    behavior: "smooth"
  });
}

function selectItem(index) {
  radioInputs[selectedIndex].checked = false;
  selectedIndex = index;
  radioInputs[selectedIndex].checked = true;
  scrollToSelectedIndex();
}

function handleButtonClick(event) {
  const button = event.target;
  const direction = button.dataset.direction;
  const totalItems = listItems.length;

  let newIndex;
  if (direction === "prev") {
    newIndex = (selectedIndex - 1 + totalItems) % totalItems;
  } else if (direction === "next") {
    newIndex = (selectedIndex + 1) % totalItems;
  }

  selectItem(newIndex);
}

function handleRadioInputChange(event) {
  const index = Array.from(radioInputs).indexOf(event.target);
  selectItem(index);
}

const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

prevButton.addEventListener("click", handleButtonClick);
nextButton.addEventListener("click", handleButtonClick);
radioInputs.forEach(input => input.addEventListener("change", handleRadioInputChange));

selectItem(selectedIndex); // Set initial selected item
