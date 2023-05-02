import React from "react"
import { isMobile } from "react-device-detect"

import RoomInner from "./accomodation/RoomInner"
const { endpoint } = require( "../variables")

const TwoBedroomFamilyVilla = ( props ) => {

	const [ language, updateLanguage ] = React.useState( "en" )
	const [ is_mobile, updateState ] = React.useState( false )
	React.useEffect(() => {

		updateState( isMobile )

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

		amenities,
		amenities_ar,
		amenities_ru,
		bed_size,
		bed_size_ar,
		bed_size_ru,
		description,
		description_ar,
		description_ru,
		images,
		link_360,
		size,
		title,
		title_ar,
		title_ru,
		pool_size,

	} = props.data
	return(
		<div>
			<RoomInner
				amenities={ language === "ar" ? amenities_ar : language === "ru" ? amenities_ru : amenities }
				area={ size }
				bed={ language === "ar" ? bed_size_ar : language === "ru" ? bed_size_ru : bed_size }
				pool_size={ pool_size }
				description={ language === "ar" ? description_ar : language === "ru" ? description_ru : description }
				guests="Max Guests"
				images={ images }
				isMobile={ is_mobile }
				languageDetected={ language }
				name={ language === "ar" ? title_ar : language === "ru" ? title_ru : title }
				tour={ link_360 }
			/>
		</div>
	)
}

export const getServerSideProps = async () =>  {

	const res = await fetch(`${endpoint}/accommodation`)
	const response = await res.json()
	let room = {}
	response.data.rooms.map( function( value,index ){

		if( value.name === "beach-villa" ){

			room = value

		}

	})
	const data = {

		amenities: room.amenities.split(","),
		amenities_ar: room.amenities_ar.split(","),
		amenities_ru: room.amenities_ru.split(","),
		title: "Four-Bedroom Beach Villa",
		bed_size: "8 Adults + 4 Children OR 12 Adults - (4 x King)",
		description: "These aptly named  Four-Bedroom  Kudavillingili  Beach  treat truly elevates the Maldivian island experience, placing you sky-high amidst the palm trees with an exotic bird’s eye  view of the seemingly limitless horizon. Neutral hues and organic fabrics round out the rustic woods and calming stone in these generous oases with an indulgent soaking tub for two, a loft-like living area and an outdoor patio from which to admire the vast majesty of the Indian Ocean.",
		link: "",
		size: "464",
		name: "four-bedroom-beach-villa",
		pool_size: "",
		link_360: "",
		seo_description: "Four-Bedroom Beach Villa | Kuda Villingili",
		seo_keywords: "Four-Bedroom Beach Villa | Kuda Villingili",
		seo_title: "Four-Bedroom Beach Villa | Kuda Villingili",
		images: "https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/four_bedroom_beach_villa/1.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/four_bedroom_beach_villa/2.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/four_bedroom_beach_villa/3.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/four_bedroom_beach_villa/4.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/four_bedroom_beach_villa/5.jpg".split(","),	
		bed_size_ar: "8 Adults + 4 Children OR 12 Adults - (4 x King)",
		bed_size_ru: "8 Adults + 4 Children OR 12 Adults - (4 x King)",
		description_ar: "These aptly named  Four-Bedroom  Kudavillingili  Beach  treat truly elevates the Maldivian island experience, placing you sky-high amidst the palm trees with an exotic bird’s eye  view of the seemingly limitless horizon. Neutral hues and organic fabrics round out the rustic woods and calming stone in these generous oases with an indulgent soaking tub for two, a loft-like living area and an outdoor patio from which to admire the vast majesty of the Indian Ocean.",
		description_ru: "These aptly named  Four-Bedroom  Kudavillingili  Beach  treat truly elevates the Maldivian island experience, placing you sky-high amidst the palm trees with an exotic bird’s eye  view of the seemingly limitless horizon. Neutral hues and organic fabrics round out the rustic woods and calming stone in these generous oases with an indulgent soaking tub for two, a loft-like living area and an outdoor patio from which to admire the vast majesty of the Indian Ocean.",
		title_ar: "Four-Bedroom Beach Villa",
		title_ru: "Four-Bedroom Beach Villa"	

	}

  	return { props: { data } }

}

export default TwoBedroomFamilyVilla
