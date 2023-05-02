import styled, { keyframes } from 'styled-components';
import CrossfadeCarousel from '@notbaldrick/react-crossfade-carousel'

const Dissolve = keyframes`
  	0% {
    	opacity:1;
  	}
  	17% {
    	opacity:1;
  	}
  	25% {
    	opacity:0;
  	}
	92% {
    	opacity:0;
  	}
  	100% {
    	opacity:1;
  	}
`;

export const ExperienceChildren = styled.div`
	margin-top: ${ props => props.isMobile ? '0px' : '150px' };
	${ props => props.isMobile && `
		padding: 20px;
	`};
	${ props => props.marginTop && `
		margin-top: ${ props.isMobile } ? 'unset' : ${props.marginTop} !important;
	`}
`;

export const ExperienceChildrenMobile = styled.div`
`;

export const ExperienceChildrenImage = styled(CrossfadeCarousel)`
	height: ${ props => props.isMobile ? '200px' : `500px`};;
	width: ${ props => props.isMobile ? '100%' : `800px`};
	background-position: center center;
	background-color: #dedede;
`;

export const ExperienceChildrenImageMobile = styled(CrossfadeCarousel)`
	height: 70vw;
	width: 100vw;
	background-position: center center;
	background-color: #dedede;
`;

export const ExperienceChildrenImageSolo = styled.div`
	height: 500px;
	width: ${ props => props.isMobile ? '100%' : `800px`};
	background-position: center center;
	background-color: #dedede;
	background: url(${ props => props.background });
	background-size: cover;
`;
export const ExperienceChildrenDescription = styled.div`
	width: ${ props => props.isMobile ? '100%' : `500px`};
	position: ${ props => props.isMobile ? 'relative' : 'absolute' };
	right: 0;
	background-color: #F0EFE9;
	height: ${ props => props.isMobile ? 'auto' : `400px`};
	padding: ${ props => props.isMobile ? '20px' : `40px`};
`;
export const ExperienceHeader = styled.div`
	background-color: #f5f5f5;
	height: ${ props => props.isMobile ? 'unset' : `80vh` };
	width: ${ props => props.isMobile ? `calc(100vw - 40px)` : `100vw` };;
	display: flex;
	justify-content: center;
	position: relative;
	${ props => props.marginTop && `
		margin-top: ${ props.isMobile ? '0px' : props.marginTop }
	`};
	${ props => props.isMobile && `
		flex-direction: column;
		margin-left: 20px;
	`};
`;
export const ExperienceLeisureHeader = styled.div`
	background-color: #f5f5f5;
	height: ${ props => props.isMobile ? 'unset' : `70vh` };
	width: ${ props => props.isMobile ? `calc(100vw - 40px)` : `100vw` };;
	display: flex;
	justify-content: center;
	position: relative;
	${ props => props.marginTop && `
		margin-top: ${ props.isMobile ? '0px' : props.marginTop }
	`};
	${ props => props.isMobile && `
		flex-direction: column;
		margin-left: 20px;
	`};
`;

export const ExperienceLeisureHeaderMobile = styled.div`
	height: ${ props => props.isMobile ? 'unset' : `70vh` };
	width: ${ props => props.isMobile ? `100vw` : `100vw` };;
	display: flex;
	justify-content: center;
	position: relative;
	${ props => props.marginTop && `
		margin-top: ${ props.isMobile ? '0px' : props.marginTop }
	`};
	${ props => props.isMobile && `
		flex-direction: column;
		margin-bottom: 40px;
	`};
`;

