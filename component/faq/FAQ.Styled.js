import styled from 'styled-components';
import { isMobile } from "react-device-detect";

export const FAQContainer = styled.div`
	
	margin: 0 auto;
	padding-bottom: 100px;
	position: relative;
	text-align: center;
	width: 700px;
	${ props => props.isMobile && `

		padding: 20px;
		width: 100%;

	`}

`;
export const FAQDescription = styled.div`

	border-bottom: 1px solid #dedede;
	color: ${ props => props.isMobile ? '#666' : '#919093' };
	font-size: 16px;
	font-weight: 300;
	height: 0px;
	overflow: hidden;
	text-align: left;
	transition: height 400ms linear;
	margin-bottom: 20px;

	${ props => props.displayCheck && `
		
		height: auto;
		padding: 10px 5px;

	`};
	${ props => props.isMobile && `

		font-size: 14px !important;
		margin-bottom: unset;

	`};

	${ props => props.languageDetected === "ar" && `

		direction: rtl;
		text-align: right;

	`}


`;
export const FAQItemContainer  = styled.div`

	align-items: center;
	display: flex;
	flex-direction: row;
	flex: 1;
	position: relative;

	${

		props => props.languageDetected === "ar" && `


			flex-direction: row-reverse;

		`

	}

`;
export const FAQTitle = styled.p`
	
	color: #222226;
	color: #777;
	cursor: pointer;
	font-size: 18px;
	font-weight: bold;
	padding: 20px 10px;
	position: relative;
	text-align: left;
	user-select: none;
	width: 100%;
	${
		props => props.isMobile && `

			font-size: 14px !important;
			padding: 10px 5px;

		`
	}
	${
		props => props.languageDetected === "ar" && `

			text-align: right;

		`
	}

`

export const FAQImage = styled.div`

	background: url( ${ props => props.background });
	background-size: 60px;
	height: 60px;
	margin-right: 20px;
	width: 60px;
	${
		props => props.isMobile && `

			background-size: 40px;
			height: 40px;
			margin-right: 0px;
			width: 40px;

		`
	}

`
export const FAQStatusImage = styled.div`
	
	cursor: pointer;
	height: 15px;
	width: 15px;

`
