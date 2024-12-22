import "./Upgrade.css";

export default function Upgrade (props) {
    return (
        <button className="upgrade" onClick={props.onClickHandler}>
            <h3 className="upgradeName">{props.name}</h3>
            <p className="upgradeDesc">{props.desc}</p>
            <p className="upgradeCost">{props.cost}</p>
        </button>
    );
}