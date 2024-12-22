import "./Card.css"

const ComplexCard = ({title, desc, btnHandler}) => {
    return (
        <div className="card">
            <h1 className="card-title">{title}</h1>
            <p className="card-desc">{desc}</p>
            {/**
             * We can also pass functions as props to the child components
             * In this case we're passing on onClick handler function for the button
             * This is helpful when we may have a generic component, but it has different uses in different parts of the app
             */}
            <button onClick={btnHandler} className="card-btn">Click me!</button>
        </div>
    );
}

export default ComplexCard;