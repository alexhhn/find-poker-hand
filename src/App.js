import { useState } from 'react';
import { Cards } from './components/Cards/Cards';
import { createDeck, shuffleDeck, result } from './utils/helper';
import './App.css';
import Map from './components/Map/Map';


function App() {
    const [cardsInHand, setCardsInHands] = useState([]);

    function drawNewCards() {
        const testDeck = createDeck();
        shuffleDeck(testDeck)
        setCardsInHands(testDeck.splice(0, 5))
    }

    return (
        <div className="App">
            <h1>Your Poker Hand</h1>
            <button onClick={drawNewCards}>Draw new hands</button>
            {!!cardsInHand.length && <>
                <Cards cardsInHand={cardsInHand} />
                <div>Your hand is: {result(cardsInHand)}</div>
            </>
            }
        </div>
    );
}

export default App;
