
import './MagnificientEqualButton.css';

function MagnificientEqualButton(props) {
    return (
        <div
            className="MagnificientEqualButton"
            onClick={props.onClick}
            data-size={props.size}
            data-value={props.value}>
            {props.label}
        </div>
    );
}

export default MagnificientEqualButton;
