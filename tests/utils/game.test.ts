import { generateCards, shuffleCards } from "../../src/utils/game";

describe("Utils Shuffle Cards", () => {
  test("Shuffle Cards function", () => {
    const cards = ["A1", "B2", "C1", "T4", "D1"];

    const originalCards = [...cards];

    const shuffledCards = shuffleCards(cards);

    expect(shuffledCards).not.toEqual(originalCards);

    expect(shuffledCards.sort()).toEqual(originalCards.sort());

    expect(shuffledCards.length).toEqual(originalCards.length);
  });

  test("Generate Cards function", () => {
    const cards = generateCards();

    expect(cards).not.toEqual(null);
    expect(cards).not.toEqual([]);
  });
});