export const ExperienceGamesAndSports = styled.div`
	height: ${ props => props.isMobile ? 'auto' : `100vh`};
	width: ${ props => props.isMobile ? '100%' : `100vw`};
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 300px;
	${ props => props.isMobile && `
		flex-direction: column;
		padding: 20px;
		margin-top: unset;
	`};
`;
export const ExperienceGamesAndSportsDescription = styled.div`
	width: ${ props => props.isMobile ? '100%' : '700px' };
	position: ${ props => props.isMobile ? 'relative' : 'absolute' };
	background-color: #F0EFE9;
	height: ${ props => props.isMobile ? 'auto' : '400px' };
	padding: ${ props => props.isMobile ? '20px' : '40px' };
	${ props => !props.isMobile && `
		top: 150px;
		left: 10vw;
	`};
`;
export const ExperienceGamesAndSportsImage = styled.div`
	background: url(${ props => props.background });
	background-size: cover;
	height: ${ props => props.isMobile ? '200px' : '400px'};
	width: ${ props => props.isMobile ? '100%' : `700px`};
	${ props => !props.isMobile && `
		top: 400px;
		position: absolute;
		right: 10vw;
	`};
	background-position: center center;
	background-color: #dedede;
`;
export const ExperienceHeaderPool = styled.div`
	background: url(${ props => props.background });
	background-size: cover;
	height: 500px;
	width: ${ props => props.isMobile ? '100%' : `800px`};
	position: ${ props => props.isMobile ? `relative` : `absolute` };
	${ props => props.isMobile && `
		margin-top: 20px;
	`};
	${ props => !props.isMobile && `
		top: 500px;
	`};
	background-position: center center;
`;
export const ExperienceHeaderPoolBody = styled.div`
	background: url(${ props => props.background });
	background-size: cover;
	height: 500px;
	width: ${ props => props.isMobile ? '100%' : '1000px' };
	margin-top: ${ props => props.isMobile ? '20px' : '100px' };
	background-position: center center;
`;
export const ExperiencePool = styled.div`
	margin-top: ${ props => props.isMobile ? '20px' : '80px' };
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	${ props => props.isMobile && `
		padding: 20px
	`};
	${ props => props.marginTop && `
		margin-top: ${props.marginTop} !important;
	`}
`;
export const ExperiencePoolDescription = styled.div`
	width: ${ props => props.isMobile ? `calc(100% - 40px)` : '725px'};
	text-align: center;
`;

