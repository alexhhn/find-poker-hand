import { hasStraight, hasThreeOfAKind, hasTwoPairs } from "poker-hands";

function createDeck() {
  const deck = [];
  const suits = ["H", "R", "K", "S"];
  const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
    "A",
  ];
  const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  //itererer gjennom alle symbol og nummer
  for (let suitsCounter = 0; suitsCounter < 4; suitsCounter++) {
    for (let ranksCounter = 0; ranksCounter < 13; ranksCounter++) {
      // returner verdi, nummer + symbol
      deck.push({
        number: ranks[ranksCounter],
        symbol: suits[suitsCounter],
        value: value[ranksCounter],
      });
    }
  }

  return deck;
}

function shuffleDeck(shuffledDeck) {
  for (let i = 0; i < 52; i++) {
    //kort blir trukket
    const temporaryCard = shuffledDeck[i];
    //plasser kort tilfeldig i dekket
    const randomIndex = Math.floor(Math.random() * 52);
    shuffledDeck[i] = shuffledDeck[randomIndex];
    //kort er tilfeldig plassert
    shuffledDeck[randomIndex] = temporaryCard;
  }

  console.log("card", shuffledDeck);
}

//Samme funksjon som straight flush, men første kort må også ha verdi 10.
function hasRoyalFlush(cards) {
  return hasStraightFlush(cards) && cards[0].value === 10;
}

function hasStraightFlush(cards) {
  if (hasFlush(cards)) {
    return hasStraight(cards);
  }
}

//Filtrerer 3 kortet for å finne riktig verdi
function hasFourOfAKind(cards) {
  let sameValue = cards.filter(function (item) {
    return item.value === cards[2].value;
  });
  if (sameValue.length === 4) {
    return true;
  }
}

//finner set på 2 forskjellige keys i object, også lage metode for å fjerne muligheten for 4 like
function hasFullHouse(cards) {
  const obj = createSet(cards);
  if (Object.keys(obj).length === 2) {
    return Object.values(obj).every((value) => {
      return value !== 4;
    });
  }
  return false;
}

//filtrerer 3 kortet for å finne riktig verdi
function hasThreeOfAKind(cards) {
  let sameValue = cards.filter(function (item) {
    return item.value === cards[2].value;
  });
  if (sameValue.length === 3) {
    return true;
  }
}

//Map for å finne symbol, kjører every for å få alle symbole like
function hasFlush(cards) {
  const arrSymbol = cards.map(function (item) {
    return item.symbol;
  });
  const isDuplicate = arrSymbol.every(function (item) {
    return arrSymbol[0] === item;
  });
  return isDuplicate;
}

function hasStraight(cards) {
  let start = cards[0].value;
  let startIncrement = start;
  let end = cards[4].value;

  //Hvis første verdi 2 og siste verdi er 14, gi verdi 14 til 1
  if (start === 2 && end === 14) {
    for (let i = 1; i < 4; i++) {
      if (cards[i].value === startIncrement + 1) {
        startIncrement += 1;
        return true;
      }
    }
  }

  //Iterer og sjekk at verdi plusser med 1
  for (let j = 1; j < 5; j++) {
    if (cards[j].value === startIncrement + 1) {
      startIncrement += 1;
      continue;
    } else {
      return false;
    }
  }
  return true;
}

//Set må ha 3 i lengde, men kan ikke ha value 3 for å unngå three of a kind.
function hasTwoPair(cards) {
  const obj = createSet(cards);
  if (Object.keys(obj).length === 3) {
    return Object.values(obj).every((value) => {
      return value !== 3;
    });
  }
  return false;
}

//Set må være 4 for å finne par
function hasOnlyPair(cards) {
  const obj = createSet(cards);
  if (Object.keys(obj).length === 4) {
    return true;
  }
  return false;
}

//Lager set som maper gjennom for å finne lik verdi
function createSet(cards) {
  const obj = {};
  cards.map((card) => {
    const value = card.value;
    if (obj[value]) {
      obj[value] += 1;
    } else {
      obj[value] = 1;
    }
  });
  return obj;
}

function sortCards(cards) {
  // create a copy of cards to avoid mutate the source
  const copyCards = [...cards];
  copyCards.sort((a, b) => a.value - b.value);
  return copyCards;
}

function result(cards) {
  const sortedCards = sortCards(cards);

  if (hasRoyalFlush(sortedCards)) {
    return "Royal Flush";
  }

  if (hasStraightFlush(sortedCards)) {
    return "Straight flush";
  }

  if (hasFourOfAKind(sortedCards)) {
    return "Four Of A Kind";
  }

  if (hasFullHouse(sortedCards)) {
    return "Full House";
  }

  if (hasThreeOfAKind(sortedCards)) {
    return "Three Of A Kind";
  }

  if (hasFlush(sortedCards)) {
    return "Flush";
  }

  if (hasStraight(sortedCards)) {
    return "Straight";
  }

  if (hasTwoPair(sortedCards)) {
    return "Two Pair";
  }

  if (hasOnlyPair(sortedCards)) {
    return "Pair";
  }

  return "High card";
}

export { sortCards, createDeck, shuffleDeck, result };
