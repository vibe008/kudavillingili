import React from "react"
import { isMobile } from "react-device-detect"
import Head from "next/head"

import Footer from "../component/footer"
import HeaderImages from "../component/header/HeaderImages"
import About from "./dining/About"
import BeachClub from "./dining/BeachClub"
import BeachClubImage from "./dining/BeachClubImage"
import BreakfastAtTheRestaurant from "./dining/BreakfastAtTheRestaurant"
import CigarLounge from "./dining/CigarLounge"
import Cuisines from "./dining/Cuisines"
import DinnerAtTheRestaurant from "./dining/DinnerAtTheRestaurant"
import Dishes from "./dining/Dishes"
import Hawkers from "./dining/Hawkers"
import TheRestaurant from "./dining/TheRestaurant"

const { endpoint } = require( "../variables")

const Dining = ( props ) => {

	const {

		breakfast,
		data,
		description,
		destination_dining,
		dinner,
		earth,
		east,
		fire,
		header_image_array,
		med,
		ocean,
		private_events,
		seo_description,
		seo_title,
		spice,
		the_bar,
		the_beach_bar,
		the_cigar_lounge,
		the_hawkers,
		the_library,
		the_restaurant,
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
				<meta property="og:image" content={ header_image_array[0] } />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://kudavillingili.com/" />
				<meta property="twitter:title" content={ seo_title } />
				<meta property="twitter:description" content={ seo_description } />
				<meta property="twitter:image" content={ header_image_array[0] } />
      		</Head>
			<HeaderImages
				isMobile={ is_mobile }
				image="https://kudavillingili.sgp1.digitaloceanspaces.com/dining/dining-banner-1_optimized.jpg"
				theme="light"
				headerImageArray={ header_image_array }
				languageDetected={ language }
			/>
			<About
				data={ data }
				description={ description }
				isMobile={ is_mobile }
				languageDetected={ language }
				title={ title }
			/>
			<Hawkers
				isMobile={ is_mobile }
				data={ the_hawkers }
				languageDetected={ language }
			/>
			<Dishes
				isMobile={ is_mobile }
				spice={ spice }
				east={ east }
				med={ med }
				theBar={ the_bar }
				languageDetected={ language }
			/>
			<TheRestaurant
				isMobile={ is_mobile }
				data={ the_restaurant }
				languageDetected={ language }
			/>
			{
				false &&
				<>
					<BreakfastAtTheRestaurant
						isMobile={ is_mobile }
						data={ breakfast }
					/>
					<DinnerAtTheRestaurant
						isMobile={ is_mobile }
						data={ dinner }
					/>
				</>
			}
			<Cuisines
				isMobile={ is_mobile }
				fire={ fire }
				earth={ earth }
				ocean={ ocean }
				languageDetected={ language }
			/>
			<BeachClub
				data={ the_beach_bar }
				description={ the_beach_bar.description }
				isMobile={ is_mobile }
				languageDetected={ language }
				logo={ the_beach_bar.logo_image }
				title={ the_beach_bar.title }
			/>
			<BeachClubImage
				background={ the_beach_bar.optional_image }
				image={ the_beach_bar.image }
				isMobile={ is_mobile }
				languageDetected={ language }
				menu={ the_beach_bar.link }
			/>
			<CigarLounge
				destinationDining={ destination_dining }
				isMobile={ is_mobile }
				languageDetected={ language }
				privateEvents={ private_events }
				theCigarLounge={ the_cigar_lounge }
				theLibrary={ the_library }
			/>
			<Footer
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
		</div>
	)
}

export const getServerSideProps = async () => {

	const res = await fetch(`${endpoint}/dining`)
	const response = await res.json()
	let private_events = {}
	let destination_dining = {}
	let the_library = {}
	let the_cigar_lounge = {}
	let the_hawkers = {}
	let spice = {}
	let east = {}
	let med = {}
	let the_bar = {}
	let fire = {}
	let earth = {}
	let ocean = {}
	let the_beach_bar = {}
	let dinner = {}
	let the_restaurant = {}
	let breakfast = {}
	response.data.section.map( function( value,index ){

		if( value.name === "private-events"){

			private_events = value

		} else if( value.name === "destination-dining"){

			destination_dining = value

		} else if( value.name === "the-library"){

			the_library = value

		} else if( value.name === "the-cigar-lounge"){

			the_cigar_lounge = value

		} else if( value.name === "dinner-at-the-restaurant"){

			dinner = value

		} else if( value.name === "breakfast-at-the-restaurant"){

			breakfast = value

		}
		return true

	})
	response.data.restaurant.map(function(value,index){

		if( value.name === "the-hawkers")
			the_hawkers = value
		else if( value.name === "spice")
			spice = value
		else if( value.name === "east" )
			east = value
		else if( value.name === "med" )
			med = value
		else if( value.name === "the-bar" )
			the_bar = value
		else if( value.name === "fire" )
			fire = value
		else if( value.name === "earth" )
			earth = value
		else if( value.name === "ocean" )
			ocean = value
		else if( value.name === "mar-umi" )
			the_beach_bar = value
		else if( value.name === "the-restaurant" )
			the_restaurant = value
		
		return true

	})
	const data = {

		breakfast: breakfast,
		data: response.data,
		description:"Looking for a restaurant in Maldives? Visit Kuda Villingili, our restaurant is a wholesome experience with natural & healthy cuisine ranging from local smoked fish, exotic homemade jams, honey infused with locally grown herbs, & options of plant-based, dairy-free, or gluten-free dishes.",
		// description: response.data.about,
		destination_dining: destination_dining,
		dinner: dinner,
		earth: earth,
		east: east,
		fire: fire,
		header_image_array: response.data.header_image.split(","),
		med: med,
		ocean: ocean,
		private_events: private_events,
		seo_description: response.data.seo_description,
		seo_keywords: response.data.seo_keywords,
		seo_title: "Best Restaurants in the Maldives | Dining at the Best Restaurants in Maldives – Kuda Villingili",
		// seo_title: response.data.seo_title,
		spice: spice,
		the_bar: the_bar,
		the_beach_bar: the_beach_bar,
		the_cigar_lounge: the_cigar_lounge,
		the_hawkers: the_hawkers,
		the_library: the_library,
		the_restaurant: the_restaurant,
		title:"Best Restaurants in the Maldives | Dining at the Best Restaurants in Maldives – Kuda Villingili",
		// title: response.data.title,

	}
  	return { props: { data } }

}

export default Dining
