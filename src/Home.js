import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Instructions from './Instructions';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    handleOnClick() {
        this.setState({ redirect: true });
    }
    render() {
        if (this.state.redirect) {
            return (<Redirect push to="/gameLevel" />);
        }
        return (<div>
                    <Instructions />
                    <Button bsStyle="primary" onClick={this.handleOnClick}>Lets Play</Button>
                 </div>
        );
    }

}

export default Home;


