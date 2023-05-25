const {

	AboutContainer,
	AlignCenter,
	BodyText,
	KudavillingiliDot,
	Title,
	ViewPort,

} = require("../../style/common/Common.Styled")

const About = ( props ) => {

	const {

		data,
		languageDetected,

	} = props

	if( typeof data !== "undefined" && data !== null ){

		const description = languageDetected === "ru" ? data.about_ru : languageDetected === "ar" ? data.about_ar : data.about

		return(
			<AboutContainer isMobile={ props.isMobile }>
				<AlignCenter isMobile={ props.isMobile }>
					<KudavillingiliDot isMobile={ props.isMobile } />
					{
						false &&
						<Title isMobile={ props.isMobile }  marginTop={ "80px" }>{ props.title }</Title>
					}
					<h1>Dining</h1>
					<BodyText isMobile={ props.isMobile } width="700px" marginBottom={ props.isMobile ? "0px" : "inherit" }>
						{ description }
					</BodyText>
				</AlignCenter>
			</AboutContainer>
		)
		
	} else {

		return(
			<div/>
		)
		
	}

}

export default About
