import HIQUALITY_CSS from './HyQuality.js';

const HTML_ELEMENTS = [
  'div',
  'section',
  'article',
  'main',
  'header',
  'footer',
  'nav',
  'aside',
  'h1',
  'h2',
  'h3',
  'p',
  'span',
  'a',
  'button',
  'img',
  'input',
  'textarea',
  'select',
  'option',
  'ul',
  'ol',
  'li',
];

let selectedElement = 'div';

const CLASS_GROUPS = [
  {
    category: 'Width',
    classes: [
      'w-auto',
      'w-full',
      'w-screen',
      'w-10',
      'w-20',
      'w-30',
      'w-40',
      'w-50',
      'w-60',
      'w-70',
      'w-80',
      'w-90',
    ],
  },
  {
    category: 'Height',
    classes: ['h-auto', 'h-full', 'h-screen'],
  },
  {
    category: 'Container',
    classes: ['container'],
  },
  {
    category: 'Display',
    classes: [
      'd-block',
      'd-inline',
      'd-inline-block',
      'd-flex',
      'd-grid',
      'd-none',
    ],
  },
  {
    category: 'Flex Direction',
    classes: ['flex-row', 'flex-col', 'mobile-flex-col'],
  },
  {
    category: 'Justify Content',
    classes: [
      'justify-start',
      'justify-center',
      'justify-end',
      'justify-between',
      'justify-around',
    ],
  },
  {
    category: 'Align Items',
    classes: ['items-start', 'items-center', 'items-end', 'items-stretch'],
  },
  {
    category: 'Align Self',
    classes: ['self-start', 'self-center', 'self-end'],
  },
  {
    category: 'Flex Wrap',
    classes: ['flex-wrap', 'flex-nowrap'],
  },
  {
    category: 'Gap',
    classes: [
      'gap-1',
      'gap-2',
      'gap-3',
      'gap-4',
      'gap-5',
      'gap-6',
      'gap-7',
      'gap-8',
      'gap-9',
      'gap-10',
      'gap-11',
      'gap-12',
      'gap-13',
      'gap-14',
      'gap-15',
      'gap-16',
    ],
  },
  {
    category: 'Grid Columns',
    classes: [
      'grid-1',
      'grid-2',
      'grid-3',
      'grid-4',
      'grid-6',
      'grid-8',
      'mobile-grid',
    ],
  },

  {
    category: 'Padding Top',
    classes: [
      'pt-0',
      'pt-1',
      'pt-2',
      'pt-3',
      'pt-4',
      'pt-5',
      'pt-6',
      'pt-7',
      'pt-8',
      'pt-9',
      'pt-10',
      'pt-11',
      'pt-12',
      'pt-13',
      'pt-14',
      'pt-15',
      'pt-16',
    ],
  },
  {
    category: 'Padding Bottom',
    classes: [
      'pb-0',
      'pb-1',
      'pb-2',
      'pb-3',
      'pb-4',
      'pb-5',
      'pb-6',
      'pb-7',
      'pb-8',
      'pb-9',
      'pb-10',
      'pb-11',
      'pb-12',
      'pb-13',
      'pb-14',
      'pb-15',
      'pb-16',
    ],
  },
  {
    category: 'Padding Left',
    classes: [
      'pl-0',
      'pl-1',
      'pl-2',
      'pl-3',
      'pl-4',
      'pl-5',
      'pl-6',
      'pl-7',
      'pl-8',
      'pl-9',
      'pl-10',
      'pl-11',
      'pl-12',
      'pl-13',
      'pl-14',
      'pl-15',
      'pl-16',
    ],
  },
  {
    category: 'Padding Right',
    classes: [
      'pr-0',
      'pr-1',
      'pr-2',
      'pr-3',
      'pr-4',
      'pr-5',
      'pr-6',
      'pr-7',
      'pr-8',
      'pr-9',
      'pr-10',
      'pr-11',
      'pr-12',
      'pr-13',
      'pr-14',
      'pr-15',
      'pr-16',
    ],
  },

  {
    category: 'Margin X Auto',
    classes: ['mx-auto'],
  },
  {
    category: 'Margin All',
    classes: [
      'm-0',
      'm-1',
      'm-2',
      'm-3',
      'm-4',
      'm-5',
      'm-6',
      'm-7',
      'm-8',
      'm-9',
      'm-10',
      'm-11',
      'm-12',
      'm-13',
      'm-14',
      'm-15',
      'm-16',
    ],
  },
  {
    category: 'Margin Top',
    classes: [
      'mt-0',
      'mt-1',
      'mt-2',
      'mt-3',
      'mt-4',
      'mt-5',
      'mt-6',
      'mt-7',
      'mt-8',
      'mt-9',
      'mt-10',
      'mt-11',
      'mt-12',
      'mt-13',
      'mt-14',
      'mt-15',
      'mt-16',
    ],
  },
  {
    category: 'Margin Bottom',
    classes: [
      'mb-0',
      'mb-1',
      'mb-2',
      'mb-3',
      'mb-4',
      'mb-5',
      'mb-6',
      'mb-7',
      'mb-8',
      'mb-9',
      'mb-10',
      'mb-11',
      'mb-12',
      'mb-13',
      'mb-14',
      'mb-15',
      'mb-16',
    ],
  },
  {
    category: 'Margin Left',
    classes: [
      'ml-0',
      'ml-1',
      'ml-2',
      'ml-3',
      'ml-4',
      'ml-5',
      'ml-6',
      'ml-7',
      'ml-8',
      'ml-9',
      'ml-10',
      'ml-11',
      'ml-12',
      'ml-13',
      'ml-14',
      'ml-15',
      'ml-16',
    ],
  },
  {
    category: 'Margin Right',
    classes: [
      'mr-0',
      'mr-1',
      'mr-2',
      'mr-3',
      'mr-4',
      'mr-5',
      'mr-6',
      'mr-7',
      'mr-8',
      'mr-9',
      'mr-10',
      'mr-11',
      'mr-12',
      'mr-13',
      'mr-14',
      'mr-15',
      'mr-16',
    ],
  },
  {
    category: 'Text Align',
    classes: ['text-left', 'text-center', 'text-right'],
  },
  {
    category: 'Font Weight',
    classes: [
      'weight-light',
      'weight-regular',
      'weight-medium',
      'weight-semibold',
      'weight-bold',
    ],
  },
  {
    category: 'Font Style',
    classes: ['font-italic'],
  },
  {
    category: 'Font Family',
    classes: ['font-main'],
  },
  {
    category: 'Text Size',
    classes: [
      'fs-1',
      'fs-2',
      'fs-3',
      'fs-4',
      'fs-5',
      'fs-6',
      'fs-7',
      'fs-8',
      'fs-9',
      'fs-10',
      'fs-11',
      'fs-12',
      'fs-13',
      'fs-14',
      'fs-15',
      'fs-16',
    ],
  },
  {
    category: 'Line Height',
    classes: ['line-tight', 'line-base', 'line-loose'],
  },
  {
    category: 'Text Colors',
    classes: [
      't-c1',
      't-c2',
      't-c3',
      't-c4',
      't-c5',
      't-c6',
      't-c7',
      't-c8',
      't-c9',
      't-c10',
      't-c11',
      't-c12',
      't-c13',
      't-c14',
      't-c15',
      't-c16',
    ],
  },
  {
    category: 'Background Colors',
    classes: [
      'bg-c1',
      'bg-c2',
      'bg-c3',
      'bg-c4',
      'bg-c5',
      'bg-c6',
      'bg-c7',
      'bg-c8',
      'bg-c9',
      'bg-c10',
      'bg-c11',
      'bg-c12',
      'bg-c13',
      'bg-c14',
      'bg-c15',
      'bg-c16',
    ],
  },

  {
    category: 'Gradients',
    classes: ['grad1', 'grad2', 'grad2'],
  },
  {
    category: 'Background Image',

    classes: [
      'bg-image',

      /* repeat */
      'bg-repeat',
      'bg-no-repeat',
      'bg-repeat-x',
      'bg-repeat-y',

      /* size */
      'bg-cover',
      'bg-contain',
      'bg-auto',

      /* position */
      'bg-center',
      'bg-top',
      'bg-bottom',
      'bg-left',
      'bg-right',

      'bg-top-left',
      'bg-top-right',

      'bg-bottom-left',
      'bg-bottom-right',

      /* attachment */
      'bg-fixed',
      'bg-scroll',

      /* blend */
      'bg-blend-multiply',
      'bg-blend-overlay',
      'bg-blend-screen',

      /* utilities */
      'bg-parallax',
    ],
  },
  {
    category: 'Border',
    classes: ['border', 'border-dark', 'border-none'],
  },
  {
    category: 'Radius',
    classes: [
      'radius-sm',
      'radius-md',
      'radius-lg',
      'radius-xl',
      'radius-full',
    ],
  },
  {
    category: 'Shadow',
    classes: ['shadow-sm', 'shadow-md', 'shadow-lg'],
  },
  {
    category: 'Opacity',
    classes: [
      'opacity-100',
      'opacity-80',
      'opacity-70',
      'opacity-50',
      'opacity-30',
    ],
  },
  {
    category: 'Position',
    classes: ['pos-relative', 'pos-absolute', 'pos-fixed', 'pos-sticky'],
  },
  {
    category: 'Z-Index',
    classes: ['z-1', 'z-10', 'z-50', 'z-100', 'z-200'],
  },
  {
    category: 'Overflow',
    classes: ['overflow-hidden', 'overflow-auto'],
  },
  {
    category: 'Cursor',
    classes: ['cursor-pointer'],
  },
  {
    category: 'Spacing - Padding All',
    classes: ['p-0', 'p-1', 'p-2', 'p-3', 'p-4', 'p-5', 'p-6', 'p-7', 'p-8'],
  },
];

