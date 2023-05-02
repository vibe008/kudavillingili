import Link from "next/link"

const {

	BodyText,
	BodyTextSustainability,
	Container,
	ContainerCenter,
	ContainerFiftyPercent,
	ImageFiftyPercent,
	Row,
	RowAlign,
	Title,
	TitleH2,
	TitleH3,

} = require("../../style/common/Common.Styled")

const {

	BeachClubDownloadMenu,
	CigarLoungeImage,
	CigarLoungePrivateEventsContainer,
	CigarLoungePrivateEventsImage,

} = require("../../style/dining/Dining.Styled")

const {

	//MOBILE
	BodyTextMobile,
	ExperienceChildrenImageMobile,
	ExperienceChildrenMobile,
	ExperienceContainer,
	MeetDescription,
	ExperienceImageAlign,
	ExperienceLeisureHeaderMobile,
	ExperienceTitleContainerMobile,
	ExperienceTitleTextMobile,
	ExperienceTitleSmallTextMobile,
	ExperienceWellnessNewPoolDescriptionMobile,
	ExperienceWellnessNewPoolImageMobile,
	KudavillingiliButton,

} = require("../../style/meet/Meet.Styled")

const { cdnSwitch } = require("../../functions/cdn")

const Contents = ( props ) => {

	const {

		destinationDining,
		isMobile,
		languageDetected,
		privateEvents,
		theCigarLounge,

	} = props
	
		const cdn_image_gm = 'https://kudavillingili-maldives.ams3.digitaloceanspaces.com/meet-the-team/morgan.jpg'
		const gm_title = "Morgan Martinello"
		const gm_position = "General Manager"	
		const gm_content = `Morgan has been involved in Kuda Villingili Resort Maldives since its pre-opening days in 2020 and supported in managing the project team, creating the F&amp;B concept, and the official opening planning.<br><br>
Before joining Kuda Villingili, Morgan worked in luxury hotels in the Maldives, including Jumeirah Vittaveli, Ayada Maldives, One &amp; Only Reethi Rah, Kurumba Maldives, and Niyama by Per Aquum. He brings a wealth of experience, having worked over a decade in luxury hotels across the globe, from Kempinski Palm Jumeirah in Dubai and Kempinski Emirates Palace in Abu Dhabi (UAE) to Savoy Hotel and Four Seasons in the UK.<br><br>
An Italian national, Morgan received his degree in hotel management in Treviso, Italy, in 2001 and spent his first years in the hospitality industry at hotels in Italy, the UK, and Spain. He started his career in F&amp;B right after getting his degree and worked up to become a Resort Manager in 2018.<br><br>
Morgan has spent nearly a decade in the Maldives and gained a love for the multi-hued ocean and the white sandy beaches. He is an avid diver who is now PADI certified. Morgan also loves playing tennis and golf during his free time and spending time with his family, who live with him in the Maldives. His daughter grew up in the Maldives and is a close part of the Kuda Villingili family.`;

		const cdn_image_cd = 'https://kudavillingili-maldives.ams3.digitaloceanspaces.com/meet-the-team/amjad.jpg'
		const cd_title = "Amjad Thaufeeg"
		const cd_position = "Commercial Director"	
		const cd_content = `Amjad is a natural leader who oversees and drives the overall sales and marketing strategy based on Kuda Villingili’s concept and brand promise. He graduated with a Master’s in Business Administration from Anglia Ruskin University in the UK and has over 15 years of experience in the tourism industry.<br><br>
His previous assignments include key sales and marketing roles in international hotels such as Hilton, JA Resorts, and Per AQUUM. Furthermore, Amjad has worked in several luxury tourist resorts in the Maldives, including Miladhoo Island Maldives, Kanuhura Maldives, Huvafenfushi Maldives, Niyama, JA Manafaru and Conrad Maldives Rangali Island. His most recent tenure before joining Kuda Villingili was Director of Sales & Marketing at The Nautilus Maldives.
`;

		const cdn_image_ds = 'https://kudavillingili-maldives.ams3.digitaloceanspaces.com/meet-the-team/solih.jpg'
		const ds_title = "Ali Solih"
		const ds_position = "Director of Sales & Marketing"	
		const ds_content = `Solih, a Maldivian national, started his career in sales and marketing in 2007 and built a vast network of strong relations with representatives from across the world. His career encompasses experience in luxury resorts in the Maldives including Hilton Maldives Iru Fushi, Conrad Maldives Rangali Island, Waldorf Astoria, W Retreat & Spa, Sheraton Maldives, Per Aquum Huvafenfushi, and Niyama Private Island.<br><br> 
Committed to the highest level of professional excellence, Solih’s career reflects continual advancements and has achieved numerous professional commendations. He has gained a wealth of knowledge related sales, marketing, and PR activities during his 21 years of experience in the luxury tourism industry.
`;		

		const cdn_image_ds2 = 'https://kudavillingili-maldives.ams3.digitaloceanspaces.com/meet-the-team/gaurav.jpg'
		const ds2_title = 'Gaurav Makhijani'
		const ds2_position = "Director of Sales & Marketing"	
		const ds2_content = `Gaurav brings a wealth of experience in the hospitality arena, having worked with international brands for over a decade, including The Claridge’s, Taj, IHG, Jumeirah Group, and Atmosphere Hotels and Resorts. Most recently, Gaurav worked as the Associate Director of Sales for Atmosphere group, where he was in charge of sourcing business from India.<br><br>
As a Director of Sales and Marketing, Gaurav will develop and implement strategic sales and marketing plans to achieve short and long-term objectives for Kuda Villingili. He is a highly effective sales leader and gifted professional in building successful campaigns to increase market share in India and the Middle East.
`;

		const cdn_image_ec = 'https://kudavillingili-maldives.ams3.digitaloceanspaces.com/meet-the-team/christian.jpg'
		const ec_title = "Christian Garcia"
		const ec_position = "Executive Chef"	
		const ec_content = `A culinary specialist and seasoned professional hailing from Argentina, Chef Christian Adrian Garcia brings in a wealth of knowledge and expertise to fill his role as the Executive Chef at Kuda Villingili Resort Maldives.<br><br>
Chef Christian graduated from the “Unión de Chefs Argentinos” and has since worked in the Spanish cities of Valencia, Barcelona, and Ibiza. He ventured around the Middle East and Africa, where he worked in places like Saudi Arabia, Dubai, and Zanzibar. His outstanding performance has garnered him a nomination as The Best Chef in Saudi Arabia by the much-acclaimed “Chaîne des Rotisseurs.”<br><br> 
Chef Christian perfected the techniques used in Mediterranean and Asian cuisines during his tenure at Altea, Alicante. He refined his skills while working in Rio de Janeiro, and with his experience in multiple cuisines.
`;

		const cdn_image_qb = 'https://kudavillingili-maldives.ams3.digitaloceanspaces.com/meet-the-team/quraishi-brothers.jpg'
		const qb_title = "Qureshi Brothers "
		const qb_position = "Chefs in The Hawkers - SPICE"	
		const qb_content = `Ajaz Qureshi and Asif Qureshi belong to the legendry Qureshi family of Lucknow, India. Ajaz and Asif have 20 years of culinary experience and started their career under the guidance of best Mughlai cuisine chefs; their father Ishtiaq Qureshi “Nawab” and uncles Ismail Qureshi and Yameen Qureshi.<br><br>
The brother’s grandfather Haji Ishaq Qureshi cooked food for Queen Elizabeth when she visited India, and during that time Indian Prime Minister invited him to cook Mughlai and Awadhi food. The Minister often invited the Qureshi brothers’ father and grandfather to cook Mughlai food for their family events and marriages. <br><br>
Ajaz and Asif are 5th generation chefs in their family, taking forward the 250 years long history of Mughlai and Awadhi cuisine served for royalty. Kuda Villingili guests can experience the tantalizing cuisine in The Hawkers – SPICE restaurant. 
`;

		const cdn_image_recm = 'https://kudavillingili-maldives.ams3.digitaloceanspaces.com/meet-the-team/mohamed.jpg'
		const recm_title = "Mohamed Ibrahim Elmeniawy"
		const recm_position = "Recreation Manager"	
		const recm_content = `With a PhD in Physical Health and Nutrition at Helwan University Egypt, Mohamed is a certified fitness trainer from ISSA - International Sport Science Association USA. He has worked as a Manager for branded fitness centers like Gold GYM Egypt and Horizon Fitness Oman.<br><br>
Mohamed, who grew up in a local community near Alexandria, Egypt, gained aspirations from his homeplace's culture and music. He has been passionate about sports and fitness from a very young age and got a black belt in Karate when he was just 15 years old. He moved on to win multiple championships in bodybuilding, nationally and internationally.<br><br>
With his extensive experience, Mohamed took the next step in his journey to change people's lives through guidance on how to live a healthy, safe, fit, and customized lifestyle.
`;

		const cdn_image_yg = 'https://kudavillingili-maldives.ams3.digitaloceanspaces.com/meet-the-team/pratheesh.jpg'
		const yg_title = "Pratheesh Kelothvalappi "
		const yg_position = "Yoga Guru"	
		const yg_content = `Pratheesh is a Yoga specialist, and Ayurveda therapist from Kerala – India, a location called God’s own country, a well know region for Yoga and Ayurvedic treatments. He completed his studies in P.G. in Yoga Science and Indigenous Healthcare from Kannar University Kerala.<br><br>
Pratheesh started his journey 26 years ago and has practised and taught in India, Oman, and UAE, before joining Kuda Villingili Resort Maldives. He will take you on a spiritual and healing journey, connecting your body and soul.
`;


		return(
			<div style={ isMobile ? { padding: "0px" } : {} }>
				{/*General Manager*/}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ cdn_image_gm } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ gm_title }</ExperienceTitleTextMobile>
							<ExperienceTitleSmallTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ gm_position }</ExperienceTitleSmallTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : gm_content }} />
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceContainer>
						<ExperienceImageAlign background={ cdn_image_gm } />
						<MeetDescription paddingLeft="60px">
							<TitleH2 textAlign="left" marginTop="0px" languageDetected={ languageDetected }>{ gm_title } </TitleH2>
							<TitleH3 textAlign="left" languageDetected={ languageDetected }>{ gm_position } </TitleH3>
							<BodyTextSustainability fontSize="16px" textAlign="left" dangerouslySetInnerHTML={{ __html : gm_content }} languageDetected={ languageDetected } />
						</MeetDescription>
					</ExperienceContainer>
				}

				{/*Commercial Director*/}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ cdn_image_cd } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ cd_title }</ExperienceTitleTextMobile>
							<ExperienceTitleSmallTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ cd_position }</ExperienceTitleSmallTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : cd_content }} />
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceContainer>
						<MeetDescription paddingRight="60px">
							<TitleH2 textAlign="left" marginTop="0px" languageDetected={ languageDetected }>{ cd_title } </TitleH2>
							<TitleH3 textAlign="left" languageDetected={ languageDetected }>{ cd_position } </TitleH3>
							<BodyTextSustainability fontSize="16px" textAlign="left" dangerouslySetInnerHTML={{ __html : cd_content }} languageDetected={ languageDetected } />
						</MeetDescription>
						<ExperienceImageAlign background={ cdn_image_cd } />
					</ExperienceContainer>
				}
				
				{/*Director of Sales & Marketing*/}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ cdn_image_ds } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ ds_title }</ExperienceTitleTextMobile>
							<ExperienceTitleSmallTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ ds_position }</ExperienceTitleSmallTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : ds_content }} />
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceContainer>
						<ExperienceImageAlign background={ cdn_image_ds } />
						<MeetDescription paddingLeft="60px">
							<TitleH2 textAlign="left" marginTop="0px" languageDetected={ languageDetected }>{ ds_title } </TitleH2>
							<TitleH3 textAlign="left" languageDetected={ languageDetected }>{ ds_position } </TitleH3>
							<BodyTextSustainability fontSize="16px" textAlign="left" dangerouslySetInnerHTML={{ __html : ds_content }} languageDetected={ languageDetected } />
						</MeetDescription>
					</ExperienceContainer>
				}

				{/*Director of Sales & Marketing 2*/}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ cdn_image_ds2 } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ ds2_title }</ExperienceTitleTextMobile>
							<ExperienceTitleSmallTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ ds2_position }</ExperienceTitleSmallTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : ds2_content }} />
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceContainer>
						<MeetDescription paddingRight="60px">
							<TitleH2 textAlign="left" marginTop="0px" languageDetected={ languageDetected }>{ ds2_title } </TitleH2>
							<TitleH3 textAlign="left" languageDetected={ languageDetected }>{ ds2_position } </TitleH3>
							<BodyTextSustainability fontSize="16px" textAlign="left" dangerouslySetInnerHTML={{ __html : ds2_content }} languageDetected={ languageDetected } />
						</MeetDescription>
						<ExperienceImageAlign background={ cdn_image_ds2 } />
					</ExperienceContainer>
				}

				{/*Executive Chef*/}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ cdn_image_ec } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ ec_title }</ExperienceTitleTextMobile>
							<ExperienceTitleSmallTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ ec_position }</ExperienceTitleSmallTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : ec_content }} />
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceContainer>
						<ExperienceImageAlign background={ cdn_image_ec } />
						<MeetDescription paddingLeft="60px">
							<TitleH2 textAlign="left" marginTop="0px" languageDetected={ languageDetected }>{ ec_title } </TitleH2>
							<TitleH3 textAlign="left" languageDetected={ languageDetected }>{ ec_position } </TitleH3>
							<BodyTextSustainability fontSize="16px" textAlign="left" dangerouslySetInnerHTML={{ __html : ec_content }} languageDetected={ languageDetected } />
						</MeetDescription>
					</ExperienceContainer>
				}

				{/*Qureshi Brothers */}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ cdn_image_qb } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ qb_title }</ExperienceTitleTextMobile>
							<ExperienceTitleSmallTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ qb_position }</ExperienceTitleSmallTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : qb_content }} />
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceContainer>
						<MeetDescription paddingRight="60px">
							<TitleH2 textAlign="left" marginTop="0px" languageDetected={ languageDetected }>{ qb_title } </TitleH2>
							<TitleH3 textAlign="left" languageDetected={ languageDetected }>{ qb_position } </TitleH3>
							<BodyTextSustainability fontSize="16px" textAlign="left" dangerouslySetInnerHTML={{ __html : qb_content }} languageDetected={ languageDetected } />
						</MeetDescription>
						<ExperienceImageAlign background={ cdn_image_qb } />
					</ExperienceContainer>
				}
				
				{/*Recreation Manager*/}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ cdn_image_recm } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ recm_title }</ExperienceTitleTextMobile>
							<ExperienceTitleSmallTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ recm_position }</ExperienceTitleSmallTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : recm_content }} />
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceContainer>
						<ExperienceImageAlign background={ cdn_image_recm } />
						<MeetDescription paddingLeft="60px">
							<TitleH2 textAlign="left" marginTop="0px" languageDetected={ languageDetected }>{ recm_title } </TitleH2>
							<TitleH3 textAlign="left" languageDetected={ languageDetected }>{ recm_position } </TitleH3>
							<BodyTextSustainability fontSize="16px" textAlign="left" dangerouslySetInnerHTML={{ __html : recm_content }} languageDetected={ languageDetected } />
						</MeetDescription>
					</ExperienceContainer>
				}

				{/*Yoga Guru */}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ cdn_image_yg } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ yg_title }</ExperienceTitleTextMobile>
							<ExperienceTitleSmallTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ yg_position }</ExperienceTitleSmallTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : yg_content }} />
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceContainer>
						<MeetDescription paddingRight="60px">
							<TitleH2 textAlign="left" marginTop="0px" languageDetected={ languageDetected }>{ yg_title } </TitleH2>
							<TitleH3 textAlign="left" languageDetected={ languageDetected }>{ yg_position } </TitleH3>
							<BodyTextSustainability fontSize="16px" textAlign="left" dangerouslySetInnerHTML={{ __html : yg_content }} languageDetected={ languageDetected } />
						</MeetDescription>
						<ExperienceImageAlign background={ cdn_image_yg } />
					</ExperienceContainer>
				}

			</div>
		)
	return(<div />)
}

export default Contents
