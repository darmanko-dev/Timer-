import React, { Component } from 'react';
import TimerForm from './TimerForm';
import Button from './Button';

class ActionContainer extends Component {
    state = {
        isFormOpen : false
    }
    render() {
            if(this.state.isFormOpen){
                return <TimerForm onFormSubmit = {this.props.onFormSubmit}/>
            }else{
                return <Button/>
            };
 
    };
};

export default ActionContainer;