const selectedClasses = new Set();

const classContainer = document.querySelector('[data-class-container]');
const output = document.querySelector('[data-output]');
const htmlOutput = document.querySelector('[data-html-output]');
const searchInput = document.querySelector('[data-search]');
const clearButtons = document.querySelectorAll('[data-clear]');
const copyButtons = document.querySelectorAll('[data-copy]');
const previewTarget = document.querySelector('[data-preview-target]');
const toast = document.querySelector('[data-toast]');
const appShell = document.querySelector('.app-shell');
const btnappShell = document.querySelector('.btncopyPickerclass');

const htmlElementsContainer = document.querySelector('#htmlElements');

HTML_ELEMENTS.forEach((tag) => {
  const btn = document.createElement('button');

  btn.textContent = tag;

  btn.addEventListener('click', () => {
    selectedElement = tag;

    document
      .querySelectorAll('.class-grid-html button')
      .forEach((el) => el.classList.remove('active'));

    btn.classList.add('active');

    updateOutputs(false);
  });

  btn.classList.add('html-tag');

  htmlElementsContainer.appendChild(btn);

  if (tag === 'div') {
    btn.classList.add('active');
  }
});

function renderClasses(filter = '') {
  const normalizedFilter = filter.trim().toLowerCase();

  classContainer.innerHTML = CLASS_GROUPS.map((group) => {
    const classes = group.classes.filter(
      (className) =>
        className.toLowerCase().includes(normalizedFilter) ||
        group.category.toLowerCase().includes(normalizedFilter)
    );

    if (!classes.length) return '';

    const buttons = classes
      .map(
        (className) => `
      <button
        class="class-chip ${selectedClasses.has(className) ? 'is-active' : ''}"
        type="button"
        data-class="${className}"
        title="Agregar ${className}"
      >.${className}</button>
    `
      )
      .join('');

    return `
      <section class="class-section">
        <h2>${group.category}</h2>
        <div class="class-list">${buttons}</div>
      </section>
    `;
  }).join('');
}

