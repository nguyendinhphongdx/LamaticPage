function onLoad() {
  var myCarousel = document.querySelector("#myCarousel");
  var carousel = new bootstrap.Carousel(myCarousel,{
      interval:false
  });
  categories = JSON.parse(localStorage.getItem("categories"));
  categories.forEach((item) => {
    renderCategory(item, item.type);
  });
}

function renderCategory(category, id) {
  const starter = category.food.map((item, index) => {
    return getItem(item, index);
  });
  document.getElementById(`${id}`).innerHTML = starter.join("");
}

function getItem(item, index) {
  return `<div class="col" style=${index >= 3 ? "margin-top:50px" : ""}>
    <div class="card">
        <img src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <div class="row row-cols-md-2">
                <div class="col">
                    <h6 class="card-title1">Starter
                        <h6>
                </div>
                <div class="col">
                    <h6 class="card2">Recommend</h6>
                </div>
            </div>
            <h5>${item.name} </h5>
            <div class="price">
                <h5>${item.price}.000 ${item.unit}</h5>
            </div>
        </div>
    </div>
</div>`;
}


function onSwipe(number = 0) {
  const buttons = document.getElementsByClassName("button-swipe");
  for (var i = 1; i <= buttons.length; i++) {
    if (i == number) {
      buttons[i-1].classList.add("active");
    } else {
      buttons[i-1].classList.remove("active");
    }
  }
  const carousels = document.getElementsByClassName("carousel-item");
  for (var i = 1; i <= carousels.length; i++) {
    if (i == number) {
        carousels[i-1].classList.add("active");
    } else {
        carousels[i-1].classList.remove("active");
    }
  }
}
