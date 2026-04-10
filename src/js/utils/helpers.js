export function getDescription(description) {
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

export function formatAuthors(authors) {
  if (!authors || !authors.length) {
    return "Autore non disponibile";
  }

  return authors.map((author) => author.name).join(", ");
}

export function normalizeCategory(category) {
  return category.trim().toLowerCase().replace(/\s+/g, "_");
}