const resizeBar = document.querySelector('#resizeBar');

let resizing = false;

function isPreviewOpen() {
  const previewHeight = getComputedStyle(document.documentElement)
    .getPropertyValue('--preview-height')
    .trim();

  return previewHeight !== '0vh' && previewHeight !== '0px';
}

resizeBar?.addEventListener('mousedown', () => {
  if (!isPreviewOpen()) return;

  resizing = true;
});

document.addEventListener('mousemove', (e) => {
  if (!resizing) return;

  let newHeight = e.clientY;

  if (newHeight < 100) newHeight = 100;

  if (newHeight > window.innerHeight - 100) {
    newHeight = window.innerHeight - 100;
  }

  document.documentElement.style.setProperty(
    '--preview-height',
    `${newHeight}px`
  );
});

document.addEventListener('mouseup', () => {
  resizing = false;
});
