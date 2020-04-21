class Image {
  constructor(url) {
    this.url = url;
    console.log(`Loading image from ${this.url}`);
  }

  draw() {
    console.log(`Drawing image ${this.url}`);
  }
}

function drawImage(img) {
  console.log("About to draw the image");
  img.draw();
  console.log("Done drawing the image");
}

// !Virtual Proxy
class LazyImage {
  constructor(url) {
    this.url = url;
  }

  draw() {
    if (!this.image) this.image = new Image(this.url);
    this.image.draw();
  }
}

let img = new Image("http://pokemon.com/pikachu.png");

console.log("----------_VIRTUAL PROXY-------------");
// !Problem is above img says we are loding the image, rather it should be empty

let virtualImg = new LazyImage("http://pokemon.com/pikachu.png");
drawImage(virtualImg); // comment this code
