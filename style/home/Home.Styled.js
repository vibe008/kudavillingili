import styled from 'styled-components';
import CrossfadeCarousel from '@notbaldrick/react-crossfade-carousel'

export const AccomodationDescriptionContainer = styled.div`
	width: ${ props => props.isMobile ? '100%' : '40vw' };
	height: ${ props => props.isMobile ? 'auto' : '500px' };
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;
export const AccomodationDescriptionTextContainer = styled.div`
	width: ${ props => props.isMobile ? '100%' : '50%' };
	margin-left: ${ props => props.isMobile ? 'unset' : '50px' };
	margin-bottom: ${ props => props.isMobile ? 'unset' : '50px' };
	${ props => props.isMobile && `
		padding: 20px;
	`};
`;
export const AccomodationHeadingContainer = styled.div`
	width: ${ props => props.isMobile ? '100%' : '60vw' };
	height: ${ props => props.isMobile ? 'auto' : '500px' };
	background: #EFEDE8;
	display: flex;
	flex-direction: column;
	justify-content: center;
	${ props => props.height && `
		height: ${ props.height };
	`}
`;
export const AccomodationHeadingTextContainer = styled.div`
	margin-left: ${ props => props.isMobile ? 'unset' : '25%' };
	width: ${ props => props.isMobile ? '100%' : '55%' };
	${ props => props.isMobile && `
		padding: 0px 20px;
	`};
`;


export const ExploreCTA = styled.a`
	display: flex;
	align-self: center;
	justify-self: center;
	position: absolute;
	z-index: -1;
	color: #fff;
	font-size: 16px;
	background-color: #C1A192;
	padding: 10px 20px;
	font-weight: 500;
`;
export const ImagesContainer = styled.div`
	width: 100%;
	margin-top: ${ props => props.isMobile ? '20px' : '80px' };
	padding-bottom: ${ props => props.isMobile ? '20px' : '80px' };
`;
export const ImageRow = styled.div`
	display: flex;
	flex-direction: ${ props => props.isMobile ? 'column' : 'row' };
	${ props => props.marginTop && `
		margin-top: ${ props.isMobile ? '0' : props.marginTop }
	`};
`;
export const ImageHoverText = styled.div`
	color: #fff;
	position: absolute;
	font-size: 24px;
	z-index: 2;
    width: calc(100% - 60px);
    text-align: center;
    bottom: 40px;
	${ props => props.isMobile && `
		font-size: 20px;
	`}
`;
export const BackgroundCover = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(34,34,36,0.2);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	${ props => props.isMobile && `
		z-index: 1;
	`}
`;
export const ImagesByTwo = styled.img`
	width: 100%;
	height: ${ props => props.isMobile ? '200px' : '400px'};
	object-fit: cover;
	${ props => props.marginRight && `
		margin-right: ${ props.marginRight }
	`};
	background-color: #dedede;
	background-position: center center;
	line-height: 0;
	transition: all .5s;
`;
export const ImageContainer = styled.div`
	width: ${ props => props.isMobile ? `100vw` : `calc(( 100% - 10px )/2)`};
	height: ${ props => props.isMobile ? '200px' : '400px'};
	${ props => props.marginRight && `
		margin-right: ${ props.marginRight }
	`};
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    &:hover{
    	${ImageHoverText}{
    		z-index: 3;
    	}
    	${BackgroundCover}{
    		z-index: 2;
    		background-color: rgba(34,34,36,0.4);
    	}
    	${ImagesByTwo}{
    		transform: scale(1.1);
    	}
    	${ExploreCTA}{
    		z-index: 3;
    	}
    }
`;
export const ImagesByThree = styled.img`
	width: 100%;
	height: ${ props => props.isMobile ? '200px' : '400px'};
	object-fit: cover;
	${ props => props.marginRight && `
		margin-right: ${ props.marginRight }
	`};
	background-color: #dedede;
	background-position: center center;
	transition: all .5s;
`;
export const ImageContainerByThree = styled.div`
	width: ${ props => props.isMobile ? `100vw` : `calc(( 100% - 20px )/3)`};
	height: ${ props => props.isMobile ? '200px' : '400px'};
	${ props => props.marginRight && `
		margin-right: ${ props.marginRight }
	`};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    &:hover{
    	${ImageHoverText}{
    		z-index: 3;
    	}
    	${BackgroundCover}{
    		z-index: 2;
    		background-color: rgba(34,34,36,0.4);
    	}
    	${ImagesByThree}{
    		transform: scale(1.1);
    	}
    	${ExploreCTA}{
    		z-index: 3;
    	}
    }
`;

