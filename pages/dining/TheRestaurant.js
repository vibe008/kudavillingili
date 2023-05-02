const {

	ViewBackgroundVariableHeight,
	ViewPort,

} = require("../../style/common/Common.Styled")

const {

	HawkersBackgroundImage,
	HawkersDescription,
	HawkersDescriptionContainer,
	HawkersTitle,

} = require("../../style/dining/Dining.Styled")

const TheRestaurant = ( props ) => {

	const {

		data,
		languageDetected,

	} = props

	if( typeof data !== "undefined" && data !== null ){

		const description = languageDetected === "ru" ? data.description_ru : languageDetected === "ar" ? data.description_ar : data.description

		return(
			<ViewPort isMobile={ props.isMobile } height="auto">
			{

				!props.isMobile &&
				<div>
					<HawkersBackgroundImage isMobile={ props.isMobile } image={ props.data.image } />
					<HawkersDescriptionContainer isLight={ true }>
						<HawkersTitle isMobile={ props.isMobile } background={ props.data.logo_image } />
						<HawkersDescription isMobile={ props.isMobile }>
							{ description }
						</HawkersDescription>
					</HawkersDescriptionContainer>
				</div>

			}
			{

				props.isMobile &&
				<>
					<HawkersBackgroundImage isMobile={ props.isMobile } image={ props.data.image } />
					<HawkersTitle isMobile={ props.isMobile } background={ props.data.logo_image } />
					<HawkersDescription isMobile={ props.isMobile }>
						{ description }
					</HawkersDescription>
				</>
			}

			</ViewPort>
		)
		
	} else {

		return(
			<div/>
		)
		
	}

}

export default TheRestaurant
