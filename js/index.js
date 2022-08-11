let selectModeDisplayNow = "carouselDiv";

const handleSelectModeClick = (selectModeNum) => {
  document.getElementById(selectModeDisplayNow).classList.add("d-none");
  switch (selectModeNum) {
    case 1:
      selectModeDisplayNow = "carouselDiv";
      localStorage.setItem("selectMode", "1");
      break;
    case 2:
      selectModeDisplayNow = "listContainer";
      localStorage.setItem("selectMode", "2");
      break;
  }
  document.getElementById(selectModeDisplayNow).classList.remove("d-none");
};

const handleSortClick = (sortDir) => {
  if (sortDir == "⬇️") {
    topGameArr.sort((a, b) => a.price - b.price);
    localStorage.setItem("sortDir", "⬇️");
  }
  if (sortDir == "⬆️") {
    topGameArr.sort((a, b) => b.price - a.price);
    localStorage.setItem("sortDir", "⬆️");
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

const initPageLoad = () => {
  let selectModeFromls = localStorage.getItem("selectMode");
  if (selectModeFromls) {
    handleSelectModeClick(+selectModeFromls);
  }
  let sortDirFromls = localStorage.getItem("sortDir");
  if (sortDirFromls) {
    handleSortClick(sortDirFromls);
  }
};

initPageLoad();
