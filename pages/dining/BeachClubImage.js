import React from "react"

const {

	BeachClubDisplayImageContainer,
	BeachClubDownloadMenu,
	BeachClubImageContainer,
	BeachClubLine,

} = require("../../style/dining/Dining.Styled")

const BeachClubImage = ( props ) => {

	const [ hover,updateHover ] = React.useState(false)
	const {

		background,
		image,
		isMobile,
		languageDetected,
		menu,

	} = props
	if( isMobile )
		return(
			<div>
				<BeachClubDisplayImageContainer isMobile={ props.isMobile} image={ image } />
				{
					true &&
					<a href={ menu } target="_blank" rel="noreferrer">
						<BeachClubDownloadMenu isMobile={ props.isMobile } zIndex={ hover } onMouseOver={ () => updateHover( true ) } onMouseOut={ () => updateHover( false ) }>
							{

								languageDetected === "ru" ? "Просмотреть Меню" : languageDetected === "ar" ? "عرض القائمة" : "View Menu"
								
							}
						</BeachClubDownloadMenu>
					</a>
				}
				{
					false &&
					<BeachClubDownloadMenu isMobile={ props.isMobile } zIndex={ hover } onMouseOver={ () => updateHover( true ) } onMouseOut={ () => updateHover( false ) }>Coming Soon</BeachClubDownloadMenu>
				}
			</div>
		)
	return(
		<BeachClubImageContainer isMobile={ props.isMobile } image={ background }>
			<BeachClubDisplayImageContainer isMobile={ props.isMobile} image={ image } />
			{

				false && <BeachClubLine isMobile={ props.isMobile} />

			}
			{
				true &&
				<a href={ menu } target="_blank" rel="noreferrer">
					<BeachClubDownloadMenu isMobile={ props.isMobile } zIndex={ hover } onMouseOver={ () => updateHover( true ) } onMouseOut={ () => updateHover( false ) }>
						{

							languageDetected === "ru" ? "Просмотреть Меню" : languageDetected === "ar" ? "عرض القائمة" : "View Menu"
							
						}
					</BeachClubDownloadMenu>
				</a>
			}
			{
				false &&
				<BeachClubDownloadMenu isMobile={ props.isMobile } zIndex={ hover } onMouseOver={ () => updateHover( true ) } onMouseOut={ () => updateHover( false ) }>Coming Soon</BeachClubDownloadMenu>
			}
		</BeachClubImageContainer>
	)

}

export default BeachClubImage
