import React from "react"
import Image from "next/image"
import Link from "next/link"

import bed from "../../assets/images/bed.svg"
import pool from "../../assets/images/pool.svg"
import guests from "../../assets/images/guests.svg"
import space from "../../assets/images/space.svg"

import bed_water from "../../assets/images/bed_water.svg"
import guests_water from "../../assets/images/guests_water.svg"
import space_water from "../../assets/images/space.svg"

const {

	Button,
	Container,
	KudavillingiliDot,
	NoLineHeightContainer,
	Row,
	RowAlign,
	SplitRow,
	TextColorKudavillingili,
	TextColorLightGrey,
	Title,
	View,
	ViewBackgroundVariableHeight,

} = require("../../style/common/Common.Styled")

const {

	RoomContainer,
	RoomDescriptionContainer,
	RoomDetailsContainer,
	RoomPrimaryImage,
	RoomSecondaryImage,

} = require("../../style/accomodation/Room.Styled")

const Room = (props) => {

	const {

		languageDetected

	} = props
	const [ selected, updateSelected ] = React.useState(0)
	const [ url, updateURL ] = React.useState( typeof props.images !== "undefined" ? props.images[0] : "https://mohit.sgp1.cdn.digitaloceanspaces.com/kudavillingili/beach-villa.jpg" )
	React.useEffect(() => {

		updateURL( props.images[selected] )

	},[ selected, props.images ])

	var more = languageDetected === "ar" ? "عرض المزيد" : languageDetected === "ru" ? "Подробнее" : "View More"
	var book = languageDetected === "ar" ? "الحجز الآن" : languageDetected === "ru" ? "Забронировать сейчас" : "Book Now"
	return(
		<View style={ props.isMobile ? { padding: "0px" } : { padding: "20px" } }>
			<ViewBackgroundVariableHeight backgroundColor={ props.water ? "#F6F6F6" : "#F6F6F6" } height={ props.index === 0 || props.index === 4 ? "85%" : "100%" } inverse={ props.index === 0 || props.index === 4 ? true : false }/>
			{
				props.index === 4 &&
				<ViewBackgroundVariableHeight backgroundColor={ "#F6F6F6" } height={ "15%" }/>
			}
			<Container isMobile={ props.isMobile }>
				<RoomContainer isMobile={ props.isMobile }>
					<Title color={ props.index === 5 ? "" : "" } medium={ true } isMobile={ props.isMobile }>{ props.name }</Title>
					<NoLineHeightContainer>
						<RoomPrimaryImage isMobile={ props.isMobile } src={ typeof props.images !== "undefined" ? url : "https://mohit.sgp1.cdn.digitaloceanspaces.com/kudavillingili/beach-villa.jpg" } />
						<Row marginTop={ "10px" }>
							<RoomSecondaryImage selected={ 0 === +selected ? true : false } isMobile={ props.isMobile } src={ typeof props.images !== "undefined" ? props.images[0] : "https://mohit.sgp1.cdn.digitaloceanspaces.com/kudavillingili/beach-villa.jpg" } onClick={ () => updateSelected(0) } />
							<RoomSecondaryImage selected={ 1 === +selected ? true : false } isMobile={ props.isMobile } src={ typeof props.images !== "undefined" ? props.images[1] : "https://mohit.sgp1.cdn.digitaloceanspaces.com/kudavillingili/beach-villa.jpg" } onClick={ () => updateSelected(1) } />
							<RoomSecondaryImage selected={ 2 === +selected ? true : false } isMobile={ props.isMobile } src={ typeof props.images !== "undefined" ? props.images[2] : "https://mohit.sgp1.cdn.digitaloceanspaces.com/kudavillingili/beach-villa.jpg" } onClick={ () => updateSelected(2) } />
							<RoomSecondaryImage selected={ 3 === +selected ? true : false } isMobile={ props.isMobile } src={ typeof props.images !== "undefined" ? props.images[3] : "https://mohit.sgp1.cdn.digitaloceanspaces.com/kudavillingili/beach-villa.jpg" } onClick={ () => updateSelected(3) } />
							<RoomSecondaryImage selected={ 4 === +selected ? true : false } isMobile={ props.isMobile } src={ typeof props.images !== "undefined" ? props.images[4] : "https://mohit.sgp1.cdn.digitaloceanspaces.com/kudavillingili/beach-villa.jpg" } onClick={ () => updateSelected(4) } />
						</Row>
					</NoLineHeightContainer>
					<Row marginTop={ props.isMobile ? "0px" : "20px" } isMobile={ props.isMobile } style={ props.isMobile ? { padding: "20px" } : {}}>
						<RoomDetailsContainer isMobile={ props.isMobile }>
							<RowAlign languageDetected={ languageDetected }>
								<Image src={ props.water ? space_water : space } alt="cross_icon" width={ 30 } height={ 30 } />
								<TextColorLightGrey isMobile={ props.isMobile } color={ props.water ? "" : "" } marginLeft={ "20px" } marginRight={ languageDetected === "ar" ? true : false }>{ props.area } { languageDetected === "ar" && ("مترًا مربعًا") } { languageDetected === "ru" && (<span>м2</span>) } { languageDetected === "en" && (<span>m<sup>2</sup></span>) }</TextColorLightGrey>
							</RowAlign>
							<RowAlign marginTop={ "10px" } languageDetected={ languageDetected }>
								<Image src={ props.water ? bed_water : bed } alt="cross_icon" width={ 30 } height={ 30 } />
								<TextColorLightGrey isMobile={ props.isMobile } color={ props.water ? "" : "" } marginLeft={ "20px" } marginRight={ languageDetected === "ar" ? true : false }>{ props.bed }</TextColorLightGrey>
							</RowAlign>			
							{
								props.pool_size != '' &&
								<RowAlign marginTop={ "10px" } languageDetected={ languageDetected }>
									<Image src={ props.water ? pool : pool } alt="cross_icon" width={ 30 } height={ 30 } />
									<TextColorLightGrey isMobile={ props.isMobile } color={ props.water ? "" : "" } marginLeft={ "20px" } marginRight={ languageDetected === "ar" ? true : false }>{ props.pool_size }</TextColorLightGrey>
								</RowAlign>
							}
						</RoomDetailsContainer>
						<RoomDescriptionContainer isMobile={ props.isMobile }>
							<TextColorLightGrey isMobile={ props.isMobile } color={ props.water ? "" : "" } textAlign="left" languageDetected={ languageDetected }>{ props.description }</TextColorLightGrey>
							<SplitRow marginTop={ "20px" } alignItems splitReverse={ languageDetected === "ar" ? true : false }>
								<Link href={ "/"+props.link } passHref>
									<a>
										<TextColorKudavillingili isMobile={ props.isMobile } cursorDisplay={ true } color={ props.water ? "" : "" } padding="0px">{ more }</TextColorKudavillingili>
									</a>
								</Link>
								{
									false &&
									<RowAlign>
										<KudavillingiliDot background={ props.water ? "" : "" } marginBottom="2px"/>
										<a href="https://be.synxis.com/?Hotel=36480&Chain=28812" target="_blank" rel="noreferrer">
											<TextColorKudavillingili isMobile={ props.isMobile } padding={ props.isMobile ? "10px" : "20px" } cursorDisplay={ true } color={ props.water ? "" : "" }>{ book }</TextColorKudavillingili>
										</a>
										<KudavillingiliDot background={ props.water ? "" : "" } marginBottom="2px"/>
									</RowAlign>
								}
								{
									// <a href="https://be.synxis.com/?Hotel=36480&Chain=28812" target="_blank" rel="nofollow ">
									<a href="https://be.synxis.com/?Hotel=36480&Chain=28812" target="_blank" rel="noreferrer">
										<Button isMobile={ props.isMobile }>{ book }</Button>
									</a>
								}
							</SplitRow>
						</RoomDescriptionContainer>
					</Row>
				</RoomContainer>
			</Container>
		</View>
	)
}

export default Room
