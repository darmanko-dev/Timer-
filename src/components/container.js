import React, { Component } from 'react';
import Timer from './Timer';
import TimerForm from './TimerForm';


class Container extends Component {
    state = {
        isFormOpen : false
    }
    render() {
        return (
            <div className ='list--container'>
                {this.state.isFormOpen ? (
                    <TimerForm
                        title = {this.props.title}
                        projet = {this.props.projet}
                        id = {this.props.id}
                    />
                ):(
                    <Timer
                        title = {this.props.title}
                        projet = {this.props.projet}
                        id = {this.props.id}
                        elapsed = {this.props.elapsed}
                        runningSince = {this.props.runningSince}
                    />
                )}  
            </div>
        );
    };
};

export default Container;