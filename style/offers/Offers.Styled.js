import styled from 'styled-components';

export const OffersContainer = styled.div`
	display: flex;
	flex-direction: ${ props => props.isMobile ? 'column' : 'row' };
`;

export const OffersContainerOneThird = styled.div`
	width: ${ props => props.isMobile ? '100%' : `calc((100% - 80px)/3)` };
	margin-right: 40px;
	position: relative;
	&:nth-child(3) {
		margin-right: 0px;
	};
`;
export const OfferDescription = styled.div`
	font-weight: 300;
	background-color: #fff;
	padding: 20px;
	line-height: 24px;
	padding-top: ${ props => `${props.marginTop}`}px;
	${ props => props.isMobile && `
		font-size: 14px;
	`}
	${

		props => props.languageDetected === "ar" && `

			direction: rtl;
			text-align: right;

		`

	}
	
`;

export const OfferImage = styled.img`
	width: 100%;
	height: 250px;
	object-fit: cover;
`;
export const OfferTitle = styled.h3`
	color: #C1A292;
	text-align: center;
	line-height: 1.4em;
	${ props => props.isMobile && `
		line-height: 1.2em;
		font-size: 16px;
	`}
`;
export const OfferTitleContainer = styled.div`
	padding: 20px;
	background-color: #F9F8F5;
	width: 80%;
	position: absolute;
	top: 220px;
	left: 10%;
	transition: 0.4s;
	${ props => props.isMobile && `
		padding: 10px;
	`}
`;
export const OfferSubHeading = styled.div`
	color: #77767B;
	font-weight: 300;
	text-align: center;
	margin-top: 20px;
	line-height: 24px;
`;

export const OfferItem = styled.div`
	position: relative;
	justify-content: center;
	align-items: center;
	margin-bottom: ${ props => props.isMobile ? '0px' : '40px' };
	line-height: 0;
	cursor: pointer;
	${ props => props.marginTop && `
		margin-top: ${ props.isMobile ? '0px' : props.marginTop }
	`};
	${ props => props.isMobile && `
		padding: 20px;
		padding-top: 0px;
	`}
	&:hover{
		${OfferTitleContainer}{
			top: 210px;
		}
	}
`;
export const OfferMoreContainer = styled.div`
	width: ${ props => props.isMobile ? '100%' : '100vw' };
	padding: 30px 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const OfferMoreButton = styled.div`
	background-color: #C1A192;
	color: #FFF;
	text-transform: uppercase;
	border: none;
	padding: 15px 35px;
	cursor: pointer;
	font-weight: 300;
	border: 1px solid #C1A192;
`;
