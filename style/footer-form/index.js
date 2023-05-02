import styled from 'styled-components';

export const ContactFormTitle = styled.div`
	font-size: font-size: ${ props => props.isMobile ? '14px' : '18px' };;
	font-weight: 400;
	color: #77767B;
`;
export const ContactFormText = styled.input`
	border: none;
	border-bottom: 1px solid #dedede;
	width: ${ props => props.isMobile ? '100%' : '300px' };
	outline: none;
	padding: 10px;
	font-size: ${ props => props.isMobile ? '12px' : '16px' };
	font-family: 'Lunfga', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-weight: 300;
	${ props => props.widthFull && `
		width: ${ props.isMobile ? '100%' : '680px' };
		height: 40px;
	`}
`;
export const ContactFormTextArea = styled.textarea`
	border: none;
	border-bottom: 1px solid #dedede;
	width: 100%;
	outline: none;
	padding: 10px;
	font-size: 12px;
	font-family: 'Lunfga', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-weight: 300;
	height: 80px;
	resize: none;
`;
export const ContactFormView = styled.div`
	margin-top: 20px;
	${ props => props.marginRight && `
		margin-right: ${ props.isMobile ? 'unset' : props.marginRight };
		
	`}
	${ props => props.isMobile && `
		width: 100%;
	`}
	${

		props => props.languageDetected === "ar" && `

			margin-right: unset;

		`
	}
`;
export const ContactButton = styled.button`
	width: ${ props => props.isMobile ? `calc(100% - 40px)` : `250px` };
    margin-top: 10px;
    border: none;
    background-color: #77767B;
    padding: 15px 30px;
    font-size: 18px;
    color: #fff;
    font-family: 'Lunfga', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 300;
    cursor: pointer;
    margin-top: 10px;
    &:hover{
    	background-color: #C1A292;
    }
`;

export const ContactFormImage = styled.div`
	background: url(${ props => props.background });
	height: 300px;
	width: 400px;
	margin-right: 100px;
	margin-top: 100px;
	background-size: cover;
	background-position: center center;
	background-color: #dedede;
	${ props => props.isMobile && `
		display: none;
	`}
`;
export const ContactFormContainer = styled.div`
	margin-top: 0px;
	${ props => props.isMobile && `
		padding: 20px;
		margin-top: unset;
	`}
	${

		props => props.directionRTL && `

			direction: rtl;

		`
		
	}
`;
export const ContactFormResponse = styled.div`
	font-size: 16px;
	color: #77767B;
	font-weight: 300;
	margin-top: 20px;
`;

export const TransferInformationContainer = styled.div`
	
	align-items: center;
	display: flex;
	flex-direction: ${ props => props.isMobile ? `column` : `row`};
	justify-content: center;
	margin-top: 100px;
	${
		props => props.isMobile && `

			margin-top: 40px;

		`
	}

`;

export const TransferInformationHalf = styled.div`
	
	width: ${ props => props.isMobile ? `100vw` : `45%`};
	${
		props=> props.isMobile && `
			text-align: center;
			height: 70vw;
		`
	}
	${
		props => props.heightOverright && `
			height: unset;
		`
	}
	line-height: 0;
	&:nth-child(1) {
		margin-right: ${ props => props.isMobile ? `0px` : `40px`};
	}
	&:nth-child(2) {
		line-height: ${ props => props.isMobile ? 'unset' : `24px`};
	}
	${
		props => props.padding && `
			padding: 0px ${props.padding};
		`
	}

`;

export const TransferImage = styled.img`

	background-color: #dedede;
	height: 100%;
	width: 100%;

`;

export const TransferInformationDescriptionContainer = styled.div`

	margin: 0 auto;
	width: 60%;
	${ props => props.isMobile && `

		width: 100%;
		padding: 0 20px;

	`}

`

export const FootnoteContainer = styled.div`

	width: 700px;
	margin: 0 auto;
	padding-bottom: 100px;
	position: relative;
	${ props => props.isMobile && `

		width: 100%;
		padding: 20px;
		
	`}

`

export const FootnoteText = styled.div`

	color: ${ props => props.isMobile ? '#666' : '#919093' };
	font-size: ${ props => props.isMobile ? '14px' : '20px' };
	font-weight: 300;
	text-align: left;
	${

		props => props.languageDetected === "ar" && `

			text-align: right;

		`
		
	}

`
