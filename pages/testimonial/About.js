const {
	AlignCenter,
	BodyText,
	KudavillingiliDot,
	Title,
	ViewPort
} = require('../../style/common/Common.Styled');

const About = () => {
	return(
		<ViewPort>
			<AlignCenter>
				<KudavillingiliDot />
				<Title marginTop={ '80px' }>Testimonial</Title>
				<BodyText>
					Memories of Kuda Villingili<br/><br/>
					Discover moments shared on our island from our beloved guests through their journey of time and space redefined.
				</BodyText>
			</AlignCenter>
		</ViewPort>
	)
}

export default About;