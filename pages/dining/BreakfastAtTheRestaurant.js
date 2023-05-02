const {
	BodyText,
	Container,
	Title
} = require('../../style/common/Common.Styled');

const {
	BreakfastAtTheRestaurantContainer,
	BreakfastAtTheRestaurantImage,
	BreakfastAtTheRestaurantDescriptionContainer
} = require('../../style/dining/Dining.Styled');

const BreakfastAtTheRestaurant = ( props ) => {
	if( typeof props.data !== 'undefined'){
		const {
			image,
			title,
			description
		} = props.data;
		return(
			<BreakfastAtTheRestaurantContainer isMobile={ props.isMobile }>
				<Container isMobile={ props.isMobile }>
					<BreakfastAtTheRestaurantImage isMobile={ props.isMobile } image={ image } />
					<BreakfastAtTheRestaurantDescriptionContainer isMobile={ props.isMobile }>
						<Title isMobile={ props.isMobile }>{ title }</Title>
						<BodyText isMobile={ props.isMobile } marginTop='20px' fontSize='16px' textAlign='left'>
							{ description }
						</BodyText>
					</BreakfastAtTheRestaurantDescriptionContainer>
				</Container>
			</BreakfastAtTheRestaurantContainer>
		)
	}
	return(<div/>);
}

export default BreakfastAtTheRestaurant;