export const HomeDiningContainer = styled.div`
	height: ${ props => props.isMobile ? `auto` : `60vh`};
	${ props => props.backgroundColor && `
		background-color: ${ props.backgroundColor };
	`};
	display: flex;
	justify-content: center;
	position: relative;
	${ props => props.isMobile && `
		flex-direction: column;
	`};
	${ props => props.heightAuto && `
		height: 100vh !important;
	`};
`;
export const HomeDiningImage = styled.div`
	width: ${ props => props.isMobile ? `100%` : `50vw`};
	position: ${ props => props.isMobile ? `relative` : `absolute`};
	background: url(${ props => props.background });
	background-size: cover;
	height: ${ props => props.isMobile ? `70vw` : `60vh` };
	right: 0;
	top: ${ props => props.isMobile ? `20px` : `100px` };
	z-index: 1;
	background-color: #dedede;
	background-position: center center;
`;
export const HomeDiningTextContainer = styled.div`
	width: ${ props => props.isMobile ? `calc(100% - 40px)` : `40%`};
`;
export const HomeDiningType = styled.div`
	width: ${ props => props.isMobile ? `100%` : `100vw`};;
	position: ${ props => props.isMobile ? `relative` : `relative`};
	background-color: ${ props => props.isMobile ? '#D6D1C5' : '#D6D1C5'};;
	height: ${ props => props.isMobile ? `100%` : `70vh`};
	padding: ${ props => props.isMobile ? `20px` : `30px`};
	justify-content: ${ props => props.isMobile ? 'unset' : 'space-between'};
	display: flex;
	flex-direction: column;
	left: ${ props => props.isMobile ? `0px` : `20vw`};
`;

export const HomeDiningTitle = styled.div`
	background: url(${ props => props.background }) no-repeat;
    background-size: auto 65px;
    height: 65px;
    ${ props => props.isMobile && `
    	text-align: center;
    	background-size: auto 45px;
    	height: 45px;
    	background-position: center;
    	margin-top: 20px;
	`}
`;
export const HomeExperiencesImage = styled(CrossfadeCarousel)`
	background: url(${ props => props.background });
	background-size: cover;
	width: ${ props => props.isMobile ? `100vw` : `70vw`};
	height: ${ props => props.isMobile ? `70vw` : `80vh`};
	background-color: #dedede;
	background-color: #dedede;
	background-position: center center;
`;
export const HomeExperiencesBand = styled.div`
	background-color: #f5f5f5;
	width: 100%;
	height: 50vh;
	position: absolute;
	top: 25vh;
	z-index: -1;
	${ props => props.isMobile && `
		display: none;
	`};
`;
export const HomeExperiencesTextContainer = styled.div`

	width: ${ props => props.isMobile ? `100%` : `30vw`};
	height: ${ props => props.isMobile ? 'auto' : `40vh`};
	position: ${ props => props.isMobile ? `relative` : `absolute`};
	background-color: #8096A4;
	top: ${ props => props.isMobile ? `0px` : `50vh`};
	padding: 20px;
	right: ${ props => props.isMobile ? `0px` : `10vw`};
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	z-index: 1;
	${

		props => props.languageDetected === "ar" && `

			direction: rtl;

		`
		
	}
`;
export const HomeImage = styled.div`
	width: ${ props => props.isMobile ? `100vw` : `100%`};
	height: ${ props => props.isMobile ? `70vw` : `100%`};
	background: url(${ props => props.background });
	background-size: cover;
	background-position: center bottom;
	background-color: #dedede;
`;
export const HomeRoomName = styled.div`
	color: #fff;
	position: absolute;
	bottom: ${ props => props.isMobile ? '-10px' : '-16px'};
	font-size: ${ props => props.isMobile ? '28px' : '48px'};
	margin-left: ${ props => props.isMobile ? `20px` : '200px'};
	${ props => props.heightModify && `
		bottom: -5px;
	`};
`;
export const HomeRoomDescriptionContainer = styled.div`
	height: ${ props => props.isMobile ? `auto` : `40vh`};
	margin-left: ${ props => props.isMobile ? `unset` : `200px`};
	width: ${ props => props.isMobile ? `100%` : `50vw`};
	${ props => props.isMobile && `
		padding: 20px;
	`}
	${

		props => props.languageDetected === "ar" && `

			// display: flex;
			// align-items: flex-end;
			// flex-direction: column;

		`

	}
`;


export const HomeVideo = styled.video`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100%;
	z-index: 1;
	object-fit: cover;
`;

export const HomeDiningLocationLogo = styled.div`
	width: auto;
	background: url(${ props => props.background }) no-repeat;
	background-size: cover;
    height: 40px;
    background-size: auto 40px;
    background-position: left;
    margin-top: 50px;
    ${
    	props => props.isMobile && `
    		height: 30px;
    		background-size: auto 30px;
    		margin-top: 40px;
    		background-position: center;
    	`
    }
`;
export const CarouselImage = styled.img`
	width: 100vw;
	height: 70vw;
	display: flex;
	object-fit: cover;
	background-color: #dedede;
`;
export const CarouselText = styled.div`
	padding: 20px;
	font-size: 16px;
	font-weight: 500;
	color: #C1A292;
	padding-top: 60px;
	padding-bottom: 30px;
    background-color: #fff;
    ${
    	props => props.paddingTop && `
    		padding-top: ${ props.paddingTop }
    	`
    }
`;

export const CarouselOutletLogo = styled.div`
	z-index: 1;
	width: 100%;
	background: url(${ props => props.background }) no-repeat;
	height: 75px;
	background-size: auto 75px;
	background-position: center;
	${ props => props.zIndex && `
		background: url(${props.background }) no-repeat;
		background-size: auto 75px;
		background-position: center;
	`}
	${ props => props.isMobile && `
		z-index: 2;
		color: #fff;
		background: url(${props.background }) no-repeat;
		background-size: auto 45px;
		background-position: center;
	`};
	${ props => props.width && `
		background-size: ${ props.width };
		width: ${ props.width };
	`};
	margin-top: 40px;
`;

