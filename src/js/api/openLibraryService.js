const BASE_URL = "https://openlibrary.org";

export async function getBooksBySubject(subject) {
  try {
    const response = await fetch(`${BASE_URL}/subjects/${subject}.json`);

    if (!response.ok) {
      throw new Error("Errore nella richiesta dei libri");
    }

    const data = await response.json();

    return data.works || [];
  } catch (error) {
    console.error("Errore API:", error);
    return [];
  }
}

export async function getBookDetailsByKey(workKey) {
  try {
    const response = await fetch(`${BASE_URL}${workKey}.json`);

    if (!response.ok) {
      throw new Error("Errore nella richiesta del dettaglio libro");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Errore dettaglio libro:", error);
    return null;
  }
}