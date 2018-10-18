import React, { Component } from 'react';

class TextInput extends Component {
    state = {inputValue: ''}
    
    render() {
        return (
            <div>
                <input value={this.state.inputValue} type="text" placeholder="Entrez la valeur à ajouter..." onChange={(e) => {
                    this.setState({inputValue: e.target.value});
                }} />
                <button onClick={() => {
                    this.props.onClick(this.state.inputValue);
                    this.setState({inputValue: ''});
                }}>Ajouter +</button>
            </div>
        )
    }
}

export default TextInput;