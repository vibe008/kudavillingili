const {

	BodyText,
	ContainerFlexStartAlign,
	TitleH2,
	Title,
	View,

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
	SectionHeader,

} = require("../../style/experiences/Experiences.Styled")

const { cdnSwitch } = require("../../functions/cdn")

const BigGameFishing = ( props ) => {

	const {

		data,
		languageDetected,

	} = props
	if( typeof props.data !== "undefined" ){

		const cdn_image = cdnSwitch( props.data.image )
		const title = languageDetected === "ru" ? data.title_ru : languageDetected === "ar" ? data.title_ar : data.title
		const description = languageDetected === "ru" ? data.description_ru : languageDetected === "ar" ? data.description_ar : data.description
		const description_mobile = languageDetected === "ru" ? data.description_mobile_ru : languageDetected === "ar" ? data.description_mobile_ar : data.description_mobile
		const heading = languageDetected === "ru" ? "Экскурсии" : languageDetected === "ar" ? "الرحلات" : "Excursions"
		return(
			<div>
			{/*IS MOBILE*/}
			{
				props.isMobile &&
				<>
					<Title isMobile={ props.isMobile } textAlign="center" color="#708DA1">{ heading }</Title>
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ cdn_image } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile } water={ true } color={ "#708DA1" }>
							<ExperienceTitleTextMobile isWater={ true } isMobile={ props.isMobile } color={ "#C1A192" }>{ title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : description_mobile }} />
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				</>
			}
			{/*IS NOT MOBILE*/}
			{
				!props.isMobile &&
				<View height="980px" marginTop="100px">
					<SectionHeader marine={ true }>
						<Title isMobile={ props.isMobile } textAlign="center" paddingTop="150px" color="#fff">{ heading }</Title>
					</SectionHeader>
					<ExperienceContainer positionChange="absolute" positionTop="230px">
						<ExperienceDescription>
							<TitleH2 textAlign="left" color="#708DA1" languageDetected={ languageDetected }>{ title }</TitleH2>
							<BodyText fontSize="16px" textAlign="left" languageDetected={ languageDetected }>
								{ description }
							</BodyText>
						</ExperienceDescription>
						<ExperienceImageAlign background={ cdn_image } />
					</ExperienceContainer>
				</View>
			}
			</div>
		)

	}

	return(<div/>)

}

export default BigGameFishing
