import React from "react"
import { isMobile } from "react-device-detect"
import Head from "next/head"

import Footer from "../component/footer/Footer"
import Header from "../component/header/Header"
import About from "./accomodation/About"
import Amenities from "./accomodation/Amenities"
import Rooms from "./accomodation/Rooms"
import Images from "./accomodation/Images"

const { endpoint } = require( "../variables")

const Accomodation = ( props ) => {

	const [ is_mobile, UpdateState ] = React.useState( false )
	const [ language, updateLanguage ] = React.useState( "en" )
	const {

		about_mobile,
		about_mobile_ar,
		about_mobile_ru,
		amenities,
		amenities_ar,
		amenities_ru,
		description,
		description_ar,
		description_ru,
		header_image,
		images,
		rooms,
		seo_description,
		seo_title,
		title,
		title_ar,
		title_ru,

	} = props.data
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
				isMobile={ is_mobile }
				image={ header_image }
				languageDetected={ language }
			/>
			<About
				isMobile={ is_mobile }
				title={ language === "en" ? title : language === "ru" ? title_ru : language === "ar" ? title_ar : title }
				description={ language === "en" ? description : language === "ru" ? description_ru : language === "ar" ? description_ar : description }
				aboutMobile={ language === "en" ? about_mobile : language === "ru" ? about_mobile_ru : language === "ar" ? about_mobile_ar : about_mobile }
			/>
			<Rooms
				isMobile={ is_mobile }
				data={ rooms }
				languageDetected={ language }
			/>
			<Images
				isMobile={ is_mobile }
				images={ images }
			/>
			<Footer
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
		</div>
	)
}

export const getServerSideProps = async () => {

	const res = await fetch(`${endpoint}/accommodation`)
	const response = await res.json()
	const data = {

		about_mobile: response.data.about_mobile,
		about_mobile_ar: response.data.about_mobile_ar,
		about_mobile_ru: response.data.about_mobile_ru,
		amenities: response.data.amenities.split(","),
		amenities_ar: response.data.amenities_ar.split(","),
		amenities_ru: response.data.amenities_ru.split(","),
		description: response.data.about,
		description_ar: response.data.about_ar,
		description_ru: response.data.about_ru,
		header_image: response.data.header_image,
		images: response.data.images.split(","),
		rooms: response.data.rooms,
		seo_description: response.data.seo_description,
		seo_keywords: response.data.seo_keywords,
		seo_title: response.data.seo_title,
		title: response.data.title,
		title_ar: response.data.title_ar,
		title_ru: response.data.title_ru,

	}

  	return { props: { data } }

}

export default Accomodation
