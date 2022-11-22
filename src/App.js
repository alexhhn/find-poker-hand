import { useState } from 'react';
import './App.css';

function App() {
    // const poker = require('poker-hands')
    let deck = [];
    const fakeCardsInHands = [
        { number: 'A', symbol: "H", value: 14 },
        { number: 'A', symbol: "S", value: 14 },
        { number: 'A', symbol: "K", value: 14 },
        { number: 'K', symbol: "R", value: 13 },
        { number: 'K', symbol: "H", value: 13 }
    ];
    const [cardsInHand, setCardsInHands] = useState(fakeCardsInHands);

    const Cards = ({ cardsInHand }) => {
        return (
            <div className="cards">
                {cardsInHand.map((card, i) => (
                    <Card key={i} number={card.number} symbol={card.symbol} />
                ))}
            </div>
        );
    };

    const Card = ({ number, symbol }) => {
        return (
            <div className="card">
                {number} {symbol}
            </div>
        );
    };

    function createDeck() {

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
        for (var i = 0; i < 52; i++) {
            //kort blir trukket
            var temporaryCard = cardInHand[i];
            //plasser kort tilfeldig i dekket
            var randomIndex = Math.floor(Math.random() * 52);
            cardInHand[i] = cardInHand[randomIndex];
            //tilfeldig kort blir nå vist frem til index 52
            cardInHand[randomIndex] = temporaryCard;
        }
    }


    function drawNewCards() {
        let testDeck = createDeck();
        shuffleDeck(testDeck)
        result(cardsInHand)
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

    const result = (cards) => {
        const sortedCards = cards.sort((a, b) => a.value - b.value);

        //Royal flush
        if (hasRoyalFlush(sortedCards)) {
            console.log("Royal flush")
        }
        //Straight Flush
        if (hasStraightFlush(sortedCards)) {
            console.log("Straight flush")
        }
        //Four of kind
        if (hasFourOfAKind(sortedCards)) {
            console.log("Four of a Kind")
        }

        //Flush
        if (hasFlush(sortedCards)) {
            console.log("flush")
        }
        //Straight
        if (hasStraight(sortedCards)) {
            console.log("straight")
        }
    };

    return (
        <div className="App">
            <h1>Your Poker Hand</h1>
            <button onClick={drawNewCards}>Draw new hands</button>
            <Cards cardsInHand={cardsInHand} />
            <div>Your hand is: {result(cardsInHand)}</div>
        </div>
    );
}

export default App;
