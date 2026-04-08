export function init() {
  const form = document.getElementById("search-form");

  form.addEventListener("submit", handleSearch);
}

function handleSearch(event) {
  event.preventDefault();

  const input = document.getElementById("category-input");
  const category = input.value.trim();

  if (!category) {
    alert("Inserisci una categoria");
    return;
  }

  console.log("Categoria cercata:", category);
}