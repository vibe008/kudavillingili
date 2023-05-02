const {
	
	BodyText,
	Container,
	RowAlign,
	Title,
	TitleH2,
	TextColorLightGrey,

} = require("../../style/common/Common.Styled")

const {

	TransferImage,
	TransferInformationContainer,
	TransferInformationHalf,
	TransferInformationDescriptionContainer,

} = require("../../style/contact")

const TransferInformation = ( props ) => {

	const {

		languageDetected

	} = props

	return(

		<Container paddingBottom={ props.isMobile ? "unset" : "200px" } isMobile={ props.isMobile } paddingTopMobile={ props.isMobile ? "unset" : "inherit" }>
			<Title textAlign='center' >{ props.transferHeading }</Title>
			<TransferInformationDescriptionContainer isMobile={ props.isMobile }>
				<BodyText
					isMobile={ props.isMobile }
					marginBottom={ props.isMobile ? '0px' : 'inherit' }
					color = "#333"
					marginTop = { props.isMobile ? "0" : "inherit" }
				>
					{ props.transferDescription }
				</BodyText>
			</TransferInformationDescriptionContainer>
			<TransferInformationContainer isMobile={ props.isMobile }>
				<TransferInformationHalf isMobile={ props.isMobile }>
					<TransferImage src={ props.transferImage } />
				</TransferInformationHalf>
				<TransferInformationHalf isMobile={ props.isMobile } padding={ props.isMobile ? "20px" : "unset" }>
					<Title textAlign={ props.isMobile ? "center" : "left" } languageDetected={ languageDetected }>{ props.transferDetailHeading }</Title>
					<TextColorLightGrey isMobile={ props.isMobile } textAlign='left' fontSize={ props.isMobile ? '14px' : '16px' } languageDetected={ languageDetected }>
						{ props.transferDetailDescription }
					</TextColorLightGrey>
					<TextColorLightGrey isMobile={ props.isMobile } textAlign='left' fontSize={ props.isMobile ? '14px' : '16px' } languageDetected={ languageDetected }>
						{ props.transferDetailDescriptionContinued }
					</TextColorLightGrey>
				</TransferInformationHalf>
			</TransferInformationContainer>
		</Container>

	)

}

export default TransferInformation
