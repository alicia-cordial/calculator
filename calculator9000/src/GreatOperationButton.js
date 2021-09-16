
import './GreatOperationButton.css';

function GreatOperationButton(props) {

    return (
        <div
            className="GreatOperationButton"
            onClick={props.onClick}
            data-size={props.size}
            data-value={props.value}>
            {props.label}
        </div>
    );
}

export default GreatOperationButton;
