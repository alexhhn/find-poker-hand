import { Card } from "../Card/Card";

export function Cards({ cardsInHand }) {
    return (
        <div className="cards">
            {cardsInHand.map((card, i) => (
                <Card key={i} number={card.number} symbol={card.symbol} />
            ))}
        </div>
    );
};