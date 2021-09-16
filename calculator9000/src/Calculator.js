import React from 'react';
import BeautifullScreen from './BeautifullScreen';
import AmazingNumberButton from './AmazingNumberButton';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import ItSOverNineThousand from './ItSOverNineThousand';

import './Calculator.css';


class Calculator extends React.Component {

    constructor() {
        super();
        this.state = { data: '' }
    }

    calculate = () => {
        try {
            const result = eval(this.state.data);
            this.setState({ data: result });
        } catch (e) {
            this.setState({ data: 'error' })
        }
    }

    handleClick = e => {
        const value = e.target.getAttribute('data-value');
        switch (value) {
            case 'clear':
                this.setState({ data: '' });
                break;
            case 'equal':
                this.calculate();
                break;
            default:
                this.setState({ data: this.state.data + value });
        }
    }

    render() {
        return (
            <div className="Calculator" >
                <BeautifullScreen data={this.state.data} className="BeautifullScreen" />

                <article className="calculator">
                    <section className="button1">
                        <GreatOperationButton label="C" value="clear" onClick={this.handleClick} />
                        <AmazingNumberButton label="7" value="7" onClick={this.handleClick} className="AmazingNumberButton" />
                        <AmazingNumberButton label="4" value="4" onClick={this.handleClick} className="AmazingNumberButton" />
                        <AmazingNumberButton label="1" value="1" onClick={this.handleClick} className="AmazingNumberButton" />
                        <AmazingNumberButton label="0" value="0" onClick={this.handleClick} className="AmazingNumberButton" />
                    </section>

                    <section className="button2">
                        <GreatOperationButton label="/" value="/" onClick={this.handleClick} />
                        <AmazingNumberButton label="8" value="8" onClick={this.handleClick} className="AmazingNumberButton" />
                        <AmazingNumberButton label="5" value="5" onClick={this.handleClick} className="AmazingNumberButton" />
                        <AmazingNumberButton label="2" value="2" onClick={this.handleClick} className="AmazingNumberButton" />
                        <GreatOperationButton label="." value="." onClick={this.handleClick} />
                    </section>

                    <section className="button3">
                        <GreatOperationButton label="x" value="*" onClick={this.handleClick} className="GreatOperationButton" />
                        <AmazingNumberButton label="9" value="9" onClick={this.handleClick} className="AmazingNumberButton" />
                        <AmazingNumberButton label="6" value="6" onClick={this.handleClick} className="AmazingNumberButton" />
                        <AmazingNumberButton label="3" value="3" onClick={this.handleClick} className="AmazingNumberButton" />
                        <GreatOperationButton label="" value="null" onClick={this.handleClick} />
                    </section>

                    <section className="button4">
                        <GreatOperationButton label="-" value="-" onClick={this.handleClick} className="GreatOperationButton" />
                        <GreatOperationButton label="+" size="2" value="+" onClick={this.handleClick} className="GreatOperationButton" />
                        <MagnificientEqualButton label="=" size="2" value="equal" onClick={this.handleClick} className="MagnificientEqualButton" />
                    </section>
                </article>

            </div>
        );
    }
}
export default Calculator;
