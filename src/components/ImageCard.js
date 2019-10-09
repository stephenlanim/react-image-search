import React from 'react';
// import ImageList from './ImageList';

class ImageCard extends React.Component {

	constructor(props){
		super(props);
		// React DOM Reference to be used for images
		this.imageRef = React.createRef();
	}

	state = {
		spans: 0
	};

	setSpans = ()=> {
		// console.log(this.imageRef.current.clientHeight);
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 10);
		this.setState( {spans: spans} );
	}
	
	componentDidMount(){
		this.imageRef.current.addEventListener('load', this.setSpans);
		// console.log(this.imageRef.current);
		// console.log(this.imageRef.current.clientHeight);
		// this.setState()
	}


	render(){
		// used destructuring to get properties from each image object mapped in the ImageList component
		const {alt_description, urls} = this.props.image;

		return (
			<div style={{gridRowEnd: `span ${this.state.spans}`}}>
				<img
					alt={alt_description} 
					src={urls.regular}
					ref={this.imageRef}
				/>
			</div>
		);
	}
}
export default ImageCard;