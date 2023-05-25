import React from "react"
import { isMobile } from "react-device-detect"

import RoomInner from "./accomodation/RoomInner"
const { endpoint } = require( "../variables")

const WaterVillaWithPool = ( props ) => {

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
				pool_size={pool_size}
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

export const getServerSideProps = async () => {

	const res = await fetch(`${endpoint}/accommodation`)
	const response = await res.json()
	let room = {}
	response.data.rooms.map( function( value,index ){

		if( value.name === "water-villa-with-pool" ){

			room = value

		}
		
	})
	const data = {

		amenities: room.amenities.split(","),
		amenities_ar: room.amenities_ar.split(","),
		amenities_ru: room.amenities_ru.split(","),
		bed_size: room.bed_size,
		pool_size: "L: 9.2m x W: 3.25m x H: 1.2m",
		bed_size_ar: room.bed_size_ar,
		bed_size_ru: room.bed_size_ru,
		// description: room.description,
		description: "Kuda Villingili has a water villa resort with a private pool over the water a prime Maldivian retreat. The relaxed atmosphere, surrounded by the sound of the waves, is the perfect place to unwind or spend time with loved ones. Visit us now! Escape to your own private oasis at Kuda Villingili's Water Villa with Private Pool. Enjoy stunning ocean views, luxury amenities and complete privacy in this tranquil retreat. Book your stay now!",
		description_ar: room.description_ar,
		description_ru: room.description_ru,
		images: room.image.split(","),
		link_360: room.link_360,
		size: room.size,
		title:"Maldives Resort with Largest Private Pools | Water Villa with Largest Private Pools | Maldives Hotels with Large Private Pools ",
		// title: room.title,
		title_ar: room.title_ar,
		title_ru: room.title_ru,

	}
  	return { props: { data } }
}

export default WaterVillaWithPool
