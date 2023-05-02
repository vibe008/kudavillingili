import styled from 'styled-components';

export const BeachClubContainer = styled.div`
	position: relative;
	height: ${ props => props.isMobile ? 'auto' : '100vh'};
`;
export const BeachClubDescriptionContainer = styled.div`
	width: ${ props => props.isMobile ? '100%' : '50%'};
	margin-top: ${ props => props.isMobile ? '0px' : 'unset'};
	${ props => props.isMobile && `
		padding: 20px;
	`};
`;
export const BeachClubImageContainer = styled.div`
	position: relative;
	height: ${ props => props.isMobile ? '400px' : '80vh'};
	background: url(${ props => props.image });
	background-size: cover;
	background-color: #dedede;
	background-position: center center;
`;
export const BeachClubDisplayImageContainer = styled.div`
	position: ${ props => props.isMobile ? 'relative' : 'absolute'};
	left: ${ props => props.isMobile ? 'unset' : '50%'};
	margin-left: ${ props => props.isMobile ? 'unset' : '-35vw'};
	width: ${ props => props.isMobile ? '100vw' : '70vw'};
	height: ${ props => props.isMobile ? '70vw' : '40vw'};
	background: url(${ props => props.image });
	background-size: cover;
	background-position: center center;
	margin-top: ${ props => props.isMobile ? 'unset' : '-10vw'};
	background-color: #dedede;
	${ props => props.isMobile && `
		display: block;
		margin-top: 10px;
	`};
`;
export const BeachClubLine = styled.div`
	position: ${ props => props.isMobile ? 'relative' : 'absolute'};
	left: 50%;
	margin-left: -2px;
	width: 4px;
	height: 20vw;
	margin-top: -20vw;
	background-color: #C1A292;
	${ props => props.isMobile && `
		display: none;
	`};
`;
export const BeachClubDownloadMenu = styled.div`
	position: ${ props => props.isMobile ? 'relative' : 'absolute'};
	width: ${ props => props.isMobile ? `calc(50vw)` : '200px'};
	left: ${ props => props.isMobile ? 'unset' : '50%'};
	margin-left: ${ props => props.isMobile ? 'unset' : '-100px'};
	bottom: 5vh;
	border: 1px solid #C1A292;
	height: ${ props => props.isMobile ? '40px' : '45px'};
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #C1A292;
	cursor: pointer;
	${ props => props.zIndex && `
		z-index: 2;
	`};
	&:hover{
		background: #C1A292;
		color: #FFF;
	}
	${ props => props.isMobile && `
		background: #C1A292;
		color: #FFF;
		margin: 20px auto 40px;
		font-size: 14px;
		position: unset;
	`};
	${

		props => props.noBottom && `

			margin-bottom: unset;

		`
		
	}
`;

export const CigarLoungeImage = styled.div`
	background: url(${ props => props.background });
	background-size: cover;
	width: ${ props => props.isMobile ? '100%' : '900px'};
	height: ${ props => props.isMobile ? '400px' : '500px'};
	margin-top: ${ props => props.isMobile ? '20px' : '100px'};
	background-position: center center;
	background-color: #dedede;
`;
export const CigarLoungePrivateEventsContainer = styled.div`
	width: ${ props => props.isMobile ? '100%' : '90%'};
	margin-left: ${ props => props.isMobile ? 'unset' : '10%'};
	padding-bottom: ${ props => props.isMobile ? '20px' : '120px'};
`;
export const CigarLoungePrivateEventsImage = styled.img`
	width: 100%;
	height: ${ props => props.isMobile ? '400px' : '600px'};
	object-fit: cover;
	margin-top: ${ props => props.isMobile ? '20px' : '100px'};
	background-position: center center;
	background-color: #dedede;
`;
export const CuisineDescriptionContainer = styled.div`
	color: #fff;
	width: ${ props => props.isMobile ? '100%' : `calc(100% - 80px)`};
	margin-left: ${ props => props.isMobile ? 'unset' : '40px'};
	position: ${ props => props.isMobile ? 'relative' : 'absolute'};
	top: ${ props => props.isMobile ? 'unset' : `calc(${ props.height} + 120px)`};
	z-index: ${ props => props.isMobile ? '2' : '-1'};
	text-align: center;
	font-weight: 300;
	${ props => props.zIndex && `
		z-index: 2;
	`};
	${ props => props.isMobile && `
		padding: 20px;
		font-size: 14px;
	`}
`;
export const CuisineItemContainer = styled.div`
	width: ${ props => props.isMobile ? '100%' : `calc(100%/3)`};
	background-color: #dedede;
	background-image: url(${ props => props.image });
	background-size: cover;
	background-position: center center;
	position: relative;
	cursor: pointer;
	${ props => props.zIndex && `
		background-image: url(${ props.coverImage });
		background-size: cover;
		background-color: #dedede;
		background-repeat: no-repeat;
	`};
`;
export const CuisineTitleContainer = styled.div`
	position: ${ props => props.isMobile ? 'relative' : 'absolute'};
	top: ${ props => props.isMobile ? '20px' : props.height };
	width: 100%;
	height: 75px;
	z-index: 2;
	text-align: center;
	color: #fff;
	font-size: 48px;
	background: url(${ props => props.background }) no-repeat;
	background-size: ${ props => props.isMobile ? 'auto 50px' : 'auto 75px'};
	background-position: center;
`;

