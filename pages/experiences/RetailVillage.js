const {

	BodyText,
	ContainerFlexStartAlign,
	Row,
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
	EssenceMaldivesImage,
	ExperienceContainer,
	ExperienceDescription,
	ExperienceImageAlign,

} = require("../../style/experiences/Experiences.Styled")

const { cdnSwitch } = require("../../functions/cdn")

const RetailVillage = ( props ) => {

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
					<Row center={ true }>
						<EssenceMaldivesImage height="136px" background="https://kudavillingili.sgp1.cdn.digitaloceanspaces.com/AuthenticMaldives_logo.png"/>
						<EssenceMaldivesImage size="120px" background="https://kudavillingili.sgp1.cdn.digitaloceanspaces.com/Essense-Maldives%20Logo%5B72%5D.png"/>
					</Row>
					<Row center={ true }>
						<EssenceMaldivesImage height="177px" background="https://kudavillingili.sgp1.cdn.digitaloceanspaces.com/LMMaldivesLogo.png"/>
						<EssenceMaldivesImage size="120px" height="70px" background="https://kudavillingili.sgp1.cdn.digitaloceanspaces.com/SIFANILOGO.png"/>
					</Row>
				</ExperienceLeisureHeaderMobile>
			}
			{/*IS NOT MOBILE*/}
			{
				!props.isMobile &&
				<ExperienceContainer>
					<ExperienceDescription>
						<TitleH2 textAlign="left" languageDetected={ languageDetected }>{ title }</TitleH2>
						<BodyText fontSize="16px" textAlign="left" dangerouslySetInnerHTML={{ __html : description }} languageDetected={ languageDetected }/>
						<Row center={ true }>
							<EssenceMaldivesImage height="136px" background="https://kudavillingili.sgp1.cdn.digitaloceanspaces.com/AuthenticMaldives_logo.png"/>
							<EssenceMaldivesImage size="180px" background="https://kudavillingili.sgp1.cdn.digitaloceanspaces.com/Essense-Maldives%20Logo%5B72%5D.png"/>
						</Row>
						<Row center={ true }>
							<EssenceMaldivesImage height="177px" background="https://kudavillingili.sgp1.cdn.digitaloceanspaces.com/LMMaldivesLogo.png"/>
							<EssenceMaldivesImage size="150px" height="70px" background="https://kudavillingili.sgp1.cdn.digitaloceanspaces.com/SIFANILOGO.png"/>
						</Row>
					</ExperienceDescription>
					<ExperienceImageAlign background={ cdn_image } />
				</ExperienceContainer>
			}
			</div>
		)

	}
	return(<div/>)

}

export default RetailVillage
