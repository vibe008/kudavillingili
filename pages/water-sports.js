import React from "react"
import { isMobile } from "react-device-detect"

import Head from "next/head"

import Footer from "../component/footer"
import Header from "../component/header"

import About from "./water-sports/About"
import Aquarium from "./water-sports/Aquarium"
import BigGameFishing from "./water-sports/BigGameFishing"
import Colosseum from "./water-sports/Colosseum"
import DolphinCruise from "./water-sports/DolphinCruise"
import HPReef from "./water-sports/HPReef"
import KiteSurfing from "./water-sports/KiteSurfing"
import LiftElectricFoil from "./water-sports/LiftElectricFoil"
import MantaPoint from "./water-sports/MantaPoint"
import NassimoThila from "./water-sports/NassimoThila"
import OceanConservation from "./water-sports/OceanConservation"
import SharkSafari from "./water-sports/SharkSafari"
import SunsetCruise from "./water-sports/SunsetCruise"
import Surfing from "./water-sports/Surfing"
import TurtleSafari from "./water-sports/TurtleSafari"

const { endpoint } = require( "../variables")

const { cdnSwitch } = require("../functions/cdn")

const WaterSports = ( props ) => {

	const {

		aquarium,
		big_game_fishing,
		colosseum,
		data,
		description,
		dolphin_cruise,
		header_image,
		hp_reef,
		kite_surfing,
		lift_electric_foil,
		lift_surf_foil,
		manta_point,
		nassimo_thila,
		ocean_conservation,
		seo_description,
		seo_title,
		shark_safari,
		sunset_cruise,
		surfing,
		title,
		turtle_safari,

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
			<Header isMobile={ is_mobile } image={ header_image } languageDetected={ language }/>
			<About
				data={ data }
				description={ language === "ar" ? data.about_ar : language === "ru" ? data.about_ru : data.about }
				isMobile={ is_mobile }
				languageDetected={ language }
				title={ title }
			/>
			<KiteSurfing
				data={ kite_surfing }
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
			<LiftElectricFoil
				data={ lift_electric_foil }
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
			<Surfing
				data={ surfing }
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
			<MantaPoint
				data={ manta_point }
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
			<Colosseum
				data={ colosseum }
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
			<Aquarium
				data={ aquarium }
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
			<NassimoThila
				data={ nassimo_thila }
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
			<HPReef
				data={ hp_reef }
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
			<BigGameFishing
				data={ big_game_fishing }
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
			<SharkSafari
				data={ shark_safari }
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
			<SunsetCruise
				data={ sunset_cruise }
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
			<TurtleSafari
				data={ turtle_safari }
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
			<DolphinCruise
				data={ dolphin_cruise }
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
			<OceanConservation
				data={ ocean_conservation }
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

export const getServerSideProps = async () => {

	const res = await fetch(`${endpoint}/water-sports`)
	const response = await res.json()
	let section = response.data.section
	let kite_surfing = {}
	let lift_electric_foil = {}
	let lift_surf_foil = {}
	let surfing = {}
	let hp_reef = {}
	let colosseum = {}
	let aquarium = {}
	let nassimo_thila = {}
	let manta_point = {}
	let big_game_fishing = {}
	let shark_safari = {}
	let sunset_cruise = {}
	let turtle_safari = {}
	let dolphin_cruise = {}
	let ocean_conservation = {}
	section.map( function( value,index ){

		if( value.name === "kite-surfing" ){
			kite_surfing = value
		} else if ( value.name === "lift-electric-foil" ){
			lift_electric_foil = value
		} else if( value.name === "lift-surf-foil"){
			lift_surf_foil = value
		} else if( value.name === "surfing" ){
			surfing = value
		} else if( value.name === "hp-reef-marine-protected-area"){
			hp_reef = value
		} else if( value.name === "colosseum" ){
			colosseum = value
		} else if( value.name === "aquarium" ){
			aquarium = value
		} else if( value.name === "nassimo-thila" ){
			nassimo_thila = value
		} else if( value.name === "manta-point" ){
			manta_point = value
		} else if( value.name === "big-game-fishing" ){
			big_game_fishing = value
		} else if( value.name === "shark-safari" ){
			shark_safari = value
		} else if( value.name === "sunset-cruise" ){
			sunset_cruise = value
		} else if( value.name === "turtle-safari" ){
			turtle_safari = value
		} else if( value.name === "dolphin-cruise" ){
			dolphin_cruise = value
		} else if( value.name === "ocean-conservation" ){
			ocean_conservation = value
		}

	})
	const data = {

		aquarium: aquarium,
		big_game_fishing: big_game_fishing,
		colosseum: colosseum,
		data: response.data,
		description: response.data.about,
		dolphin_cruise: dolphin_cruise,
		header_image: cdnSwitch(response.data.header_image),
		hp_reef: hp_reef,
		kite_surfing: kite_surfing,
		lift_electric_foil: lift_electric_foil,
		lift_surf_foil: lift_surf_foil,
		manta_point: manta_point,
		nassimo_thila: nassimo_thila,
		ocean_conservation: ocean_conservation,
		seo_description:"Explore the Maldivian Sea by visiting breathtaking dive sites, or joining one of Kuda Villingili’s unique excursions. Get adrenaline rushes with the resort’s adventurous water sports, like kite surfing. Visit us today, to learn more about our water sports. ",
		// seo_description: response.data.seo_description,
		seo_title: "Experience the Best Water Activities at Kuda Villingili Island | Best Private Resort in Maldives",
		// seo_title: response.data.seo_title,
		shark_safari: shark_safari,
		sunset_cruise: sunset_cruise,
		surfing: surfing,
		title: response.data.title,
		turtle_safari: turtle_safari,

	}
  	return { props: { data } }

}

export default WaterSports
