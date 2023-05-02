import Link from "next/link"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const {

	BodyText,
	Container,
	HorizontalLine,
	RowAlign,
	SplitRow,
	Title,
	TitleH2,
	ViewPortEighty,

} = require("../../style/common/Common.Styled")

const {

	HomeDiningContainer,
	HomeDiningImage,
	HomeDiningLocationLogo,
	HomeDiningTextContainer,
	HomeDiningTitle,
	HomeDiningType,

} = require("../../style/home/Home.Styled")

const {

	AccomodationDescriptionContainer,
	AccomodationDescriptionTextContainer,
	AccomodationHeadingContainer,
	AccomodationHeadingTextContainer,
	HomeImage,
	HomeRoomDescriptionContainer,
	HomeRoomName,

} = require("../../style/home/Home.Styled")

const HomeDining = ( props ) => {

	const {

		languageDetected

	} = props

	const more_details = languageDetected === "ar" ? "المزيد من التفاصيل" : languageDetected === "ru" ? "Подробнее" : "more details"

	if( typeof props.restaurants !== "undefined" && props.restaurants.length > 0 ){

		const response = []
		props.restaurants.map(function(value,index){

			const description = languageDetected === "ar" ? value.description_ar : languageDetected === "ru" ? value.description_ru : value.description
			response.push(
				<div key={"room-"+index}>
					<ViewPortEighty isMobile={ props.isMobile }>
						<HomeImage isMobile={ props.isMobile } background={ value.background_image } />
					</ViewPortEighty>
					<HomeRoomDescriptionContainer isMobile={ props.isMobile } languageDetected={ languageDetected }>
						<HomeDiningLocationLogo background={ value.image } isMobile={ props.isMobile } />
						<BodyText fontSize="16px" isMobile={ props.isMobile } textAlign="left" marginTop={ props.isMobile ? "30px" : "20px" } languageDetected={ languageDetected }>{ description }</BodyText>
						<Link href="/dining" passHref>
							<a>
								<BodyText isMobile={ props.isMobile } textAlign="left" color="#C1A292" bold={ true } cursorPointer={ true } languageDetected={ languageDetected }>{ more_details }</BodyText>
							</a>
						</Link>
					</HomeRoomDescriptionContainer>
				</div>
			)

		})
		if( props.isMobile ){

			return(
				<div>
					<HomeDiningContainer backgroundColor="#f5f5f5" isMobile={ props.isMobile }>
						<Container centerAlign={ true } isMobile={ props.isMobile }>
							<HomeDiningTextContainer isMobile={ props.isMobile }>
								<Title isMobile={ props.isMobile }>{ props.title }</Title>
								<BodyText marginTop="0px" textAlign="left" isMobile={ props.isMobile }>
									{ props.description }
								</BodyText>
								<RowAlign languageDetected={ languageDetected }>
									<Link href="/dining" passHref>
										<a>
											<BodyText isMobile={ props.isMobile } textAlign="left" color="#C1A292" bold={ true } cursorPointer={ true }>{ more_details }</BodyText>
										</a>
									</Link>
									{
										false &&
										<HorizontalLine />
									}
								</RowAlign>
							</HomeDiningTextContainer>
						</Container>
					</HomeDiningContainer>
					<HomeDiningContainer isMobile={ props.isMobile } backgroundColor="#fff">
						<Carousel
							showThumbs={ false }
							showArrows={ false }
							showStatus={ false }
							showIndicators={ true }
							autoPlay={ true }
							dynamicHeight={ false }
							dynamicWidth={ false }
							infiniteLoop={ true }
							interval={ 5000 }
							stopOnHover={ false }
							className="home-dining mobile"
						>	
							{ response }
							
						</Carousel>
					</HomeDiningContainer>
				</div>
			)

		} else {

			return(
				<div>
					<AccomodationHeadingContainer isMobile={ props.isMobile } height="40vh">
						<AccomodationHeadingTextContainer isMobile={ props.isMobile }>
							<Title isMobile={ props.isMobile } languageDetected={ languageDetected }>{ props.title }</Title>
							<BodyText isMobile={ props.isMobile } textAlign="left" marginTop="0px" fontSize="16px" languageDetected={ languageDetected }>
								{ props.description }
							</BodyText>
						</AccomodationHeadingTextContainer>
					</AccomodationHeadingContainer>
					<HomeDiningContainer isMobile={ props.isMobile } backgroundColor="#fff" heightAuto={ true }>
						<Carousel
							showThumbs={ false }
							showArrows={ false }
							showStatus={ false }
							showIndicators={ true }
							autoPlay={ true }
							dynamicHeight={ true }
							dynamicWidth={ true }
							infiniteLoop={ true }
							interval={ 5000 }
							stopOnHover={ false }
							className="home-dining"
						>	
							{ response }
							
						</Carousel>
					</HomeDiningContainer>
				</div>
			)

		}

	}
	return(<div/>)

}

export default HomeDining
