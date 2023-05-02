import Link from "next/link"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const {

	Container,
	Title,
	View,
	ViewBackgroundVariableHeight,

} = require("../../style/common/Common.Styled")

const {

	BackgroundCover,
	CarouselImage,
	CarouselText,
	ExploreCTA,
	ImageContainer,
	ImageContainerByThree,
	ImageHoverText,
	ImageRow,
	ImagesByThree,
	ImagesByTwo,
	ImagesContainer,

} = require("../../style/home/Home.Styled")

const AboutMore = ( props ) => {

	const {

		languageDetected

	} = props
	const images_array = props.data
	var response = []
	var temporary_two = []
	var temporary_three = []

	const translations = {

		explore: {

			ar: "استكشاف",
			en: "Explore",
			ru: "Откройте для себя",
		},
		time_space_redefined: {

			ar: "منتجع كودا فيلينجيلي حيث إعادة تعريف الزمان والمكان",
			en: "Time and Space Redefined At Kuda Villingili",
			ru: "Время и пространство переосмыслены в Kuda Villingili",
			
		}

	}
	if( typeof images_array !== "undefined" && images_array.length > 0 ){

		images_array.sort((a, b) => {

            return a.order - b.order

        })
		images_array.map(function(value,index){

			if( !props.isMobile ){

				if( index%5 < 2 ){

					temporary_two.push(
						<ImageContainer isMobile={ props.isMobile } marginRight={ index%5 === 0 ? "10px" : "0px" } key={"image-"+index}>
							<ImagesByTwo isMobile={ props.isMobile } key={ index } src={ value.image }/>
							<ImageHoverText isMobile={ props.isMobile }>{ languageDetected === "ar" ? value.title_ar : languageDetected === "ru" ? value.title_ru : value.title }</ImageHoverText>
							<BackgroundCover isMobile={ props.isMobile }/>
								<Link href={ "/"+value.link } passHref>
									<ExploreCTA>{ translations.explore[ languageDetected ] }</ExploreCTA>
								</Link>
						</ImageContainer>
					)

				} else if( index%5 >= 2 ){

					temporary_three.push(
						<ImageContainerByThree isMobile={ props.isMobile } marginRight={ index%5 === 4 ? "0px" : "10px" } key={"image-"+index}>
							<ImagesByThree isMobile={ props.isMobile } key={ index } src={ value.image } />
							<ImageHoverText isMobile={ props.isMobile }>{ languageDetected === "ar" ? value.title_ar : languageDetected === "ru" ? value.title_ru : value.title }</ImageHoverText>
							<BackgroundCover isMobile={ props.isMobile }/>
								<Link href={ "/"+value.link } passHref>
									<ExploreCTA>{ translations.explore[ languageDetected ] }</ExploreCTA>
								</Link>
						</ImageContainerByThree>
					)

				}
				if( index%5 === 1 ){

					response.push( <ImageRow isMobile={ props.isMobile } key={ "row-"+index } marginTop={ index > 4 ? "10px" : "0px" }>{ temporary_two }</ImageRow> )
					temporary_two = []

				}
				if( index%5 === 0 && index !== 0 ){

					response.push( <ImageRow isMobile={ props.isMobile } key={ "row-"+index } marginTop={ index > 2 ? "10px" : "0px" }>{ temporary_three }</ImageRow> )
					temporary_three = []

				}

			} else {

				response.push(
					<div key={ "image-"+index }>
						<CarouselImage src={ value.image} />
						<CarouselText>{ languageDetected === "ar" ? value.title_ar : languageDetected === "ru" ? value.title_ru : value.title }</CarouselText>
					</div>
				)

			}
			return true

		})

	}
	return(
		<View>
			<ViewBackgroundVariableHeight isMobile={ props.isMobile } backgroundColor={ "#F5F5F5" } height={ "80%" }/>
			<Container isMobile={ props.isMobile }>
				<Title isMobile={ props.isMobile } paddingTop={ "100px" } textAlignCenter={ true } textAlign="center" dangerouslySetInnerHTML={{ __html: translations.time_space_redefined[ languageDetected ] }} />
				{
					!props.isMobile &&
					<ImagesContainer isMobile={ props.isMobile }>
						{ response }
					</ImagesContainer>
				}
				{
					props.isMobile &&
					<Carousel
						showThumbs={ false }
						showArrows={ false }
						showStatus={ false }
						showIndicators={ true }
						autoPlay={ true }
						dynamicHeight={ false }
						dynamicWidth={ true }
						infiniteLoop={ true }
						interval={ 8000 }
						stopOnHover={ false }
						class="home"
					>	
						{ response }
						
					</Carousel>
				}
			</Container>
		</View>
	)

}

export default AboutMore
