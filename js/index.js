const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// add content to nav a tags
let navItems = [...document.getElementsByTagName("a")];

navItems.forEach((Atag, index) => {
  Atag.style.color = "lightblue";
  Atag.innerHTML = siteContent["nav"][`nav-item-${index + 1}`];
});

// add content to call to action h1
let ctaH1 = document.querySelector(".cta-text h1");

ctaH1.style.color = "lightblue";

let ctaH1Content = siteContent["cta"]["h1"].split(" ");

ctaH1Content =
  ctaH1Content[0] + "<br>" + ctaH1Content[1] + "<br>" + ctaH1Content[2];

ctaH1.innerHTML = ctaH1Content;

// add content to call to action button
let ctaButton = document.querySelector(".cta-text button");

ctaButton.innerHTML = siteContent["cta"]["button"];

// add cta image
let ctaImage = document.getElementById("cta-img");

ctaImage.setAttribute("src", siteContent["cta"]["img-src"]);

// add top contents
let topContent = document.querySelectorAll(".top-content .text-content");

topContent[0].querySelector("h4").innerHTML =
  siteContent["main-content"]["features-h4"];

topContent[0].querySelector("h4").style.color = "lightblue";

topContent[0].querySelector("p").innerHTML =
  siteContent["main-content"]["features-content"];

topContent[1].querySelector("h4").innerHTML =
  siteContent["main-content"]["about-h4"];

topContent[1].querySelector("h4").style.color = "lightblue";

topContent[1].querySelector("p").innerHTML =
  siteContent["main-content"]["about-content"];

// add middle image

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// add bottom contents

let bottomContent = document.querySelectorAll(".bottom-content .text-content");

bottomContent[0].querySelector("h4").innerHTML =
  siteContent["main-content"]["services-h4"];

bottomContent[0].querySelector("h4").style.color = "lightblue";

bottomContent[0].querySelector("p").innerHTML =
  siteContent["main-content"]["services-content"];

bottomContent[1].querySelector("h4").innerHTML =
  siteContent["main-content"]["product-h4"];

bottomContent[1].querySelector("h4").style.color = "lightblue";

bottomContent[1].querySelector("p").innerHTML =
  siteContent["main-content"]["product-content"];

bottomContent[2].querySelector("h4").innerHTML =
  siteContent["main-content"]["vision-h4"];

bottomContent[2].querySelector("h4").style.color = "lightblue";

bottomContent[2].querySelector("p").innerHTML =
  siteContent["main-content"]["vision-content"];

// add contact contents

let contactH4 = document.querySelector(".contact h4");

contactH4.innerHTML = siteContent.contact["contact-h4"];

contactH4.style.color = "lightblue";

let contactPTags = document.querySelectorAll(".contact p");

let firstPTagContent = siteContent.contact.address.split(" ");

firstPTagContent = `${firstPTagContent[0]} ${firstPTagContent[1]} ${
  firstPTagContent[2]
} ${firstPTagContent[3]}<br> ${firstPTagContent[4]} ${firstPTagContent[5]} `;

contactPTags[0].innerHTML = firstPTagContent;

contactPTags[1].innerHTML = siteContent.contact.phone;

contactPTags[2].innerHTML = siteContent.contact.email;

// add footer content

let footerP = document.querySelector("footer p");

footerP.innerHTML = siteContent.footer.copyright;
