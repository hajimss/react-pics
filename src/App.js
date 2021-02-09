import React from 'react';
import Unsplash from './api/Unsplash';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import SearchResponse from './components/SearchResponse';

class App extends React.Component {
    constructor(){
        super()

        this.state = {
            message : "",
            images: []
        }

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    onSearchSubmit (event) {
        console.log(event);
        const getImages = async () => {
            // check Request Query Params with Axios on how to make this get request
            const res = await Unsplash.get('/search/photos', { params: { query: event, color: 'black' } });
            this.setState({ images : res.data.results });
        }
        getImages();
        this.setState({
            message: event
        });
    }

    render () {
        return (
            <div className="ui container">
                <h1>An App to Search for Images</h1>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <SearchResponse
                    message={this.state.message}
                />
                <ImageList 
                    images = {this.state.images}
                />
            </div>
        );
    }
}

export default App;