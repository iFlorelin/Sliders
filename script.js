let wrap = document.querySelector(".slider");
let slider = document.querySelector(".slider__box");
let block = document.querySelectorAll(".slider__box img");
let c = 0;
let w;

function move() {
  w = slider.offsetWidth;
  console.log(block);
  c++;
  if (c == block.length) {
    c = 0;
    slider.style = `transform: translateX(0 px)`;
  } else {
    console.log(c);
    slider.style.background = "red";
    slider.style = `transform: translateX(${-c * w}px)`;
  }
  // block.style.width = w*block.length + 'px';
}

wrap.onclick = () => move();

block.forEach( (elem, index) => {
    let p = document.querySelector('.bar').appendChild(document.createElement('p'));
    p.innerHTML=index+1;
    w = slider.offsetWidth;
    p.onclick = () => slider.style = `transform: translateX(${-((index)*w)}px)`;
    // c=index;

});
