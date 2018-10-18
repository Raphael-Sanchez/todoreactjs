import React, { Component } from 'react';

class FilterInput extends Component {
    state = {inputValue: ''}
    
    render() {
        return (
            <div>
                <input value={this.state.inputValue} type="text" placeholder="Entrez une valeur à filtrer.." onChange={(e) => {
                    this.setState({inputValue: e.target.value});
                }} />
               <button onClick={() => {
                   this.props.onClick(this.state.inputValue);
                   this.setState({inputValue: ''});
               }}>Filtrer</button>
               <button>Recharger la liste</button>
            </div>
        )
    }
}

export default FilterInput;