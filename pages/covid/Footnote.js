import React from "react"

const {
	
	Container,
	BodyText,
	KudavillingiliDot,
	Title,
	ViewPort,

} = require("../../style/common/Common.Styled")

const {

	FootnoteContainer,
	FootnoteText,

} = require("../../style/contact")

const Footnote = ( props ) => {

	const {

		languageDetected,
		isMobile,

	} = props

	return(

		<FootnoteContainer isMobile={ isMobile }>
			<FootnoteText
				isMobile={ isMobile }
				textAlign="left"
				dangerouslySetInnerHTML={{ __html: props.data }}
				languageDetected={ languageDetected }
			/>
		</FootnoteContainer>

	)

}

export default Footnote
