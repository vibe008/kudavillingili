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
	ExperienceDescription,
	ExperienceImageAlign,
	ExperienceLeisureHeaderMobile,
	ExperienceTitleContainerMobile,
	ExperienceTitleTextMobile,
	ExperienceWellnessNewPoolDescriptionMobile,
	ExperienceWellnessNewPoolImageMobile,
	KudavillingiliButton,

} = require("../../style/experiences/Experiences.Styled")

const { cdnSwitch } = require("../../functions/cdn")

const Contents = ( props ) => {

	const {

		destinationDining,
		isMobile,
		languageDetected,
		privateEvents,
		theCigarLounge,

	} = props
	
		const cdn_image_procurement = 'https://kudavillingili-maldives.ams3.digitaloceanspaces.com/sustainability/procurement.jpg'
		const cdn_image_solidarity = 'https://kudavillingili-maldives.ams3.digitaloceanspaces.com/sustainability/solidarity.jpg'
		const cdn_image_recycle = 'https://kudavillingili-maldives.ams3.digitaloceanspaces.com/sustainability/recycle.jpg'
		const cdn_image_wastemanagement = 'https://kudavillingili-maldives.ams3.digitaloceanspaces.com/sustainability/waste_management.jpg'
		const cdn_image_conservation = 'https://kudavillingili-maldives.ams3.digitaloceanspaces.com/sustainability/conservation.jpg'
		const cdn_image_business = 'https://kudavillingili-maldives.ams3.digitaloceanspaces.com/sustainability/business.jpg'

		const procurement_title = "Procurement" 
		const procurement_description = `<ul>
											<li key='1'>We developed a procurement management system that optimises resources while acquiring goods and services that guarantee high quality end-products for the best guest experience.</li>
											<li key='2'>All our procurement activities are conducted responsibly in accordance with sound ethical practices and considering environmental and social challenges.</li>
											<li key='3'>We serve organic fair-trade coffee, use organic olive oil in our Italian-Mediterranean restaurant, and offer collection of organic honey during breakfast.</li>
											<li key='4'>We work with Sri Lankan Jams for acquiring organic jams to use in our restaurant and in villa dining.</li>
										</ul>`;
	
		const solidarity_title = 'Solidarity With The Local Community' 
		const solidarity_description = `<ul>
											<li>We source from the local community where possible, such as seafood and coconut, which supports the development of agriculture while sustaining the community’s economic status.</li>
											<li>We support the hiring of locals that promotes the local community’s culture.</li>
											<li>We carry out educational awareness sessions to raise awareness for a common goal, preserving and nurturing our mother nature.<br>We work with Authentic Maldives – a local arts & crafts shop with product solely from local creators.</li>
											<li>We have a resident Artist who paints the art displayed in our villas and public areas.</li>
										</ul>`
		
		const recycle_title = 'Recycle, Reduce, Reuse' 
		const recycle_description = `<ul>
										<li>Plastic & Paper</li>
										<ul>
											<li>We use digital collateral for communicating with our guests, ambassadors, and our travel partners as much as possible.</li>
											<ul>
												<li>Press Reader for reading news.</li>
												<li>E-Collateral communicated electronically via WhatsApp or Email.</li>
												<li>Digital application for accessing menus</li>
												<li>E-signatory and e-filing system</li>
												<li>Automated Biometrics attendance system</li>
												<li>Automated exit/entry pass system</li>
												<li>E-Notice Board</li>
											</ul>
											<li>We use carpets made from recycled plastic in our villas.</li>
											<li>We use bamboo/paper straws or metal straws when serving drinks.</li>
										</ul>
										<li>We use bathtubs made from recycled crushed stones in our villas.</li>
										<li>We use glass bottles for refilling water from our inhouse Water Bottling Plant.</li>
										<li>We use retired towels and linen for internal cleaning purposes.</li>
									</ul>`		

		const wastemanagement_title = 'Waste Management' 
		const wastemanagement_description = `<ul>
												<li>We use an integrated approach for the effective and efficient elimination of waste.</li>
												<li>We have a dedicated recycling centre with:.</li>
												<ul>
													<li>Glass Crusher for pulverizing glass bottles, which are then recycled for use in concrete works as a replacement for sand.</li>
													<li>Composting Machine for the segregated food waste and dry leaves, which are then used as compost for vegetation.</li>
													<li>Compactor for compacting cartons, tins, plastic, and other waste materials.</li>
													<li>Incinerator for burning waste that would otherwise be non-recyclable.</li>
												</ul>
												<li>We use treated wastewater recycled through STP plant for plant irrigation, which helps us conserve natural resources.</li>
											</ul>`

		const conservation_title = 'Conservation' 
		const conservation_description = `<ul>
										<li>We aim to lessen adverse impacts on our mother nature while preserving its delicate eco-system.</li>
										<li>We raise awareness among our guests and our ambassadors regarding safe practices to minimise environmental harm.</li>
										<li>We organise coral planting activities to help regenerate our marine environment.</li>
										<li>We conduct regular island and lagoon cleaning activities to support green actions.</li>
										<li>We have an extensive organic garden that produces fresh vegetables, fruits, and spices.</li>
										<li>We use cleaning concentrates and dilution control systems to minimize chemical usage.</li>
										<li>We operate boats with high performance and efficient four-stroke engines.</li>
										<li>Energy and Water Conservation</li>
											<ul>
												<li>We use energy saving LED lights for interior and exterior.</li>
												<li>We use timers to control the exterior lights.</li>
												<li>We use VFD (variable frequency drive) system to control the water pumps and kitchen exhaust.</li>
												<li>We use inverter and high efficiency VRF (variable refrigerant flow) system air conditioning units in our villas and buildings.</li>
												<li>We use Lutron system motion sensors to control the air conditioning units in the guest villas.</li>
												<li>We use generator waste heat recovery system to produce hot water.</li>
												<li>We use dual-type flushing system for all WC flushing.</li>
											</ul>
									</ul>`			

		const business_title = 'Business Ethics & Human Rights' 
		const business_description = `<ul>
										<li>We respect the local traditions and culture and educate our ambassadors on appreciating the Maldivian culture.</li>
										<li>We adhere to labour laws and regulations of the Maldives, and strictly prohibit employment of children and sexual exploitation.</li>
										<li>We believe in the empowerment of our ambassadors.</li>
										<li>We share business code of conduct with all our partners to promote a culture of integrity among our workforces.</li>
									</ul>`	


		return(
			<div style={ isMobile ? { padding: "0px" } : {} }>
				{/*Procurement*/}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ cdn_image_procurement } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ procurement_title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : procurement_description }} />
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceContainer>
						<ExperienceDescription>
							<TitleH2 textAlign="left" languageDetected={ languageDetected }>{ procurement_title } </TitleH2>
							<BodyTextSustainability fontSize="16px" textAlign="left" dangerouslySetInnerHTML={{ __html : procurement_description }} languageDetected={ languageDetected } />
						</ExperienceDescription>
						<ExperienceImageAlign background={ cdn_image_procurement } />
					</ExperienceContainer>
				}


				{/*Solidarity*/}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ cdn_image_solidarity } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ solidarity_title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : solidarity_description }} languageDetected={ languageDetected } />
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceContainer>
						<ExperienceImageAlign background={ cdn_image_solidarity } />
						<ExperienceDescription>
							<TitleH2 textAlign="left" languageDetected={ languageDetected }>{ solidarity_title }</TitleH2>
							<BodyTextSustainability fontSize="16px" textAlign="left" languageDetected={ languageDetected } dangerouslySetInnerHTML={{ __html : solidarity_description }} />
						</ExperienceDescription>
					</ExperienceContainer>
				}


				{/*Recycle*/}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ cdn_image_recycle } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ recycle_title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : recycle_description }} />
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceContainer>
						<ExperienceDescription>
							<TitleH2 textAlign="left" languageDetected={ languageDetected }>{ recycle_title } </TitleH2>
							<BodyTextSustainability fontSize="16px" textAlign="left" dangerouslySetInnerHTML={{ __html : recycle_description }} languageDetected={ languageDetected } />
						</ExperienceDescription>
						<ExperienceImageAlign background={ cdn_image_recycle } />
					</ExperienceContainer>
				}

				{/*Waste Management*/}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ cdn_image_wastemanagement } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ wastemanagement_title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : wastemanagement_description }} />
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceContainer>
						<ExperienceImageAlign background={ cdn_image_wastemanagement } />
						<ExperienceDescription>
							<TitleH2 textAlign="left" languageDetected={ languageDetected }>{ wastemanagement_title } </TitleH2>
							<BodyTextSustainability fontSize="16px" textAlign="left" dangerouslySetInnerHTML={{ __html : wastemanagement_description }} languageDetected={ languageDetected } />
						</ExperienceDescription>
					</ExperienceContainer>
				}				

				{/*Conservation*/}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ cdn_image_conservation } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ conservation_title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : conservation_description }} />
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceContainer>
						<ExperienceDescription>
							<TitleH2 textAlign="left" languageDetected={ languageDetected }>{ conservation_title } </TitleH2>
							<BodyTextSustainability fontSize="16px" textAlign="left" dangerouslySetInnerHTML={{ __html : conservation_description }} languageDetected={ languageDetected } />
						</ExperienceDescription>
						<ExperienceImageAlign background={ cdn_image_conservation } />
					</ExperienceContainer>
				}

				{/*Business Ethics*/}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ cdn_image_business } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ business_title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : business_description }} />
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceContainer>
						<ExperienceImageAlign background={ cdn_image_business } />
						<ExperienceDescription>
							<TitleH2 textAlign="left" languageDetected={ languageDetected }>{ business_title } </TitleH2>
							<BodyTextSustainability fontSize="16px" textAlign="left" dangerouslySetInnerHTML={{ __html : business_description }} languageDetected={ languageDetected } />
						</ExperienceDescription>
					</ExperienceContainer>
				}



			</div>
		)
	return(<div />)
}

export default Contents
