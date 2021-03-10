import React, { Component } from 'react';

class TimerForm extends Component {
    state = {
        title : this.props.title || '',
        projet : this.props.projet || '',

    };
    handleTitleChange = e => {
        this.setstate({ title : e.target.value });
    };
    handleProjetChange = e => {
        this.setState ({ projet : e.target.value });
    };

    handleClick = e => {
        const { title , projet} = this.state
        if(this.props.id){
            //On veut modifier

        }else{
            //on veut créer
            this.props.onFormSubmit({title , projet});
        }
    };

    render() {
        const submitText = this.props.title ? "Modifier" : 'Créer';
        return (
            <div className ="form">
                <div className ='form--content'>
                    <div className="form--item">
                        <label>Titre</label>
                        <input
                        type="text"
                        placeholder ='Mon Titre'
                        value = {this.state.title}
                        onChange = {this.handleTitleChange}
                        />
                    </div>
                    <div className="form--item">
                        <label>Projet</label>
                        <input
                        type="text"
                        placeholder ='Mon Projet'
                        value = {this.state.projet}
                        onChange = {this.handleProjetChange}
                        />
                    </div>
                </div>
                <div className="form--button">
                    <button className ='button btn--submit' onClick= {this.handleClick}>
                        {submitText}
                    </button>
                    <button className ='button btn--cancel'>Annuler</button>
                </div>
            </div>
        );
    };
};

export default TimerForm;