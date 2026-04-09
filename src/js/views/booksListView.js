export function renderBooksList(books) {
  const booksListContainer = document.getElementById("books-list");

  booksListContainer.innerHTML = "";

  if (!books.length) {
    booksListContainer.innerHTML = "<p>Nessun libro trovato.</p>";
    return;
  }

  books.forEach((book) => {
    const bookElement = document.createElement("article");
    bookElement.classList.add("book-card");

    const authors =
      book.authors?.map((author) => author.name).join(", ") ||
      "Autore non disponibile";

    bookElement.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Autori:</strong> ${authors}</p>
      <button data-work-key="${book.key}">Scopri di più</button>
    `;

    booksListContainer.appendChild(bookElement);
  });
}