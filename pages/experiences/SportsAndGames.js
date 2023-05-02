const {

	BodyText,
	ContainerFlexStartAlign,
	TitleH2,

} = require("../../style/common/Common.Styled")
const {

	LiftSurfImage,
	LiftSurfTextContainer,

} = require("../../style/water-sports/WaterSports.Styled")

const {

	//MOBILE
	BodyTextMobile,
	ExperienceLeisureHeaderMobile,
	ExperienceTitleContainerMobile,
	ExperienceTitleTextMobile,
	ExperienceWellnessNewPoolDescriptionMobile,
	ExperienceWellnessNewPoolImageMobile,

	//UPDATE
	ExperienceContainer,
	ExperienceDescription,
	ExperienceImageAlign,

} = require("../../style/experiences/Experiences.Styled")

const { cdnSwitch } = require("../../functions/cdn")

const SportsAndGames = ( props ) => {

	const {

		data,
		languageDetected,

	} = props

	if( typeof props.data !== "undefined" ){

		const cdn_image = cdnSwitch( props.data.image )

		const title = languageDetected === "ru" ? data.title_ru : languageDetected === "ar" ? data.title_ar : data.title
		const description = languageDetected === "ru" ? data.description_ru : languageDetected === "ar" ? data.description_ar : data.description
		const description_mobile = languageDetected === "ru" ? data.description_mobile_ru : languageDetected === "ar" ? data.description_mobile_ar : data.description_mobile
		return(
			<div>
			{/*IS MOBILE*/}
			{
				props.isMobile &&
				<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
					<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ cdn_image } />
					<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
						<ExperienceTitleTextMobile isMobile={ props.isMobile } color={ "#C1A192" }>{ title }</ExperienceTitleTextMobile>
					</ExperienceTitleContainerMobile>
					<ExperienceWellnessNewPoolDescriptionMobile>
						<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : description_mobile }} />
					</ExperienceWellnessNewPoolDescriptionMobile>
				</ExperienceLeisureHeaderMobile>
			}
			{/*IS NOT MOBILE*/}
			{
				!props.isMobile &&
				<ExperienceContainer>
					<ExperienceDescription>
						<TitleH2 textAlign="left" languageDetected={ languageDetected }>{ title }</TitleH2>
						<BodyText fontSize="16px" textAlign="left" languageDetected={ languageDetected }>
							{ description }
						</BodyText>
					</ExperienceDescription>
					<ExperienceImageAlign background={ cdn_image } />
				</ExperienceContainer>
			}
			</div>
		)
	}

	return(<div/>)

}

export default SportsAndGames
