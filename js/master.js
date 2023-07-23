// Start Box Setting
export { icons, skills, colorLi };
let icons = document.querySelector(".icons");
let settingBox = document.querySelector(".settings-box");
const colorLi = document.querySelectorAll(".settings-box .colors-list li");

icons.addEventListener("click", (e) => {
  icons.classList.contains("fa-spin")
    ? icons.classList.remove("fa-spin")
    : icons.classList.add("fa-spin");
  if (settingBox.classList.contains("open")) {
    settingBox.classList.remove("open");
  } else {
    settingBox.classList.add("open");
  }
});

// switch Color on local storage

if (window.localStorage.getItem("change-color")) {
  document.documentElement.style.setProperty(
    "--main-color",
    window.localStorage.getItem("change-color")
  );
  // امسح كلاس active من localstorage  دا كلو وانتا بتعمل chenk للعنصر جو اللوكل استروج
  colorLi.forEach((li) => {
    li.classList.remove("active");

    // اعمل تشيك جو اللوكل اسروج
    if (li.dataset.color === window.localStorage.getItem("change-color")) {
      li.classList.add("active");
    }
  });
}

colorLi.forEach((li) => {
  //check on click
  li.addEventListener("click", (e) => {
    // check on for loop li active remove
    colorLi.forEach((li) => {
      li.classList.remove("active");
    });
    // out loop add to class active
    li.classList.add("active");

    // console.log(e.target.dataset.color)
    // chang root element
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    /// add color to  local storage
    window.localStorage.setItem("change-color", e.target.dataset.color);
  });
});

// random of  Box setting

const randomBackground = document.querySelectorAll(".random-background span");

// option trun on random background
let backgroundOption = true;

// clear Intrval on random background
let intervalImage;

// random option_background and local storage

let option_backgroundYesOrNo = window.localStorage.getItem(
  "option_backgroundYesOrNo"
);

if (option_backgroundYesOrNo !== null) {
  backgroundOption = option_backgroundYesOrNo + 6;
  console.log(typeof backgroundOption);

  if (backgroundOption === "true") {
    backgroundOption = true;
  } else if (backgroundOption === "false") {
    backgroundOption = false;
  }
  console.log(typeof backgroundOption);

  // delet class active all span
  randomBackground.forEach((span) => {
    span.classList.remove("active");
  });
  // add active to local storage

  if (option_backgroundYesOrNo === "true") {
    document.querySelector(".random-background .yes").classList.add("active");
  } else {
    document.querySelector(".random-background .no").classList.add("active");
  }
}

// check class active and remove
randomBackground.forEach((span) => {
  span.addEventListener("click", (e) => {
    randomBackground.forEach((span) => {
      span.classList.remove("active");
    });
    span.classList.add("active");

    // chek option yes or no  or yes turn on random back groun  else turn  of random back groun
    if (e.target.dataset.background === "yes") {
      // شغلي الفانشن الانتا مسكاها
      backgroundOption = true;
      randomizeImage();
      window.localStorage.setItem("option_backgroundYesOrNo", true);
    } else {
      window.localStorage.setItem("option_backgroundYesOrNo", false);

      clearInterval(intervalImage);
    }
  });
});

// End Box Setting

// start Landing Page
let landingPage = document.querySelector(".landing-page");
let image = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
];

// landingPage.style.backgroundImage = `url(images/.jpg)`

function randomizeImage() {
  if (backgroundOption === true) {
    intervalImage = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * image.length);
      landingPage.style.backgroundImage = `url(${image[randomNumber]})`;
    }, 1000);
  }
}

randomizeImage();
// End Landing Page

let skills = document.querySelector(".skills");

window.onscroll = function () {
  // skill offset Top
  let skillTop = skills.offsetTop;

  // outerr height
  let skillOuterHeight = skills.offsetHeight;

  // window Height
  let windowHeight = this.innerHeight;

  //scrollTop
  let windowScrollTop = this.pageYOffset;
  // console.log(skillTop)
  // console.log(skillOuterHeight)
  // console.log(windowHeight)
  // console.log(( skillTop + skillOuterHeight - windowHeight))
  // console.log(windowScrollTop)

  if (windowScrollTop > skillTop + skillOuterHeight - windowHeight) {
    console.log("sss");
    let allSkills = document.querySelectorAll(".skills .skills-box .skills-progress span");
    allSkills.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
};
//
// start Our Gallery
let gallery = document.querySelectorAll(".our-gallery .all-photo .images img");
console.log(gallery);

// loop all imag
gallery.forEach((image) => {
  image.addEventListener("click", (e) => {
    // Create Element overly
    let overly = document.createElement("div");

    overly.className = "popup-overly";
    // append to body
    document.body.appendChild(overly);

    // Create Element Popup
    let popupBox = document.createElement("div");
    popupBox.className = "popup-Box";

    // create Element Image
    let imag = document.createElement("img");
    // appendChild imag to popupBox
    popupBox.appendChild(imag);
    // appendChild popupBox to overly
    overly.appendChild(popupBox);

    imag.src = image.src;

    // crete text Image
    let textImage = document.createElement("h3");

    let textImage_2 = document.createTextNode(image.alt);

    textImage.className = "textImage";
    // append text
    textImage.append(textImage_2);
    // append text to popupBox
    popupBox.prepend(textImage);

    //create close span
    let closeSpan = document.createElement("span");
    //create TextClose
    let closeText = document.createTextNode("X");
    closeSpan.className = "close-span";
    // append colseSpan to closeText
    closeSpan.append(closeText);

    //prepend closeSpan to PopupBox
    popupBox.prepend(closeSpan);
  });
});

// close PopUpBox
document.addEventListener("click", (e) => {
  if (e.target.className == "close-span") {
    e.target.parentNode.remove();
    //
    document.querySelector(".popup-overly").remove();
  }
});

// Start scrollAllSection
let allBullets = document.querySelectorAll(".nav-bullate .bullates");
let allLinks = document.querySelectorAll(".allLink a ");
function scrollAllSection(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();

      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrollAllSection(allBullets);
scrollAllSection(allLinks);

// End scrollAllSection

//// show nav bar
let mainBar = document.querySelector(".main-bar");

let linkNavbar = document.querySelector(".allLink ");

function toggleMainBar(element) {
  element.addEventListener("click", (e) => {
    linkNavbar.classList.toggle("closeee");
  });
}
toggleMainBar(mainBar);
