import React, { Component } from 'react';
import { Radio } from 'react-bootstrap';
class GameLevel extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log("clicked");
    }
    render() {
        return (<div onClick={this.handleClick}>
                    <p>
                        <strong>Choose dificulty Level</strong>
                    </p>
                    <Radio name="radioGroup" inline>
                        Easy (3*3)
                    </Radio>{' '}
                    <Radio name="radioGroup" inline>
                        Medium (4*4)
                    </Radio>{' '}
                    <Radio name="radioGroup" inline>
                        Dificulty (5*5)
                    </Radio>
                </div >);
    }
}
export default GameLevel;