export const ExperienceWellnessSpaImage = styled.div`
	background: url(${ props => props.background });
	background-size: cover;
	height: ${ props => props.isMobile ? '200px' : '500px' };
	width: ${ props => props.isMobile ? '100%' : '800px' };
	position: ${ props => props.isMobile ? 'relative' : 'absolute' };
	top: ${ props => props.isMobile ? 'unset' : '500px' };
	right: 0;
	background-position: center center;
	background-color: #dedede;
`;
export const ExperienceWellnessNewPoolImage = styled.div`
	background: url(${ props => props.background });
	background-size: cover;
	height: ${ props => props.isMobile ? '200px' : '500px' };
	width: ${ props => props.isMobile ? '100%' : '800px' };
	position: ${ props => props.isMobile ? 'relative' : 'absolute' };
	top: ${ props => props.isMobile ? 'unset' : '400px' };
	left: 0;
	background-position: center center;
	background-color: #dedede;
`;
export const ExperienceWellnessNewPoolImageMobile = styled.div`
	background: url(${ props => props.background });
	background-size: cover;
	height: 70vw;
	width: 100vw;
	position: ${ props => props.isMobile ? 'relative' : 'absolute' };
	top: ${ props => props.isMobile ? 'unset' : '400px' };
	left: 0;
	background-position: center center;
	background-color: #dedede;
`;
export const ExperienceWellnessSpaContainer = styled.div`
	margin-top: 300px;
	position: relative;
`;
export const ExperienceWellnessSpaDescription = styled.div`
	width: ${ props => props.isMobile ? '100%' : '600px' };
	position: ${ props => props.isMobile ? 'relative' : 'absolute' };
	left: ${ props => props.isMobile ? '0px' : '10vw' };
	background-color: #F0EFE9;
	height: ${ props => props.isMobile ? 'auto' : '700px' };
	padding: ${ props => props.isMobile ? '20px' : '40px' };
    padding-right: ${ props => props.isMobile ? '20px' : '130px' };
    top: ${ props => props.isMobile ? '0px' : '350px' };
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const ExperienceWellnessNewPoolDescription = styled.div`
	width: ${ props => props.isMobile ? '100%' : '600px' };
	position: ${ props => props.isMobile ? 'relative' : 'absolute' };
	right: ${ props => props.isMobile ? '0px' : '10vw' };
	background-color: #F0EFE9;
	height: ${ props => props.isMobile ? 'auto' : 'auto' };
	padding: ${ props => props.isMobile ? '20px' : '40px' };
    padding-right: ${ props => props.isMobile ? '20px' : '130px' };
    top: ${ props => props.isMobile ? '0px' : '500px' };
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const ExperienceWellnessFitness = styled.div`
	height: ${ props => props.isMobile ? 'auto' : '100vh' };
	width: ${ props => props.isMobile ? '100%' : '100vw' };
	display: flex;
	justify-content: flex-end;
	${ props => props.isMobile && `
		flex-direction: column;
		margin-top: 20px;
	`};
`;
export const ExperienceWellnessFitnessImage = styled.div`
	background: url(${ props => props.background });
	background-size: cover;
	height: ${ props => props.isMobile ? '200px' : '350px'};
	width: ${ props => props.isMobile ? '100%' : '600px' };
	background-color: #dedede;
	background-position: center center;
`;
export const ExperienceWellnessFitnessDescription = styled.div`
	width: ${ props => props.isMobile ? '100%' : '50%' };
	padding: ${ props => props.isMobile ? '20px' : '80px' };
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: ${ props => props.isMobile ? 'row' : 'column' };
	height: ${ props => props.isMobile ? 'auto' : '350px' };
	text-align: center;
	${ props => props.isMobile && `
		flex-direction: column;
	`};
`;
export const ExperienceWellnessWellBeing = styled.div`
	height: ${ props => props.isMobile ? 'auto' : '100vh' };
	width: ${ props => props.isMobile ? '100%' : '100vw' };
	display: flex;
	justify-content: flex-start;
	position: relative;
	${ props => props.isMobile && `
		flex-direction: column;
	`};
`;
export const ExperienceWellnessWellBeingDescription = styled.div`
	width: ${ props => props.isMobile ? '100%' : '600px' };
	position: ${ props => props.isMobile ? 'relative' : 'absolute' };
	left: ${ props => props.isMobile ? 'unset' : '10vw' };
	background-color: #F0EFE9;
	height: ${ props => props.isMobile ? 'auto' : '350px' };
	padding: ${ props => props.isMobile ? '20px' : '40px' };
    padding-right: ${ props => props.isMobile ? 'unset' : '130px' };
    top: ${ props => props.isMobile ? 'unset' : '150px' };
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
export const ExperienceWellnessWellBeingImage = styled.div`
	background: url(${ props => props.background });
	background-size: cover;
	height: ${ props => props.isMobile ? '200px' : '500px' };
	width: ${ props => props.isMobile ? '100%' : '800px' };
	position: ${ props => props.isMobile ? 'relative' : 'absolute' };
	top: ${ props => props.isMobile ? 'unset' : '200px' };
	right: ${ props => props.isMobile ? 'unset' : '0' };
	background-color: #dedede;
	background-position: center center;
`;

export const ExperienceWeeklyEntertainmentContainer = styled.div`
	width: ${ props => props.isMobile ? '100%' : '600px' };
	position: ${ props => props.isMobile ? 'relative' : 'absolute' };
	left: ${ props => props.isMobile ? 'unset' : '10vw' };
	background-color: #F0EFE9;
	padding: ${ props => props.isMobile ? '20px' : '40px' };
    top: ${ props => props.isMobile ? 'unset' : '55vh' };
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    z-index: 1;
`;
export const ExperienceWeeklyEntertainmentImage = styled(CrossfadeCarousel)`
	height: ${ props => props.isMobile ? '200px' : '600px' };
	width: ${ props => props.isMobile ? '100%' : '60vw' };
	position: ${ props => props.isMobile ? 'relative' : 'absolute' };
	top: ${ props => props.isMobile ? 'unset' : '500px' };
	right: ${ props => props.isMobile ? 'unset' : '0' };
	background-color: #dedede;
	background-position: center right;
