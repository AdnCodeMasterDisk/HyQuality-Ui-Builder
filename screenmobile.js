const mobilePreview = document.querySelector('#mobilePreview');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

mobilePreview.addEventListener('mousedown', (e) => {
  isDragging = true;

  offsetX = e.clientX - mobilePreview.offsetLeft;
  offsetY = e.clientY - mobilePreview.offsetTop;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  mobilePreview.style.left = `${e.clientX - offsetX}px`;
  mobilePreview.style.top = `${e.clientY - offsetY}px`;
  mobilePreview.style.right = 'auto';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

