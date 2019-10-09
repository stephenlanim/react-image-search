import React from 'react';

class SearchBar extends React.Component {

	state = {term: ''};
	
	// onInputChange(e) {
	// 	console.log(e.target.value);
	// }

	// Method for handling user form submission
		// Used arrow function to bind 'this.'
	onFormSubmit = (e) => {
		e.preventDefault();
		
		// Call onSubmit callback function passed down from App component
		this.props.onSubmit(this.state.term);
	};

	render(){

		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label htmlFor="search">Image Search</label>
						<input 
							type="text"
							name="search"
							placeholder="Enter your image search term."
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value })}
							

						/>
					</div>
				</form>
				
			</div>
		);
	}
} // end of SearchBar class

export default SearchBar;