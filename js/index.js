let selectModeDisplayNow = "carouselDiv";

const handleSelectModeClick = (selectModeNum) => {
  document.getElementById(selectModeDisplayNow).classList.add("d-none");
  switch (selectModeNum) {
    case 1:
      selectModeDisplayNow = "carouselDiv";
      break;
    case 2:
      selectModeDisplayNow = "listContainer";
      break;
  }
  document.getElementById(selectModeDisplayNow).classList.remove("d-none");
};

const handleSortClick = (sortDir) => {
  if (sortDir == "⬇️") {
    topGameArr.sort((a, b) => a.price - b.price);
  }
  if (sortDir == "⬆️") {
    topGameArr.sort((a, b) => b.price - a.price);
  }
  initializeList();
  initializeCarouselImages();
};

const handleFilterByName = (event) => {
  let value = event.target.value;
  topGameArr = cloneTopGameArr.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())
  );
  initializeList();
  initializeCarouselImages();
};
