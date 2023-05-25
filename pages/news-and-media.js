import React from "react"
import { isMobile } from "react-device-detect"

import Head from "next/head"

import About from "./news-and-media/About"
import Footer from "../component/footer"
import Header from "../component/header"

import News from "./news-and-media/News"

const { endpoint } = require( "../variables")

const NewsAndMedia = ( props ) => {

	const {

		articles,
		description,
		header_image,
		seo_description,
		seo_title,
		title,

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
				description={ description }
				isMobile={ is_mobile }
				title={ title }
			/>
			<News
				articles={ articles }
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
			<Footer
				languageDetected={ language }
			/>
		</div>
	)
}

export const getServerSideProps = async () => {

	const res = await fetch(`${endpoint}/news-media`)
	const response = await res.json()
	const data = {

		articles: response.data.articles,
		description: response.data.about,
		header_image: response.data.header_image,
		seo_description:"Discover the greatest offers & packages for your dream Maldives vacation on Kuda Villingili Island Resort. Book your stay now & make unforgettable memories!",
		// seo_description: response.data.seo_description,
		seo_title: "News and Media | Stay Up-to-Date with Kuda Villingili Island",
		// seo_title: response.data.seo_title,
		title: response.data.title,

	}

  	return { props: { data } }
  	
}

export default NewsAndMedia
