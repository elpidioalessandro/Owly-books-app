import { describe, it, expect } from "vitest";
import {
  getDescription,
  formatAuthors,
  normalizeCategory,
} from "../js/utils/helpers";

describe("getDescription", () => {
  it("restituisce la stringa se description è una stringa", () => {
    expect(getDescription("Libro bellissimo")).toBe("Libro bellissimo");
  });

  it("restituisce value se description è un oggetto", () => {
    expect(getDescription({ value: "Descrizione da oggetto" })).toBe(
      "Descrizione da oggetto"
    );
  });

  it("restituisce fallback se description manca", () => {
    expect(getDescription()).toBe("Descrizione non disponibile.");
  });
});

describe("formatAuthors", () => {
  it("formatta correttamente gli autori", () => {
    const authors = [{ name: "Lewis Carroll" }, { name: "John Doe" }];

    expect(formatAuthors(authors)).toBe("Lewis Carroll, John Doe");
  });

  it("restituisce fallback se non ci sono autori", () => {
    expect(formatAuthors([])).toBe("Autore non disponibile");
  });
});

describe("normalizeCategory", () => {
  it("rimuove spazi iniziali e finali e mette tutto in minuscolo", () => {
    expect(normalizeCategory("  Fantasy  ")).toBe("fantasy");
  });

  it("sostituisce gli spazi interni con underscore", () => {
    expect(normalizeCategory("science fiction")).toBe("science_fiction");
  });
});