const {

	BodyText,
	ContainerCenter,
	Title,

} = require("../../style/common/Common.Styled")

const {

	BeachClubContainer,
	BeachClubDescriptionContainer,
	HawkersTitle,

} = require("../../style/dining/Dining.Styled")


const BeachClub = ( props ) => {

	const {
		
		data,
		languageDetected,
		logo,

	} = props

	if( typeof data !== "undefined" && data !== null ){

		const description = languageDetected === "ru" ? data.description_ru : languageDetected === "ar" ? data.description_ar : data.description
	
		return(
			<BeachClubContainer isMobile={ props.isMobile }>
				<ContainerCenter isMobile={ props.isMobile } noCenter={ true }>
					<BeachClubDescriptionContainer isMobile={ props.isMobile }>
						<HawkersTitle isMobile={ props.isMobile } background={ logo } />
						<BodyText isMobile={ props.isMobile } marginTop={ props.isMobile ? "40px" : "250px" } fontSize="16px">
							{ description }
						</BodyText>
					</BeachClubDescriptionContainer>
				</ContainerCenter>
			</BeachClubContainer>
		)

	} else {

		return(
			<div/>
		)
		
	}

}

export default BeachClub