`;

export const ExperienceWaterActivitiesContainer = styled.div`
	width: ${ props => props.isMobile ? '100%' : '600px' };
	position: ${ props => props.isMobile ? 'relative' : 'absolute' };
	right: ${ props => props.isMobile ? 'unset' : '10vw' };
	background-color: #708DA1;
	padding: ${ props => props.isMobile ? '20px' : '40px' };
    top: ${ props => props.isMobile ? 'unset' : '60vh' };
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    z-index: 1;
`;
export const ExperienceWaterActivitiesImage = styled.div`
	background: url(${ props => props.background });
	background-size: cover;
	height: ${ props => props.isMobile ? '200px' : '600px' };
	width: ${ props => props.isMobile ? '100%' : '70vw' };
	position: ${ props => props.isMobile ? 'relative' : 'absolute' };
	top: ${ props => props.isMobile ? 'unset' : '350px' };
	left: ${ props => props.isMobile ? 'unset' : '0' };
	background-position: center center;
`;

export const ExperienceRetailVillage = styled.div`
	height: ${ props => props.isMobile ? 'auto' : 'auto' };
	width: ${ props => props.isMobile ? '100%' : '100vw;' };
	position: relative;
	margin-bottom: ${ props => props.isMobile ? 'unset' : '150px' };
`;
export const ExperienceRetailVillageContainer = styled.div`
	height: ${ props => props.isMobile ? 'auto' : 'auto' };
	width: ${ props => props.isMobile ? '100%' : '100vw' };;
	display: flex;
	justify-content: flex-end;
	margin-top: ${ props => props.isMobile ? 'unset' : '520px' };
`;

export const ExperienceScubaDivingContainer = styled.div`
	background-color: #708DA1;
	height: ${ props => props.isMobile ? 'auto' : '100vh' };
	width: ${ props => props.isMobile ? '100%' : '100vw' };
	display: flex;
	align-items: center;
	justify-content: center;
	${ props => props.isMobile && `
		flex-direction: column;
	`};
`;
export const ExperienceScubaDivingImage = styled.div`
	background: url(${ props => props.background });
	background-size: cover;
	height: ${ props => props.isMobile ? '200px' : '70vh' };;
	width: ${ props => props.isMobile ? '100%' : '60vw' };;
	background-position: center center;
	background-color: #dedede;
`;
export const ExperienceScubaDivingTextContainer = styled.div`
	height: ${ props => props.isMobile ? 'auto' : '70vh' };
	width: ${ props => props.isMobile ? '100%' : '35vw' };
	margin-left: ${ props => props.isMobile ? 'unset' : '10vw' };
	display: flex;
	align-items: center;
	padding-right: ${ props => props.isMobile ? 'unset' : '40px' };
	flex-direction: column;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	${ props => props.isMobile && `
		padding: 20px;
	`};
`;

export const ExperienceScubaSnorkelling = styled.div`
	background: url(${ props => props.background });
	background-size: cover;
	height: ${ props => props.isMobile ? '80vh' : '100vh' };
	width: ${ props => props.isMobile ? '100%' : '100vw' };
	position: relative;
	background-position: center center;
`;
export const ExperienceScubaSnorkellingContainer = styled.div`
	width: ${ props => props.isMobile ? '100%' : '40vw' };
	height: ${ props => props.isMobile ? 'auto' : '40vh' };
	padding: ${ props => props.isMobile ? '20px' : '40px' };
	background-color: rgba(22,22,26,0.8);
	position: absolute;
	bottom: ${ props => props.isMobile ? '0' : '5vw' };
	right: ${ props => props.isMobile ? 'unset' : '5vw' };
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

export const ExperienceWellnessWaterSports = styled.div`
	display: flex;
	flex-direction: ${ props => props.isMobile ? 'column' : 'row' };
	margin-top: ${ props => props.isMobile ? 'unset' : '50vh' };
	margin-bottom: ${ props => props.isMobile ? 'unset' : '10vh' };
`;

export const ExperienceWaterSportsButton = styled.button`
	width: ${ props => props.isMobile ? 'unset' : `250px` };
    margin-top: 20px;
    border: none;
    background-color: #C1A292;
    padding: 15px 30px;
    font-size: 18px;
    color: #fff;
    font-family: 'Lunfga', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 300;
    cursor: pointer;
    &:hover{
    	background-color: #C1A292;
    }
    ${ props => props.isWater && `
    	background-color: #708DA1;
    	&:hover{
    		background-color: #708DA1;
    	}
	`}
    ${ props => props.isMobile && `
	    align-self: flex-start;
	    font-size: 14px;
	    padding: 10px 20px;
	    margin-bottom: ${ props.marginBottom };
	    margin-left: 20px;
	`}
`;

