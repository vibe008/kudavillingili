import styled from 'styled-components';

export const GettingHereContainer = styled.div`
	display: flex;
	flex-direction: ${ props => props.isMobile ? `column` : `row`};
	align-items: center;
	justify-content: center;
`;
export const GettingHereImage = styled.img`
	width: 100%;
	height: 100%;
	background-color: #dedede;
`;
export const GettingHereHalf = styled.div`
	width: ${ props => props.isMobile ? `100vw` : `35%`};
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
