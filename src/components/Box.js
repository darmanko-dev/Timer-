import React, { Component } from 'react';

import ListContainer from './ListContainer';
import ActionContainer from './ActionContainer';


class Box extends Component {
    state = {
        timers : [
            {
                title : 'Apprendre react',
                projet : 'Developpement web',
                id : '01',
                elapsed : '1209628',
                runningSince : null
            },
            {
                title : 'Apprendre Angular',
                projet : 'Developpement web',
                id : '02',
                elapsed : '5609628',
                runningSince : null
            },
        ]
    };

    handleCreateTimer = ({title ,projet }) => {
        const timer = {
            title,
            projet,
            id:uuid.v4()
        }
    };

    render() {
        return (
         <div className = 'boxed--view'>
            <div className = 'boxed--view__box'>
                <ListContainer timers = {this.state.timers}/>
                <ActionContainer  onFormSubmit ={this.handleCreateTimer}/>
            </div>
         </div>
        )
    }
}


export default Box;