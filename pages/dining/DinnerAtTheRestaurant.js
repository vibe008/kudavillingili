const {
	BodyText,
	Title,
	ViewPort,
	ComingSoon
} = require('../../style/common/Common.Styled');
const {
	DinnerAtTheRestuarantImage,
	DinnerAtTheRestaurantTextContainer,
	DinnerAtTheRestaurantDesriptionContainer
} = require('../../style/dining/Dining.Styled');

const DinnerAtTheRestaurant = ( props ) => {
	if( typeof props.data !== 'undefined'){
		const {
			image,
			title,
			description
		} = props.data;
		return(
			<ViewPort isMobile={ props.isMobile } height='auto'>
				<DinnerAtTheRestuarantImage
					image={ image }
					isMobile={ props.isMobile }
				/>
				<DinnerAtTheRestaurantTextContainer isMobile={ props.isMobile }>
					<Title isMobile={ props.isMobile } color='#fff'>{ title }</Title>
					<DinnerAtTheRestaurantDesriptionContainer isMobile={ props.isMobile }>
						<BodyText marginTop='20px' color='#fff' fontSize={ props.isMobile ? '14px' : '18px'}>{ description }</BodyText>
						<ComingSoon isMobile={ props.isMobile } textAlign='center' color='#fff'>The Restaurant is temporarily serviced with a daily varied selection of lavish buffet during the soft opening.</ComingSoon>
					</DinnerAtTheRestaurantDesriptionContainer>
				</DinnerAtTheRestaurantTextContainer>
			</ViewPort>
		)
	}
	return(<div/>);
}

export default DinnerAtTheRestaurant;