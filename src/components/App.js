import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
	state = {
		images: []
	};

	// Method for fetching images based on the search term
		// Used arrow function to bind 'this.'
	 onSearchSubmit = async (term) => {
		// Use Axios to get photos from the Unsplash API
		const response = await unsplash.get('/search/photos', {

			params: {
				query: term // enters the user's search term as the query parameter for the request
			}
			
		});

		// Assign fetched images to state.images
		this.setState({ images: response.data.results});
		
	} // end of onSearchSubmit()
	
	render(){
		return (
			<div className="ui container" style={{marginTop: '10px'}}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
			
		); // end fo return statement
	}
}; // end of App class

export default App;