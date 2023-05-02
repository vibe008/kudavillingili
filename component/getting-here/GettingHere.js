import React from "react"
import { isMobile } from "react-device-detect"

const {

	Container,
	TextColorLightGrey,
	Title,

} = require("../../style/common/Common.Styled")

const {

	GettingHereContainer,
	GettingHereHalf,
	GettingHereImage,

} = require("./GettingHere.Styled")

const GettingHere = (props) => {

	const {

		aboutMobile,
		description,
		image,
		isMobile,
		languageDetected,
		titleData,

	} = props

	return(
		<Container paddingTopBottom={ "200px" } isMobile={ isMobile } paddingTopMobile={ props.paddingTopMobile }>
			<GettingHereContainer isMobile={ isMobile }>
				<GettingHereHalf isMobile={ isMobile }>
					<GettingHereImage src={ image } />
				</GettingHereHalf>
				<GettingHereHalf isMobile={ isMobile } padding={ isMobile ? "20px" : "0px" } heightOverright={ isMobile ? true : false }>
					<Title marginTop={ "0px" } isMobile={ isMobile } languageDetected={ languageDetected }>{ titleData }</Title>
					<TextColorLightGrey isMobile={ isMobile } textAlign="left" fontSize={ isMobile ? "14px" : "16px" } languageDetected={ languageDetected }>
						{ isMobile ? aboutMobile : description }
					</TextColorLightGrey>
				</GettingHereHalf>
			</GettingHereContainer>
		</Container>
	)

}

export default GettingHere
