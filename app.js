const overlayEle = document.querySelector('#overlay');
const modalEle = document.querySelector('#modal');
const bookFormEle = document.querySelector('#book-form');
const bookListEle = document.querySelector('#book-list');
const addBookBtn = document.querySelector('#add-book');
const articleBtns = document.querySelectorAll('.article-btn');

let books = [];

function toggleForm() {
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
  toggleForm();
  renderBooks(book);
}

function renderBooks({ title, author, description, rating }) {
  const cardEle = document.createElement('article');
  cardEle.classList.add('card');
  cardEle.innerHTML = `
    <header>
      <p class="card__title">${title}</p>
    </header>
    <p class="card__author">${author}</p>
    <p class="card__description">${description}</p>
    <p class="card__rating">${rating}/10</p>
  `;
  bookListEle.appendChild(cardEle);
}

addBookBtn.addEventListener('click', toggleForm);

bookFormEle.addEventListener('submit', handleForm);

overlayEle.addEventListener('click', toggleForm);
