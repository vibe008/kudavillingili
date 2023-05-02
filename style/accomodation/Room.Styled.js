import styled from 'styled-components';

export const RoomContainer = styled.div`
	width: ${ props => props.isMobile ? '100%' : '80%' };
	margin-left: ${ props => props.isMobile ? 'unset' : '20%' };
	padding-bottom: ${ props => props.isMobile ? '0px' : '120px' };
`;

export const RoomDescriptionContainer = styled.div`
	width: ${ props => props.isMobile ? '100%' : '67%' };
	${ props => props.isMobile && `
		padding-top: 20px
	`};
`;
export const RoomDetailsContainer = styled.div`
	width: ${ props => props.isMobile ? '100%' : '33%' };
`;

export const RoomPrimaryImage = styled.img`
	width: 100%;
	height: ${ props => props.isMobile ? '70vw' : '500px' };
	object-fit: cover;
	background-color: #dedede;
`;
export const RoomSecondaryImage = styled.div`
	width: calc((100% - 40px)/5);
	height: ${ props => props.isMobile ? '50px' : '100px' };
	margin-right: 10px;
	&:nth-child(5) {
		margin-right: 0px;
	}
	object-fit: cover;
	background-color: #dedede;
	background-image: url(${ props => props.src });
	background-size: cover;
	background-position: center center;
	cursor: pointer;
	${ props => props.selected && `
		background-color: rgba(193, 162, 146, 1);
		background-blend-mode: multiply;
	`}
`;
export const RoomInnerDetailsContainer = styled.div`
	margin-top: 50px;
`;
export const RoomInnerImagesContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	margin-bottom: ${ props => props.isMobile ? '20px' : '80px' };
`;
export const RoomInnerImageContainer = styled.div`
	background: url(${ props => props.background });
	background-color: #dedede;
	background-size: cover;
	width: ${ props => props.isMobile ? '100%' : '80vw' };
	height: ${ props => props.isMobile ? '70vw' : '80vh' };
	margin-bottom: 10px;
`;
export const Room360 = styled.div`
	width: 100vw;
	height: ${ props => props.isMobile ? '100vw' : '70vh' };
    background-color: #dedede;
`;
export const RoomBookNowContainer = styled.div`
	width: ${ props => props.isMobile ? '100%' : '100vw' };
	height: ${ props => props.isMobile ? '120px' : '30vh' };
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const RoomBookNowButton = styled.button`
	background-color: #C1A192;
	color: #FFF;
	border: none;
	padding: 15px 30px;
	cursor: pointer;
	font-weight: 600;
	border: none;
`;
export const RoomInnerAboutContainer = styled.div`
	width: ${ props => props.isMobile ? '100%' : '55vw' };
`;
