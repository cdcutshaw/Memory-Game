export default function Card ({id, image, name, onClick}) {
    return (
        <div className="card" onClick={() => onClick(id)}>
            <img src={image} alt={name} />
            <p>{name}</p>
        </div>
    )
}