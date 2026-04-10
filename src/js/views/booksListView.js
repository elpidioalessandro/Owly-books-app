import { formatAuthors } from "../utils/helpers";

export function renderBooksList(books) {
  const booksListContainer = document.getElementById("books-list");

  booksListContainer.innerHTML = "";

  if (!books.length) {
    booksListContainer.innerHTML = `
      <p style="text-align:center; color:#64748b;">
        Nessun risultato trovato.<br>
        Prova con una categoria diversa.
      </p>
    `;
    return;
  }

  books.forEach((book) => {
    const bookElement = document.createElement("article");
    bookElement.classList.add("book-card");

    const authors = formatAuthors(book.authors);

    bookElement.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Autori:</strong> ${authors}</p>
      <button data-work-key="${book.key}">Scopri di più</button>
    `;

    booksListContainer.appendChild(bookElement);
  });
}