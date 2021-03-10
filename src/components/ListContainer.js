import React, { Component } from 'react';
import Container from './container';


class ListContainer extends Component {
    renderContainer = () => {
        return this.props.timers.map((timer => {
            return <Container key ={timer.id} {...timer}/>
        }))
    }
    render() {
        return (
            <div className="list--container">
                {this.renderContainer()}
            </div>
           
        );
    };
};

export default ListContainer;