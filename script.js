const main = document.querySelector('main');
let frameIndex = 0;

window.setInterval( () => {
  if (frameIndex < 6) {
    frameIndex = frameIndex + 1
  } else {
    frameIndex = 1
  }
  main.classList = ""
  main.className = `frame-${frameIndex}`
}, 100)
  