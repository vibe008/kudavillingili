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
	ExperienceChildrenImageMobile,
	ExperienceLeisureHeaderMobile,
	ExperienceTitleContainerMobile,
	ExperienceTitleTextMobile,
	ExperienceWellnessNewPoolDescriptionMobile,
	ExperienceWellnessNewPoolImageMobile,

	//UPDATE
	ExperienceContainer,
	ExperienceDescription,
	ExperienceImageCarousel,

} = require("../../style/experiences/Experiences.Styled")

const { cdnSwitchArray } = require("../../functions/cdn")

const KudaFiyoIslandPlayground = ( props ) => {

	const {

		data,
		languageDetected,

	} = props

	if( typeof props.data !== "undefined" ){

		const cdn_image = cdnSwitchArray(props.data.image.split(","))
		const title = languageDetected === "ru" ? data.title_ru : languageDetected === "ar" ? data.title_ar : data.title
		const description = languageDetected === "ru" ? data.description_ru : languageDetected === "ar" ? data.description_ar : data.description
		const description_mobile = languageDetected === "ru" ? data.description_mobile_ru : languageDetected === "ar" ? data.description_mobile_ar : data.description_mobile
		return(
			<div>
			{/*IS MOBILE*/}
			{
				props.isMobile &&
				<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
					<ExperienceChildrenImageMobile
						isMobile={ props.isMobile }
						images={ cdn_image }
						cycle={ true }
						interval={ 5000 }
	      				transition={ 2000 }
					/>
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
					<ExperienceImageCarousel
						isMobile={ props.isMobile }
						images={ cdn_image }
						cycle={ true }
						interval={ 5000 }
	      				transition={ 2000 }
					/>
					<ExperienceDescription>
						<TitleH2 textAlign="left" languageDetected={ languageDetected }>{ title }</TitleH2>
						<BodyText fontSize="16px" textAlign="left" languageDetected={ languageDetected }>
							{ description }
						</BodyText>
					</ExperienceDescription>
				</ExperienceContainer>
			}
			</div>
		)

	}

	return(<div/>)

}

export default KudaFiyoIslandPlayground
