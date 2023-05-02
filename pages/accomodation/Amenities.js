const {
	Container,
	Title
} = require("../../style/common/Common.Styled")

const {
	AmenitiesContainer,
	AmenitiesContainerHalf,
	AmenitiesItem
} = require("../../style/accomodation/Accomodation.Styled")

const Amenities = ( props ) => {

	const{

		languageDetected

	} = props

	console.log( props.amenities )
	const response = []
	const response_left = []
	const response_right = []
	if( typeof props.amenities !== "undefined" ){

		props.amenities.map(function(value,index){

			if( languageDetected === "ar" ? index%2 === 1 : index%2 === 0 ){

				response_left.push(
					<AmenitiesItem isMobile={ props.isMobile } key={ index }>{ value }</AmenitiesItem>
				)

			} else {

				response_right.push(
					<AmenitiesItem isMobile={ props.isMobile } key={ index }>{ value }</AmenitiesItem>
				)

			}
			return true
		})
		response.push(<AmenitiesContainerHalf isMobile={ props.isMobile } key="left" languageDetected={ languageDetected }><ul>{ response_left }</ul></AmenitiesContainerHalf>)
		response.push(<AmenitiesContainerHalf isMobile={ props.isMobile } key="right" languageDetected={ languageDetected }><ul>{ response_right }</ul></AmenitiesContainerHalf>)
		
	}
	return(
		<div style={ props.isMobile ? { padding: "0px" } : { padding: "20px" }}>
			<Container isMobile={ props.isMobile } paddingTopBottom={ "100px" }>
				<Title isMobile={ props.isMobile } textAlignCenter={ true }>{ props.title }</Title>
				<AmenitiesContainer isMobile={ props.isMobile }>
					{
						response
					}
				</AmenitiesContainer>
			</Container>
		</div>
	)

}

export default Amenities
