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
			<AlignCenter>
				<KudavillingiliDot isMobile={ props.isMobile }/>
				<Title isMobile={ props.isMobile } marginTop={ '80px' }>{ props.title }</Title>
				<BodyText isMobile={ props.isMobile } fontSize='24px'dangerouslySetInnerHTML={{ __html: props.description }} />
				<BodyText isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html: props.body }} />
			</AlignCenter>
		</AboutContainer>
	)
}

export default About;