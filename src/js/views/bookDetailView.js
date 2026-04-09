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

function getDescription(description) {
  if (!description) {
    return "Descrizione non disponibile.";
  }

  if (typeof description === "string") {
    return description;
  }

  if (typeof description === "object" && description.value) {
    return description.value;
  }

  return "Descrizione non disponibile.";
}