import styled, { keyframes } from 'styled-components';
import { isMobile } from "react-device-detect";
import CrossfadeCarousel from '@notbaldrick/react-crossfade-carousel'
import Image from 'next/image';

const slideInLeft = keyframes`
  	from {
    	-webkit-transform: translate3d(-100%, 0, 0);
    	transform: translate3d(-100%, 0, 0);
  	}
  	to {
    	-webkit-transform: translate3d(0, 0, 0);
    	transform: translate3d(0, 0, 0);
  	}
`;

const slideOutLeft = keyframes`
  	from {
    	-webkit-transform: translate3d(0, 0, 0);
    	transform: translate3d(0, 0, 0);
  	}
  	to {
    	-webkit-transform: translate3d(-100%, 0, 0);
    	transform: translate3d(-100%, 0, 0);
  	}
`;

export const CrossContainer = styled.div`
	cursor: pointer;
	padding-left: ${ props => props.isMobile ? '20px' : '40px'};
	padding-top: ${ props => props.isMobile ? '20px' : '40px'};
	position: relative;
`;
export const BookNowButton = styled.button`
	position: absolute;
	top: 30px;
	right: 30px;
	background-color: #C1A192;
	color: #fff;
	border: none;
	padding: 15px 30px;
	cursor: pointer;
	z-index: 2;
	transition: 0.4s;
	font-weight: 600;
	${ props => props.position && props.theme !== 'dark' &&`
		background-color: #FFF;
		color: #C1A192;
	`};
	${ props => props.isMobile && `
    	position: fixed;
    	bottom: 10px;
    	right: 10px;
    	top: unset;
    	z-index: 4;
    	border-radius: 50%;
    	width: 60px;
    	height: 60px;
    	padding: 10px;
    	font-size: 12px;
    	background-color: #C1A192;
		color: #fff;
	`};
`;
export const HeaderContainer = styled.div`
	width: 100vw;
	height: ${ props => props.isMobile  ? `50vh` : `100vh` };
	background-size: cover;
	background-image: url(${props => props.image });
	background-color: #dedede;
	background-position: center center;
	position: relative;
`;
export const HeaderImagesContainer = styled(CrossfadeCarousel)`
	width: 100vw;
	height: ${ props => props.isMobile  ? `50vh` : `100vh` };
	background-color: #dedede;
`;
export const HeaderLogo = styled.div`
	position: absolute;
    top: ${ props => props.isMobile ? '-37px' : '-20px' };
    margin-left: 50%;
    left: ${ props => props.Left };
    cursor: pointer;
    z-index: 2;
    &div:{
    	position: unset !important;
    }
    width: 250px;
	height: 160px;
    @media screen and (max-width: 900px) {
		width: 160px;
	}
`;
export const HeaderMenuButton = styled.div`
	position: absolute;
	top: ${ props => props.isMobile ? '20px' : '35px' };
	left: ${ props => props.isMobile ? '20px' : '30px' };
	cursor: pointer;
	z-index: 2;
`;
export const HeaderMenuContainer = styled.div`
 	width: ${ props => props.isMobile ? '100%' : '35vw'};
	height: 100vh;
	background: #CFBfB4;
	z-index: 5;
	position: relative;
	-webkit-transform: translate3d(-100%, 0, 0);
	transform: translate3d(-100%, 0, 0);
 	&.page-enter {
	    animation: ${slideInLeft} 0.2s forwards;
	}
	&.page-enter-done {
	    -webkit-transform: translate3d(0, 0, 0);
    	transform: translate3d(0, 0, 0);
	}
	&.page-exit {
	    animation: ${slideOutLeft} 0.2s forwards;
	}
	&.page-exit-done {
	    -webkit-transform: translate3d(-100%, 0, 0);
    	transform: translate3d(-100%, 0, 0);
	}
`;
export const HeaderMenuIcon = styled.img`
	width: 20px;
	height: 20px;
`;
export const HeaderMenuItems = styled.ul`

	padding-left: ${ props => props.isMobile  ? '40px' : '80px' };
    list-style-type: none;
    margin: 0;
    padding-top: ${ props => props.isMobile  ? '40px' : '80px' };
    ${

    	props => props.languageDetected === "ar" && `

    		direction: rtl;

    	`

    }

`
export const HeaderMenuItem = styled.li`
	color: #fff;
	font-size: 30px;
	font-weight: 300;
	width: auto;
    margin-top: 10px;
    cursor: pointer;
    transition: 0.4s;
    &:hover{
    	color: #222226;
    	transform: translateX(20px);
    }
`;

export const HeaderImageContainer = styled.div`
	width: 35px;
	height: 35px;
	margin-right: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const HeaderSticky = styled.div`
    width: 100%;
    height: 105px;
    z-index: 4;
    transition: 0.4s;
    position: fixed;
    top: 0;
    ${ props => props.position && props.theme !== 'dark' &&`
		background-color: #FFF;
    	position: fixed;
    	top: 0;
    	border-bottom: 1px solid #C1A192;
	`}
	${ props => props.position && props.theme === 'dark' &&`
		background-color: #FFF;
    	position: fixed;
    	border-bottom: 1px solid #C1A192;
    	top: 0;
	`}
	${ props => props.isMobile && `
		height: 75px;
	`}
`;

export const HeaderImageLogo = styled(Image)`
	object-fit: contain;
    width: 160px;
    position: relative !important;
    height: 36px;
`;


export const CovidStatusBarContainer = styled.div`

	background-color: #C1A192;
    color: #fff;
    display: none;
    font-size: 12px;
    padding: 10px;
    position: fixed;
    text-align: center;
    top: 105px;
    width: 100vw;
    z-index: 3;

    ${ props => props.position && `

    	display: block;

	`}
	${ props => props.isMobile && `

    	top: 75px;

	`}

`

export const CovidStatusBarCloseIcon = styled.div`
	
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;

`
