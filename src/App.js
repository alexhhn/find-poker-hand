import { useState } from 'react';
import './App.css';

function App() {
    const poker = require('poker-hands')
    const [pokerHand, setPokerHand] = useState("")
    const [inspectHand, setInspectHand] = useState("")

    function createDeck() {

        const suits = ['H', 'R', 'K', 'S'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const deck = [];

        //itererer gjennom alle kort

        for (var suitsCounter = 0; suitsCounter < 4; suitsCounter++) {
            for (var ranksCounter = 0; ranksCounter < 13; ranksCounter++) {
                // returner verdi tall + symbol
                deck.push(ranks[ranksCounter] + suits[suitsCounter])
            }
        }

        return deck;
    }

    function shuffleDeck(deck) {
        for (var i = 0; i < 52; i++) {
            //kort blir trukket
            var temporaryCard = deck[i];
            //plasser kort tilfeldig i dekket
            var randomIndex = Math.floor(Math.random() * 52);
            deck[i] = deck[randomIndex];
            //tilfeldig kort blir nå vist frem til index 52
            deck[randomIndex] = temporaryCard;
        }
    }


    function drawNewCards(pokerHand) {
        let testDeck = createDeck();
        shuffleDeck(testDeck)
        pokerHand = testDeck.splice(0, 5);
        const pokerHandJoined = pokerHand.join(' ');
        setPokerHand(pokerHandJoined)
        console.log(pokerHandJoined)
        console.log("test", poker.getHandStrength(pokerHandJoined))
        result(pokerHand)
    }





    const result = (pokerHand) => {
        // console.log(poker.highestCard(pokerHand))
        // if (poker.highestCard(pokerHand)) {
        //     setInspectHand("High Card")
        // }
        // if (poker.hasPair(pokerHand)) {
        //     setInspectHand("Has Pair")
        // }
        // if (poker.hasTwoPairs(pokerHand)) {
        //     setInspectHand("Has Two Pair")
        // }
        // if (poker.hasThreeOfAKind(pokerHand)) {
        //     setInspectHand("Has Three Of A Kind")
        // }
        // if (poker.hasStraight(pokerHand)) {
        //     setInspectHand("Has Straight")
        // }
        // if (poker.hasFlush(pokerHand)) {
        //     setInspectHand("Has Flush")
        // }
        // if (poker.hasFullHouse(pokerHand)) {
        //     setInspectHand("Has Full House")
        // }
        // if (poker.hasFourOfAKind(pokerHand)) {
        //     setInspectHand("Has Four Of A Kind")
        // }
        // if (poker.hasStraightFlush(pokerHand)) {
        //     setInspectHand("Has Straight Flush")
        // }
        // if (poker.hasRoyalFlush(pokerHand)) {
        //     setInspectHand("Has Royal Flush")
        // }
    };

    return (
        <div className="App">
            <h1>Your Poker Hand</h1>
            <button onClick={drawNewCards}>Draw new hands</button>
            <div className="cards">{pokerHand}</div>
            <div>You got: {inspectHand}</div>
        </div>
    );
}

export default App;
