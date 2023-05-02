import styled from 'styled-components';
import { isMobile } from "react-device-detect";

export const AboutContainer = styled.div`
	padding: 140px 0;
	${
		props => props.isMobile && `
			padding: 50px 20px;
		`
	}
`;

export const AboutMeetContainer = styled.div`
	padding-top: 140px;
	padding-bottom: 0px;
	padding-right: 0px;
	padding-left: 0px;
	${
		props => props.isMobile && `
			padding: 50px 20px;
		`
	}
`;
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
	color: ${ props => props.isMobile ? '#666' : '#919093' };
	font-size: ${ props => props.isMobile ? '14px' : '20px' };
	font-weight: 300;
	text-align: center;
	${ props => props.cursorPointer && `
		cursor: pointer;
	`};
	${ props => props.marginTop && `
		margin-top: ${ props.marginTop } !important;
	`};
	${ props => props.marginBottom && `
		margin-bottom: ${ props.marginBottom }
	`};
	${ props => props.color && `
		color: ${ props.color }
	`};
	${ props => props.fontSize && `
		font-size: ${ props.isMobile ? '14px' : props.fontSize }
	`};
	${ props => props.textAlign && `
		text-align: ${ props.textAlign }
	`};
	${ props => props.width && `
		width: ${ props.isMobile ? '100%' : props.width }
	`};
	${ props => props.bold && `
		font-weight: 700;
	`};
	${ props => props.cursor && `
		cursor: pointer;
	`};
	${ props => props.margin && `
		margin: ${ props.margin };
	`};
	${ props => props.marginBottom && `
		margin-bottom: ${ props.marginBottom }
	`}
	${ props => props.weight500 && `

		font-weight: 500;

	`};
	${

		props => props.languageDetected === "ar" && `

			direction: rtl;
			text-align: right;

		`
		
	}
`;

export const BodyTextSustainability = styled.span`
	color: ${ props => props.isMobile ? '#666' : '#919093' };
	font-size: ${ props => props.isMobile ? '14px' : '20px' };
	font-weight: 300;
	text-align: center;
	${ props => props.cursorPointer && `
		cursor: pointer;
	`};
	${ props => props.marginTop && `
		margin-top: ${ props.marginTop } !important;
	`};
	${ props => props.marginBottom && `
		margin-bottom: ${ props.marginBottom }
	`};
	${ props => props.color && `
		color: ${ props.color }
	`};
	${ props => props.fontSize && `
		font-size: ${ props.isMobile ? '14px' : props.fontSize }
	`};
	${ props => props.textAlign && `
		text-align: ${ props.textAlign }
	`};
	${ props => props.width && `
		width: ${ props.isMobile ? '100%' : props.width }
	`};
	${ props => props.bold && `
		font-weight: 700;
	`};
	${ props => props.cursor && `
		cursor: pointer;
	`};
	${ props => props.margin && `
		margin: ${ props.margin };
	`};
	${ props => props.marginBottom && `
		margin-bottom: ${ props.marginBottom }
	`}
	${ props => props.weight500 && `
		font-weight: 500;
	`};
	${

		props => props.languageDetected === "ar" && `

			direction: rtl;
			text-align: right;

		`
		
	}
`;

export const Button = styled.div`
	color: #fff;
	font-size: ${ props => props.isMobile ? '14px': '16px'};
	background-color: #C1A192;
	padding: ${ props => props.isMobile ? ' 10px 15px': '10px 15px'};
	font-weight: 500;
	height: min-content;
	cursor: pointer;
	${
		props => props.marginTop && `
			margin-top: ${ props.marginTop };
		`
	}
`;
export const Container = styled.div`
	width: ${ props => props.isMobile ? `100%` : `1200px`};
	margin: 0 auto;
	position: relative;
	${ props => props.paddingTopBottom && `
		padding-top: ${ props.isMobile ? `0px` : props.paddingTopBottom };
		padding-bottom: ${ props.isMobile ? `30px` : props.paddingTopBottom }
	`};
	${ props => props.centerAlign && `
	    justify-content: center;
	    display: flex;
	    flex-direction: ${ props.isMobile ? `row` : `column` };
	`};
	${ props => props.paddingTopMobile && `
		padding-top: ${ props.paddingTopMobile } !important;
	`};
	${ props => props.paddingBottom && `

		padding-bottom: ${ props.paddingBottom } !important;

	`};
`;
export const ContainerFlexEnd = styled.div`
	width: ${ props => props.isMobile ? `100%` : `1200px`};
	margin: 0 auto;
	position: relative;
	align-items: flex-end;
    display: flex;
    ${ props => props.isMobile && `
    	flex-direction: column;
	`};
	${ props => props.isMobile &&  props.reverse && `
    	flex-direction: column-reverse;
	`};
