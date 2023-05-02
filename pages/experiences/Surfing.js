import Link from "next/link"

const {

	BodyText,
	ContainerFlexStartAlign,
	Title,
	TitleH2,
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
	ExperienceWaterSportsButton,
	ExperienceWellnessNewPoolDescriptionMobile,
	ExperienceWellnessNewPoolImageMobile,

	//UPDATE
	ExperienceContainer,
	ExperienceDescription,
	ExperienceImageAlign,
	SectionHeader,

} = require("../../style/experiences/Experiences.Styled")

const { cdnSwitch } = require("../../functions/cdn")

const Surfing = ( props ) => {

	const {

		data,
		languageDetected,

	} = props
	if( typeof props.data !== "undefined" ){

		const cdn_image = cdnSwitch( props.data.image )
		const title = languageDetected === "ru" ? data.title_ru : languageDetected === "ar" ? data.title_ar : data.title
		const description = languageDetected === "ru" ? data.description_ru : languageDetected === "ar" ? data.description_ar : data.description
		const description_mobile = languageDetected === "ru" ? data.description_mobile_ru : languageDetected === "ar" ? data.description_mobile_ar : data.description_mobile
		const heading = languageDetected === "ru" ? "Водные развлечения" : languageDetected === "ar" ? "انشطة مائية" : "Water Activities"
		const more = languageDetected === "ru" ? "Подробнее" : languageDetected === "ar" ? "المزيد من التفاصيل" : "More Details"
		return(
			<div>
			{/*IS MOBILE*/}
			{
				props.isMobile &&
				<>
					<Title isMobile={ props.isMobile } textAlign="center" color="#708DA1">{ heading }</Title>
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ cdn_image } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile } color="#708DA1">
							<ExperienceTitleTextMobile isWater={ true } isMobile={ props.isMobile }>{ title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : description_mobile }} />
						</ExperienceWellnessNewPoolDescriptionMobile>
						<Link href="/water-sports" passHref>
							<a>
								<ExperienceWaterSportsButton isWater={ true } isMobile={ props.isMobile } marginBottom="30px">{ more }</ExperienceWaterSportsButton>
							</a>
						</Link>
					</ExperienceLeisureHeaderMobile>
				</>
			}
			{/*IS NOT MOBILE*/}
			{
				!props.isMobile &&
				<View height="980px">
					<SectionHeader>
						<Title isMobile={ props.isMobile } textAlign="center" paddingTop="150px" color="#708DA1">{ heading }</Title>
					</SectionHeader>
					<ExperienceContainer positionChange="absolute" positionTop="230px">
						<ExperienceImageAlign background={ cdn_image } />
						<ExperienceDescription languageDetected={ languageDetected }>
							<TitleH2 textAlign="left"isWater={ true } languageDetected={ languageDetected }>{ title }</TitleH2>
							<BodyText fontSize="16px" textAlign="left" dangerouslySetInnerHTML={{ __html : description }} languageDetected={ languageDetected }/>
							<Link href="/water-sports" passHref>
								<a>
									<ExperienceWaterSportsButton isWater={ true } isMobile={ props.isMobile }>{ more }</ExperienceWaterSportsButton>
								</a>
							</Link>
						</ExperienceDescription>
					</ExperienceContainer>
				</View>
			}
			</div>
		)

	}

	return(<div/>)

}

export default Surfing
