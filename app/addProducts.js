let PRODUCTS = [
  {
    title: "bat",
    src: "../images/batgif.gif",
    alt: "bat",
    description: "a long description of the product goes here",
    summary: "brief description of product goes here",
  },
  {
    title: "face",
    src: "../images/face.jpg",
    alt: "face",
    description: "a long description of the product goes here",
    summary: "brief description of product goes here",
  },
  {
    title: "floof duo",
    src: "../images/floofDuo.jpg",
    alt: "floof duo",
    description: "a long description of the product goes here",
    summary: "brief description of product goes here",
  },
  {
    title: "green girl",
    src: "../images/greengirl.jpg",
    alt: "green girl",
    description: "a long description of the product goes here",
    summary: "brief description of product goes here",
  },
  {
    title: "liminal",
    src: "../images/liminal.jpg",
    alt: "liminal",
    description: "a long description of the product goes here",
    summary: "brief description of product goes here",
  },
  {
    title: "long legs",
    src: "../images/longlegs.jpg",
    alt: "long legs",
    description: "a long description of the product goes here",
    summary: "brief description of product goes here",
  },
  {
    title: "pumpkin",
    src: "../images/pumpkinstill.jpg",
    alt: "pumpkin",
    description: "a long description of the product goes here",
    summary: "brief description of product goes here",
  },
  {
    title: "the people you know",
    src: "../images/thePplYouKnow.jpg",
    alt: "the people you know",
    description: "a long description of the product goes here",
    summary: "brief description of product goes here",
  },
  {
    title: "wall dude",
    src: "../images/wallDude.jpg",
    alt: "wall dude",
    description: "a long description of the product goes here",
    summary: "brief description of product goes here",
  },
  {
    title: "worm dudes",
    src: "../images/wormDudes.jpg",
    alt: "worm dudes",
    description: "a long description of the product goes here",
    summary: "brief description of product goes here",
  },
];

export default function addProducts() {
  $.each(PRODUCTS, function (idx, data) {
    $("#productslist").append(
      `<li id="${idx}" class='card'><div class='card__img--wrap' style="background-image: url(${data.src})">
      </div><h3>${data.title}</h3>${data.description}</li>
      `
    );
  });
}
