import Dish from "./Dish"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const {

	Row,
	ViewPort,

} = require("../../style/common/Common.Styled")

const Dishes = ( props ) => {

	const {

		east,
		languageDetected,
		med,
		spice,
		theBar,

	} = props

	if( typeof spice !== "undefined" && typeof east !== "undefined" && typeof med !== "undefined" && typeof theBar !== "undefined" )
		return(
			<ViewPort isMobile={ props.isMobile }>
				{
					!props.isMobile &&
					<Row isMobile={ props.isMobile } flex={ true }>
						<Dish
							data={ spice }
							description={ spice.description }
							image={ spice.image }
							isMobile={ props.isMobile }
							languageDetected={ languageDetected }
							live={ spice.live }
							menu={ spice.link }
							name={ spice.logo_image }
							nameWhite={ spice.optional_image }
						/>
						<Dish
							data={ east }
							description={ east.description }
							image={ east.image }
							isMobile={ props.isMobile }
							languageDetected={ languageDetected }
							live={ spice.live }
							menu={ east.link }
							name={ east.logo_image }
							nameWhite={ east.optional_image }
						/>
						<Dish
							data={ med }
							description={ med.description }
							image={ med.image }
							isMobile={ props.isMobile }
							languageDetected={ languageDetected }
							live={ spice.live }
							menu={ med.link }
							name={ med.logo_image }
							nameWhite={ med.optional_image }
						/>
						<Dish
							data={ theBar }
							description={ theBar.description }
							image={ theBar.image }
							isMobile={ props.isMobile }
							languageDetected={ languageDetected }
							live={ spice.live }
							menu={ theBar.link }
							name={ theBar.logo_image }
							nameWhite={ theBar.optional_image }
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
						<Dish
							data={ spice }
							description={ spice.description }
							image={ spice.image }
							isMobile={ props.isMobile }
							languageDetected={ languageDetected }
							live={ spice.live }
							menu={ spice.link }
							name={ spice.logo_image }
							nameWhite={ spice.optional_image }
						/>
						<Dish
							data={ east }
							description={ east.description }
							image={ east.image }
							isMobile={ props.isMobile }
							languageDetected={ languageDetected }
							live={ spice.live }
							menu={ east.link }
							name={ east.logo_image }
							nameWhite={ east.optional_image }
						/>
						<Dish
							data={ med }
							description={ med.description }
							image={ med.image }
							isMobile={ props.isMobile }
							languageDetected={ languageDetected }
							live={ spice.live }
							menu={ med.link }
							name={ med.logo_image }
							nameWhite={ med.optional_image }
						/>
						<Dish
							data={ theBar }
							description={ theBar.description }
							image={ theBar.image }
							isMobile={ props.isMobile }
							languageDetected={ languageDetected }
							live={ spice.live }
							menu={ theBar.link }
							name={ theBar.logo_image }
							nameWhite={ theBar.optional_image }
						/>
					</Carousel>
				}
			</ViewPort>
		)
	return(<div/>)

}

export default Dishes
