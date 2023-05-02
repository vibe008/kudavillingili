import Image from "next/image"

import bed from "../../assets/images/bed.svg"
import pool from "../../assets/images/pool.svg"
import guests from "../../assets/images/guests.svg"
import space from "../../assets/images/space.svg"

import bed_water from "../../assets/images/bed_water.svg"
import guests_water from "../../assets/images/guests_water.svg"
import space_water from "../../assets/images/space_water.svg"

const {

	AlignCenter,
	BodyText,
	KudavillingiliDot,
	RowAlign,
	TextColorLightGrey,
	Title,
	ViewPort,

} = require("../../style/common/Common.Styled")

const {

	RoomInnerAboutContainer,
	RoomInnerDetailsContainer,

} = require("../../style/accomodation/Room.Styled")

const RoomInnerAbout = ( props ) => {

	const {

		languageDetected

	} = props
	return(
		<ViewPort isMobile={ props.isMobile } style={{ padding: "20px" }}  height={ "inherit" } paddingTB={"40px"}>
			<AlignCenter isMobile={ props.isMobile }>
				<KudavillingiliDot isMobile={ props.isMobile } />
				<Title isMobile={ props.isMobile } marginTop={ "80px" }>{ props.name }</Title>
				<RoomInnerAboutContainer isMobile={ props.isMobile }>
					<BodyText isMobile={ props.isMobile } fontSize="16px" dangerouslySetInnerHTML={{ __html: props.description }}></BodyText>
				</RoomInnerAboutContainer>
				<RoomInnerDetailsContainer isMobile={ props.isMobile }>
					<RowAlign languageDetected={ languageDetected }>
						<Image src={ props.water ? space_water : space } alt="cross_icon" width={ 30 } height={ 30 } />
						<TextColorLightGrey isMobile={ props.isMobile } color={ props.water ? "#fff" : "" } marginLeft={ "20px" } marginRight={ languageDetected === "ar" ? true : false }>{ props.area } { languageDetected === "ar" && ("مترًا مربعًا") } { languageDetected === "ru" && (<span>м2</span>) } { languageDetected === "en" && (<span>m<sup>2</sup></span>) }</TextColorLightGrey>
					</RowAlign>
					<RowAlign marginTop={ "10px" } languageDetected={ languageDetected }>
						<Image src={ props.water ? bed_water : bed } alt="cross_icon" width={ 30 } height={ 30 } />
						<TextColorLightGrey isMobile={ props.isMobile } color={ props.water ? "#fff" : "" } marginLeft={ "20px" } marginRight={ languageDetected === "ar" ? true : false }>{ props.bed }</TextColorLightGrey>
					</RowAlign>					
					{
						props.pool_size != "" &&
						<RowAlign marginTop={ "10px" } languageDetected={ languageDetected }>
							<Image src={ props.water ? pool : pool } alt="cross_icon" width={ 30 } height={ 30 } />
							<TextColorLightGrey isMobile={ props.isMobile } color={ props.water ? "#fff" : "" } marginLeft={ "20px" } marginRight={ languageDetected === "ar" ? true : false }>{ props.pool_size }</TextColorLightGrey>
						</RowAlign>
					}
				</RoomInnerDetailsContainer>
			</AlignCenter>
		</ViewPort>
	)

}

export default RoomInnerAbout
