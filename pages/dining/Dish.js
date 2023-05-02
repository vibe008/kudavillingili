import React from "react"

const {

	DishDescription,
	DishDownloadMenu,
	DishesContainer,
	DishHoverAbsolute,
	DishImage,
	DishName,

} = require("../../style/dining/Dining.Styled")

const {

	CarouselImage,
	CarouselOutletLogo,
	CarouselText,

} = require("../../style/home/Home.Styled")

const Dish = (props) => {
	const {

		data,
		languageDetected,

	} = props
	const [ hover,updateHover ] = React.useState(false)

	if( typeof data !== "undefined" && data !== null ){

		const description = languageDetected === "ru" ? data.description_ru : languageDetected === "ar" ? data.description_ar : data.description

		if( !props.isMobile ){

			return(
				<DishesContainer isMobile={ props.isMobile } onMouseOver={ () => updateHover( props.isMobile ? false : true ) } onMouseOut={ () => updateHover( false ) }>
					<DishName width={ props.large ? "250px" : "" } isMobile={ props.isMobile } zIndex={ hover } background={ props.name } backgroundWhite={ props.nameWhite } />
					<DishImage isMobile={ props.isMobile } src={ props.image } zIndex={ hover }/>
					<DishDescription isMobile={ props.isMobile } zIndex={ hover } dangerouslySetInnerHTML={{ __html: description }}></DishDescription>
					{
						props.live &&
						<a href={ props.menu } target="_blank" rel="noreferrer">
							<DishDownloadMenu isMobile={ props.isMobile } zIndex={ hover }>
								{

									languageDetected === "ru" ? "Просмотреть Меню" : languageDetected === "ar" ? "عرض القائمة" : "View Menu"
									
								}
							</DishDownloadMenu>
						</a>
					}
					{
						!props.live &&
						<DishDownloadMenu isMobile={ props.isMobile } zIndex={ hover }>Coming Soon</DishDownloadMenu>
					}
					{
						props.isMobile &&
						<DishHoverAbsolute />
					}
				</DishesContainer>
			)

		} else {

			return(
				<>
					<CarouselImage isMobile={ props.isMobile } src={ props.image } zIndex={ hover }/>
					<CarouselOutletLogo width={ props.large ? "250px" : "" } isMobile={ props.isMobile } zIndex={ hover } background={ props.name } backgroundWhite={ props.nameWhite } />
					<CarouselText paddingTop="10px" dangerouslySetInnerHTML={{ __html: description }} />
					{
						props.live &&
						<a href={ props.menu } target="_blank" rel="noreferrer">
							<DishDownloadMenu dark={ true } isMobile={ props.isMobile } zIndex={ hover }>
								{

									languageDetected === "ru" ? "Просмотреть Меню" : languageDetected === "ar" ? "عرض القائمة" : "View Menu"

								}
							</DishDownloadMenu>
						</a>
					}
					{
						!props.live &&
						<DishDownloadMenu dark={ true } isMobile={ props.isMobile } zIndex={ hover }>Coming Soon</DishDownloadMenu>
					}
				</>
			)
		}

	} else {

		return(
			<div/>
		)
		
	}

}

export default Dish