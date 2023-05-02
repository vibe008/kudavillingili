import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const {
	AccomodationImage
} = require('../../style/accomodation/Accomodation.Styled');

const Images = ( props ) => {
	if( typeof props.images !== 'undefined' && props.images.length > 0 ){
		var response = [];
		props.images.map(function(value,index){
			response.push(
				<AccomodationImage isMobile={ props.isMobile } src={ value } key={"slide-images-"+index }/>
			)
			return true;
		});
		return(
			<Carousel
				showThumbs={ false }
				showArrows={ false }
				showStatus={ false }
				showIndicators={ true }
				autoPlay={ true }
				dynamicHeight={ true }
				infiniteLoop={ true }
				interval={ 5000 }
				className={ props.isMobile ? "accomodation-images mobile" : "accomodation-images"}>
				{ response }
			</Carousel>
		)
	}
	return(
		<div />
	)
	
}

export default Images;
