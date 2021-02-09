import React from 'react';

export default class ImageList extends React.Component {
    constructor (props) {
        super(props);

    }



    render() {
        return (
            <div>
                {this.props.images.map((image) => (
                    <img src={image.urls.small}></img>
                ))}
            </div>
        );
    }
}