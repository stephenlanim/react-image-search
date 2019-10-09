import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
	// console.log(props.images);

	// Map over images
	const returnedImages = props.images.map( 
		(image) => {
		// ({alt_description, urls, id}) => {
		// 	// used destructuring to get properties from each mapped image object
		
		return (
			<ImageCard
				// alt={alt_description}
				// src={urls.regular}
				key={image.id}
				image={image}
			/>
		); // end of return statement
	}); // end of returnedImages

	return (
		<div className="image-list">{returnedImages}</div>
	);
};

export default ImageList;