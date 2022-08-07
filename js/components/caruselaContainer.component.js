let carouselActivePhoto;

const initializeCarouselImages = () => {
  for (let topGameItem of topGameArr) {
    document.getElementById("carouselDiv").innerHTML += `
    <div class="d-none " id="carousel_img_${topGameItem.id}">
    <div class="col" >
     <div class="card" >
         <img src="${topGameItem.imgUrl}" class="card-img-top" alt="${topGameItem.title}" id="carousel_img_${topGameItem.id}>
         <div class="card-body">
           <h5 class="card-title">${topGameItem.title}</h5>
           <p class="card-text">${topGameItem.date} <hr> <b>Price:</b> ${topGameItem.price}</p>
           <button type="button" class="btn btn-success">BUY NOW</button>
          </div>
     </div>
    </div>
    </div>
    `;
  }
  document.getElementById("carousel_img_1").classList.remove("d-none");
  carouselActivePhoto = 1;
};

initializeCarouselImages();

const nextCarouselImage = () => {
  document
    .getElementById(`carousel_img_${carouselActivePhoto}`)
    .classList.add("d-none");
  if (carouselActivePhoto + 1 <= topGameArr.length) {
    carouselActivePhoto++;
  } else {
    carouselActivePhoto = 1;
  }
  document
    .getElementById(`carousel_img_${carouselActivePhoto}`)
    .classList.remove("d-none");
};

const previousCarouselImage = () => {
  document
    .getElementById(`carousel_img_${carouselActivePhoto}`)
    .classList.add("d-none");
  if (carouselActivePhoto - 1 >= 1) {
    carouselActivePhoto--;
  } else {
    carouselActivePhoto = topGameArr.length;
  }
  document
    .getElementById(`carousel_img_${carouselActivePhoto}`)
    .classList.remove("d-none");
};
