const initializeList = () => {
  let listContainer = document.getElementById("listContainer");
  listContainer.innerHTML = "";
  for (let topGameItem of topGameArr) {
    listContainer.innerHTML += `
    <div class="row mt-1 border-row">
        <div class="col">
            <img src="${topGameItem.imgUrl}" alt="${topGameItem.title}" />
        </div>
        <div class="col">
           <b>${topGameItem.title}</b>
        </div>
        <div class="col">
           <b>Price:</b> $${topGameItem.price}
        </div>
        <div class="col">
        <button class="btn me-1">BUY NOW</button>
        <button class="btn">WEBSITE</button>
    </div>
    </div>
    `;
  }
};

initializeList();
