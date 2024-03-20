export const shuffleCards = (cards: string[]) => {
  let currentIndex = cards.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }

  return cards;
};

export const generateCards = () => {
  let cards: string[] = [];
  let characters = "ABCDEFGH";
  for (let i = 0; i < 7; i++) {
    cards.push(`${characters[i]}${i + 1}`);
  }
  for (let i = 0; i < 7; i++) {
    cards.push(`${characters[i]}${i + 1}`);
  }

  return cards;
};
