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
							The Restaurant combines three chic and sophisticated dining spaces.  Breakfast at The Restaurant is a wholesome experience with natural and healthy cuisine ranging from local smoked fish, exotic homemade jams, honey infused with locally grown herbs, and options of plant-based, dairy-free, or gluten-free dishes.
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
				    	The Restaurant combines three chic and sophisticated dining spaces.Breakfast at The Restaurant is a wholesome experience with natural and healthy cuisine ranging from local smoked fish, exotic homemade jams, honey infused with locally grown herbs, and options of plant-based, dairy-free, or gluten-free dishes. 
					</HawkersDescription>
				</>
			}

			</ViewPort>
		)
		// return(
		// 	<ViewPort isMobile={ props.isMobile } height="auto">
		// 	{

		// 		!props.isMobile &&
		// 		<div>
		// 			<HawkersBackgroundImage isMobile={ props.isMobile } image={ props.data.image } />
		// 			<HawkersDescriptionContainer isLight={ true }>
		// 				<HawkersTitle isMobile={ props.isMobile } background={ props.data.logo_image } />
		// 				<HawkersDescription isMobile={ props.isMobile }>
		// 					{ description }
		// 				</HawkersDescription>
		// 			</HawkersDescriptionContainer>
		// 		</div>

		// 	}
		// 	{

		// 		props.isMobile &&
		// 		<>
		// 			<HawkersBackgroundImage isMobile={ props.isMobile } image={ props.data.image } />
		// 			<HawkersTitle isMobile={ props.isMobile } background={ props.data.logo_image } />
		// 			<HawkersDescription isMobile={ props.isMobile }>
		// 				{ description }
		// 			</HawkersDescription>
		// 		</>
		// 	}

		// 	</ViewPort>
		// )
		
	} else {

		return(
			<div/>
		)
		
	}

}

export default TheRestaurant