export const KudavillingiliButton = styled.button`
	width: ${ props => props.isMobile ? 'unset' : `280px` };
    margin-top: 20px;
    border: none;
    background-color: #C1A192;
    padding: 15px 30px;
    font-size: 18px;
    color: #fff;
    font-family: 'Lunfga', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 300;
    cursor: pointer;
    &:hover{
    	background-color: #C1A292;
    }
    ${ props => props.isMobile && `
	    align-self: flex-start;
	    font-size: 14px;
	    padding: 10px 20px;
	    margin-bottom: ${ props.marginBottom };
	    margin-left: 20px;
	`}
`;

export const ExperienceTitleContainerMobile = styled.div`
	background-color: ${ props => props.water ? '#8096A4' : '#C1A192' };
    margin: 0 20px;
    text-align: center;
    margin-top: -26px;
    z-index: 2;
    ${
    	props => props.dark && `
    		background-color: #708DA1;
    	`
    }
    ${
    	props => props.color && `
    		background-color: ${ props.color };
    	`
    }

	{/*FRESH CSS FOR THIS COMONENT- OVERWRITE USING !IMPORTANT*/}
	margin-top: 10px;
	background-color: unset;
	text-align: unset;
`;

export const ExperienceTitleTextMobile = styled.h2`
	color: #fff;
    font-weight: 300;
    font-size: 18px;
    text-align: center;
    ${
    	props => props.color && `
    		color: #fff !important;
    	`
    }
    {/*FRESH CSS FOR THIS COMONENT- OVERWRITE USING !IMPORTANT*/}
    color: #C1A192 !important;
    font-weight: 500;
    ${
    	props => props.isWater && `
    		color: #708DA1 !important;
    	`
    }
`;

export const ExperienceWellnessNewPoolDescriptionMobile = styled.div`
	width: calc(100% - 40px);
	position: relative;
	background-color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 20px;
`;

export const BodyTextMobile = styled.div`
	color: ${ props => props.isMobile ? '#666' : '#919093' };
	font-size: 14px;
	font-weight: 300;
	text-align: left;
	padding: 20px 0;
	padding-top: 0px;
`;


export const ExperienceContainer = styled.div`
	padding: 100px 0;
	width: ${ props => props.isMobile ? '100%' : '100vw' };
	display: flex;
	align-items: center;
	${ props => props.isMobile && `
		flex-direction: column;
	`};
	${ props => props.positionChange && `
		position: ${ props.positionChange };
	`};
	${ props => props.positionTop && `
		top: ${ props.positionTop };
	`};
`;
export const ExperienceImageAlign = styled.div`
	background: url(${ props => props.background });
	background-size: cover;
	height: ${ props => props.isMobile ? '200px' : '550px' };
	width: ${ props => props.isMobile ? '100%' : '60vw' };
	background-color: #dedede;
	background-position: center center;
`;
export const ExperienceDescription = styled.div`
	padding: 20px 60px;
	width: ${ props => props.isMobile ? '100%' : '40vw' };
	justify-self: flex-end;
	align-self: flex-end;
	${

		props => props.languageDetected === "ar" && `

			align-items: flex-end;
		    display: flex;
		    flex-direction: column;
		    text-align: right;

		`

	}
`;
export const ExperienceImageCarousel = styled(CrossfadeCarousel)`
	height: ${ props => props.isMobile ? '200px' : '550px' };
	width: ${ props => props.isMobile ? '100%' : '60vw' };
	background-color: #dedede;
	background-position: center center;
`;

export const SectionHeader = styled.div`
	background-color: ${ props => props.marine ? '#708DA1' : '#f5f5f5' };
	height: 70vh;
	justify-content: center;
	align-items: center;
`;

export const EssenceMaldivesImage = styled.div`
	background: url(${ props => props.background });
    background-size: 120px;
    background-repeat: no-repeat;
	width: 180px;
	height: 25px;
	background-position: center center;
	${ props => props.isMobile && `
		margin-left: 20px;
		margin-bottom: 10px;
		width: 140px;
		height: 19px;
	`}
	${ props => props.height && `
		height: ${ props.height };
	`}
	${ props => props.size && `
		background-size: ${ props.size } !important;
	`}
`;
