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
		
		aboutMobile,
		description,
		isMobile,

	} = props
	return(
		<AboutContainer isMobile={ props.isMobile }>
			<AlignCenter isMobile={ isMobile }>
				<KudavillingiliDot isMobile={ isMobile } />
				{
					false &&
					<Title isMobile={ isMobile }  marginTop={ "80px" }>{ props.title }</Title>
				}
				<BodyText isMobile={ isMobile } dangerouslySetInnerHTML={{ __html: isMobile ? aboutMobile : description }}  marginBottom={ props.isMobile ? "0px" : "inherit" }/>
			</AlignCenter>
		</AboutContainer>
	)

}

export default About