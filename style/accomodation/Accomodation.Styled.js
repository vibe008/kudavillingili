import styled from 'styled-components';

export const AmenitiesContainer = styled.ul`
	display: flex;
	flex-direction: ${ props => props.isMobile ? 'column' : 'row'};
	align-items: flex-start;
	justify-content: center;
	${ props => props.isMobile && `
		padding-left: 0px;
	`};
`;
export const AmenitiesContainerHalf = styled.div`

	width: ${ props => props.isMobile ? '100%' : '40%'};
	${

		props => props.languageDetected === "ar" && `

			direction: rtl;

		`
		
	}

`;
export const AmenitiesItem = styled.li`
	color: #77767B;
	font-weight: 300;
	${ props => props.isMobile && `
		color: #666;
		font-size: 14px;
	`}
`;
export const AccomodationImage = styled.img`
	width: 100vw;
	height: calc(100vh - 105px);
	background-color: #dedede;
	background-position: center center;
	background-size: cover;
	object-fit: cover;
	background: url(${
		props => props.background
	}) no-repeat;
	${ props => props.isMobile && `
		height: 70vw;
		background-position: center bottom;
		margin-top: 20px;
	`}
`;
