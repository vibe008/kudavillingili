import React from "react"
import { isMobile } from "react-device-detect"
import Head from "next/head"

import Footer from "../component/footer"
import Header from "../component/header"
import About from "./experiences/About"
import ExperiencesRecreationAndLeisure from "./experiences/ExperiencesRecreationAndLeisure"
import ExperienceWaterActivities from "./experiences/ExperienceWaterActivities"
import ExperienceWellness from "./experiences/ExperienceWellness"
import ExperienceTherapy from "./experiences/ExperienceTherapy"
import ThePool from "./experiences/ThePool"
import SportsAndGames from "./experiences/SportsAndGames"
import KudaFiyoIslandPlayground from "./experiences/KudaFiyoIslandPlayground"
import TheSpa from "./experiences/TheSpa"
import Fitness from "./experiences/Fitness"
import Wellbeing from "./experiences/Wellbeing"
import Surfing from "./experiences/Surfing"
import WaterSports from "./experiences/WaterSports"
import Snorkelling from "./experiences/Snorkelling"
import ScubaDiving from "./experiences/ScubaDiving"
import WeeklyEntertainment from "./experiences/WeeklyEntertainment"
import RetailVillage from "./experiences/RetailVillage"

const { endpoint } = require( "../variables")
const { cdnSwitch } = require("../functions/cdn")

const Experiences = ( props ) => {

	const {

		data,
		description,
		fitness,
		header_image,
		kuda_fiyo_island_playground,
		recreation_leisure,
		retail_village,
		scuba_diving,
		seo_description,
		seo_title,
		snorkelling,
		sports_games,
		surfing,
		the_pool,
		the_spa,
		title,
		water_sports,
		weekly_entertainment,
		wellbeing,

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
				theme="light"
			/>
			<About
				data={ data }
				description={ description }
				isMobile={ is_mobile } 
				languageDetected={ language }
				title={ title }
			/>
			<ThePool
				isMobile={ is_mobile }
				data={ the_pool }
				languageDetected={ language }
			/>
			<SportsAndGames
				isMobile={ is_mobile }
				data={ sports_games }
				languageDetected={ language }
			/>
			<KudaFiyoIslandPlayground
				isMobile={ is_mobile }
				data={ kuda_fiyo_island_playground }
				languageDetected={ language }
			/>
			<TheSpa
				isMobile={ is_mobile }
				data={ the_spa }
				languageDetected={ language }
			/>
			<Fitness
				isMobile={ is_mobile }
				data={ fitness }
				languageDetected={ language }
			/>
			<Wellbeing
				isMobile={ is_mobile }
				data={ wellbeing }
				languageDetected={ language }
			/>
			<Surfing
				isMobile={ is_mobile }
				data={ surfing }
				languageDetected={ language }
			/>
			<WaterSports
				isMobile={ is_mobile }
				data={ water_sports }
				languageDetected={ language }
			/>
			<Snorkelling
				isMobile={ is_mobile }
				data={ snorkelling }
				languageDetected={ language }
			/>
			<ScubaDiving
				isMobile={ is_mobile }
				data={ scuba_diving }
				languageDetected={ language }
			/>
			<WeeklyEntertainment
				isMobile={ is_mobile }
				data={ weekly_entertainment }
				languageDetected={ language }
			/>
			<RetailVillage
				isMobile={ is_mobile }
				data={ retail_village }
				languageDetected={ language }
			/>
			{
				false &&
				<>
					<ExperiencesRecreationAndLeisure
						isMobile={ is_mobile }
						thePool={ the_pool }
						recreationLeisure={ recreation_leisure }
						sportsGames= { sports_games }
						kudaFiyoIslandPlayground = { kuda_fiyo_island_playground }
					/>
					<ExperienceWellness
						isMobile={ is_mobile }
						theSpa = { the_spa }
						fitness = { fitness }
						wellbeing = { wellbeing }
					/>
					<ExperienceWaterActivities
						isMobile={ is_mobile }
						surfing = { surfing }
						waterSports = { water_sports }
						snorkelling = { snorkelling }
						scubaDiving = { scuba_diving }
					/>
					<ExperienceTherapy
						isMobile={ is_mobile }
						weeklyEntertainment = { weekly_entertainment }
						retailVillage = { retail_village }
					/>
				</>
			}
			<Footer
				isMobile={ is_mobile }
				languageDetected={ language }
			/>
		</div>
	)
}

export const getServerSideProps = async () => {

	const res = await fetch(`${endpoint}/experiences`)
	const response = await res.json()
	let section = response.data.section
	let the_pool = {}
	let recreation_leisure = {}
	let sports_games = {}
	let kuda_fiyo_island_playground = {}
	let the_spa = {}
	let fitness = {}
	let wellbeing = {}
	let surfing = {}
	let water_sports = {}
	let snorkelling = {}
	let scuba_diving = {}
	let weekly_entertainment = {}
	let retail_village = {}
	section.map( function( value,index ){
		if( value.name === "the-pool" ){
			the_pool = value
		} else if( value.name === "recreation-leisure" ){
			recreation_leisure = value
		} else if( value.name === "sports-games" ){
			sports_games = value
		} else if( value.name === "kuda-fiyo-island-playground" ){
			kuda_fiyo_island_playground = value
		} else if( value.name === "the-spa" ){
			the_spa = value
		} else if( value.name === "fitness" ){
			fitness = value
		} else if( value.name === "wellbeing" ){
			wellbeing = value
		} else if( value.name === "surfing" ){
			surfing = value
		} else if( value.name === "water-sports" ){
			water_sports = value
		} else if( value.name === "snorkelling" ){
			snorkelling = value
		} else if( value.name === "scuba-diving" ){
			scuba_diving = value
		} else if( value.name === "weekly-entertainment" ){
			weekly_entertainment = value
		} else if( value.name === "retail-village" ){
			retail_village = value
		}
	})
	const data = {

		data: response.data,
		description: response.data.about,
		fitness: fitness,
		header_image: cdnSwitch(response.data.header_image),
		kuda_fiyo_island_playground: kuda_fiyo_island_playground,
		recreation_leisure: recreation_leisure,
		retail_village: retail_village,
		scuba_diving: scuba_diving,
		seo_description:"Whether guests want a quiet, relaxing day or an adventure, Kuda Villingili Resort Maldives has a wide range of activities, from surfing and big game fishing to romantic dinners on the beach and pampering spa treatments. Contact us now!",
		// seo_description: response.data.seo_description,
		seo_title: "Experience the Best Activities on the Island | Kuda Villingili ",
		// seo_title: response.data.seo_title,
		snorkelling: snorkelling,
		sports_games: sports_games,
		surfing: surfing,
		the_pool: the_pool,
		the_spa: the_spa,
		title: response.data.title,
		water_sports: water_sports,
		weekly_entertainment: weekly_entertainment,
		wellbeing: wellbeing,

	}
  	return { props: { data } }

}

export default Experiences
