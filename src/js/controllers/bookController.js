import {
  getBooksBySubject,
  getBookDetailsByKey,
} from "../api/openLibraryService";
import { renderBooksList } from "../views/booksListView";
import { renderBookDetail } from "../views/bookDetailView";

export function init() {
  const form = document.getElementById("search-form");
  const booksListContainer = document.getElementById("books-list");
  const detailContainer = document.getElementById("book-detail");

  detailContainer.innerHTML = "<p>Seleziona un libro per vedere i dettagli.</p>";

  form.addEventListener("submit", handleSearch);
  booksListContainer.addEventListener("click", handleBookClick);
}

async function handleSearch(event) {
  event.preventDefault();

  const input = document.getElementById("category-input");
  const category = input.value.trim();
  const statusMessage = document.getElementById("status-message");
  const detailContainer = document.getElementById("book-detail");
  const booksListContainer = document.getElementById("books-list");
  const submitButton = document.querySelector('#search-form button[type="submit"]');

  if (!category) {
    statusMessage.innerHTML = "<p>Inserisci una categoria.</p>";
    return;
  }

  statusMessage.innerHTML = "<p>Caricamento libri...</p>";
  detailContainer.innerHTML = "<p>Seleziona un libro per vedere i dettagli.</p>";
  booksListContainer.innerHTML = "";
  submitButton.disabled = true;
  submitButton.textContent = "Caricamento...";

  const books = await getBooksBySubject(category);

  renderBooksList(books);

  statusMessage.innerHTML = books.length
    ? ""
    : "<p>Nessun risultato trovato per questa categoria.</p>";

  submitButton.disabled = false;
  submitButton.textContent = "Cerca";
}

async function handleBookClick(event) {
  const button = event.target.closest("button");

  if (!button) {
    return;
  }

  const workKey = button.dataset.workKey;
  const statusMessage = document.getElementById("status-message");

  if (!workKey) {
    return;
  }

  statusMessage.innerHTML = "<p>Caricamento dettagli...</p>";
  button.disabled = true;
  button.textContent = "Caricamento...";

  const bookDetails = await getBookDetailsByKey(workKey);
  renderBookDetail(bookDetails);

  statusMessage.innerHTML = "";
  button.disabled = false;
  button.textContent = "Vedi dettagli";
}