`;
export const ContainerFlexEndAlign = styled.div`
	width: ${ props => props.isMobile ? `100%` : `1200px`};
	margin: 0 auto;
	position: relative;
	align-items: ${ props => props.isMobile ? 'center' : 'flex-end'};
    display: flex;
    justify-content: flex-end;
    ${ props => props.isMobile && `
    	flex-direction: column;
	`};
	${ props => props.column && `
    	flex-direction: column;
	`};
`;
export const ContainerFlexStartAlign = styled.div`
	width: ${ props => props.isMobile ? `100%` : `1200px`};
	margin: 0 auto;
	position: relative;
	align-items: flex-start;
    display: flex;
    justify-content: flex-start;
    ${ props => props.isMobile && `
    	flex-direction: column;
	`};
	${ props => props.column && `
    	flex-direction: column;
	`};
`;

export const ContainerCenter = styled.div`
	width: ${ props => props.isMobile ? '100%' : '1200px' };
	margin: 0 auto;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${ props => props.isMobile ? 'auto' : '100%' };
	flex-direction: column;
	${ props => props.noCenter && `
		justify-content: unset;
	`}
`;
export const ContainerFiftyPercent = styled.div`
	width: ${ props => props.isMobile ? '100%' : '50%' };
	display: flex;
	flex-direction: column;
	align-items: center;
	${ props => props.padding && `
		padding: 0 ${ props.isMobile ? '0' : props.padding };
	`}
`;

export const ContainerRow = styled.div`
	width: ${ props => props.isMobile ? '100vw' : '1400px' };
	${ props => !props.isMobile &&  props.totalWidth && `
		width: auto !important;
	`};
	margin: 0 auto;
	display: flex;
	flex-direction: ${ props => props.isMobile ? 'column' : 'row' };
	${ props => props.reverse && props.isMobile && `
		flex-direction: column-reverse;
	`}
`;
export const ContainerByThree = styled.div`
	width: ${ props => props.isMobile ? `100vw` : `calc(( 100% - 40px )/5)`};
	margin-right: 10px;
	&:nth-child(4) {
		margin-right: 0px;
	}	
	${ props => props.textAlign &&  !props.isMobile && `
		  text-align: center;
	`};	
	${ props => props.alignItemsCenter && `
		align-items: center;
    	display: flex;
	`};
	${ props => props.isMobile &&`
		align-items: center;
		justify-content: center;
		text-align: center;
	`};
	display: block;
	${

		props => props.languageDetected === "ar" && `

			direction: rtl;

		`
		
	}

`;

export const HorizontalLine = styled.div`
	width: 100px;
	height: 2px;
	background: #C1A292;
	margin-left: 20px;
	${ props => props.color && `
		background: ${ props.color };
	`};
	${ props => props.isMobile && `
		display: none;
	`};
`;
export const ImageFiftyPercent = styled.div`
	width: ${ props => props.isMobile ? '100%' : '50vw' };
	background: url(${ props => props.background });
	background-size: cover;
	height: ${ props => props.isMobile ? '400px' : '500px' };
	background-color: #dedede;
	background-position: center center;
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
	${ props => props.isMobile && `
		margin-top: 0px;
	`}
	margin-bottom: ${ props => props.marginBottom ? props.marginBottom : '20px' };
`;

export const Row = styled.div`
	display: flex;
	flex-direction: ${ props => props.isMobile ? 'column' : 'row'};
	${ props => props.marginTop && `
		margin-top: ${ props.marginTop };
	`};
	${ props => props.flex && `
		flex: 1;
		height: 100%;
	`};
	${ props => props.center && `
		align-items: center;
    	justify-content: center;
	`}
`;
export const RowAlign = styled.div`
	display: flex;
	flex-direction: ${ props => props.isMobile ? 'column' : 'row' };
	align-items: center;
	${ props => props.marginTop && `
		margin-top: ${ props.isMobile ? '20px' : props.marginTop };
	`};
	${ props => props.forcedRow && `
		flex-direction: row
	`};
	${ props => props.isMobile && props.noCenter && `
		align-items: flex-start;
	`}
	${

		props => props.alignCenter && `

			justify-content: center;

		`
		
	}
	${

		props => props.isMobile &&  props.alignOverright && `

			width: 100% !important;
			flex-direction: row;

		`

	}
	${

		props => props.languageDetected === "ar" && `

			direction: rtl;
			text-align: right;
			margin-right: 20px;

		`
		
	}
`;
export const SplitRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	${ props => props.marginTop && `
		margin-top: ${ props.marginTop };
	`};
	${ props => props.alignItems && `
		align-items: center;
	`};
	${

		props => props.splitReverse && `

			flex-direction: row-reverse;
			
		`
	}
`;

