import Room from './Room';

const {
	View,
	ViewBackgroundVariableHeight
} = require('../../style/common/Common.Styled');

const Rooms = ( props ) => {
	const {
		data,
		languageDetected,

	} = props
	// const data = props.data;
	var two_bedroom_family_villa = { 
		title: "Two-Bedroom Family Villa",
		bed_size: "4 Adults + 2 Children OR 6 Adults - (2 x King)",
		description: "Colossal palm trees swaying in the ocean breeze surround our tropical hideaway by  the  sandy  beach.  Sunlight  streams  into these high-ceilinged abodes, illuminating the natural woods and cooling stone inspired by our island’s mesmerising setting. Spread yourself out comfortably across this beachfront bliss, relaxing  on your cloud-like bed oriented towards the ocean, or indulge with bubbles in the bathtub angled to the blue view.",
		link: "",
		size: "232",
		name: "two-bedroom-family-villa",
		pool_size: '',
		link_360: "",
		seo_description: "Two-Bedroom Family Villa | Kuda Villingili",
		seo_keywords: "Two-Bedroom Family Villa | Kuda Villingili",
		seo_title: "Two-Bedroom Family Villa | Kuda Villingili",
		image: "https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/two_bedroom_family_villa/1.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/two_bedroom_family_villa/2.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/two_bedroom_family_villa/3.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/two_bedroom_family_villa/4.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/two_bedroom_family_villa/5.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/two_bedroom_family_villa/6.jpg",
		amenities: "",
		amenities_ar: "",
		amenities_ru: "",
		bed_size_ar: "4 Adults + 2 Children OR 6 Adults - (2 x King)",
		bed_size_ru: "4 Adults + 2 Children OR 6 Adults - (2 x King)",
		description_ar: "Colossal palm trees swaying in the ocean breeze surround our tropical hideaway by  the  sandy  beach.  Sunlight  streams  into these high-ceilinged abodes, illuminating the natural woods and cooling stone inspired by our island’s mesmerising setting. Spread yourself out comfortably across this beachfront bliss, relaxing  on your cloud-like bed oriented towards the ocean, or indulge with bubbles in the bathtub angled to the blue view.",
		description_ru: "Colossal palm trees swaying in the ocean breeze surround our tropical hideaway by  the  sandy  beach.  Sunlight  streams  into these high-ceilinged abodes, illuminating the natural woods and cooling stone inspired by our island’s mesmerising setting. Spread yourself out comfortably across this beachfront bliss, relaxing  on your cloud-like bed oriented towards the ocean, or indulge with bubbles in the bathtub angled to the blue view.",
		title_ar:"Two-Bedroom Family Villa",
		title_ru: "Two-Bedroom Family Villa"
	 };

	var four_bedroom_beach_villa = { 
		title: "Four-Bedroom Beach Villa",
		bed_size: "8 Adults + 4 Children OR 12 Adults - (4 x King)",
		description: "These aptly named  Four-Bedroom  Kudavillingili  Beach  treat truly elevates the Maldivian island experience, placing you sky-high amidst the palm trees with an exotic bird’s eye  view of the seemingly limitless horizon. Neutral hues and organic fabrics round out the rustic woods and calming stone in these generous oases with an indulgent soaking tub for two, a loft-like living area and an outdoor patio from which to admire the vast majesty of the Indian Ocean.",
		link: "",
		size: "464",
		name: "four-bedroom-beach-villa",
		pool_size: "",
		link_360: "",
		seo_description: "Four-Bedroom Beach Villa | Kuda Villingili",
		seo_keywords: "Four-Bedroom Beach Villa | Kuda Villingili",
		seo_title: "Four-Bedroom Beach Villa | Kuda Villingili",
		image: "https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/four_bedroom_beach_villa/1.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/four_bedroom_beach_villa/2.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/four_bedroom_beach_villa/3.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/four_bedroom_beach_villa/4.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/four_bedroom_beach_villa/5.jpg",
		amenities: "",
		amenities_ar: "",
		amenities_ru: "",		
		bed_size_ar: "8 Adults + 4 Children OR 12 Adults - (4 x King)",
		bed_size_ru: "8 Adults + 4 Children OR 12 Adults - (4 x King)",
		description_ar: "These aptly named  Four-Bedroom  Kudavillingili  Beach  treat truly elevates the Maldivian island experience, placing you sky-high amidst the palm trees with an exotic bird’s eye  view of the seemingly limitless horizon. Neutral hues and organic fabrics round out the rustic woods and calming stone in these generous oases with an indulgent soaking tub for two, a loft-like living area and an outdoor patio from which to admire the vast majesty of the Indian Ocean.",
		description_ru: "These aptly named  Four-Bedroom  Kudavillingili  Beach  treat truly elevates the Maldivian island experience, placing you sky-high amidst the palm trees with an exotic bird’s eye  view of the seemingly limitless horizon. Neutral hues and organic fabrics round out the rustic woods and calming stone in these generous oases with an indulgent soaking tub for two, a loft-like living area and an outdoor patio from which to admire the vast majesty of the Indian Ocean.",
		title_ar: "Four-Bedroom Beach Villa",
		title_ru: "Four-Bedroom Beach Villa"	
	 };

	var two_bedroom_beach_residence_with_private_pool = { 
		title: "Two-Bedroom Beach Residence with Private Pool",
		title_ar: "Two-Bedroom Beach Residence with Private Pool",
		title_ru: "Two-Bedroom Beach Residence with Private Pool",
		description: "Spread along the white beach, this residence, with its  stunning ocean views, invites guests to immerse in its splendour. Step out from the majestic bedrooms onto an expansive patio with seating space for lounging with friends or family. A step further down will lead to an exquisite pool facing sparkling waters and clear  blue skies.",
		description_ar: "Spread along the white beach, this residence, with its  stunning ocean views, invites guests to immerse in its splendour. Step out from the majestic bedrooms onto an expansive patio with seating space for lounging with friends or family. A step further down will lead to an exquisite pool facing sparkling waters and clear  blue skies.",
		description_ru: "Spread along the white beach, this residence, with its  stunning ocean views, invites guests to immerse in its splendour. Step out from the majestic bedrooms onto an expansive patio with seating space for lounging with friends or family. A step further down will lead to an exquisite pool facing sparkling waters and clear  blue skies.",
		size: "400",
		name: "two-bedroom-beach-residence-with-private-pool",
		pool_size: "L: 10m x W: 4m x H: 1.2m",
		link_360: "",
		seo_description: "Two-Bedroom Beach Residence with Private Pool | Kuda Villingili",
		seo_keywords: "Two-Bedroom Beach Residence with Private Pool | Kuda Villingili",
		seo_title: "Two-Bedroom Beach Residence with Private Pool | Kuda Villingili",
		image: "https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/two_bedroom_beach_residence_with_pool/1.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/two_bedroom_beach_residence_with_pool/2.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/two_bedroom_beach_residence_with_pool/3.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/two_bedroom_beach_residence_with_pool/4.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/two_bedroom_beach_residence_with_pool/5.jpg",
		bed_size: "4 Adults + 2 Children OR 6 Adults - (2 x King)",
		bed_size_ar: "4 Adults + 2 Children OR 6 Adults - (2 x King)",
		bed_size_ru: "4 Adults + 2 Children OR 6 Adults - (2 x King)",
		amenities: "",
		amenities_ar: "",
		amenities_ru: "",
		link: ""
	 };

	var three_bedroom_beach_residence_with_private_pool = { 
		title: "Three-Bedroom Beach Residence with Private Pool",
		title_ar: "Three-Bedroom Beach Residence with Private Pool",
		title_ru: "Three-Bedroom Beach Residence with Private Pool",
		description: "The luxurious Three-Bedroom Beach Residence  with  a  Private Pool offers seclusion and  is  an ideal  family  vacation home.  The airy tropical hideaway by the sandy beach surrounded by lush vegetation features three opulent master bedrooms, an inspiring living space to gather in for family moments, and a large swimming pool facing the crystal-clear blue lagoon.",
		description_ar: "The luxurious Three-Bedroom Beach Residence  with  a  Private Pool offers seclusion and  is  an ideal  family  vacation home.  The airy tropical hideaway by the sandy beach surrounded by lush vegetation features three opulent master bedrooms, an inspiring living space to gather in for family moments, and a large swimming pool facing the crystal-clear blue lagoon.",
		description_ru: "The luxurious Three-Bedroom Beach Residence  with  a  Private Pool offers seclusion and  is  an ideal  family  vacation home.  The airy tropical hideaway by the sandy beach surrounded by lush vegetation features three opulent master bedrooms, an inspiring living space to gather in for family moments, and a large swimming pool facing the crystal-clear blue lagoon.",
		size: "664",
		name: "three-bedroom-beach-residence-with-private-pool",
		pool_size: "L: 10m x W: 4m x H: 1.2m",
		link_360: "",
		seo_description: "Three-Bedroom Beach Residence with Private Pool | Kuda Villingili",
		seo_keywords: "Three-Bedroom Beach Residence with Private Pool | Kuda Villingili",
		seo_title: "Three-Bedroom Beach Residence with Private Pool | Kuda Villingili",
		image: "https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/three_bedroom_beach_residence_with_pool/1.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/three_bedroom_beach_residence_with_pool/2.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/three_bedroom_beach_residence_with_pool/3.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/three_bedroom_beach_residence_with_pool/4.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/three_bedroom_beach_residence_with_pool/5.jpg",
		bed_size: "6 Adults + 3 Children OR 9 Adults - (3 x King)",
		bed_size_ar: "6 Adults + 3 Children OR 9 Adults - (3 x King)",
		bed_size_ru: "6 Adults + 3 Children OR 9 Adults - (3 x King)",
		amenities: "",
		amenities_ar: "",
		amenities_ru: "",
		link: ""
	 };

	var three_bedroom_beach_retreat_with_private_pool = { 
		title: "Three-Bedroom Beach Retreat with Private Pool",
		title_ar: "Three-Bedroom Beach Retreat with Private Pool",
		title_ru: "Three-Bedroom Beach Retreat with Private Pool",
		description: "Three-Bedroom Beach Retreat with Private Pool, our most exclusive family vacation home with dramatic infinity ocean views offers the ultimate  seclusion  and  tranquillity  for  families  and  friends to enjoy a perfect holiday retreat. Enter the Retreat through a massive entrance door leading to a private living room with dining area and fully stocked professional kitchen with a wine cellar. Two bedrooms upstairs and a bedroom downstairs makes this the ideal home for families or group of friends up to 9 guests.",
		description_ar: "Three-Bedroom Beach Retreat with Private Pool, our most exclusive family vacation home with dramatic infinity ocean views offers the ultimate  seclusion  and  tranquillity  for  families  and  friends to enjoy a perfect holiday retreat. Enter the Retreat through a massive entrance door leading to a private living room with dining area and fully stocked professional kitchen with a wine cellar. Two bedrooms upstairs and a bedroom downstairs makes this the ideal home for families or group of friends up to 9 guests.",
		description_ru: "Three-Bedroom Beach Retreat with Private Pool, our most exclusive family vacation home with dramatic infinity ocean views offers the ultimate  seclusion  and  tranquillity  for  families  and  friends to enjoy a perfect holiday retreat. Enter the Retreat through a massive entrance door leading to a private living room with dining area and fully stocked professional kitchen with a wine cellar. Two bedrooms upstairs and a bedroom downstairs makes this the ideal home for families or group of friends up to 9 guests.",
		size: "764",
		name: "three-bedroom-beach-retreat-with-private-pool",
		pool_size: "L: 10m x W: 4m x H: 1.2m",
		link_360: "",
		seo_description: "Three-Bedroom Beach Retreat with Private Pool | Kuda Villingili",
		seo_keywords: "Three-Bedroom Beach Retreat with Private Pool | Kuda Villingili",
		seo_title: "Three-Bedroom Beach Retreat with Private Pool | Kuda Villingili",
		image: "https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/three_bedroom_beach_retreat_with_pool/1.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/three_bedroom_beach_retreat_with_pool/2.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/three_bedroom_beach_retreat_with_pool/3.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/three_bedroom_beach_retreat_with_pool/4.jpg,https://kudavillingili-maldives.ams3.digitaloceanspaces.com/accomodation/three_bedroom_beach_retreat_with_pool/5.jpg",	
		bed_size: "6 Adults + 3 Children OR 9 Adults - (3 x King)",
		bed_size_ar: "6 Adults + 3 Children OR 9 Adults - (3 x King)",
		bed_size_ru: "6 Adults + 3 Children OR 9 Adults - (3 x King)",
		amenities: "",
		amenities_ar: "",
		amenities_ru: "",
		link: ""
	 };

	var beach_villa = {};
	var beach_villa_with_pool = {};
	var water_villa = {};
	var water_villa_with_pool = {};
	if( data !== '' && typeof data !== 'undefined' ){
		data.map( function(value,index){
			if( value.name === 'beach-villa' )
				beach_villa = value;
			else if( value.name === 'beach-villa-with-pool' )
				beach_villa_with_pool = value;
			else if( value.name === 'water-villa' )
				water_villa = value;
			else if( value.name === 'water-villa-with-pool' )
				water_villa_with_pool = value;
		})
	}


	
	return(
		<View>

			<Room
				name={ languageDetected === "en" ? three_bedroom_beach_retreat_with_private_pool.title : languageDetected === "ru" ? three_bedroom_beach_retreat_with_private_pool.title_ru : languageDetected === "ar" ? three_bedroom_beach_retreat_with_private_pool.title_ar : three_bedroom_beach_retreat_with_private_pool.title }
				description={ languageDetected === "en" ? three_bedroom_beach_retreat_with_private_pool.description : languageDetected === "ru" ? three_bedroom_beach_retreat_with_private_pool.description_ru : languageDetected === "ar" ? three_bedroom_beach_retreat_with_private_pool.description_ar : three_bedroom_beach_retreat_with_private_pool.description }
				area={ three_bedroom_beach_retreat_with_private_pool.size }
				bed={ languageDetected === "en" ? three_bedroom_beach_retreat_with_private_pool.bed_size : languageDetected === "ru" ? three_bedroom_beach_retreat_with_private_pool.bed_size_ru : languageDetected === "ar" ? three_bedroom_beach_retreat_with_private_pool.bed_size_ar : three_bedroom_beach_retreat_with_private_pool.bed_size }
				guests="Max Guests"
				pool_size= {three_bedroom_beach_retreat_with_private_pool.pool_size} 
				images={ typeof three_bedroom_beach_retreat_with_private_pool.image !== 'undefined' ? three_bedroom_beach_retreat_with_private_pool.image.split(',') : [] }
				index={ 7 }
				water={ true }
				link={ three_bedroom_beach_retreat_with_private_pool.name }
				isMobile={ props.isMobile }
				amenities={ typeof three_bedroom_beach_retreat_with_private_pool.amenities !== 'undefined' ? three_bedroom_beach_retreat_with_private_pool.amenities.split(',') : [] }
				languageDetected={ languageDetected }
			/>

			<Room
				name={ languageDetected === "en" ? three_bedroom_beach_residence_with_private_pool.title : languageDetected === "ru" ? three_bedroom_beach_residence_with_private_pool.title_ru : languageDetected === "ar" ? three_bedroom_beach_residence_with_private_pool.title_ar : three_bedroom_beach_residence_with_private_pool.title }
				description={ languageDetected === "en" ? three_bedroom_beach_residence_with_private_pool.description : languageDetected === "ru" ? three_bedroom_beach_residence_with_private_pool.description_ru : languageDetected === "ar" ? three_bedroom_beach_residence_with_private_pool.description_ar : three_bedroom_beach_residence_with_private_pool.description }
				area={ three_bedroom_beach_residence_with_private_pool.size }
				bed={ languageDetected === "en" ? three_bedroom_beach_residence_with_private_pool.bed_size : languageDetected === "ru" ? three_bedroom_beach_residence_with_private_pool.bed_size_ru : languageDetected === "ar" ? three_bedroom_beach_residence_with_private_pool.bed_size_ar : three_bedroom_beach_residence_with_private_pool.bed_size }
				guests="Max Guests"
				pool_size= {three_bedroom_beach_residence_with_private_pool.pool_size} 
				images={ typeof three_bedroom_beach_residence_with_private_pool.image !== 'undefined' ? three_bedroom_beach_residence_with_private_pool.image.split(',') : [] }
				index={ 6 }
				water={ true }
				link={ three_bedroom_beach_residence_with_private_pool.name }
				isMobile={ props.isMobile }
				amenities={ typeof three_bedroom_beach_residence_with_private_pool.amenities !== 'undefined' ? three_bedroom_beach_residence_with_private_pool.amenities.split(',') : [] }
				languageDetected={ languageDetected }
			/>


			<Room
				name={ languageDetected === "en" ? two_bedroom_beach_residence_with_private_pool.title : languageDetected === "ru" ? two_bedroom_beach_residence_with_private_pool.title_ru : languageDetected === "ar" ? two_bedroom_beach_residence_with_private_pool.title_ar : two_bedroom_beach_residence_with_private_pool.title }
				description={ languageDetected === "en" ? two_bedroom_beach_residence_with_private_pool.description : languageDetected === "ru" ? two_bedroom_beach_residence_with_private_pool.description_ru : languageDetected === "ar" ? two_bedroom_beach_residence_with_private_pool.description_ar : two_bedroom_beach_residence_with_private_pool.description }
				area={ two_bedroom_beach_residence_with_private_pool.size }
				bed={ languageDetected === "en" ? two_bedroom_beach_residence_with_private_pool.bed_size : languageDetected === "ru" ? two_bedroom_beach_residence_with_private_pool.bed_size_ru : languageDetected === "ar" ? two_bedroom_beach_residence_with_private_pool.bed_size_ar : two_bedroom_beach_residence_with_private_pool.bed_size }
				guests="Max Guests"
				pool_size= {two_bedroom_beach_residence_with_private_pool.pool_size} 
				images={ typeof two_bedroom_beach_residence_with_private_pool.image !== 'undefined' ? two_bedroom_beach_residence_with_private_pool.image.split(',') : [] }
				index={ 6 }
				water={ true }
				link={ two_bedroom_beach_residence_with_private_pool.name }
				isMobile={ props.isMobile }
				amenities={ typeof two_bedroom_beach_residence_with_private_pool.amenities !== 'undefined' ? two_bedroom_beach_residence_with_private_pool.amenities.split(',') : [] }
				languageDetected={ languageDetected }
			/>


			<Room
				name={ languageDetected === "en" ? four_bedroom_beach_villa.title : languageDetected === "ru" ? four_bedroom_beach_villa.title_ru : languageDetected === "ar" ? four_bedroom_beach_villa.title_ar : four_bedroom_beach_villa.title }
				description={ languageDetected === "en" ? four_bedroom_beach_villa.description : languageDetected === "ru" ? four_bedroom_beach_villa.description_ru : languageDetected === "ar" ? four_bedroom_beach_villa.description_ar : four_bedroom_beach_villa.description }
				area={ four_bedroom_beach_villa.size }
				bed={ languageDetected === "en" ? four_bedroom_beach_villa.bed_size : languageDetected === "ru" ? four_bedroom_beach_villa.bed_size_ru : languageDetected === "ar" ? four_bedroom_beach_villa.bed_size_ar : four_bedroom_beach_villa.bed_size }
				guests="Max Guests"
				pool_size={four_bedroom_beach_villa.pool_size}
				images={ typeof four_bedroom_beach_villa.image !== 'undefined' ? four_bedroom_beach_villa.image.split(',') : [] }
				index={ 5 }
				water={ true }
				link={ four_bedroom_beach_villa.name }
				isMobile={ props.isMobile }
				amenities={ typeof four_bedroom_beach_villa.amenities !== 'undefined' ? four_bedroom_beach_villa.amenities.split(',') : [] }
				languageDetected={ languageDetected }
			/>

			<Room
				name={ languageDetected === "en" ? two_bedroom_family_villa.title : languageDetected === "ru" ? two_bedroom_family_villa.title_ru : languageDetected === "ar" ? two_bedroom_family_villa.title_ar : two_bedroom_family_villa.title }
				description={ languageDetected === "en" ? two_bedroom_family_villa.description : languageDetected === "ru" ? two_bedroom_family_villa.description_ru : languageDetected === "ar" ? two_bedroom_family_villa.description_ar : two_bedroom_family_villa.description }
				area={ two_bedroom_family_villa.size }
				bed={ languageDetected === "en" ? two_bedroom_family_villa.bed_size : languageDetected === "ru" ? two_bedroom_family_villa.bed_size_ru : languageDetected === "ar" ? two_bedroom_family_villa.bed_size_ar : two_bedroom_family_villa.bed_size }
				guests="Max Guests"
				pool_size= {two_bedroom_family_villa.pool_size}
				images={ typeof two_bedroom_family_villa.image !== 'undefined' ? two_bedroom_family_villa.image.split(',') : [] }
				index={ 4 }
				water={ true }
				link={ two_bedroom_family_villa.name }
				isMobile={ props.isMobile }
				amenities={ typeof two_bedroom_family_villa.amenities !== 'undefined' ? two_bedroom_family_villa.amenities.split(',') : [] }
				languageDetected={ languageDetected }
			/>

			<Room
				name={ languageDetected === "en" ? beach_villa_with_pool.title : languageDetected === "ru" ? beach_villa_with_pool.title_ru : languageDetected === "ar" ? beach_villa_with_pool.title_ar : beach_villa_with_pool.title }
				description={ languageDetected === "en" ? beach_villa_with_pool.description : languageDetected === "ru" ? beach_villa_with_pool.description_ru : languageDetected === "ar" ? beach_villa_with_pool.description_ar : beach_villa_with_pool.description }
				area={ beach_villa_with_pool.size }
				bed={ languageDetected === "en" ? beach_villa_with_pool.bed_size : languageDetected === "ru" ? beach_villa_with_pool.bed_size_ru : languageDetected === "ar" ? beach_villa_with_pool.bed_size_ar : beach_villa_with_pool.bed_size }
				guests="Max Guests"
				pool_size= "L: 6m x W: 3m x H: 0.9m"
				images={ typeof beach_villa_with_pool.image !== 'undefined' ? beach_villa_with_pool.image.split(',') : [] }
				index={ 3 }
				water={ true }
				link={ beach_villa_with_pool.name }
				isMobile={ props.isMobile }
				amenities={ typeof beach_villa_with_pool.amenities !== 'undefined' ? beach_villa_with_pool.amenities.split(',') : [] }
				languageDetected={ languageDetected }
			/>

			<Room
				name={ languageDetected === "en" ? water_villa_with_pool.title : languageDetected === "ru" ? water_villa_with_pool.title_ru : languageDetected === "ar" ? water_villa_with_pool.title_ar : water_villa_with_pool.title }
				description={ languageDetected === "en" ? water_villa_with_pool.description : languageDetected === "ru" ? water_villa_with_pool.description_ru : languageDetected === "ar" ? water_villa_with_pool.description_ar : water_villa_with_pool.description }
				area={ water_villa_with_pool.size }
				bed={ languageDetected === "en" ? water_villa_with_pool.bed_size : languageDetected === "ru" ? water_villa_with_pool.bed_size_ru : languageDetected === "ar" ? water_villa_with_pool.bed_size_ar : water_villa_with_pool.bed_size }
				guests="Max Guests"
				pool_size= "L: 9.2m x W: 3.25m x H: 1.2m"
				images={ typeof water_villa_with_pool.image !== 'undefined' ? water_villa_with_pool.image.split(',') : [] }
				index={ 2 }
				water={ true }
				link={ water_villa_with_pool.name }
				isMobile={ props.isMobile }
				amenities={ typeof water_villa_with_pool.amenities !== 'undefined' ? water_villa_with_pool.amenities.split(',') : [] }
				languageDetected={ languageDetected }
			/>

			<Room
				name={ languageDetected === "en" ? beach_villa.title : languageDetected === "ru" ? beach_villa.title_ru : languageDetected === "ar" ? beach_villa.title_ar : beach_villa.title }
				description={ languageDetected === "en" ? beach_villa.description : languageDetected === "ru" ? beach_villa.description_ru : languageDetected === "ar" ? beach_villa.description_ar : beach_villa.description }
				area={ beach_villa.size }
				bed={ languageDetected === "en" ? beach_villa.bed_size : languageDetected === "ru" ? beach_villa.bed_size_ru : languageDetected === "ar" ? beach_villa.bed_size_ar : beach_villa.bed_size }
				guests="Max Guests"
				pool_size=""
				images={ typeof beach_villa.image !== 'undefined' ? beach_villa.image.split(',') : [] }
				index={ 1 }
				water={ true }
				link={ beach_villa.name }
				isMobile={ props.isMobile }
				amenities={ typeof beach_villa.amenities !== 'undefined' ? beach_villa.amenities.split(',') : [] }
				languageDetected={ languageDetected }
			/>

			<Room
				name={ languageDetected === "en" ? water_villa.title : languageDetected === "ru" ? water_villa.title_ru : languageDetected === "ar" ? water_villa.title_ar : water_villa.title }
				description={ languageDetected === "en" ? water_villa.description : languageDetected === "ru" ? water_villa.description_ru : languageDetected === "ar" ? water_villa.description_ar : water_villa.description }
				area={ water_villa.size }
				bed={ languageDetected === "en" ? water_villa.bed_size : languageDetected === "ru" ? water_villa.bed_size_ru : languageDetected === "ar" ? water_villa.bed_size_ar : water_villa.bed_size }
				guests="Max Guests"
				pool_size=""
				images={ typeof water_villa.image !== 'undefined' ? water_villa.image.split(',') : [] }
				index={ 0 }
				water={ true }
				link={ water_villa.name }
				isMobile={ props.isMobile }
				amenities={ typeof water_villa.amenities !== 'undefined' ? water_villa.amenities.split(',') : [] }
				languageDetected={ languageDetected }
			/>

		</View>
	)
}

export default Rooms;