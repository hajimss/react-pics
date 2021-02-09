import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            message: ""
        }

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onFormSubmit (event) {
        event.preventDefault();
        console.log(this.state.message);
        this.props.onSearchSubmit(this.state.message);
    }

    onInputChange (event) {
        var message = event.target.value;
        this.setState({message});
    }
    
    render () {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label style={{ fontSize: "20px"}}>Image Search</label>
                        <input value={this.state.message} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;