import Link from "next/link"

const {
	BodyText,
	HorizontalLine,
	RowAlign,
	View,
	ViewPort,
	Title,
	TitleH2
} = require("../../style/common/Common.Styled")

const {
	HomeExperiencesBand,
	HomeExperiencesImage,
	HomeExperiencesTextContainer
} = require("../../style/home/Home.Styled")

const {
//MOBILE
	ExperienceLeisureHeaderMobile,
	ExperienceWellnessNewPoolImageMobile,
	ExperienceTitleContainerMobile,
	ExperienceTitleTextMobile,
	ExperienceWellnessNewPoolDescriptionMobile,
	BodyTextMobile,

	ExperienceChildrenMobile,
	ExperienceChildrenImageMobile
} = require("../../style/experiences/Experiences.Styled")

const HomeExperiences = ( props ) => {
	const {

		experienceData,
		isMobile,
		languageDetected,

	} = props

	const translations = {

		en: {

			more: "more details"

		},
		ru: {

			more: "Подробнее"

		},
		ar: {

			more: "المزيد من التفاصيل"

		},

	}

	if( typeof experienceData !== "undefined" && experienceData !== null ){

		const title = languageDetected === "en" ? experienceData.title : languageDetected === "ar" ? experienceData.title_ar : languageDetected === "ru" ? experienceData.title_ru : experienceData.title
		const description = languageDetected === "en" ? experienceData.description : languageDetected === "ar" ? experienceData.description_ar : languageDetected === "ru" ? experienceData.description_ru : experienceData.title
		const images = typeof props.experienceData.images !== "undefined" ? props.experienceData.images.split(",") : []
		
		return(
			<ViewPort isMobile={ props.isMobile } height={ "inherit" }>
				{
					isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile } marginTop="100px">
						<ExperienceChildrenImageMobile
							isMobile={ props.isMobile }
							images={ images }
							cycle={ true }
							interval={ 5000 }
		      				transition={ 2000 }
						/>
						<Title isMobile={ props.isMobile }>{ title }</Title>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile }>
								{ description }
							</BodyTextMobile>
							<RowAlign languageDetected={ languageDetected }>
								<Link href="/experiences" passHref>
									<a>
										<BodyText textAlign="left" color="#8096A4" bold={ true } cursorPointer={ true } isMobile={ true } languageDetected={ languageDetected }>{ translations[ languageDetected ].more }</BodyText>
									</a>
								</Link>
								{
									false &&
									<HorizontalLine color="#8096A4"/>
								}
							</RowAlign>
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{
					!isMobile &&
					<div style={{ marginTop: 80 }}>
						<HomeExperiencesImage
							isMobile={ props.isMobile }
							images={images}
							cycle={ true }
							interval={ 5000 }
							transition={ 2000 }
						/>
						<HomeExperiencesBand isMobile={ props.isMobile }/>
						<HomeExperiencesTextContainer isMobile={ props.isMobile } languageDetected={ languageDetected }>
							<TitleH2 color="#fff" languageDetected={ languageDetected }>{ title }</TitleH2>
							<BodyText fontSize="16px" textAlign="left" color="#fff" isMobile={ props.isMobile } marginBottom="0px" languageDetected={ languageDetected }>
								{ description }
							</BodyText>
							<RowAlign>
								<Link href="/experiences" passHref>
									<a>
										<BodyText marginTop="20px" textAlign="left" color="#fff" bold={ true } cursorPointer={ true } marginBottom="0px" languageDetected={ languageDetected }>{ translations[ languageDetected ].more }</BodyText>
									</a>
								</Link>
								{
									false &&
									<HorizontalLine color="#fff"/>
								}
							</RowAlign>
						</HomeExperiencesTextContainer>
					</div>
				}
			</ViewPort>
		)

	} else {

		return(
			<div/>
		)
		
	}
	
}

export default HomeExperiences
