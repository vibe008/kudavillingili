import React from "react"
import { isMobile } from "react-device-detect"
import Head from "next/head"

import About from "./covid/About"
import FAQ from "../component/faq"
import Footer from "../component/footer"
import Footnote from "./covid/Footnote"
import Header from "../component/header"

const { endpoint } = require( "../variables")

const Covid = ( props ) => {

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

	const {

		data,
		description,
		footnote,
		faq,
		header_image,
		seo_description,
		seo_title,
		title,

	} = props.data

	return (
		<div>
			<Head>
        		<title>{ seo_title }</title>
        		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
        		<meta name="robots" content="index, follow" />
				<meta name="title" content={ seo_title } />
				<meta name="description" content={ seo_description } />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://kudavillingili.com/covid" />
				<meta property="og:title" content={ seo_title } />
				<meta property="og:description" content={ seo_description } />
				<meta property="og:image" content={ header_image } />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://kudavillingili.com/covid" />
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
				description={ language === "ar" ? data.about_ar : language === "ru" ? data.about_ru : data.about }
				isMobile={ is_mobile }
				title= { language === "ar" ? data.title_ar : language === "ru" ? data.title_ru : data.title }
			/>
			<FAQ
				isMobile={ is_mobile }
				data={ faq }
				title="Safety Measures"
				languageDetected={ language }
			/>
			<Footnote
				data={ language === "ar" ? data.footnote_ar : language === "ru" ? data.footnote_ru : data.footnote }
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
			<Footer
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
		</div>
	)
}

export async function getServerSideProps() {

	const res = await fetch(`${endpoint}/covid`)
	const response = await res.json()
	var faq = response.data.faq.sort((a, b) => {

        return a.order - b.order

    })
	const data = {

		data: response.data,
		description: response.data.about,
		footnote: response.data.footnote,
		faq,
		header_image: response.data.header_image,
		seo_description:"Enjoy a Covid-free environment on our island. Rest assured to be serviced with utmost care & safety by our fully vaccinated team members. Visit us now!",
		// seo_description: response.data.seo_description,
		seo_title:"COVID-19 Update | Kuda Villingili Island Resort Health & Safety Protocols",
		// seo_title: response.data.seo_title,
		title: response.data.title,

	}

  	return { props: { data } }

}

export default Covid
