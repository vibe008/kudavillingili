import styled from 'styled-components';

export const OceanConservationContainer = styled.div`
	height: ${ props => props.isMobile ? 'auto' : 'auto' };
	width: ${ props => props.isMobile ? '100%' : '100vw;' };
	position: relative;
`;
export const OceanConservationInnerContainer = styled.div`
	height: ${ props => props.isMobile ? 'auto' : '100vh' };
	width: ${ props => props.isMobile ? '100%' : '100vw' };;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const OceanConservationDescription = styled.div`
	width: ${ props => props.isMobile ? '100%' : '50%' };
	padding: ${ props => props.isMobile ? '20px' : '100px' };
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
export const OceanConservationImage = styled.div`
	background: url(${ props => props.background });
	background-size: cover;
	height: ${ props => props.isMobile ? '200px' : '550px' };
	width: ${ props => props.isMobile ? '100%' : '600px' };
	background-color: #dedede;
	background-position: center center;
`;

export const DolphinCruiseContainer = styled.div`
	height: ${ props => props.isMobile ? 'auto' : '100vh' };
	width: ${ props => props.isMobile ? '100%' : '100vw' };
	display: flex;
	justify-content: flex-end;
	align-items: center;
	${ props => props.isMobile && `
		flex-direction: column;
	`};
	${ props => props.height && `
		height: auto !important;
	`};
`;
export const DolphinCruiseImage = styled.div`
	background: url(${ props => props.background });
	background-size: cover;
	height: ${ props => props.isMobile ? '200px' : '450px' };
	width: ${ props => props.isMobile ? '100%' : '70vw' };
	background-color: #dedede;
	background-position: center center;
	${ props => props.isMobile && `
		margin-top: 20px;
	`}

`;
export const DolphinCruiseDescription = styled.div`
	width: ${ props => props.isMobile ? '100%' : '50%' };
	padding: ${ props => props.isMobile ? '20px' : '80px' };
	display: flex;
	justify-content: flex-end;
	flex-direction: ${ props => props.isMobile ? 'column' : 'column' };
	height: ${ props => props.isMobile ? 'auto' : '350px' };
	text-align: center;
	${ props => props.alignEnd && `
		align-self: flex-end;
	`}
`;


export const TurtleSafariImage = styled.div`
	background: url(${ props => props.background });
	background-size: cover;
	height: ${ props => props.isMobile ? '200px' : '550px' };
	width: ${ props => props.isMobile ? '100%' : '80%' };
	background-color: #dedede;
	background-position: center center;
	${ props => props.isMobile && `
		margin-top: 20px;
	`}
`;
export const TurtleSafariTextContainer = styled.div`
	height: auto;
	padding: ${ props => props.isMobile ? '20px' : '50px 0' };
	width: ${ props => props.isMobile ? '100%' : '40%' };
	align-self: flex-start;
	margin-left: ${ props => props.isMobile ? 'unset' : '20%' };
`;

export const LiftSurfImage = styled.div`
	background: url(${ props => props.background });
	background-size: cover;
	height: ${ props => props.isMobile ? '200px' : '550px' };
	width: ${ props => props.isMobile ? '100%' : '80%' };
	background-color: #dedede;
	background-position: center center;
	${ props => props.isMobile && `
		margin-top: 20px;
	`}
`;
export const LiftSurfTextContainer = styled.div`
	height: auto;
	padding: ${ props => props.isMobile ? '20px' : '50px 0' };
	width: ${ props => props.isMobile ? '100%' : '30%' };
	align-self: flex-end;
	margin-right: ${ props => props.isMobile ? 'unset' : '20%' };
`;

export const StretchBottomContainer = styled.div`
	height: ${ props => props.isMobile ? 'auto' : '100vh' };
	width: ${ props => props.isMobile ? '100%' : '100vw' };
	display: flex;
	align-items: center;
	${ props => props.isMobile && `
		flex-direction: column;
	`};
`;
export const StretchBottomBelowContainer = styled.div`
	height: ${ props => props.isMobile ? 'auto' : '100vh' };
	width: ${ props => props.isMobile ? '100%' : '70vw' };
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	${ props => props.isMobile && `
		flex-direction: column;
	`};
`;
export const StretchAlignContainer = styled.div`
	height: ${ props => props.isMobile ? 'auto' : '100vh' };
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: row;
	${ props => props.isMobile && `
		flex-direction: column;
	`};
`;
export const StretchImageBelowRight = styled.div`
	background: url(${ props => props.background });
	background-size: cover;
	width: ${ props => props.isMobile ? '100%' : '100%' };
	height: ${ props => props.isMobile ? '200px' : '100vh' };
	background-color: #dedede;
	background-position: center center;
`;
export const StretchImageLeft = styled.div`
	background: url(${ props => props.background });
	background-size: cover;
	height: ${ props => props.isMobile ? '200px' : '550px' };
	width: ${ props => props.isMobile ? '100%' : '60vw' };
	background-color: #dedede;
	background-position: center center;
`;
export const StretchTextContainerBottom = styled.div`
	padding: ${ props => props.isMobile ? '20px' : '60px' };
	padding-top: ${ props => props.isMobile ? '20px' : '450px' };
	width: ${ props => props.isMobile ? '100%' : '40vw' };
`;
export const StretchTextContainerBottomBelow = styled.div`
	padding: ${ props => props.isMobile ? '20px' : '60px 0' };
	width: ${ props => props.isMobile ? '100%' : '30vw' };
	margin-left: ${ props => props.isMobile ? 'unset' : '40vw' };
`;
export const StretchTextContainerBottomLeft = styled.div`
	padding-right: ${ props => props.isMobile ? 'unset' : '60px' };
	width: ${ props => props.isMobile ? '100%' : props.width };
	margin-left: ${ props => props.isMobile ? 'unset' : props => props.marginLeft };
	padding-top: ${ props => props.isMobile ? 'unset' : props.paddingTop };
	${ props => props.isMobile && `
		padding: 20px
	`}
`;
export const StretchTextContainerRight = styled.div`
	padding: ${ props => props.isMobile ? '20px' : '60px' };
	padding-top: ${ props => props.isMobile ? '0px' : '450px' };
	width: ${ props => props.isMobile ? '100%' : '40vw' };
	height: ${ props => props.isMobile ? 'auto' : '100vh' };
	padding-left: ${ props => props.isMobile ? '20px' : '10vw' };;
`;


export const StretchImageRight = styled.div`
	background: url(${ props => props.background });
	background-size: cover;
	height: ${ props => props.isMobile ? '200px' : '550px' };
	width: ${ props => props.isMobile ? '100%' : props.width };
	background-color: #dedede;
	background-position: center center;
`;
