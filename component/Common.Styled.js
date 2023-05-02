import styled from 'styled-components';

export const AlignCenter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	height: 100%;
	flex-direction: column;
	max-width: 1200px;
	margin: 0 auto;
`;

export const BodyText = styled.p`
	color: #919093;
	font-size: 20px;
	font-weight: 300;
	text-align: center;
	${ props => props.cursor && `
		cursor: pointer;
	`};
	${ props => props.marginTop && `
		margin-top: ${ props.marginTop }
	`};
	${ props => props.marginBottom && `
		margin-bottom: ${ props.marginBottom }
	`};
	${ props => props.color && `
		color: ${ props.color }
	`};
	${ props => props.fontSize && `
		font-size: ${ props.fontSize }
	`};
	${ props => props.textAlign && `
		text-align: ${ props.textAlign }
	`};
	${ props => props.width && `
		width: ${ props.width }
	`};
	${ props => props.bold && `
		font-weight: 500;
	`};
`;

export const Container = styled.div`
	width: 1200px;
	margin: 0 auto;
	position: relative;
	${ props => props.paddingTopBottom && `
		padding-top: ${ props.paddingTopBottom };
		padding-bottom: ${ props.paddingTopBottom }
	`};
	${ props => props.centerAlign && `
	    justify-content: center;
	    display: flex;
	    flex-direction: column;
	`};
`;
export const ContainerFlexEnd = styled.div`
	width: 1200px;
	margin: 0 auto;
	position: relative;
	align-items: flex-end;
    display: flex;
`;
export const ContainerCenter = styled.div`
	width: 1200px;
	margin: 0 auto;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	flex-direction: column;
`;
export const ContainerFiftyPercent = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	${ props => props.padding && `
		padding: 0 ${ props.padding };
	`}
`;

export const ContainerRow = styled.div`
	width: 1400px;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
`;
export const ContainerByThree = styled.div`
	width: calc(( 100% - 20px )/4);
	margin-right: 10px;
	&:nth-child(4) {
		margin-right: 0px;
	}	
	${ props => props.alignItemsCenter && `
		align-items: center;
    	display: flex;
	`};
`;

export const HorizontalLine = styled.div`
	width: 100px;
	height: 2px;
	background: #C1A292;
	margin-left: 20px;
	${ props => props.color && `
		background: ${ props.color };
	`};
`;
export const ImageFiftyPercent = styled.div`
	width: 50vw;
	background: url(${ props => props.background });
	background-size: cover;
	height: 500px;
`;
export const NoLineHeightContainer = styled.div`
	line-height: 0px;
`;

export const KudavillingiliDot = styled.div`
    width: 8px;
    height: 8px;
    transform: rotate( 45deg );
    background: #C1A292;
    ${ props => props.background && `
		background: ${ props.background };
	`};
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	${ props => props.marginTop && `
		margin-top: ${ props.marginTop };
	`};
	${ props => props.flex && `
		flex: 1;
		height: 100%;
	`};
`;
export const RowAlign = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	${ props => props.marginTop && `
		margin-top: ${ props.marginTop };
	`};
`;
export const SplitRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	${ props => props.marginTop && `
		margin-top: ${ props.marginTop };
	`};
`;

export const TextColorLightGrey = styled.div`
	color: #77767B;
	font-weight: 300;
	${ props => props.marginTop && `
		margin-top: ${ props.marginTop }
	`};
	${ props => props.marginBottom && `
		margin-bottom: ${ props.marginBottom }
	`};
	${ props => props.marginLeft && `
		margin-left: ${ props.marginLeft }
	`};
	${ props => props.color && `
		color: ${ props.color }
	`};
`;
export const TextColorDarkGrey = styled.div`
	color: #77767B;
	font-weight: 400;
	${ props => props.fontSize && `
		font-size: ${ props.fontSize }
	`};
	${ props => props.marginBottom && `
		margin-bottom: ${ props.marginBottom }
	`};
`;
export const TextColorKudavillingili = styled.div`
	color: #C1A292;
	font-weight: 400;
	font-size: 18px;
	${ props => props.fontSize && `
		font-size: ${ props.fontSize }
	`};
	${ props => props.padding && `
		padding: 0 ${ props.padding };
	`};
	${ props => props.cursor && `
		cursor: pointer;
	`};
	${ props => props.color && `
		color: ${ props.color };
	`};
`;

export const Title = styled.h1`
	color: #C1A292;
	font-weight: 400;
	margin: 0;
	padding: 20px 0;
	${ props => props.marginTop && `
		margin-top: ${ props.marginTop }
	`};
	${ props => props.paddingTop && `
		padding-top: ${ props.paddingTop }
	`};
	${ props => props.textAlignCenter && `
		text-align: center;
	`};
	${ props => props.textAlign && `
		text-align: ${props.textAlign};
	    align-self: flex-start;
	`};
	${ props => props.medium && `
		font-weight: 500;
	`};
	${ props => props.color && `
		color: ${ props.color };
	`};
`;

export const TitleH2 = styled.h2`
	color: #C1A292;
	font-weight: 400;
	${ props => props.marginTop && `
		margin-top: ${ props.marginTop }
	`};
	${ props => props.paddingTop && `
		padding-top: ${ props.paddingTop }
	`};
	${ props => props.textAlignCenter && `
		text-align: center;
	`};
	${ props => props.color && `
		color: ${ props.color };
	`};
	${ props => props.textAlign && `
		text-align: ${props.textAlign};
	    align-self: flex-start;
	`};
`;

export const View = styled.div`
	position: relative;
	${ props => props.backgroundColor && `
		background-color: ${ props.backgroundColor }
	`};
`;
export const ViewBackgroundVariableHeight = styled.div`
	position: absolute;
	top: 0;
	${ props => props.inverse && `
		bottom: 0 !important;
		top: unset;
	`};
	left: 0;
    width: 100%;
    z-index: -1;
	${ props => props.backgroundColor && `
		background-color: ${ props.backgroundColor }
	`};
	${ props => props.height && `
		height: ${ props.height }
	`};
`;

export const ViewPort = styled.div`
	height: 100vh;
	position: relative;
`;