export const DishesContainer = styled.div`
	width: ${ props => props.isMobile ? '100%' : '25%'};
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
	background-color: #ECE3DE;
	&:nth-child(2n){
		background-color: #F3ECE9;
	}
	position: relative;
	cursor: pointer;
	${ props => props.isMobile && `
		height: 70vw;
	`}
`;

export const DishDescription = styled.div`
	padding: 30px;
	z-index: -1;
	position: absolute;
	color: #FFF;
	font-weight: 300;
	text-align: center;
	top: ${ props => props.isMobile ? 'unset' : `calc(50% + 20px)`};
	${ props => props.zIndex && `
		z-index: 2;
	`};
	${ props => props.isMobile && `
		z-index: 2;
	`}
`;
export const DishDownloadMenu = styled.div`
	position: absolute;
	width: calc( 70% );
	left: ${ props => props.isMobile ? '50%' : '50%'};
	margin-left: -35%;
	bottom: 30px;
	border: 1px solid #fff;
	height: 45px;
	z-index: -1;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #FFF;
	cursor: pointer;
	${ props => props.zIndex && `
		z-index: 2;
	`};
	&:hover{
		background: #FFF;
		color: #C1A292;
	}
	${ props => props.isMobile && `
		z-index: 2;
		background: #FFF;
		color: #C1A292;
		font-size: 14px;
		height: 40px;
		bottom: 20px;

		position: relative;
		left: unset;
	`};
	${ props => props.dark && `
		background: #C1A292;
		color: #FFF;
		margin-left: unset;
		margin: 0 auto;
		margin-top: 10px;
	`}
`;
export const DishImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -1;
	position: absolute;
	${ props => props.zIndex && `
		z-index: 1;
	`};
	${ props => props.isMobile && `
		z-index: 1;
		height: 70vw;
	`}
`;

export const DishName = styled.div`
	color: #222226;
	position: absolute;
	top: ${ props => props.isMobile ? '20px' : '50%' };
	z-index: 1;
	${ props => props.zIndex && `
		color: #fff;
		z-index: 2;
	`};
	width: 100%;
	margin-top: ${ props => props.isMobile ? 'unset' : '-68px' };
	background: url(${ props => props.background }) no-repeat;
	height: 75px;
	background-size: auto 75px;
	background-position: center;
	${ props => props.zIndex && `
		background: url(${props.backgroundWhite }) no-repeat;
		background-size: auto 75px;
		background-position: center;
	`}
	${ props => props.isMobile && `
		z-index: 2;
		color: #fff;
		background: url(${props.backgroundWhite }) no-repeat;
		background-size: auto 50px;
		background-position: center;
	`};
	${ props => props.width && `
		background-size: ${ props.width };
		width: ${ props.width };
	`};
`;

export const DinnerAtTheRestuarantImage = styled.div`
	height: ${ props => props.isMobile ? '40vw' : '60%'};
	background: url(${ props => props.image });
	background-size: cover;
	background-position: center bottom;
	background-color: #dedede;
`;

export const DinnerAtTheRestaurantTextContainer = styled.div`
	background-color: #76777A;
	height: ${ props => props.isMobile ? 'auto' : '40%'};
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: ${ props => props.isMobile ? 'unset' : '80px 0' };
`;

export const DinnerAtTheRestaurantDesriptionContainer = styled.div`
	width: ${ props => props.isMobile ? '100%' : '500px'};
	${ props => props.isMobile && `
		padding: 20px;
	`}
