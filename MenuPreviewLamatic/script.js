function onLoad() {
  var myCarousel = document.querySelector("#myCarousel");
  var carousel = new bootstrap.Carousel(myCarousel,{
      interval:false
  });
  setUpCategories();
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

function setUpCategories() {
  localStorage.setItem("categories", JSON.stringify(categories));
}
const categories = [
  {
    type: "starter",
    food: [
      {
        image: "taster/onion soup.jpeg",
        name: "Onion beef",
        price: 339.0,
        unit: "VND",
      },
      {
        image: "taster/Food-Truck.jpg",
        name: "Food Truck",
        price: 240.0,
        unit: "VND",
      },
      {
        image: "taster/Galette (Bánh vua Pháp) .png",
        name: "Galette",
        price: 199.0,
        unit: "VND",
      },
      {
        image: "taster/onion soup.jpeg",
        name: "Onion Soup (chesse)",
        price: 249.0,
        unit: "VND",
      },
      {
        image: "taster/Pain au chocolate.jpg",
        name: "Pain au chocolate",
        price: 149.0,
        unit: "VND",
      },
      {
        image: "taster/Súp hải sản kiểu Pháp (Bouillabaisse).jpg",
        name: "Bouillabaisse",
        price: 399.0,
        unit: "VND",
      },
      {
        image: "taster/súp nấm truffle.jpg",
        name: "Truffle soup",
        price: 199.0,
        unit: "VND",
      },
      {
        image: "taster/Pea soup.png",
        name: "Potage Soup",
        price: 149.0,
        unit: "VND",
      },
      {
        image: "taster/sup-hanh-tay-kieu-phap.jpg",
        name: "pumpkin soup",
        price: 199.0,
        unit: "VND",
      },
    ],
  },
  {
    type: "main",
    food: [
      {
        image: "taster/onion soup.jpeg",
        name: "Onion beef",
        price: 339.0,
        unit: "VND",
      },
      {
        image: "taster/Food-Truck.jpg",
        name: "Food Truck",
        price: 240.0,
        unit: "VND",
      },
      {
        image: "taster/Galette (Bánh vua Pháp) .png",
        name: "Galette",
        price: 199.0,
        unit: "VND",
      },
      {
        image: "taster/onion soup.jpeg",
        name: "Onion Soup (chesse)",
        price: 249.0,
        unit: "VND",
      },
      {
        image: "taster/Pain au chocolate.jpg",
        name: "Pain au chocolate",
        price: 149.0,
        unit: "VND",
      },
      {
        image: "taster/Súp hải sản kiểu Pháp (Bouillabaisse).jpg",
        name: "Bouillabaisse",
        price: 399.0,
        unit: "VND",
      },
      {
        image: "taster/súp nấm truffle.jpg",
        name: "Truffle soup",
        price: 199.0,
        unit: "VND",
      },
      {
        image: "taster/Pea soup.png",
        name: "Potage Soup",
        price: 149.0,
        unit: "VND",
      },
      {
        image: "taster/sup-hanh-tay-kieu-phap.jpg",
        name: "pumpkin soup",
        price: 199.0,
        unit: "VND",
      },
    ],
  },
  {
    type: "dessert",
    food: [
      {
        image: "taster/onion soup.jpeg",
        name: "Onion beef",
        price: 339.0,
        unit: "VND",
      },
      {
        image: "taster/Food-Truck.jpg",
        name: "Food Truck",
        price: 240.0,
        unit: "VND",
      },
      {
        image: "taster/Galette (Bánh vua Pháp) .png",
        name: "Galette",
        price: 199.0,
        unit: "VND",
      },
      {
        image: "taster/onion soup.jpeg",
        name: "Onion Soup (chesse)",
        price: 249.0,
        unit: "VND",
      },
      {
        image: "taster/Pain au chocolate.jpg",
        name: "Pain au chocolate",
        price: 149.0,
        unit: "VND",
      },
      {
        image: "taster/Súp hải sản kiểu Pháp (Bouillabaisse).jpg",
        name: "Bouillabaisse",
        price: 399.0,
        unit: "VND",
      },
      {
        image: "taster/súp nấm truffle.jpg",
        name: "Truffle soup",
        price: 199.0,
        unit: "VND",
      },
      {
        image: "taster/Pea soup.png",
        name: "Potage Soup",
        price: 149.0,
        unit: "VND",
      },
      {
        image: "taster/sup-hanh-tay-kieu-phap.jpg",
        name: "pumpkin soup",
        price: 199.0,
        unit: "VND",
      },
    ],
  },
  {
    type: "drink",
    food: [
      {
        image: "taster/onion soup.jpeg",
        name: "Onion beef",
        price: 339.0,
        unit: "VND",
      },
      {
        image: "taster/Food-Truck.jpg",
        name: "Food Truck",
        price: 240.0,
        unit: "VND",
      },
      {
        image: "taster/Galette (Bánh vua Pháp) .png",
        name: "Galette",
        price: 199.0,
        unit: "VND",
      },
      {
        image: "taster/onion soup.jpeg",
        name: "Onion Soup (chesse)",
        price: 249.0,
        unit: "VND",
      },
      {
        image: "taster/Pain au chocolate.jpg",
        name: "Pain au chocolate",
        price: 149.0,
        unit: "VND",
      },
      {
        image: "taster/Súp hải sản kiểu Pháp (Bouillabaisse).jpg",
        name: "Bouillabaisse",
        price: 399.0,
        unit: "VND",
      },
      {
        image: "taster/súp nấm truffle.jpg",
        name: "Truffle soup",
        price: 199.0,
        unit: "VND",
      },
      {
        image: "taster/Pea soup.png",
        name: "Potage Soup",
        price: 149.0,
        unit: "VND",
      },
      {
        image: "taster/sup-hanh-tay-kieu-phap.jpg",
        name: "pumpkin soup",
        price: 199.0,
        unit: "VND",
      },
    ],
  },
];
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
