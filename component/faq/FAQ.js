import React from "react"
import Image from "next/image"

import { isMobile } from "react-device-detect"

import collapse_icon from "../../assets/images/collapse.webp";
import expand_icon from "../../assets/images/expand.webp";

const {
	
	Title

} = require("../../style/common/Common.Styled")

const {

	FAQContainer,
	FAQDescription,
	FAQImage,
	FAQItemContainer,
	FAQStatusImage,
	FAQTitle,

} = require("./FAQ.Styled")

const FAQ = ( props ) => {

	const {

		languageDetected

	} = props

	const [ expand, UpdateExpand ] = React.useState( -1 )
	const [ is_mobile, UpdateState ] = React.useState( false )

	React.useEffect(() => {

		UpdateState( isMobile )

	},[ isMobile ])

	return(

		<FAQContainer isMobile={ is_mobile }>
			{

				props.data.map(function( value,index ){

					var description = languageDetected === "ar" ? value.description_ar : languageDetected === "ru" ? value.description_ru : value.description
					var title = languageDetected === "ar" ? value.title_ar : languageDetected === "ru" ? value.title_ru : value.title

					return(
						<div key={ "faq-" + index }>
							<FAQItemContainer onClick={ () => UpdateExpand( expand === index ? -1 : index ) } languageDetected={ languageDetected }>
								<FAQImage
									background={ value.image }
									isMobile={ is_mobile }
								/>
								<FAQTitle displayCheck={ expand === index ? true : false } isMobile={ is_mobile } languageDetected={ languageDetected }>
									{ title }
								</FAQTitle>
								<FAQStatusImage>
									<Image src={ expand === index ? collapse_icon : expand_icon } alt="expand_icon" width={ 15 } height={ 15 } />
								</FAQStatusImage>
							</FAQItemContainer>
							<FAQDescription
								displayCheck={ expand === index ? true : false }
								dangerouslySetInnerHTML={{ __html: description }}
								isMobile={ is_mobile }
								languageDetected={ languageDetected }
							/>
						</div>
					)

				})

			}
		</FAQContainer>

	)

}

export default FAQ
