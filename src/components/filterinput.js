import React, { Component } from 'react';

class FilterInput extends Component {
    state = {inputValue: ''}
    
    render() {
        return (
            <div>
                <input value={this.state.inputValue} type="text" placeholder="Entrez une valeur à filtrer.." onChange={(e) => {
                    this.setState({inputValue: e.target.value});
                    this.props.onChange(this.state.inputValue);
                }} />
            </div>
        )
    }
}

export default FilterInput;