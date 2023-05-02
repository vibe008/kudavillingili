import React from "react"

const {

	CuisineDescriptionContainer,
	CuisineItemContainer,
	CuisineTitleContainer,
	DishDownloadMenu,
	DishHoverAbsolute,

} = require("../../style/dining/Dining.Styled")

const {

	CarouselImage,
	CarouselOutletLogo,
	CarouselText,

} = require("../../style/home/Home.Styled")

const Cuisine = ( props ) => {

	const {

		data,
		languageDetected

	} = props
	const [ hover,updateHover ] = React.useState(false)

	if( typeof data !== "undefined" && data !== null ){
		
		const description = languageDetected === "ru" ? data.description_ru : languageDetected === "ar" ? data.description_ar : data.description

		if( !props.isMobile ){

			return(
				<CuisineItemContainer isMobile={ props.isMobile } image={ props.isMobile ? props.coverImage : props.image } coverImage={ props.coverImage } zIndex={ hover } onMouseOver={ () => updateHover( props.isMobile ? false : true ) } onMouseOut={ () => updateHover( props.isMobile ? false : false ) }>
					<CuisineTitleContainer isMobile={ props.isMobile } height={ props.titleHeight } background={ props.title } />
					<CuisineDescriptionContainer isMobile={ props.isMobile } height={ props.titleHeight } zIndex={ hover } dangerouslySetInnerHTML={{ __html: description }}></CuisineDescriptionContainer>
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
				</CuisineItemContainer>
			)

		} else {

			return(
				<>
					<CarouselImage isMobile={ props.isMobile } src={ props.coverImage } zIndex={ hover }/>
					<CarouselOutletLogo width={ props.large ? "250px" : "" } isMobile={ props.isMobile } zIndex={ hover } background={ props.title } backgroundWhite={ props.title } />
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

export default Cuisine
