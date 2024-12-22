import "./Card.css";

/** This file provides an example for a component with props */

const Card = ({title, desc}) => {
    return (
        <div className="card">
            {/* Use JS interpolation to pass in the value for title for the card title */}
            <h2 className="card-title">{title}</h2>
            <p className="card-desc">{desc}</p>
        </div>
    );
}

export default Card;