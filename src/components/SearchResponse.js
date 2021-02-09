import React from 'react';

export default class SearchResponse extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        if (this.props.message === "") {
            return (
                <h2>Search for images here!</h2>
            );
        } else {
            return (
                <h2>Here are your "{this.props.message}" images</h2>
            );
        }
        
    }
}
