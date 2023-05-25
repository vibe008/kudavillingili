import React from "react"
import { isMobile } from "react-device-detect"
import Head from "next/head"

import About from "./gallery/About"
import Footer from "../component/footer"
import Header from "../component/header"
import Images from "./gallery/Images"

const { endpoint } = require( "../variables")

const Gallery = ( props ) => {

	const {

		accommodation,
		data,
		description,
		dining,
		experiences,
		header_image,
		public_spaces,
		seo_description,
		seo_title,
		spa,
		title,
		water_sports,

	} = props.data

	const [ is_mobile, UpdateState ] = React.useState( false )
	const [ language, updateLanguage ] = React.useState( "en" )
	React.useEffect(() => {

		UpdateState( isMobile )

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
        		<title>{ seo_title }</title>
        		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
        		<meta name="robots" content="index, follow" />
				<meta name="title" content={ seo_title } />
				<meta name="description" content={ seo_description } />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://kudavillingili.com/" />
				<meta property="og:title" content={ seo_title } />
				<meta property="og:description" content={ seo_description } />
				<meta property="og:image" content={ header_image } />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://kudavillingili.com/" />
				<meta property="twitter:title" content={ seo_title } />
				<meta property="twitter:description" content={ seo_description } />
				<meta property="twitter:image" content={ header_image } />
      		</Head>
			<Header
				image={ header_image }
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
			<About
				isMobile={ is_mobile }
				title={ language === "ar" ? data.title_ar : language === "ru" ? data.title_ru : data.title }
				about={ language === "ar" ? data.about_ar : language === "ru" ? data.about_ru : data.about }
			/>
			<Images
				isMobile={ is_mobile }
				accommodation={ accommodation }
				dining={ dining }
				spa={ spa }
				water_sports={ water_sports }
				public_spaces={ public_spaces }
				experiences={ experiences }
				languageDetected={ language }
			/>
			<Footer
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
		</div>
	)

}

export const getServerSideProps = async () => {

	const res = await fetch(`${endpoint}/gallery`)
	const response = await res.json()
	const data = {

		accommodation: response.data.accommodation,
		data: response.data,
		description: response.data.about,
		dining: response.data.dining,
		experiences: response.data.experiences,
		header_image: response.data.header_image,
		public_spaces: response.data.public_spaces,
		seo_description:"Take a look at our photo gallery for a visual tour of Kuda Villingili Island. Discover the beauty of our resort, villas, and the surroundings. Start exploring now!",
		// seo_description: response.data.seo_description,
		seo_keywords: response.data.seo_keywords,
		seo_title: "Photo Gallery | Luxury Resort in Maldives | Kuda Villingili",
		// seo_title: response.data.seo_title,
		spa: response.data.spa,
		title: response.data.title,
		water_sports: response.data.water_sports,

	}

  	return { props: { data } }

}

export default Gallery
