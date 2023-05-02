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
		title: "Two-Bedroom Family Villa",
		bed_size: "4 Adults + 2 Children OR 6 Adults - (2 x King)",
		description: "Colossal palm trees swaying in the ocean breeze surround our tropical hideaway by  the  sandy  beach.  Sunlight  streams  into these high-ceilinged abodes, illuminating the natural woods and cooling stone inspired by our island’s mesmerising setting. Spread yourself out comfortably across this beachfront bliss, relaxing  on your cloud-like bed oriented towards the ocean, or indulge with bubbles in the bathtub angled to the blue view.",
		link: "",
		pool_size: "",
		size: "232",
		name: "two-bedroom-family-villa",
		link_360: "",
		seo_description: "Two-Bedroom Family Villa | Kuda Villingili",
		seo_keywords: "Two-Bedroom Family Villa | Kuda Villingili",
		seo_title: "Two-Bedroom Family Villa | Kuda Villingili",
		images: "https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/two_bedroom_family_villa/1.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/two_bedroom_family_villa/2.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/two_bedroom_family_villa/3.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/two_bedroom_family_villa/4.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/two_bedroom_family_villa/5.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/two_bedroom_family_villa/6.jpg".split(","),
		bed_size_ar: "4 Adults + 2 Children OR 6 Adults - (2 x King)",
		bed_size_ru: "4 Adults + 2 Children OR 6 Adults - (2 x King)",
		description_ar: "Colossal palm trees swaying in the ocean breeze surround our tropical hideaway by  the  sandy  beach.  Sunlight  streams  into these high-ceilinged abodes, illuminating the natural woods and cooling stone inspired by our island’s mesmerising setting. Spread yourself out comfortably across this beachfront bliss, relaxing  on your cloud-like bed oriented towards the ocean, or indulge with bubbles in the bathtub angled to the blue view.",
		description_ru: "Colossal palm trees swaying in the ocean breeze surround our tropical hideaway by  the  sandy  beach.  Sunlight  streams  into these high-ceilinged abodes, illuminating the natural woods and cooling stone inspired by our island’s mesmerising setting. Spread yourself out comfortably across this beachfront bliss, relaxing  on your cloud-like bed oriented towards the ocean, or indulge with bubbles in the bathtub angled to the blue view.",
		title_ar:"Two-Bedroom Family Villa",
		title_ru: "Two-Bedroom Family Villa"

	}

  	return { props: { data } }

}

export default TwoBedroomFamilyVilla
