import React from 'react';

import { isMobile } from "react-device-detect";

import Image from 'next/image';
import Link from 'next/link';

import HeaderMenu from './HeaderMenu';
import menu_bar from '../../assets/images/menu_bar.svg';
import menu_bar_white from '../../assets/images/menu_bar_white.svg';

// import facebook from '../../assets/images/facebook.svg';
// import facebook_white from '../../assets/images/facebook_white.svg';

import facebook from '../../assets/images/facebook_update.svg';
import facebook_white from '../../assets/images/facebook_white_update.svg';

// import instagram from '../../assets/images/instagram.svg';
// import instagram_white from '../../assets/images/instagram_white.svg';

import instagram from '../../assets/images/instagram_update.svg';
import instagram_white from '../../assets/images/instagram_white_update.svg';

import twitter from '../../assets/images/twitter.svg';
import twitter_white from '../../assets/images/twitter_white.svg';

// import email from '../../assets/images/email.svg';
// import email_white from '../../assets/images/email_white.svg';

import email from '../../assets/images/mail_update.svg';
import email_white from '../../assets/images/mail_update_white.svg';

import logo from '../../assets/images/logo_golden.svg';
import logo_white from '../../assets/images/logo_white.svg';

import CovidStatusBar  from "./CovidStatusBar"

const {
	RowAlign
} = require('../../style/common/Common.Styled');

const {
	BookNowButton,
	HeaderContainer,
	HeaderLogo,
	HeaderMenuButton,
	HeaderMenuIcon,
	HeaderImageContainer,
	HeaderSticky,
	HeaderImageLogo
} = require('../../style/header/Header.Styled');

const {
	HomeVideo
} = require('../../style/home/Home.Styled');

const {

	LanguageContainer

} = require("../footer/Footer.Styled")

const Header = (props) => {

	const {

		languageDetected

	} = props
	const [ is_mobile, UpdateState ] = React.useState( false );
	const [ position, setPosition ] = React.useState(false);
	React.useEffect(() => {
		UpdateState( isMobile );
		window.addEventListener('scroll', () => {
            if( window.scrollY > 0 )
                setPosition(true);
            else
                setPosition(false);
        });
	},[]);
	const [ menu_expand, menuUpdate ] = React.useState(false);
	const closeMenu = (event) => {
		event.stopPropagation();
		menuUpdate( false );
	}
	const expandMenu = (event) => {
		event.stopPropagation();
		menuUpdate( true );
	}

	const storeLanguage = ( language ) => {

    	localStorage.setItem("language", language )
    	window.location.reload()

    }
	return(
		<HeaderContainer image={ props.image } isMobile={ props.isMobile }>
			<HeaderSticky position={ position } theme={ props.theme } isMobile={ props.isMobile }>
				<HeaderMenu
					closeMenu={ closeMenu }
					isMobile={ is_mobile }
					languageDetected={ languageDetected }
					menuExpand={ menu_expand }
					theme={ props.theme }
				/>
				<HeaderMenuButton isMobile={ is_mobile }>
					<RowAlign>
						<HeaderImageContainer>
							<Image src={ position ? menu_bar : menu_bar_white } alt="menu_icon" width={ 30 } height={ 30 }  onClick={ (event) => expandMenu(event) }/>
						</HeaderImageContainer>
						{
							!is_mobile &&
							<>
								<a href='https://www.instagram.com/kudavillingiliresort' target='_blank' rel="noreferrer">
									<HeaderImageContainer>
										<Image src={ position ? instagram : instagram_white } alt="instagram_icon" width={ 25 } height={ 25 } />
									</HeaderImageContainer>
								</a>
								<a href='https://www.facebook.com/kudavillingiliresort' target='_blank' rel="noreferrer">
									<HeaderImageContainer>
										<Image src={ position ? facebook : facebook_white } alt="facebook_icon" width={ 25 } height={ 25 } />
									</HeaderImageContainer>
								</a>
								<a href='mailto:reservations@kudavillingili.com' target='_blank' rel="noreferrer">
									<HeaderImageContainer>
										<Image src={ position ? email : email_white } alt="email_icon" width={ 25 } height={ 25 } />
									</HeaderImageContainer>
								</a>
								<RowAlign style={{ width: 200 }} alignCenter={ true } marginTop={ "0px" } isMobile={ props.isMobile } alignOverright={ true }>
									<LanguageContainer changeColor={ position } isInHeader={ true } onClick={ () => storeLanguage("en") } isActive={ languageDetected === "en" ? true : false }>English</LanguageContainer>
									<LanguageContainer changeColor={ position } isInHeader={ true } onClick={ () => storeLanguage("ru") } isActive={ languageDetected === "ru" ? true : false }>русский</LanguageContainer>
									<LanguageContainer changeColor={ position } isInHeader={ true } onClick={ () => storeLanguage("ar") } isActive={ languageDetected === "ar" ? true : false }>العربية</LanguageContainer>
								</RowAlign>
							</>
						}
					</RowAlign>
				</HeaderMenuButton>
				<Link href='/' passHref>
					<a>
						<HeaderLogo isMobile={ is_mobile } Left={ is_mobile ? '-70px' : '-119px' }>
							<HeaderImageLogo src={ position ? logo : logo_white } layout="fill" alt="logo_icon"/>
						</HeaderLogo>
					</a>
				</Link>
				<a href='https://be.synxis.com/?Hotel=36480&Chain=28812&Adult=2' target='_blank' rel="noreferrer">
					<BookNowButton position={ false } theme={ props.theme } isMobile={ is_mobile }>
						{

							languageDetected === "en" &&
							<div>Book Now</div>

						}
						{

							languageDetected === "ru" &&
							<div>Забронировать сейчас</div>

						}
						{

							languageDetected === "ar" &&
							<div>الحجز الآن</div>

						}
					</BookNowButton>
				</a>
			</HeaderSticky>
			{
				props.isHome && props.homeVideo !== '' &&
				<HomeVideo autoPlay loop muted playsInline image={ props.image }>
				    <source src={ props.homeVideo } type="video/mp4" />
				    Sorry, your browser doesn't support embedded videos.
				</HomeVideo>
			}
			<CovidStatusBar
				position={ position }
				isMobile={ is_mobile }
				languageDetected={ languageDetected }
			/>
		</HeaderContainer>
	)
}

export default Header;
