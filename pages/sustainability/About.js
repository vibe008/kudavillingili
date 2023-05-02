const {

	AboutContainer,
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
		<AboutContainer isMobile={ isMobile }>
			<AlignCenter isMobile={ isMobile }>
				<KudavillingiliDot isMobile={ isMobile } />
				<Title isMobile={ isMobile }  marginTop={ '80px' }>Working as ONE for a Sustainable Future!</Title>
				<BodyText isMobile={ isMobile } textAlign="left" marginBottom={ isMobile ? '0px' : 'inherit' }>At Kuda Villingili, we are committed to sustainable tourism and exert conscious efforts to preserve our natural environment while reducing our carbon footprint. We have joined hands with Green Globe, the world’s leading certification for sustainable tourism, to focus on a long-term sustainability plan and conserve our environment for future generations. Through the integration of best practices in sustainability and embracing green initiatives, we aim to make a positive contribution to the conservation of biodiversity, preservation of cultural heritage, and development of the local community.</BodyText>
								
								{				
								 	props.isMobile &&
								 	<div marginTop={ '30px' } style={{textAlign: "center"}}>
										<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
											<ExperienceTitleTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ sustainability_menu_title }</ExperienceTitleTextMobile>
										</ExperienceTitleContainerMobile>
									</div>
								}
								
								{				
								props.isMobile &&
								<Link href={ sustainability_menu_link } passHref>
									<a target="_blank">
										<BeachClubDownloadMenu isMobile={ isMobile } noBottom={ true }>
											{ 'View' }
										</BeachClubDownloadMenu>
									</a>
								</Link>		
								}

								{				
								 	props.isMobile &&
								 	<div marginTop={ '30px' } style={{textAlign: "center"}}>
										<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
											<ExperienceTitleTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ environment_menu_title }</ExperienceTitleTextMobile>
										</ExperienceTitleContainerMobile>
									</div>
								}
								{				
								 	props.isMobile &&
								<Link href={ environment_menu_link } passHref>
									<a target="_blank">
										<BeachClubDownloadMenu isMobile={ isMobile } noBottom={ true }>
											{ 'View' }
										</BeachClubDownloadMenu>
									</a>
								</Link>
								}

								{
								!props.isMobile &&
								<div marginTop={ '50px' } style={{textAlign: "center"}}>
									<TitleH2 textAlign="center" languageDetected={ languageDetected }>{ sustainability_menu_title } </TitleH2>
								</div>
								}

								{
								!props.isMobile &&
								<Link href={ sustainability_menu_link } passHref>
									<a target="_blank">
										<KudavillingiliButton>
											{ 'View' }
										</KudavillingiliButton>
									</a>
								</Link>			
								}	

								{
								!props.isMobile &&
								<div marginTop={ '50px' } style={{textAlign: "center"}}>
									<TitleH2 textAlign="center" languageDetected={ languageDetected }>{ environment_menu_title } </TitleH2>	
								</div>	
								}

								{
								!props.isMobile &&		
								<Link href={ environment_menu_link } passHref>
									<a target="_blank">
										<KudavillingiliButton>
											{ 'View' }
										</KudavillingiliButton>
									</a>
								</Link>

								}
			</AlignCenter>
		</AboutContainer>
	)

}

export default About
