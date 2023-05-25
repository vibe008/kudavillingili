const {

	AboutContainer,
	AlignCenter,
	BodyText,
	KudavillingiliDot,
	Title,
	ViewPort,
	TitleH2

} = require("../../style/common/Common.Styled")

const About = ( props ) => {
	const{

		data,
		languageDetected,

	} = props

	if( typeof data !== "undefined" && data !== null ){

		const description = languageDetected === "ru" ? data.about_ru : languageDetected === "ar" ? data.about_ar : data.about
		
		return(
			<AboutContainer isMobile={ props.isMobile }>
				<AlignCenter>
					<KudavillingiliDot isMobile={ props.isMobile }/>
					{
						false &&
						<TitleH2 isMobile={ props.isMobile }  marginTop={ "80px" }>{ props.title }</TitleH2>
					}
					<BodyText isMobile={ props.isMobile }  marginBottom={ props.isMobile ? "0px" : "inherit" }>{ description }</BodyText>
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