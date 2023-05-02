import React from "react"
import { isMobile } from "react-device-detect"
import Head from "next/head"

// COMPONENTS
import About from "./home/About"
import AboutMore from "./home/AboutMore"
import Footer from "../component/footer"
import GettingHere from "../component/getting-here"
import Header from "../component/header"
import HomeAccomodation from "./home/HomeAccomodation"
import HomeDining from "./home/HomeDining"
import HomeExperiences from "./home/HomeExperiences"
import HomeRooms from "./home/HomeRooms"

//ENDPOINT
const { endpoint } = require("../variables")

const Home = (props) => {

	const {

		about_mobile,
		accommodation,
		description,
		dining,
		experience,
		getting_here,
		header_image,
		header_mobile_image,
		rooms,
		seo_description,
		seo_keywords,
		seo_title,
		time_space_redefined,
		title,
		video,
		ar,
		ru,

	} = props.data

	const [is_mobile, UpdateState] = React.useState(false)
	const [language, updateLanguage] = React.useState("en")
	React.useEffect(() => {

		UpdateState(isMobile)
		// DETECT BROWSER LANGUAGE
		const userLanguage = navigator.language || navigator.userLanguage
		const userlanguageArray = userLanguage.split("-")

		// GET LANGUAGE FROM LOCAL STORAGE
		const storedLanguage = localStorage.getItem("language")
		if (storedLanguage !== null) {

			updateLanguage(storedLanguage)

		} else {

			if (userlanguageArray[0] === "ru")
				updateLanguage("ru")
			if (userlanguageArray[0] === "ar")
				updateLanguage("ar")

		}

	}, [])

	return (
		<div>
			<Head>
				<title>{seo_title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="robots" content="index, follow" />
				<meta name="title" content={seo_title} />
				<meta name="description" content={seo_description} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://kudavillingili.com/" />
				<meta property="og:title" content={seo_title} />
				<meta property="og:description" content={seo_description} />
				<meta property="og:image" content={header_image} />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://kudavillingili.com/" />
				<meta property="twitter:title" content={seo_title} />
				<meta property="twitter:description" content={seo_description} />
				<meta property="twitter:image" content={header_image} />
			</Head>
			<Header
				isHome={true}
				homeVideo={video}
				isMobile={is_mobile}
				image={is_mobile ? "https://kudavillingili.sgp1.digitaloceanspaces.com/10%20sec%20KDV.gif" : header_image}
				theme="light"
				languageDetected={language}
			/>
			<About
				isMobile={is_mobile}
				title={language === "en" ? title : language === "ru" ? ru.title : language === "ar" ? ar.title : title}
				description={language === "en" ? description : language === "ru" ? ru.about : language === "ar" ? ar.about : description}
				aboutMobile={language === "en" ? about_mobile : language === "ru" ? ru.about_mobile : language === "ar" ? ar.about_mobile : about_mobile}
			/>
			<AboutMore isMobile={is_mobile} data={time_space_redefined} languageDetected={language} />
			<HomeAccomodation
				isMobile={is_mobile}
				accommodationData={accommodation}
				languageDetected={language}
			/>
			<HomeRooms
				isMobile={is_mobile}
				rooms={rooms}
				languageDetected={language}
			/>
			<HomeDining
				backgroundImages={typeof dining.background_image !== "undefined" ? dining.background_image.split(",") : []}
				description={language === "ar" ? dining.description_ar : language === "ru" ? dining.description_ru : dining.description}
				images={typeof dining.images !== "undefined" ? dining.images.split(",") : []}
				isMobile={is_mobile}
				languageDetected={language}
				restaurants={dining.restaurant}
				title={language === "ar" ? dining.title_ar : language === "ru" ? dining.title_ru : dining.title}
			/>
			<HomeExperiences
				isMobile={is_mobile}
				experienceData={experience}
				languageDetected={language}
			/>
			<GettingHere
				isMobile={is_mobile}
				paddingTopMobile={is_mobile ? "10px" : ""}
				image={getting_here.image}
				description={language === "en" ? getting_here.description : language === "ru" ? getting_here.ru.about : language === "ar" ? getting_here.ar.about : getting_here.description}
				titleData={language === "en" ? getting_here.title : language === "ru" ? getting_here.ru.title : language === "ar" ? getting_here.ar.title : getting_here.title}
				aboutMobile={language === "en" ? getting_here.about_mobile : language === "ru" ? getting_here.ru.about_mobile : language === "ar" ? getting_here.ar.about_mobile : getting_here.description}
				languageDetected={language}
			/>
			<Footer languageDetected={language} />
		</div>
	)
}

export const getServerSideProps = async () => {

	const res = await fetch(`${endpoint}/home`)
	const response = await res.json()
	let getting_here = {}
	response.data.section.map(function (value, index) {

		if (value.name === "getting-here") {

			getting_here = value

		}

	})
	const data = {

		about_mobile: response.data.about_mobile,
		accommodation: response.data.accommodation,
		description: response.data.about,
		dining: response.data.dining,
		experience: response.data.experiences,
		getting_here: getting_here,
		header_image: response.data.header_image,
		header_mobile_image: response.data.header_mobile_image,
		rooms: response.data.accommodation.room,
		seo_description: response.data.seo_description,
		seo_keywords: response.data.seo_keywords,
		seo_title: response.data.seo_title,
		time_space_redefined: response.data.time_space_redefined,
		title: response.data.title,
		video: response.data.video,
		ru: response.data.ru,
		ar: response.data.ar,

	}
	return { props: { data } }

}

export default Home
