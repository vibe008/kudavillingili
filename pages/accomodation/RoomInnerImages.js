const {
	RoomInnerImageContainer,
	RoomInnerImagesContainer
} = require('../../style/accomodation/Room.Styled');

const RoomInnerImages = ( props ) => {
	if( typeof props.images !== 'undefined' )
		return(
			<RoomInnerImagesContainer isMobile={ props.isMobile }>
				{
					props.images.map(function(value,index){
						return(
							<RoomInnerImageContainer isMobile={ props.isMobile } background={ value } key={ index }/>
						)			
					})
				}
			</RoomInnerImagesContainer>
		)
	return(
		<div />
	)
}

export default RoomInnerImages;