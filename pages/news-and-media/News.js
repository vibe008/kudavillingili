import NewsItem from "./NewsItem"

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

const News = ( props ) => {

	const {

		languageDetected

	} = props
	const response = []
	const offers_one = []
	const offers_two = []
	const offers_three = []
	const offers = typeof props.articles !== "undefined" ? props.articles : []
	offers.map(function(value,index){

		if( index%3 === 0 ){

			offers_one.push(
				<NewsItem
					image={ value.image }
					isMobile={ props.isMobile }
					link={ value.link }
					marginTop={"0px"}
					time={ languageDetected === "ar"? value.date_ar : languageDetected === "ru" ? value.date_ru : value.date }
					title={ languageDetected === "ar"? value.publisher_ar : languageDetected === "ru" ? value.publisher_ru : value.publisher }
				/>
			)

		} else if( index%3 === 1 ){

			offers_two.push(
				<NewsItem
					image={ value.image }
					isMobile={ props.isMobile }
					link={ value.link }
					marginTop={ index === 1 ? "40px" : "" }
					time={ languageDetected === "ar"? value.date_ar : languageDetected === "ru" ? value.date_ru : value.date }
					title={ languageDetected === "ar"? value.publisher_ar : languageDetected === "ru" ? value.publisher_ru : value.publisher }
				/>
			)

		} else {

			offers_three.push(
				<NewsItem
					image={ value.image }
					isMobile={ props.isMobile }
					link={ value.link }
					marginTop={"0px"}
					time={ languageDetected === "ar"? value.date_ar : languageDetected === "ru" ? value.date_ru : value.date }
					title={ languageDetected === "ar"? value.publisher_ar : languageDetected === "ru" ? value.publisher_ru : value.publisher }
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

export default News
