import Offer from "./Offer"

const {

	Container,
	View,

} = require("../../style/common/Common.Styled")

const {

	OfferDescription,
	OfferImage,
	OfferItem,
	OffersContainer,
	OffersContainerOneThird,
	OfferSubHeading,
	OfferTitle,
	OfferTitleContainer,

} = require("../../style/offers/Offers.Styled")

const OffersListing = ( props ) => {

	const {

		languageDetected

	} = props
	const response = []
	const offers_one = []
	const offers_two = []
	const offers_three = []
	const offers = typeof props.offers !== "undefined" ? props.offers : []
	offers.map(function(value,index){

		if( index%3 === 0 ){

			offers_one.push(
				<Offer
					image={ value.image }
					isMobile={ props.isMobile }
					languageDetected={ languageDetected }
					marginTop={"0px"}
					sub_heading={ languageDetected === "ar" ? value.description_ar : languageDetected === "ru" ? value.description_ru : value.description }
					title={ languageDetected === "ar" ? value.title_ar : languageDetected === "ru" ? value.title_ru : value.title }
					url={ value.link }
				/>
			)

		} else if( index%3 === 1 ){

			offers_two.push(
				<Offer
					image={ value.image }
					isMobile={ props.isMobile }
					languageDetected={ languageDetected }
					marginTop={ index === 1 ? "40px" : "" }
					sub_heading={ languageDetected === "ar" ? value.description_ar : languageDetected === "ru" ? value.description_ru : value.description }
					title={ languageDetected === "ar" ? value.title_ar : languageDetected === "ru" ? value.title_ru : value.title }
					url={ value.link }
				/>
			)

		} else {

			offers_three.push(
				<Offer
					image={ value.image }
					isMobile={ props.isMobile }
					languageDetected={ languageDetected }
					marginTop={"0px"}
					sub_heading={ languageDetected === "ar" ? value.description_ar : languageDetected === "ru" ? value.description_ru : value.description }
					title={ languageDetected === "ar" ? value.title_ar : languageDetected === "ru" ? value.title_ru : value.title }
					url={ value.url }
				/>
			)

		}
		return true

	})
	response.push(
		<OffersContainerOneThird isMobile={ props.isMobile }>{ offers_one }</OffersContainerOneThird>
	)
	response.push(
		<OffersContainerOneThird isMobile={ props.isMobile }>{ offers_two }</OffersContainerOneThird>
	)
	response.push(
		<OffersContainerOneThird isMobile={ props.isMobile }>{ offers_three }</OffersContainerOneThird>
	)
	return(
		<View backgroundColor="#EDEAE4">
			<Container isMobile={ props.isMobile }>
				<OffersContainer isMobile={ props.isMobile }>
					{ response }
				</OffersContainer>
			</Container>
		</View>
	)
	
}

export default OffersListing
