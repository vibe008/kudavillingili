import Link from 'next/link';
import { CSSTransition } from "react-transition-group";
import Image from 'next/image';

import cross from '../../assets/images/cross.svg';

import facebook from '../../assets/images/facebook_update.svg';
import facebook_white from '../../assets/images/facebook_white_update.svg';

import instagram from '../../assets/images/instagram_update.svg';
import instagram_white from '../../assets/images/instagram_white_update.svg';

import twitter from '../../assets/images/twitter.svg';
import twitter_white from '../../assets/images/twitter_white.svg';

import email from '../../assets/images/mail_update.svg';
import email_white from '../../assets/images/mail_update_white.svg';

const {
	RowAlign
} = require('../../style/common/Common.Styled');

const {
	CrossContainer,
	HeaderMenuContainer,
	HeaderMenuItems,
	HeaderMenuItem,
	HeaderImageContainer
} = require('../../style/header/Header.Styled');

const {

	LanguageContainer

} = require("../footer/Footer.Styled")

const HeaderMenu = (props) => {

	const {

		languageDetected

	} = props
	const header_items_text = {

		en: {

			overview: "Overview",
			accommodation: "Accommodation",
			dining: "Dining",
			experiences: "Experiences",
			gallery: "Gallery",
			offers: "Offers",
			news_media: "News & Media",
			covid: "Covid",
			sustainability: "Sustainability",
			meet: "Meet The Team",
			contact: "Contact",
			three_sixty: "360° View",

		},
		ru: {

			overview: "Обзор",
			accommodation: "Размещение",
			dining: "Питание",
			experiences: "Развлечения",
			gallery: "Галерея",
			offers: "Предложения",
			news_media: "Новости и СМИ",
			covid: "Covid",
			sustainability: "устойчивость",
			meet: "",
			contact: "Контакты",
			three_sixty: "360° Посмотреть",

		},
		ar: {

			overview: "ملخص",
			accommodation: "الإقامة",
			dining: "تناول الطعام",
			experiences: "التجارب",
			gallery: "صالة عرض",
			offers: "العروض",
			news_media: "آخر الاخبار ووسائل الإعلام",
			covid: "فيروس كورونا",
			sustainability: "  الاستدامة",
			meet: "قابل الفريق",
			contact: "الاتصال",
			three_sixty: "رؤية شاملة",

		}

	}

	const storeLanguage = ( language ) => {

    	localStorage.setItem("language", language )
    	window.location.reload()

    }
	return(
		<CSSTransition
        	in={ props.menuExpand }
        	classNames="page"
        	timeout={ 200 }
      	>
			<HeaderMenuContainer isMobile={ props.isMobile }>
				<CrossContainer onClick={ (event) => { props.closeMenu(event); } } isMobile={ props.isMobile }>
					<Image src={ cross } alt="cross_icon" width={ 30 } height={ 30 }/>
				</CrossContainer>
				<HeaderMenuItems isMobile={ props.isMobile } languageDetected={ languageDetected }>
					<Link href="/">
						<a>
							<HeaderMenuItem>
								{

									header_items_text[languageDetected].overview

								}
							</HeaderMenuItem>
						</a>
					</Link>
					<Link href="/accommodation">
						<a>
							<HeaderMenuItem>
								{

									header_items_text[languageDetected].accommodation
									
								}
							</HeaderMenuItem>
						</a>
					</Link>
					<Link href="/dining">
						<a>
							<HeaderMenuItem>
								{

									header_items_text[languageDetected].dining
									
								}
							</HeaderMenuItem>
						</a>
					</Link>
					<Link href="/experiences">
						<a>
							<HeaderMenuItem>
								{

									header_items_text[languageDetected].experiences
									
								}
							</HeaderMenuItem>
						</a>
					</Link>
					<Link href="/gallery">
						<a>
							<HeaderMenuItem>
								{

									header_items_text[languageDetected].gallery
									
								}
							</HeaderMenuItem>
						</a>
					</Link>
					<Link href="/offers">
						<a>
							<HeaderMenuItem>
								{

									header_items_text[languageDetected].offers
									
								}
							</HeaderMenuItem>
						</a>
					</Link>
					<Link href="/news-and-media">
						<a>
							<HeaderMenuItem>
								{

									header_items_text[languageDetected].news_media
									
								}
							</HeaderMenuItem>
						</a>
					</Link>
					{/*<Link href="/testimonial">
						<HeaderMenuItem>
							Testimonial
						</HeaderMenuItem>
					</Link>*/}
					<Link href="/covid">
						<a>
							<HeaderMenuItem>
								{

									header_items_text[languageDetected].covid
									
								}
							</HeaderMenuItem>
						</a>
					</Link>					
					<Link href="/sustainability">
						<a>
							<HeaderMenuItem>
								{

									header_items_text[languageDetected].sustainability
									
								}
							</HeaderMenuItem>
						</a>
					</Link>					
					<Link href="https://www.kudavillingili.com/360" passHref>
						<a target="_blank">
							<HeaderMenuItem>
								{

									header_items_text[languageDetected].three_sixty
									
								}
							</HeaderMenuItem>
						</a>
					</Link>
					<Link href="/contact">
						<a>
							<HeaderMenuItem>
								{

									header_items_text[languageDetected].contact
									
								}
							</HeaderMenuItem>
						</a>
					</Link>
					{
						props.isMobile &&
						<RowAlign marginTop='20px'>
							<a href='https://www.instagram.com/kudavillingiliresort' target='_blank'>
								<HeaderImageContainer>
									<Image src={ instagram_white } alt="instagram_icon" width={ 25 } height={ 25 } />
								</HeaderImageContainer>
							</a>
							<a href='https://www.facebook.com/kudavillingiliresort' target='_blank'>
								<HeaderImageContainer>
									<Image src={ facebook_white } alt="facebook_icon" width={ 25 } height={ 25 } />
								</HeaderImageContainer>
							</a>
							<a href='mailto:reservations@kudavillingili.com' target='_blank'>
								<HeaderImageContainer>
									<Image src={ email_white } alt="email_icon" width={ 25 } height={ 25 } />
								</HeaderImageContainer>
							</a>
						</RowAlign>
					}
					<RowAlign style={{ width: props.isMobile ? "100px !important" : "200px", marginLeft: props.isMobile ? "-20px" : "unset" }} alignCenter={ true } marginTop={ "20px" } isMobile={ props.isMobile } alignOverright={ true }>
						<LanguageContainer isInHeader={ true } onClick={ () => storeLanguage("en") } isActive={ languageDetected === "en" ? true : false }>English</LanguageContainer>
						<LanguageContainer isInHeader={ true } onClick={ () => storeLanguage("ru") } isActive={ languageDetected === "ru" ? true : false }>русский</LanguageContainer>
						<LanguageContainer isInHeader={ true } onClick={ () => storeLanguage("ar") } isActive={ languageDetected === "ar" ? true : false }>العربية</LanguageContainer>
					</RowAlign>
				</HeaderMenuItems>
			</HeaderMenuContainer>
		</CSSTransition>
	)
}

export default HeaderMenu;
