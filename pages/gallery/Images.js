import React from "react"
import { isMobile } from "react-device-detect"
import Carousel from "react-img-carousel"
import Image from "next/image"

require("react-img-carousel/lib/carousel.css")

// import styles from "./Images.module.css"

const {

	Container,
	Title,
	View,
	ViewBackgroundVariableHeight,

} = require("../../style/common/Common.Styled")

const {

	FullScreenModal,
	FullScreenModalContainer,
	ImageRow,
	ImagesByOne,
	ImagesByTwo,
	ImagesContainer,
	ImageSection,
	ImageSections,

} = require("../../style/gallery/Gallery.Styled")

const Images = ( props ) => {

	const {

		languageDetected

	} = props

	const [ is_mobile, UpdateState ] = React.useState( false )
	const [ selected, updateSelected ] = React.useState( 0 )
	const [ modal, toggleModal ] = React.useState( false )
	const [ initialImageModal, updateInitialImageModal ] = React.useState( 0 )
	React.useEffect(() => {

		UpdateState( isMobile )

	},[])
	const images_array = [
		typeof props.accommodation !== "undefined" ? props.accommodation.split(",") : [],
		typeof props.dining !== "undefined" ? props.dining.split(",") : [],
		typeof props.experiences !== "undefined" ? props.experiences.split(",") : [],
		typeof props.public_spaces !== "undefined" ? props.public_spaces.split(",") : [],
		typeof props.water_sports !== "undefined" ? props.water_sports.split(",") : [],
		typeof props.spa !== "undefined" ? props.spa.split(",") : []
	]
	var response = []
	var temporary_two = []
	var temporary_one = []

	const openModal = ( count ) => {
		toggleModal(!modal)
		updateInitialImageModal( count )
	}

	images_array[selected].map(function(value,index){
		if( index%3 < 1 ){
			temporary_one.push(
				<ImagesByOne isMobile={ is_mobile } src={ value } key={ "image-"+index} onClick={ () => openModal( index ) } />
			)
		} else if( index%3 >= 1 ){
			temporary_two.push(
				<ImagesByTwo isMobile={ is_mobile } src={ value } marginRight={ index%3 === 2 ? "0px" : "20px" } key={ "image-"+index} onClick={ () => openModal( index ) } />
			)
		}
		if( index%3 === 0 ){
			response.push( <ImageRow isMobile={ is_mobile } marginTop={ index > 2 ? "20px" : "0px" } key={ "row-"+index}>{ temporary_one }</ImageRow> )
			temporary_one = []
		}
		if( index%3 === 2 && index !== 0 ){
			response.push( <ImageRow isMobile={ is_mobile } marginTop={ "20px" } key={ "row-"+index}>{ temporary_two }</ImageRow> )
			temporary_two = []
		}
		return true
	})

	const headings = {

		en: {

			accommodation: "Accommodation",
			dining: "Dining",
			experiences: "Experiences",
			public_spaces: "Public Spaces",
			spa: "Spa",
			water_sports: "Water Sports",

		},
		ru: {

			accommodation: "Размещение",
			dining: "Питание",
			experiences: "Развлечения",
			public_spaces: "Общественные места",
			spa: "Спа",
			water_sports: "Водные Виды спорта",

		},
		ar: {
			
			accommodation: "الإقامة",
			dining: "تناول الطعام",
			experiences: "التجارب",
			public_spaces: "الأماكن العامة",
			spa: "منتجع صحي",
			water_sports: "الرياضات المائية",

		}

	}

	if( typeof languageDetected !== "undefined" && languageDetected !== null ){

		return(
			<View isMobile={ props.isMobile }>
				<Container isMobile={ props.isMobile }>
					<ImageSections isMobile={ props.isMobile }>
						<ImageSection isMobile={ props.isMobile } selected={ selected === 0 ? true : false } onClick={ () => updateSelected(0) }>{ headings[ languageDetected ].accommodation }</ImageSection>
						<ImageSection isMobile={ props.isMobile } selected={ selected === 1 ? true : false } onClick={ () => updateSelected(1) }>{ headings[ languageDetected ].dining }</ImageSection>
						<ImageSection isMobile={ props.isMobile } selected={ selected === 2 ? true : false } onClick={ () => updateSelected(2) }>{ headings[ languageDetected ].experiences }</ImageSection>
						<ImageSection isMobile={ props.isMobile } selected={ selected === 3 ? true : false } onClick={ () => updateSelected(3) }>{ headings[ languageDetected ].public_spaces }</ImageSection>
						<ImageSection isMobile={ props.isMobile } selected={ selected === 4 ? true : false } onClick={ () => updateSelected(4) }>{ headings[ languageDetected ].water_sports }</ImageSection>
						<ImageSection isMobile={ props.isMobile } selected={ selected === 5 ? true : false } onClick={ () => updateSelected(5) }>{ headings[ languageDetected ].spa }</ImageSection>
					</ImageSections>
				</Container>
				<ViewBackgroundVariableHeight backgroundColor={ "#F5F5F5" } height={ "100%" } marginTop={ props.isMobile ? "100px" : "50px" }/>
				<Container isMobile={ props.isMobile }>
					<ImagesContainer isMobile={ is_mobile }>
						{ response }
					</ImagesContainer>
				</Container>
				{
					modal &&
					<FullScreenModal onClick={ () => toggleModal(!modal) }>
						<FullScreenModalContainer onClick={ (event) => event.stopPropagation() }>
							<Carousel
								slideWidth="700"
								viewportWidth="700"
								slideHeight="700"
								cellPadding={ 0 }
								dots={ false }
								infinite={ true }
								initialSlide={ initialImageModal }
							>
								{
									images_array[selected].map(function(value,index){
										return(
											<Image src={ value } width="700px" height="700px" objectFit="cover" key={ "modal-"+index } alt={ "carousel-image-"+index } />			
										)
									})
								}
							</Carousel>
							<style jsx global>{`
	        					.carousel .carousel-arrow-default{
								  	border: 0 solid!important
								  	background: none !important
								}
								.carousel .carousel-left-arrow.carousel-arrow-default:before, .carousel .carousel-right-arrow.carousel-arrow-default:before {
								    content: ""
								    background-image: url(data:image/pngbase64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAAHdbkFIAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABlmWCKAAADqUlEQVR4Ae1b21LbMBANdIZ+AZ3phQf6Dn8S/qbwOXUv9EvgPzx0Sil9K32F9hxjhbWzK9tJViGONKORtJL27Fkra9lyJpOVpn+PaS+qtB501zkoDNgNlVBSA+rHod0o686GbIUNqL+OqiM+U9egaZ9B++YgdNzHOtkXtyFq4Mo6YcXPypZlzcH8MihCeWZZuGN1SDkVhfYOUqiznFtuspN1zC2E7FLUq2pDm+yMocpxc3VMvOZkprnOLRGA+hfk9wvTpfPqdLGQEkx+FTSw7FKy9DowFRBZWtBewsGy6FKuJz0EZVB4FCaGMmpBGBSzpFNBbDIBogq6JlOB6gNMPBGT/1oOpIK5hIkyEp3ODegSELlO8Vtll6Lc/3w8gAv6MVzVujTvUS5WA/Rty4DQjO+1PKwBcrU9CRaIci7IeODPdAK4EOCyuthdYKZ5YAXI1W5OWiDqaQMBgGUIm9kxkNNiw4FWbX5nqE+Vm8U09pwFHJU15MODeE/MCZQ3dg1PZKua33WH+k8tsND0XflA+RaQWmWa3z5ADwVw+ujXd23kcdkD4/UAfoJvkH8jn3uwjD4aEJAxQAA/YJf/QrSXrqqPFhGtuzQIaT8yZlBXHwNuFY23MOJEkfuIAHZB2koqfBAVrQA/VQygqFSG+4gAdmQYce+DqGiFAXuGERSvbHEq0E0RwO4MQ7ZvcX4wPFE2febYggHW4vzqCNtUDSO0WPG9OcqpBXBrQb52gnxUC+D1/SQj190/KAH8DFlLpavLqRyolxoyZEUKcGuxTV3Bwe6lwZpi3/gPACvI+C82utVgXrq6XCpXDChkv3sdBvwSRvguNnc2GSB7IHsgeyB7YHQewE3qAHn25YO4aXHnlO4ZcV2eBckrQdqqFujwO0ZYF3nigthni7UiLyFLc8KQ0ikkhUxyfROPXtMePqdwCEjxwcU61LKcw/cJvg81Kci3MUBqimw9QmrOGGfQBFOer2pvjTQnBNk4gybY8S239elFIC/LHDRrb4w2aPLVIpf7kDTqoPlngCduMNb35W87sqdogxQ/RuobNNO8fk9BnBggPnRDle4AxNMJIL59d4eBSx3Dq7T5+wPQ4DfOQ3eIm/0+GIS383YH4sfI3M31Tdzw+H336BnIpG6Q4Anidm15QZgPPdbpJbrUNIqgdgBq8gBLZSqEDICbHdRay50f1PVJo93D839gVhpHUJNXXKuD/Tvkc2R+y/cDmU451MZmWfZA9kD2wHPywH/M3O5eFgfk4gAAAABJRU5ErkJggg==)
								    background-size: contain
								    width: 30px
								    height: 30px
								}
								.carousel .carousel-left-arrow.carousel-arrow-default:before {
								    transform: rotate(
										180deg
									)
								}
								.carousel .carousel-arrow {
								    bottom: calc(50% - 16px)!important
								}
								.carousel .carousel-left-arrow {
								    left: 10px!important
								}
								.carousel .carousel-right-arrow {
								    right: 10px!important
								}
								.carousel .carousel-dots {
								    bottom: 0px
								}
								.carousel .carousel-dots button.selected {
								    color: #00a6bc
								}
								.carousel .carousel-dots button {
								    color: #fff
								}
							`}
							</style>
						</FullScreenModalContainer>
					</FullScreenModal>
				}

			</View>	
		)
	} else {

		return(
			<div/>
		)
		
	}
	
}

export default Images
