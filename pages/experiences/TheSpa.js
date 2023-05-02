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
	ExperienceWellnessNewPoolDescriptionMobile,
	ExperienceWellnessNewPoolImageMobile,
	ExperienceWaterSportsButton,

	//UPDATE
	ExperienceContainer,
	ExperienceDescription,
	ExperienceImageAlign,
	SectionHeader,

} = require("../../style/experiences/Experiences.Styled")

const { cdnSwitch } = require("../../functions/cdn")

const TheSpa = ( props ) => {

	const {

		data,
		languageDetected,

	} = props

	if( typeof props.data !== "undefined" ){

		const cdn_image = cdnSwitch( props.data.image )
		const title = languageDetected === "ru" ? data.title_ru : languageDetected === "ar" ? data.title_ar : data.title
		const description = languageDetected === "ru" ? data.description_ru : languageDetected === "ar" ? data.description_ar : data.description
		const description_mobile = languageDetected === "ru" ? data.description_mobile_ru : languageDetected === "ar" ? data.description_mobile_ar : data.description_mobile
		const heading = languageDetected === "ru" ? "Концепция здорового образа жизни" : languageDetected === "ar" ? "الصحة" : "Wellness"
		const view_menu = languageDetected === "ru" ? "Просмотреть Меню" : languageDetected === "ar" ? "عرض القائمة" : "View Menu"
		return(
			<div>
			{/*IS MOBILE*/}
			{
				props.isMobile &&
				<>
					<Title isMobile={ props.isMobile } textAlign="center">{ heading }</Title>
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ cdn_image } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile } color={ "#C1A192" }>{ title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : description_mobile }} />
							<Link href="https://indd.adobe.com/view/66a30f6d-c430-466c-b4b7-8666588dc686" passHref>
								<a>
									<ExperienceWaterSportsButton isWater={ false } isMobile={ props.isMobile } marginBottom="30px">{ view_menu }</ExperienceWaterSportsButton>
								</a>
							</Link>
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				</>
			}
			{/*IS NOT MOBILE*/}
			{
				!props.isMobile &&
				<View height="980px">
					<SectionHeader>
						<Title isMobile={ props.isMobile } textAlign="center" paddingTop="150px">{ heading }</Title>
					</SectionHeader>
					<ExperienceContainer positionChange="absolute" positionTop="230px">
						<ExperienceDescription>
							<TitleH2 textAlign="left" languageDetected={ languageDetected }>{ title }</TitleH2>
							<BodyText fontSize="16px" textAlign="left" dangerouslySetInnerHTML={{ __html : description }} languageDetected={ languageDetected }/>
								<Link href="https://indd.adobe.com/view/66a30f6d-c430-466c-b4b7-8666588dc686" passHref>
									<a>
										<ExperienceWaterSportsButton isWater={ false } isMobile={ props.isMobile }>{ view_menu }</ExperienceWaterSportsButton>
									</a>
								</Link>
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

export default TheSpa
