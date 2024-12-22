import "./Card.css";

const Card = ({title, desc}) => {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <p className="card-desc">{desc}</p>
        </div>
    );
}

export default Card;