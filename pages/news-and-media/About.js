const {
	AboutContainer,
	AlignCenter,
	BodyText,
	KudavillingiliDot,
	Title,
	ViewPort
} = require('../../style/common/Common.Styled');

const About = ( props ) => {
	return(
		<AboutContainer isMobile={ props.isMobile }>
			<AlignCenter isMobile={ props.isMobile }>
				<KudavillingiliDot isMobile={ props.isMobile } />
				{
					false &&
					<Title isMobile={ props.isMobile }  marginTop={ '80px' }>{ props.title }</Title>
				}
				<h1>News and Media</h1>
				<BodyText isMobile={ props.isMobile } marginBottom={ props.isMobile ? '0px' : 'inherit' }>{ props.description }</BodyText>
			</AlignCenter>
		</AboutContainer>
	)
}

export default About;