const {

	BodyText,
	RowAlign,
	Title,

} = require("../../style/common/Common.Styled")
const {

	AccomodationDescriptionContainer,
	AccomodationDescriptionTextContainer,
	AccomodationHeadingContainer,
	AccomodationHeadingTextContainer,

} = require("../../style/home/Home.Styled")

const HomeAccomodation = ( props ) => {

	const {

		isMobile,
		languageDetected,
		accommodationData,

	} = props
	// console.log( accommodationData )

	if( typeof accommodationData !== "undefined" && accommodationData !== null ){
		
		const title = languageDetected === "en" ? accommodationData.title : languageDetected === "ru" ? accommodationData.title_ru : languageDetected === "ar" ? accommodationData.title_ar : accommodationData.title
		const description = languageDetected === "en" ? accommodationData.description : languageDetected === "ru" ? accommodationData.description_ru : languageDetected === "ar" ? accommodationData.description_ar : accommodationData.description
		const sub_description = languageDetected === "en" ? accommodationData.sub_description : languageDetected === "ru" ? accommodationData.sub_description_ru : languageDetected === "ar" ? accommodationData.sub_description_ar : accommodationData.sub_description
		return(
			<RowAlign isMobile={ isMobile }>
				<AccomodationHeadingContainer isMobile={ isMobile }>
					<AccomodationHeadingTextContainer isMobile={ isMobile }>
						<Title isMobile={ isMobile } languageDetected={ languageDetected }>{ title }</Title>
						<BodyText isMobile={ isMobile } textAlign="left" marginTop="0px" fontSize="16px" languageDetected={ languageDetected }>
							{ description }
						</BodyText>
					</AccomodationHeadingTextContainer>
				</AccomodationHeadingContainer>
				{

					!isMobile &&
					<AccomodationDescriptionContainer isMobile={ isMobile }>
						<AccomodationDescriptionTextContainer isMobile={ isMobile }>
							<BodyText fontSize="16px" textAlign="left" marginBottom="0px" isMobile={ isMobile } languageDetected={ languageDetected } dangerouslySetInnerHTML={{ __html : sub_description }} />
						</AccomodationDescriptionTextContainer>
					</AccomodationDescriptionContainer>

				}
			</RowAlign>
		)

	} else {

		return(
			<div/>
		)
		
	}

}

export default HomeAccomodation