function getClassString() {
  return Array.from(selectedClasses).join(' ');
}

function updateOutputs(copyToClipboard = true) {
  const classString = getClassString();

  output.value = classString;

  htmlOutput.value = `<${selectedElement} class="${classString}">  </${selectedElement}>`;

  previewTarget.className = `preview-target
  ${classString}`;

  if (copyToClipboard) {
    copyText(classString, false);
  }
}

async function copyText(text, showMessage = true, clearAfterCopy = true) {
  try {
    await navigator.clipboard.writeText(text);

    btnappShell.classList.add('hideClasspiker');
    appShell.classList.add('hideClasspiker');

    if (clearAfterCopy) {
      selectedClasses.clear();
      renderClasses();
      searchInput.value = '';
      updateOutputs(false);
    }

    if (showMessage) {
      showToast('Copiado al portapapeles');
    }
  } catch (error) {
    console.warn('No se pudo copiar automáticamente:', error);

    if (showMessage) {
      showToast('Classes copiadas');
    }
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');

  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 1600);
}

classContainer.addEventListener('click', (event) => {
  const button = event.target.closest('[data-class]');
  if (!button) return;

  const className = button.dataset.class;

  if (selectedClasses.has(className)) {
    selectedClasses.delete(className);
  } else {
    selectedClasses.add(className);
  }

  renderClasses(searchInput.value);
  updateOutputs(true);
});

searchInput.addEventListener('input', (event) => {
  renderClasses(event.target.value);
});

copyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const type = button.dataset.copy;

    if (type === 'classes') {
      copyText(output.value);
    }

    if (type === 'html') {
      copyText(htmlOutput.value);
    }
  });
});

renderClasses();
updateOutputs(false);
