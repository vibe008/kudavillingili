import React, { useRef, useLayoutEffect, useState } from "react"
import Link from "next/link"

const {

	OfferDescription,
	OfferImage,
	OfferItem,
	OfferTitle,
	OfferTitleContainer,

} = require("../../style/offers/Offers.Styled")

const Offer = (props) => {

	const {

		isMobile,
		languageDetected,

	} = props

	const targetRef = useRef()
	const [dimensions, setDimensions] = useState({ width:0, height: 0 })
  	useLayoutEffect(() => {

    	if (targetRef.current) {

      		setDimensions({

        		height: targetRef.current.offsetHeight - 25,
        		width: targetRef.current.offsetWidth,

      		})

    	}

  	}, [])
	return(
		<Link href={"/offer/"+props.url } passHref>
			<a>
				<OfferItem isMobile={ isMobile }  marginTop={ props.marginTop }>
					<OfferImage src={ props.image } isMobile={ isMobile }/>
					<OfferTitleContainer isMobile={ isMobile } ref={targetRef}>
						<OfferTitle isMobile={ isMobile }>{ props.title }</OfferTitle>
					</OfferTitleContainer>
					<OfferDescription
						marginTop={ dimensions.height }
						isMobile={ isMobile }
						dangerouslySetInnerHTML={{ __html: props.sub_heading }}
						languageDetected={ languageDetected }
					/>
				</OfferItem>
			</a>
		</Link>
	)

}

export default Offer
