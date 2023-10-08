// 参考：https://dekfractal.com/4048.html
const sketch = function (p) {
  let canvas;

  /*
   * @method base
   */
  function base(n) {
    pg.background(58,81,23);
    pg.push();
    pg.fill(255);
    pg.noStroke();
    pg.textSize(n);
    pg.text('are u ok?', 0, n); // -> change the text
    pg.pop();
  }

  const n = 40; //40 -> textSize
  const w = n * 10; //120; -> canvas width
  const h = n * 1.25; //50; -> canvas height
  const num = 25;
  let pg;

  p.preload = function () {
    pg = p.createGraphics(w, h);
  };

  p.setup = function () {
    canvas = p.createCanvas(600, 400);
    p.frameRate(40);
    p.noStroke();
    base(n);
    pg.loadPixels();
  };

  p.draw = function () {
    p.background(58,81,23);
    p.translate(p.width / 2 - pg.width / 2, p.height / 2 - pg.height / 2);
    let switching;
    for (let i = 0; i < num; i++) {
      const t = h / num;
      let img = pg.get(0, i * t, pg.width, 5);
      if (i % 2 === 0) {
        p.image(img, 0, i * t);
      } else {
        switching = p.random(-2, 2);
        if (switching > 0) {
          p.image(img, p.random(0, 5), i * t);
        } else {
          p.image(img, -p.random(0, 5), i * t);
        }
      }
    }
  };

  p.keyPressed = function () {
    if (p.key === 's') {
      //p.saveCanvas(canvas, 'myCanvas', 'png');
      p.saveGif('p5js_rotate', 6);
    }
  };
};

new p5(sketch);

// originally by Karakure178 (https://openprocessing.org/sketch/1997015)
