import Cuisine from "./Cuisine"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const {

	Row,
	ViewPort,

} = require("../../style/common/Common.Styled")
const {

	CuisineContainer,
	CuisineItemContainer,

} = require("../../style/dining/Dining.Styled")
const Cuisines = ( props ) => {

	const {

		earth,
		fire,
		languageDetected,
		ocean,

	} = props

	if( typeof fire !== "undefined" && typeof earth !== "undefined" && typeof ocean !== "undefined" )
		return(
			<ViewPort isMobile={ props.isMobile }>
				{
					!props.isMobile &&
					<Row isMobile={ props.isMobile } flex={ true }>
						<Cuisine
							coverImage={ fire.image }
							data={ fire }
							description={ fire.description }
							image={ fire.optional_image }
							isMobile={ props.isMobile }
							languageDetected={ languageDetected }
							live={ fire.live }
							menu={ fire.link }
							title={ fire.logo_image }
							titleHeight="40%"
						/>
						<Cuisine
							coverImage={ earth.image }
							data={ earth }
							description={ earth.description }
							image={ earth.optional_image }
							isMobile={ props.isMobile }
							languageDetected={ languageDetected }
							live={ earth.live }
							menu={ earth.link }
							title={ earth.logo_image }
							titleHeight="40%"
						/>
						<Cuisine
							coverImage={ ocean.image }
							data={ ocean }
							description={ ocean.description }
							image={ ocean.optional_image }
							isMobile={ props.isMobile }
							languageDetected={ languageDetected }
							live={ ocean.live }
							menu={ ocean.link }
							title={ ocean.logo_image }
							titleHeight="40%"
						/>
					</Row>
				}
				{
					props.isMobile &&
					<Carousel
						showThumbs={ false }
						showArrows={ false }
						showStatus={ false }
						showIndicators={ true }
						autoPlay={ true }
						dynamicHeight={ false }
						dynamicWidth={ true }
						infiniteLoop={ true }
						interval={ 5000 }
						stopOnHover={ false }
					>
						<Cuisine
							coverImage={ fire.image }
							data={ fire }
							description={ fire.description }
							image={ fire.optional_image }
							isMobile={ props.isMobile }
							languageDetected={ languageDetected }
							live={ fire.live }
							menu={ fire.link }
							title={ fire.logo_image_colored }
							titleHeight="40%"
						/>
						<Cuisine
							coverImage={ earth.image }
							data={ earth }
							description={ earth.description }
							image={ earth.optional_image }
							isMobile={ props.isMobile }
							languageDetected={ languageDetected }
							live={ earth.live }
							menu={ earth.link }
							title={ earth.logo_image_colored }
							titleHeight="40%"
						/>
						<Cuisine
							coverImage={ ocean.image }
							data={ ocean }
							description={ ocean.description }
							image={ ocean.optional_image }
							isMobile={ props.isMobile }
							languageDetected={ languageDetected }
							live={ ocean.live }
							menu={ ocean.link }
							title={ ocean.logo_image_colored }
							titleHeight="40%"
						/>
					</Carousel>
				}
			</ViewPort>
		)
	return(<div/>)

}

export default Cuisines
