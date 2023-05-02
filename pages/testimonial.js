import React from "react"
import Head from "next/head"

import About from "./testimonial/About"
import Footer from "../component/footer"
import Header from "../component/header"

const Testimonial = () => {

	const [ language, updateLanguage ] = React.useState( "en" )
	React.useEffect(() => {

		// DETECT BROWSER LANGUAGE
		const userLanguage = navigator.language || navigator.userLanguage
		const userlanguageArray = userLanguage.split("-")

		// GET LANGUAGE FROM LOCAL STORAGE
		const storedLanguage = localStorage.getItem("language")
		if( storedLanguage !== null ){

			updateLanguage( storedLanguage )

		} else {

			if( userlanguageArray[0] === "ru" )
				updateLanguage("ru")
			if( userlanguageArray[0] === "ar" )
				updateLanguage("ar")

		}

	},[])
	return (
		<div>
			<Head>
        		<title>Testimonials | Kuda Villingili</title>
        		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
      		</Head>
			<Header image="https://kudavillingili.sgp1.digitaloceanspaces.com/testimonials/Testimonial%20Main%20Banner.jpg" languageDetected={ language }/>
			<About />
			<Footer languageDetected={ language }/>
		</div>
	)
}

export default Testimonial