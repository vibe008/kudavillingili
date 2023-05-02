import React from "react"
import { isMobile } from "react-device-detect"

import Head from "next/head"

import Footer from "../component/footer"
import Header from "../component/header"
import GettingHere from "../component/getting-here"
import FAQ from "../component/faq"
import ContactForm from "./contact/ContactForm"
import TransferInformation from "./contact/TransferInformation"

const { endpoint } = require( "../variables")

const Contact = ( props ) => {

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

		contact_image,
		data,
		description,
		getting_here,
		header_image,
		seo_description,
		seo_title,
		title,
	    transfer_detail_description,
	    transfer_detail_description_continued,
	    transfer_detail_heading,
	    transfer_detail_image,
	    transfer_heading,
        getting_here_image,
        getting_here_text,
        getting_here_text_mobile,
        transfer_description,

	} = props.data

	// console.log( getting_here.about )

	return (
		<div>
			<Head>
        		<title>{ seo_title }</title>
        		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
        		<meta name="robots" content="index, follow" />
				<meta name="title" content={ seo_title } />
				<meta name="description" content={ seo_description } />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://kudavillingili.com/contact" />
				<meta property="og:title" content={ seo_title } />
				<meta property="og:description" content={ seo_description } />
				<meta property="og:image" content={ header_image } />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://kudavillingili.com/contact" />
				<meta property="twitter:title" content={ seo_title } />
				<meta property="twitter:description" content={ seo_description } />
				<meta property="twitter:image" content={ header_image } />
      		</Head>
			<Header
				isMobile={ is_mobile }
				image={ header_image }
				languageDetected={ language }
			/>
			<ContactForm
				image={ contact_image }
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
			{/*<FAQ
							data={[
								{title: "Phasellus sed nisl sit amet risus euismod ultrices non molestie odio.", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque quam vitae varius laoreet. In sed volutpat felis. Ut ornare gravida nisi, quis ullamcorper lacus rhoncus in. Nunc accumsan gravida porttitor. Nam pellentesque magna non dui luctus, sed convallis ante tristique. Quisque porta ultricies arcu, ut pretium tellus molestie eu. Phasellus ac turpis sed odio dignissim maximus. Phasellus euismod nunc in elementum bibendum"},
								{title: "Phasellus sed nisl sit amet risus euismod ultrices non molestie odio.", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque quam vitae varius laoreet. In sed volutpat felis. Ut ornare gravida nisi, quis ullamcorper lacus rhoncus in. Nunc accumsan gravida porttitor. Nam pellentesque magna non dui luctus, sed convallis ante tristique. Quisque porta ultricies arcu, ut pretium tellus molestie eu. Phasellus ac turpis sed odio dignissim maximus. Phasellus euismod nunc in elementum bibendum"},
								{title: "Phasellus sed nisl sit amet risus euismod ultrices non molestie odio.", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque quam vitae varius laoreet. In sed volutpat felis. Ut ornare gravida nisi, quis ullamcorper lacus rhoncus in. Nunc accumsan gravida porttitor. Nam pellentesque magna non dui luctus, sed convallis ante tristique. Quisque porta ultricies arcu, ut pretium tellus molestie eu. Phasellus ac turpis sed odio dignissim maximus. Phasellus euismod nunc in elementum bibendum"},
								{title: "Phasellus sed nisl sit amet risus euismod ultrices non molestie odio.", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque quam vitae varius laoreet. In sed volutpat felis. Ut ornare gravida nisi, quis ullamcorper lacus rhoncus in. Nunc accumsan gravida porttitor. Nam pellentesque magna non dui luctus, sed convallis ante tristique. Quisque porta ultricies arcu, ut pretium tellus molestie eu. Phasellus ac turpis sed odio dignissim maximus. Phasellus euismod nunc in elementum bibendum"},
								{title: "Phasellus sed nisl sit amet risus euismod ultrices non molestie odio.", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque quam vitae varius laoreet. In sed volutpat felis. Ut ornare gravida nisi, quis ullamcorper lacus rhoncus in. Nunc accumsan gravida porttitor. Nam pellentesque magna non dui luctus, sed convallis ante tristique. Quisque porta ultricies arcu, ut pretium tellus molestie eu. Phasellus ac turpis sed odio dignissim maximus. Phasellus euismod nunc in elementum bibendum"},
								{title: "Phasellus sed nisl sit amet risus euismod ultrices non molestie odio.", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque quam vitae varius laoreet. In sed volutpat felis. Ut ornare gravida nisi, quis ullamcorper lacus rhoncus in. Nunc accumsan gravida porttitor. Nam pellentesque magna non dui luctus, sed convallis ante tristique. Quisque porta ultricies arcu, ut pretium tellus molestie eu. Phasellus ac turpis sed odio dignissim maximus. Phasellus euismod nunc in elementum bibendum"}
							]}
							title="FAQ"
						/>*/}
			<GettingHere
				isMobile={ is_mobile }
				paddingTopMobile={ is_mobile ? "40px" : "" }
				image={ getting_here_image }
				titleData={ language === "ar" ? getting_here.ar.title : language === "ru" ? getting_here.ru.title : getting_here.title }
				description={ language === "ar" ? getting_here.ar.about : language === "ru" ? getting_here.ru.about : getting_here.description }
				aboutMobile={ language === "ar" ? getting_here.ar.about_mobile : language === "ru" ? getting_here.ru.about_mobile : getting_here.about_mobile }
				languageDetected={ language }
			/>
			<TransferInformation
				paddingTopMobile={ is_mobile ? "40px" : "" }
				isMobile={ is_mobile }
				transferDescription = { language === "ar" ? data.transfer_description_ar : language === "ru" ? data.transfer_description_ru : data.transfer_description }
				transferDetailHeading = { language === "ar" ? data.transfer_heading_ar : language === "ru" ? data.transfer_heading_ru : data.transfer_heading }
				transferDetailDescription = { language === "ar" ? data.transfer_detail_description_ar : language === "ru" ? data.transfer_detail_description_ru : data.transfer_detail_description }
				transferDetailDescriptionContinued = { language === "ar" ? data.transfer_detail_description_continued_ar : language === "ru" ? data.transfer_detail_description_continued_ru : data.transfer_detail_description_continued }
				transferHeading = { language === "ar" ? data.transfer_detail_heading_ar : language === "ru" ? data.transfer_detail_heading_ru : data.transfer_detail_heading }
				transferImage = { transfer_detail_image }
				languageDetected={ language }
			/>
			<Footer
				languageDetected={ language }
			/>
		</div>
	)
}

export async function getServerSideProps() {

	const res = await fetch(`${endpoint}/contact`)
	const response = await res.json()
	// console.log( response.data )
	// console.log( response )
	const data = {

		contact_image: response.data.contact_image,
		data: response.data,
		description: response.data.about,
		getting_here: response.getting_here,
		header_image: response.data.header_image,
		seo_description: response.data.seo_description,
		seo_title: response.data.seo_title,
		title: response.data.title,
	    transfer_detail_description: response.data.transfer_detail_description,
	    transfer_detail_description_continued: response.data.transfer_detail_description_continued,
	    transfer_detail_heading: response.data.transfer_detail_heading,
	    transfer_detail_image: response.data.transfer_detail_image,
	    transfer_heading: response.data.transfer_heading,
        getting_here_image: response.data.getting_here_image,
        getting_here_text: response.data.getting_here_text,
        getting_here_text_mobile: response.data.getting_here_text_mobile,
        transfer_description: response.data.transfer_description,

	}

  	return { props: { data } }

}

export default Contact
