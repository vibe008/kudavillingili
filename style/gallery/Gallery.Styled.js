import styled from 'styled-components';

export const ImagesContainer = styled.div`
	width: 100%;
	margin-top: ${ props => props.isMobile ? '0px' : '80px' };
	padding-bottom: 80px;
`;
export const ImageRow = styled.div`
	display: flex;
	flex-direction: ${ props => props.isMobile ? 'column' : 'row' };
	${ props => props.marginTop && `
		margin-top: ${ props.isMobile ? '0px' : props.marginTop };
	`};
`;
export const ImagesByTwo = styled.img`
	width: ${ props => props.isMobile ? `100%` : `calc((100% - 20px)/2)`};
	height: ${ props => props.isMobile ? '70vw' : '600px'};
	object-fit: cover;
	${ props => props.marginRight && `
		margin-right: ${ props.marginRight }
	`};
	${ props => props.isMobile && `
		margin-top: 5px;
	`};
	background-color: #dedede;
`;
export const ImagesByOne = styled.img`
	width: 100%;
	height: ${ props => props.isMobile ? '70vw' : '600px'};
	object-fit: cover;
	${ props => props.marginRight && `
		margin-right: ${ props.marginRight }
	`};
	${ props => props.isMobile && `
		margin-top: 5px;
	`};
	background-color: #dedede;
`;
export const ImageSections = styled.ul`
	text-align: center;
	padding: 0px;
`;
export const ImageSection = styled.li`
	display: inline-block;
	margin-right: ${ props => props.isMobile ? 'unset' : '20px' };
	color: #C1A292;
	font-weight: 300;
	cursor: pointer;
	font-size: 18px;
	${
		props => props.selected && `
			font-weight: 500;
		`
	}
	${ props => props.isMobile && `
		margin-top: 5px;
		font-size: 14px;
	`};
	${
		props => props.isMobile && `
			padding: 0 10px;
			text-align: center;
		`
	}
`;

export const FullScreenModal = styled.div`
	position: fixed;
    background-color: rgba(34,34,38,.9);
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 5;
`;
export const FullScreenModalContainer = styled.div`
    width: 700px;
    margin: calc(50vh - 350px) auto 0;
    height: 700px;
`;
