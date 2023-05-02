import React from "react"
import { isMobile } from "react-device-detect"
import { useRouter } from "next/router"
import Link from "next/link"
import Head from "next/head"

import About from "./About"
import Footer from "../../component/footer"
import Header from "../../component/header"

const { endpoint } = require( "../../variables")

const {

	OfferMoreButton,
	OfferMoreContainer,

} = require("../../style/offers/Offers.Styled")

const Offer = ( props ) => {

	const [ language, updateLanguage ] = React.useState( "en" )
	const [ is_mobile, UpdateState ] = React.useState( false )
	const {

		header_image,
		offers,
        seo_description,
        seo_title,

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
			else if( userlanguageArray[0] === "ar" )
				updateLanguage("ar")

		}

	},[])
	const router = useRouter()
  	const { offer_url } = router.query
	const [ offer_details, updateOfferDetails ] = React.useState({

		body: "",
		description: "",
		image: "",
		title: "",

	})
	React.useEffect( () => {

		var offer_index = -1
		offers.map(function(value,index){

			if( value.link === offer_url ){

				console.log( value )
				offer_index = index
				updateOfferDetails({

					body: language === "ru" ? value.body_ru : language === "ar" ? value.body_ar : value.body,
					description: language === "ru" ? value.description_ru : language === "ar" ? value.description_ar : value.description,
					image: value.image,
					title: language === "ru" ? value.title_ru : language === "ar" ? value.title_ar : value.title,

				})

			}

			return true

		})

	}, [ offer_url, offers, language ])
	return(
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
				image={ offer_details.image }
				languageDetected={ language }
			/>
			<About
				title={ offer_details.title }
				description={ offer_details.description }
				isMobile={ is_mobile }
				body={ offer_details.body }
			/>
			<OfferMoreContainer isMobile={ is_mobile }>
				<Link href="/offers" passHref>
					<OfferMoreButton>View All Offers</OfferMoreButton>
				</Link>
			</OfferMoreContainer>
			<Footer
				languageDetected={ language }
			/>
		</div>
	)
}

export const getServerSideProps = async () => {

	const res = await fetch(`${endpoint}/offers`)
	const response = await res.json()
	const data = {

		header_image: response.data.header_image,
		offers: response.data.offers,
		seo_description: response.data.seo_description,
		seo_title: response.data.seo_title,

	}

  	return { props: { data } }

}

export default Offer
