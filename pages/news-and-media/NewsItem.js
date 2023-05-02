import React, { useRef, useLayoutEffect, useState } from "react";
import Link from 'next/link';
const {
	OfferItem,
	OfferTitle,
	OfferTitleContainer
} = require('../../style/offers/Offers.Styled');

const {
	NewsDescription,
	NewsImage,
	NewsTime
} = require('../../style/news');

const NewsItem = (props) => {
	const targetRef = useRef();
	const [dimensions, setDimensions] = useState({ width:0, height: 0 });
  	useLayoutEffect(() => {
    	if (targetRef.current) {
      		setDimensions({
        		width: targetRef.current.offsetWidth,
        		height: targetRef.current.offsetHeight
      		});
    	}
  }, []);
	return(
		<a href={ props.link } target='_blank' rel="noreferrer">
			<OfferItem isMobile={ props.isMobile }  marginTop={ props.marginTop }>
				<NewsImage src={ props.image } isMobile={ props.isMobile }/>
				<NewsDescription marginTop={ dimensions.height } isMobile={ props.isMobile }>
					<OfferTitle>{ props.title }</OfferTitle>
					<NewsTime>{ props.time }</NewsTime>
				</NewsDescription>
			</OfferItem>
		</a>
	)
}

export default NewsItem;
