const {

	AboutMeetContainer,
	AlignCenter,
	BodyText,
	KudavillingiliDot,
	Title,
	TitleH2

} = require("../../style/common/Common.Styled");


import Link from "next/link"

const {

	BeachClubDownloadMenu,

} = require("../../style/dining/Dining.Styled")


const {

	//MOBILE
	ExperienceTitleContainerMobile,
	ExperienceTitleTextMobile,
	KudavillingiliButton,

} = require("../../style/experiences/Experiences.Styled")

const About = ( props ) => {

	const {

		description,
		isMobile,
		languageDetected,
		title,

	} = props

	const sustainability_menu_title = "Sustainability Management Plan"
	const sustainability_menu_link = "https://kudavillingili.com/mediakit/menu/Sustainability_Management_Menu.html"

	const environment_menu_title = "Environmental Policy"
	const environment_menu_link = "https://kudavillingili.com/mediakit/menu/Environmental_Policy_Menu.html"

	return(
		<AboutMeetContainer isMobile={ isMobile }>
			<AlignCenter isMobile={ isMobile }>
				<KudavillingiliDot isMobile={ isMobile } />
				<Title isMobile={ isMobile }  paddingBottom={ '0px'} marginTop={ '80px' }>Meet The Team!</Title>
			</AlignCenter>
		</AboutMeetContainer>
	)

}

export default About
