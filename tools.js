const deskPreview = document.querySelector('.SectionDeskPreview');
const codeSection = document.querySelector('.SectionCode');
const resizeBar = document.querySelector('#resizeBar');

const mobilePreview = document.querySelector('.SectionMobilePreview');

const buttonTowViews = document.querySelector('#buttonTowViews');
const buttonMobile = document.querySelector('#buttonMobile');
const buttonCode = document.querySelector('#buttonCode');
const buttonDesk = document.querySelector('#buttonDesk');

function showElement(element) {
  if (!element) return;
  element.style.display = '';
}

function hideElement(element) {
  if (!element) return;
  element.style.display = 'none';
}

function setCodeOnlyMode() {
  hideElement(deskPreview);
  hideElement(resizeBar);
  showElement(codeSection);

  codeSection.style.height = '100vh';
}

buttonTowViews.addEventListener('click', () => {
  document.documentElement.style.setProperty('--preview-height', '50vh');

  showElement(deskPreview);
  showElement(codeSection);
  showElement(resizeBar);

  deskPreview.style.height = 'var(--preview-height)';
  codeSection.style.height = 'calc(100vh - var(--preview-height) - 8px)';
});

buttonMobile.addEventListener('click', () => {
  mobilePreview.classList.toggle('hideMobile');
});

buttonCode.addEventListener('click', () => {
  setCodeOnlyMode();
});

buttonDesk.addEventListener('click', () => {
  showElement(deskPreview);

  hideElement(codeSection);
  hideElement(resizeBar);

  deskPreview.style.height = '100vh';
});

setCodeOnlyMode();

const buttons = document.querySelectorAll('.SectionTools button');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    buttons.forEach((b) => b.classList.remove('active'));

    btn.classList.add('active');
  });
});

/* Class picker */
const buttonCssDownload = document.querySelector('#buttonPickerShow');

const appShell = document.querySelector('.app-shell');
const btnappShell = document.querySelector('.btncopyPickerclass');

buttonCssDownload.addEventListener('click', () => {
  appShell.classList.remove('hideClasspiker');
  btnappShell.classList.remove('hideClasspiker');
});

/* Component */
const buttonComponet = document.querySelector('#buttonComponet');

const libraryapp = document.querySelector('.library-app');

buttonComponet.addEventListener('click', () => {
  libraryapp.classList.remove('hideComponent');
});

/* Theme Editor */
const buttonTheme = document.querySelector('#buttonTheme');

const Theme = document.querySelector('.ThemeEditor');

buttonTheme.addEventListener('click', () => {
  Theme.classList.remove('hideTheme');
});

/* Add component */

const buttonAdd = document.querySelector('#buttonAdd');

const Add = document.querySelector('.AddComponent');

buttonAdd.addEventListener('click', () => {
  Add.classList.remove('hideAddComponent');
});
