import "./Card.css";

/** This file provides an example for a component with no props */

const SimpleCard = () => {
    return (
        <div className="card">
            <h1 className="card-title">This is a Card</h1>
            <p className="card-desc">A paragraph</p>
        </div>
    );
}

export default SimpleCard;