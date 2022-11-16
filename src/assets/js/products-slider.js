var slide = [
  {
    mainImage: "./assets/images/dry-food.png",
    contentLeft: `<div class="slide__title">Chicken food</div>
    <p class="slide__description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt saepe quae
      doloremque temporibus nihil ...
    </p>
    <div class="slide__button_group d-flex justify-content-around">
      <button class="custom__slide-button">For dogs</button>
      <button class="custom__slide-button">For cats</button>
    </div>`,
    contentRight: `<div class="slide__title">Popular products</div>
    <ul>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; Meal Chicken Cutlets</li>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; Meal Chicken Cutlets</li>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; Meal Chicken Cutlets</li>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; Meal Chicken Cutlets</li>
    </ul>`,
    thumbnailImage: "./assets/images/dry-food.png",
    slideName: "Gravy Food",
  },
  {
    mainImage: "./assets/images/dry-food.png",
    contentLeft: `<div class="slide__title">Chicken food</div>
    <p class="slide__description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt saepe quae
      doloremque temporibus nihil ...
    </p>
    <div class="slide__button_group d-flex justify-content-around">
      <button class="custom__slide-button">For dogs</button>
      <button class="custom__slide-button">For cats</button>
    </div>`,
    contentRight: `<div class="slide__title">Popular products</div>
    <ul>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; Meal Chicken Cutlets</li>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; Meal Chicken Cutlets</li>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; Meal Chicken Cutlets</li>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; Meal Chicken Cutlets</li>
    </ul>`,
    thumbnailImage: "./assets/images/dry-food.png",
    slideName: "Gravy Food",
  },
  {
    mainImage: "./assets/images/dry-food.png",
    contentLeft: `<div class="slide__title">Chicken food</div>
    <p class="slide__description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt saepe quae
      doloremque temporibus nihil ...
    </p>
    <div class="slide__button_group d-flex justify-content-around">
      <button class="custom__slide-button">For dogs</button>
      <button class="custom__slide-button">For cats</button>
    </div>`,
    contentRight: `<div class="slide__title">Popular products</div>
    <ul>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; Meal Chicken Cutlets</li>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; Meal Chicken Cutlets</li>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; Meal Chicken Cutlets</li>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; Meal Chicken Cutlets</li>
    </ul>`,
    thumbnailImage: "./assets/images/dry-food.png",
    slideName: "Gravy Food",
  },
  {
    mainImage: "./assets/images/dry-food.png",
    contentLeft: `<div class="slide__title">Chicken food</div>
    <p class="slide__description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt saepe quae
      doloremque temporibus nihil ...
    </p>
    <div class="slide__button_group d-flex justify-content-around">
      <button class="custom__slide-button">For dogs</button>
      <button class="custom__slide-button">For cats</button>
    </div>`,
    contentRight: `<div class="slide__title">Popular products</div>
    <ul>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; Meal Chicken Cutlets</li>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; Meal Chicken Cutlets</li>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; Meal Chicken Cutlets</li>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; Meal Chicken Cutlets</li>
    </ul>`,
    thumbnailImage: "./assets/images/dry-food.png",
    slideName: "Dogs Food",
  },
  {
    mainImage: "./assets/images/slide-image.png",
    contentLeft: `<div class="slide__title">Chicken food</div>
    <p class="slide__description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt saepe quae
      doloremque temporibus nihil ...
    </p>
    `,
    contentRight: `<div class="slide__title">Popular products</div>
    <ul>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; Meal Chicken Cutlets</li>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; Meal Chicken Cutlets</li>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; Meal Chicken Cutlets</li>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; Meal Chicken Cutlets</li>
    </ul>`,
    thumbnailImage: "./assets/images/dry-food.png",
    slideName: "Gravy Food",
  },
  {
    mainImage: "./assets/images/slide-image.png",
    contentLeft: `<div class="slide__title">Chicken food</div>
    <p class="slide__description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt saepe quae
      doloremque temporibus nihil ...
    </p>
    <div class="slide__button_group d-flex justify-content-around">
      <button class="custom__slide-button">For dogs</button>
      <button class="custom__slide-button">For cats</button>
    </div>`,
    contentRight: `<div class="slide__title">Popular products</div>
    <ul>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; NOthing here</li>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; NOthing here</li>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; NOthing here</li>
      <li><i class="fa fa-paw" aria-hidden="true"></i>&nbsp; NOthing here</li>
    </ul>`,
    thumbnailImage: "./assets/images/dry-food.png",
    slideName: "Gravy Food",
  },
];

var slideThumbs = document.querySelectorAll(".custom__slide-thumb__item");

var thumb_container = document.getElementById("slide-thumb-container");
var mainContent = document.getElementById("main-slide-content");
var slideLeft = document.getElementById("main-slide-left");
var slideRight = document.getElementById("main-slide-right");

const tottalSlides = slide.length;
let content = "";
for (let i = 0; i < slide.length; i++) {
  console.log(i);
  content += `<div class="custom__slide-thumb__item item-${i}" id="slide-thumb-${i + 1}">
  <img src="${slide[1].thumbnailImage}" alt="${slide[i].slideName}" />
  <p>${slide[i].slideName}</p>
</div>`;
}
thumb_container.innerHTML = content;

var slideThumb1 = document.getElementById("slide-thumb-1");
var slideThumb2 = document.getElementById("slide-thumb-2");
var slideThumb3 = document.getElementById("slide-thumb-3");
var slideThumb4 = document.getElementById("slide-thumb-4");
var slideThumb5 = document.getElementById("slide-thumb-5");
var slideThumb6 = document.getElementById("slide-thumb-6");

// slideThumb1.addEventListener("click", (e) => {
//   console.log(slide[0]);
// });

for (let j = 0; j < slide.length; j++) {
  console.log(j);
  document.getElementById(`slide-thumb-${j + 1}`).addEventListener("click", () => {
    console.log("click>>", slide[j]);
    mainContent.innerHTML = `<img src="${slide[j].mainImage}" alt="${slide[j].slideName}" />`;
    slideLeft.innerHTML = slide[j].contentLeft;
    slideRight.innerHTML = slide[j].contentRight;
  });
}
console.log("js");
