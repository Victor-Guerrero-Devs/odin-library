const overlayEle = document.querySelector('#overlay');
const modalEle = document.querySelector('#modal');
const bookFormEle = document.querySelector('#book-form');
const addBookBtn = document.querySelector('#add-book');

let books = [];

function showForm() {
  overlayEle.classList.toggle('hidden');
  modalEle.classList.toggle('hidden');
}

function hideForm() {
  overlayEle.classList.toggle('hidden');
  modalEle.classList.toggle('hidden');
}

function Book(title, author, description, rating) {
  this.title = title;
  this.author = author;
  this.description = description;
  this.rating = rating;
}

function handleForm(e) {
  e.preventDefault();
  const data = new FormData(bookFormEle);
  const { title, author, description, rating } = Object.fromEntries(
    data.entries()
  );
  const book = new Book(title, author, description, rating);
  books.push(book);
  console.log(books);
  bookFormEle.reset();
}

addBookBtn.addEventListener('click', showForm);

bookFormEle.addEventListener('submit', handleForm);

overlayEle.addEventListener('click', hideForm);
