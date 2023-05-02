import React from "react"
import Image from "next/image"
import Link from "next/link"

import cross from '../../assets/images/cross.svg'

const {

	CovidStatusBarContainer,
	CovidStatusBarCloseIcon

} = require("../../style/header/Header.Styled")

const CovidStatusBar = ( props ) => {

	const {

		languageDetected

	} = props

	const [ display_covid_policy, updateDisplayCookie ] = React.useState( true )

	React.useEffect(() => {

		const state = localStorage.getItem("covid-cookie")
		if( state !== null )
			updateDisplayCookie( false )

	}, [])

	const hideCovidStatusCookie = () => {

		localStorage.setItem("covid-cookie","EAT ME")
		updateDisplayCookie( false )

	}
	
	if( display_covid_policy )
		return(

			<CovidStatusBarContainer position={ props.position } isMobile={ props.isMobile }>
				<Link href='/covid' passHref>
					<a onClick={ () => hideCovidStatusCookie() }>
						{

							languageDetected === "en" &&
							<span>COVID-19 updates. Click for more details.</span>

						}
						{

							languageDetected === "ru" &&
							<span>Обновления COVID-19. Нажмите, чтобы узнать больше.</span>

						}
						{

							languageDetected === "ar" &&
							<div style={{ direction: "rtl" }}>تحديثات COVID-19. انقروا للحصول على مزيد من التفاصيل.</div>

						}
					</a>
				</Link>
				<CovidStatusBarCloseIcon onClick={ () => hideCovidStatusCookie() }>
					<Image src={ cross } alt="cross_icon" width={ 10 } height={ 10 }/>
				</CovidStatusBarCloseIcon>
			</CovidStatusBarContainer>

		)
	return(

		<div />

	)

}

export default CovidStatusBar
