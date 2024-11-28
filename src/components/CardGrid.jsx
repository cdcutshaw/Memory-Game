import Card from './Card';

export default function CardGrid ({cards, dispatch}) {
    const handelCardClick = (id) => {
        dispatch ({ type: 'CARD_CLICK', payload: id});
    };

    return (
        <div className="cardGrid">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    image={card.image}
                    name={card.name}
                    onClick={handelCardClick}
                />
            ))}
        </div>
    )
}