import Link from "next/link"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const {

	BodyText,
	Button,
	HorizontalLine,
	KudavillingiliDot,
	RowAlign,
	SplitRow,
	TextColorKudavillingili,
	View,
	ViewPort,
	ViewPortEighty,

} = require("../../style/common/Common.Styled")

const {

	HomeImage,
	HomeRoomName,
	HomeRoomDescriptionContainer,

} = require("../../style/home/Home.Styled")

const HomeRooms = ( props ) => {

	const {

		languageDetected

	} = props
	if( typeof props.rooms !== "undefined" && props.rooms.length > 0 ){

		var response = []
			props.rooms.map((value,index) => {

				var description = languageDetected === "ar" ? value.description_ar : languageDetected === "ru" ? value.description_ru : value.description
				var title = languageDetected === "ar" ? value.title_ar : languageDetected === "ru" ? value.title_ru : value.title
				var more = languageDetected === "ar" ? "المزيد من التفاصيل" : languageDetected === "ru" ? "Подробнее" : "more details"
				var view_all_villas = languageDetected === "ar" ? "عرض جميع الفلل" : languageDetected === "ru" ? "Посмотреть все виллы" : "View All Villas"

				response.push(
					<div key={"room-"+index}>
						<ViewPortEighty isMobile={ props.isMobile }>
							<HomeImage isMobile={ props.isMobile } background={ value.image } />
							<HomeRoomName heightModify={ value.link === "sky-haven" ? true : false } isMobile={ props.isMobile }>{ title }</HomeRoomName>
						</ViewPortEighty>
						<HomeRoomDescriptionContainer isMobile={ props.isMobile }>
							<BodyText isMobile={ props.isMobile } textAlign="left" marginTop={ props.isMobile ? "40px" : "20px" } fontSize="16px" languageDetected={ languageDetected }>{ description }</BodyText>
							<SplitRow marginTop={ "10px" } splitReverse={ languageDetected === "ar" ? true : false }>
								<RowAlign isMobile={ props.isMobile } forcedRow={ true }>
									<Link href={"https://www.kudavillingili.com/360" } passHref>
									{/* <Link href={"/"+ value.link } passHref> */}
										<a>
											<BodyText isMobile={ props.isMobile } marginTop="20px" textAlign="left" color="#C1A292" bold={ true } cursorPointer={ true } languageDetected={ languageDetected }>{ more }</BodyText>
										</a>
									</Link>
									{
										false &&
										<HorizontalLine isMobile={ props.isMobile }/>
									}
								</RowAlign>
								{
									false &&
									<Link href={ "/accommodation" } passHref>
										<RowAlign>
											<KudavillingiliDot marginBottom="2px" background={ props.water ? "#CBC7BC" : "" }/>
											<TextColorKudavillingili isMobile={ props.isMobile } padding={ "20px" } cursorDisplay={ true } color={ props.water ? "#CBC7BC" : "" }>{ view_all_villas }</TextColorKudavillingili>
											<KudavillingiliDot marginBottom="2px" background={ props.water ? "#CBC7BC" : "" }/>
										</RowAlign>
									</Link>
								}
								{
									<Link href={ "/accommodation" } passHref>
										<a>
											<Button marginTop="10px" isMobile={ props.isMobile }>{ view_all_villas }</Button>
										</a>
									</Link>
								}
							</SplitRow>
						</HomeRoomDescriptionContainer>
					</div>
				)

			})
		return(
			<Carousel
				showThumbs={ false }
				showArrows={ false }
				showStatus={ false }
				showIndicators={ true }
				autoPlay={ true }
				dynamicHeight={ false }
				infiniteLoop={ true }
				interval={ 5000 }
				className={ props.isMobile ? "home-rooms-mobile" : "home-rooms" }>
				{ response }
			</Carousel>
		)
	}
	return(<div/>)
}

export default HomeRooms
