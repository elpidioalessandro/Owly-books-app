import { getDescription } from "../utils/helpers";

export function renderBookDetail(book) {
  const detailContainer = document.getElementById("book-detail");

  if (!book) {
    detailContainer.innerHTML = "<p>Dettagli non disponibili.</p>";
    return;
  }

  const description = getDescription(book.description);

  detailContainer.innerHTML = `
    <h3>${book.title || "Titolo non disponibile"}</h3>
    <p>${description}</p>
  `;

  detailContainer.scrollIntoView({ behavior: "smooth" });
}