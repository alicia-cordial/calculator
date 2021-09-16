
import './AmazingNumberButton.css';



function AmazingNumberButton(props) {

    return (
        <div
            className="AmazingNumberButton"
            onClick={props.onClick}
            data-size={props.size}
            data-value={props.value}>
            {props.label}
        </div>
    );
}

export default AmazingNumberButton;