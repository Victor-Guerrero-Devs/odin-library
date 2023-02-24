const overlayEle = document.querySelector('#overlay');
const modalEle = document.querySelector('#modal');
const bookFormEle = document.querySelector('#book-form');
const addBookEle = document.querySelector('#add-book');

function showForm() {
  overlayEle.classList.toggle('hidden');
  modalEle.classList.toggle('hidden');
}

function hideForm() {
  overlayEle.classList.toggle('hidden');
  modalEle.classList.toggle('hidden');
}

addBookEle.addEventListener('click', showForm);

overlayEle.addEventListener('click', hideForm);