`;
export const HawkersBackgroundImage = styled.div`
	background: url(${ props => props.image });
	background-size: cover;
	width: 100%;
	height: ${ props => props.isMobile ? '70vw' : '600px'};
	background-color: #dedede;
	background-position: center bottom;
	position: relative;
`;
export const HawkersDescription = styled.div`
	color: #919093;
	z-index: 2;
	position: relative;
	bottom: ${ props => props.isMobile ? '0px' : '40px' };
	font-weight: 300;
	font-size: ${ props => props.isMobile ? '14px' : '16px' };
	width: ${ props => props.isMobile ? '100%' : '600px'};
	margin: 0 auto;
	text-align: center;
	${ props => props.isMobile  && `
		padding: 30px 20px 60px;
	`};
	margin-top: ${ props => props.isMobile ? '20px' : '60px'};
`;
export const HawkersDescriptionContainer = styled.div`
	padding: 60px 0;
	background-color: #F4ECE9;
	height: auto;
	${ props => props.isLight && `
		background-color: #DEDEDE;
	`}
`;
export const HawkersTitle = styled.div`
	font-size: 24px;
	z-index: 3;
	position: relative;
    top: ${ props => props.isMobile ? '20px' : '50%'};
    left: ${ props => props.isMobile ? 'unset' : '50%'};
    margin-left: ${ props => props.isMobile ? 'unset' : '-200px'};
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	width: ${ props => props.isMobile ? '100%' : '400px'};
	background: url(${ props => props.background }) no-repeat;
	height: ${ props => props.isMobile ? '40px' : '82px'};
	background-size: ${ props => props.isMobile ? '70%' : '400px'};
	background-position: center;
	margin-top: ${ props => props.isMobile ? '20px' : 'unset' };
`;

export const BreakfastAtTheRestaurantContainer = styled.div`
	position: relative;
	background-color: #FFF;
	height: ${ props => props.isMobile ? 'auto' : '70vh'};
`;
export const BreakfastAtTheRestaurantImage = styled.div`
	background: url(${ props => props.image });
	background-size: cover;
	width: ${ props => props.isMobile ? '100%' : '500px'};
	height: ${ props => props.isMobile ? '70vw' : '500px'};
	margin-left: ${ props => props.isMobile ? 'unset' : '100px'};
	position: ${ props => props.isMobile ? 'relative' : 'absolute'};
	top: ${ props => props.isMobile ? 'unset' : '-100px'};
	background-color: #dedede;
	background-position: center center;
`;
export const BreakfastAtTheRestaurantDescriptionContainer = styled.div`
	margin-left: ${ props => props.isMobile ? 'unset' : '650px'};
	padding-top: ${ props => props.isMobile ? 'unset' : '150px'};
	width: ${ props => props.isMobile ? '100%' : '400px'};
	${ props => props.isMobile && `
		padding: 20px;
	`}
`;

export const TheRestaurantContainer = styled.div`
	position: relative;
	background-color: #dedede;
	height: ${ props => props.isMobile ? 'auto' : '50vh'};
`;
export const TheRestaurantDescription = styled.div`
	width: ${ props => props.isMobile ? '100%' : '50%'};
	font-weight: 300;
	margin-left: ${ props => props.isMobile ? 'unset' : '100px'};
	${ props => props.isMobile && `
		padding: 20px;
		font-size: 14px;
	`}
`;
export const TheRestaurantTitleContainer = styled.div`
	width: ${ props => props.isMobile ? '100vw' : '400px'};
	margin-left: ${ props => props.isMobile ? 'unset' : '100px'};
	padding-top: ${ props => props.isMobile ? 'unset' : '80px'};
	background: url(${ props => props.background }) no-repeat;
	background-position-y: ${ props => props.isMobile ? '20px' : '40px'};;
	height: ${ props => props.isMobile ? '80px' : '123px'};
	background-size: ${ props => props.isMobile ? '250px' : '400px'};
	display: block;
	${
		props => props.isMobile && `
			background-position: center;
		`
	}
`;


export const DishHoverAbsolute = styled.div`
	position: absolute;
	background-color: rgba(34,34,38,0.2);
	width: 100%;
	height: 100%;
	z-index: 1;
	top: 0;
	left: 0;
`;