export const TextColorLightGrey = styled.div`
	color: #666;
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
	${ props => props.isMobile && `
		text-align: center;
	`};
	${ props => props.isMobile && `
		font-size: 14px;
	`};
	${ props => props.textAlign && `
		text-align: left;
	`};
	${ props => props.fontSize && `
		font-size: ${ props.fontSize };
	`};
	${

		props => props.languageDetected === "ar" && `

			direction: rtl;
			text-align: right;

		`
		
	}
	${

		props => props.marginRight && `

			margin-right: 20px;

		`
	}
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
	${ props => props.isMobile && `
		text-align: center;
	`};
`;
export const TextColorKudavillingili = styled.div`
	color: #C1A292;
	font-weight: 400;
	font-size: 18px;
	${ props => props.fontSize && `
		font-size: ${ props.fontSize }
	`};
	${ props => props.cursorDisplay && `
		cursor: pointer;
	`};
	${ props => props.color && `
		color: ${ props.color };
	`};
	${ props => props.marginTop && `
		margin-top: ${ props.marginTop };
	`};
	${ props => props.isMobile && `
		font-size: 14px;
		padding: 0 10px;
	`};
	${ props => props.padding && `
		padding: 0 ${ props.padding };
	`};
`;

export const Title = styled.h1`
	color: #C1A292;
	font-weight: 500;
	margin: 0;
	padding: 20px 0;
	${ props => props.marginTop && `
		margin-top: ${ props.isMobile ? '10px' : props.marginTop }
	`};	
	${ props => props.paddingBottom && `
		padding-bottom: ${ props.isMobile ? '10px' : props.paddingBottom }
	`};
	${ props => props.paddingTop && `
		padding-top: ${ props.isMobile ? '20px' : props.paddingTop };
	`};
	${ props => props.textAlignCenter && `
		text-align: center;
	`};
	${ props => props.textAlign && `
		text-align: ${props.textAlign} !important;
		${!props.isMobile && `
			align-self: flex-start;
		`}
	`};
	${ props => props.medium && `
		font-weight: 500;
	`};
	${ props => props.color && `
		color: ${ props.color } !important;
	`};
	${ props => props.isMobile && `
		text-align: center;
		font-size: 24px;
	`};
	${ props => props.dark && `
		color: #708DA1;
	`}
	@media screen and (max-width: 900px) {
		font-size: 24px;
	}
	${

		props => props.languageDetected === "ar" && !props.isMobile && `

			direction: rtl !important;
			text-align: right !important;

		`

	}
`;

export const TitleH2 = styled.h2`
	color: #C1A292;
	font-weight: 400;
	${ props => props.marginTop && `
		margin-top: ${ props.marginTop }
	`};
	${ props => props.marginBotton && `
		margin-bottom: ${ props.marginBotton }
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
	${ props => props.isWater && `
		color: #708DA1;
	`};
	${

		props => props.languageDetected === "ar" && `

			direction: rtl;
			text-align: right;
			align-self: flex-end;

		`
		
	}
`;

export const TitleH3 = styled.h3`
	color: #C1A292;
	font-weight: 600;
	${ props => props.marginTop && `
		margin-top: ${ props.marginTop }
	`};
	${ props => props.marginBotton && `
		margin-bottom: ${ props.marginBotton }
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
	${ props => props.isWater && `
		color: #708DA1;
	`};
	${

		props => props.languageDetected === "ar" && `

			direction: rtl;
			text-align: right;
			align-self: flex-end;

		`
		
	}
`;

export const View = styled.div`
	position: relative;
	${ props => props.backgroundColor && `
		background-color: ${ props.backgroundColor };
	`};
	${ props => props.height && `
		height: ${ props.height };
	`};
	${ props => props.marginTop && `
		margin-top: ${ props.marginTop };
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
	${ props => props.marginTop && `
		margin-top: ${ props.marginTop }
	`};
`;

export const ViewPort = styled.div`
	height: ${ props => props.isMobile ? 'auto'  : `calc(100vh - 105px)` };
	position: relative;
	${ props => props.height && `
		height: ${ props.height };
	`}
	${ props => props.paddingTB && `
		padding: ${ props.paddingTB } 20px !important;
	`}
`;
export const ViewPort2 = styled.div`
	height: auto;
	position: relative;
	${ props => props.height && `
		height: ${ props.height };
	`}
	${ props => props.paddingTB && `
		padding: ${ props.paddingTB } 2px !important;
	`}
`;
export const ViewPortEighty = styled.div`
	height: ${ props => props.isMobile ? 'auto'  : '70vh' };
	position: relative;
`;


export const MarginTopForMobile = styled.div`
	${ props => props.isMobile && `
		margin-top: ${ props.marginTop }
	`};
`;

export const ComingSoon = styled.div`
    font-style: italic;
    ${ props => props.color && `
    	color: ${ props.color };
	`}
	${ props => props.textAlign && `
    	text-align: ${ props.textAlign };
	`}
	${ props => props.marginBotton && `
    	margin-bottom: ${ props.marginBotton };
	`}
	font-weight: 300;
	${ props => props.isMobile && `
		font-size: 14px;
	`}
`;
