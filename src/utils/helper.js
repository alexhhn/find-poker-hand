function createDeck() {
    const deck = [];
    const suits = ['H', 'R', 'K', 'S'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

    //itererer gjennom alle kort

    for (var suitsCounter = 0; suitsCounter < 4; suitsCounter++) {
        for (var ranksCounter = 0; ranksCounter < 13; ranksCounter++) {
            // returner verdi tall + symbol
            deck.push({ number: ranks[ranksCounter], symbol: suits[suitsCounter], value: value[ranksCounter] })
        }
    }
    return deck;
}

function shuffleDeck(cardInHand) {
    for (let i = 0; i < 52; i++) {
        //kort blir trukket
        const temporaryCard = cardInHand[i];
        //plasser kort tilfeldig i dekket
        const randomIndex = Math.floor(Math.random() * 52);
        cardInHand[i] = cardInHand[randomIndex];
        //tilfeldig kort blir nå vist frem til index 52
        cardInHand[randomIndex] = temporaryCard;
    }
}

function hasRoyalFlush(cards) {
    return hasStraightFlush(cards) && cards[0].value === 10;
}

function hasStraightFlush(cards) {
    if (hasFlush(cards)) {
        return hasStraight(cards);
    }
}

function hasFourOfAKind(cards) {
    let sameValue = cards.filter(function (item) {
        return item.value === cards[2].value;
    });
    if (sameValue.length === 4) {
        return true;
    }
}

function hasFullHouse(cards) {
    const obj = createSet(cards)
    if (Object.keys(obj).length === 2) {
        return Object.values(obj).every((value) => {
            return value !== 4;
        })
    }
    return false;
}

function hasThreeOfAKind(cards) {
    let sameValue = cards.filter(function (item) {
        return item.value === cards[2].value;
    });
    if (sameValue.length === 3) {
        return true;
    }
}

function hasFlush(cards) {
    const arrSymbol = cards.map(function (item) {
        return item.symbol
    })
    var isDuplicate = arrSymbol.every(function (item) {
        return arrSymbol[0] === item;
    })
    return isDuplicate;
}

function hasStraight(cards) {
    let start = cards[0].value;
    let startIncrement = start
    let end = cards[4].value;
    if (start === 2 && end === 14) {
        for (var i = 1; i < 4; i++) {
            if (cards[i].value === startIncrement + 1) {
                startIncrement += 1;
                return true
            }
        }
    }
    for (var j = 1; j < 5; j++) {
        if (cards[j].value === startIncrement + 1) {
            startIncrement += 1;
            continue;
        } else {
            return false
        }
    }
    return true;
}

function hasTwoPair(cards) {
    const obj = createSet(cards)
    if (Object.keys(obj).length === 3) {
        return Object.values(obj).every((value) => {
            return value !== 3;
        })
    }
    return false;
}

function hasOnlyPair(cards) {
    const obj = createSet(cards)
    if (Object.keys(obj).length === 4) {
        return true;
    }
    return false;
}

function hasHighCard(cards) {
    const highCard = cards[4].value
    return true;
}


function createSet(cards) {
    const obj = {};
    cards.map((card) => {
        const value = card.value;
        if (obj[value]) {
            obj[value] += 1;
        } else {
            obj[value] = 1;
        }
    })
    return obj;
}


function result(cards) {
    const sortedCards = cards.sort((a, b) => a.value - b.value);

    //Royal flush
    if (hasRoyalFlush(sortedCards)) {
        return "Royal Flush"
    }
    //Straight Flush
    if (hasStraightFlush(sortedCards)) {
        return "Straight flush"
    }
    //Four of kind
    if (hasFourOfAKind(sortedCards)) {
        return "Four Of A Kind"
    }
    //Full house
    if (hasFullHouse(sortedCards)) {
        return "Full House"
    }
    // Three of a kind
    if (hasThreeOfAKind(sortedCards)) {
        return "Three Of A Kind"
    }
    //Flush
    if (hasFlush(sortedCards)) {
        return "Flush"
    }
    //Straight
    if (hasStraight(sortedCards)) {
        return "Straight"
    }
    //Denne kjører bare når det er 2 par
    if (hasTwoPair(sortedCards)) {
        return "Two Pair"
    }
    //One pair
    if (hasOnlyPair(sortedCards)) {
        return "Pair"
    }
    //High card
    if (hasHighCard(sortedCards)) {
        return "High card"
    }
};

export { createDeck, shuffleDeck, hasRoyalFlush, hasStraightFlush, hasFourOfAKind, hasFullHouse, hasThreeOfAKind, hasStraight, hasTwoPair, hasOnlyPair, hasHighCard, createSet, result }