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

function handleForm(e) {
  e.preventDefault();
  const data = new FormData(bookFormEle);
  const { title, author, description, rating } = Object.fromEntries(
    data.entries()
  );
  console.log(title, author, description, rating);
  bookFormEle.reset();
}

addBookEle.addEventListener('click', showForm);

bookFormEle.addEventListener('submit', handleForm);

overlayEle.addEventListener('click', hideForm);
