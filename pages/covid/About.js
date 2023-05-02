const {

	AboutContainer,
	AlignCenter,
	BodyText,
	KudavillingiliDot,
	Title

} = require("../../style/common/Common.Styled");

const About = ( props ) => {

	const {

		description,
		isMobile,
		languageDetected,
		title,

	} = props
	return(
		<AboutContainer isMobile={ isMobile }>
			<AlignCenter isMobile={ isMobile }>
				<KudavillingiliDot isMobile={ isMobile } />
				<Title isMobile={ isMobile }  marginTop={ '80px' }>{ title }</Title>
				<BodyText isMobile={ isMobile } marginBottom={ isMobile ? '0px' : 'inherit' }>{ description }</BodyText>
			</AlignCenter>
		</AboutContainer>
	)

}

export default About
