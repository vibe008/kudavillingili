import Link from "next/link"

const {

	BodyText,
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

const CigarLounge = ( props ) => {

	const {

		destinationDining,
		isMobile,
		languageDetected,
		privateEvents,
		theCigarLounge,

	} = props
	if( props.privateEvents !== null && typeof props.privateEvents !== "undefined" && props.destinationDining !== null && typeof props.destinationDining !== "undefined" && props.theLibrary !== null && typeof props.theLibrary !== "undefined" && props.theCigarLounge !== null && typeof props.theCigarLounge !== "undefined" ){

		const cdn_image_thecigarlounge = cdnSwitch( props.theCigarLounge.image )
		const cdn_image_destinationdining = cdnSwitch( props.destinationDining.image )
		const cdn_image_privateevents = cdnSwitch( props.privateEvents.image )

		// TCL
		const theCigarLounge_title = languageDetected === "ru" ? theCigarLounge.title_ru : languageDetected === "ar" ? theCigarLounge.title_ar : theCigarLounge.title
		const theCigarLounge_description = languageDetected === "ru" ? theCigarLounge.description_ru : languageDetected === "ar" ? theCigarLounge.description_ar : theCigarLounge.description

		//DD
		const destination_dining_title = languageDetected === "ru" ? destinationDining.title_ru : languageDetected === "ar" ? destinationDining.title_ar : destinationDining.title
		const destination_dining_description = languageDetected === "ru" ? destinationDining.description_ru : languageDetected === "ar" ? destinationDining.description_ar : destinationDining.description

		//PE
		const private_events_title = languageDetected === "ru" ? privateEvents.title_ru : languageDetected === "ar" ? privateEvents.title_ar : privateEvents.title
		const private_events_description = languageDetected === "ru" ? privateEvents.description_ru : languageDetected === "ar" ? privateEvents.description_ar : privateEvents.description

		const view_brochure = languageDetected === "ru" ? "просмотреть брошюру" : languageDetected === "ar" ? "عرض الكتيب" : "View Brochure"
		const coming_soon = languageDetected === "ru" ? "Вскоре" : languageDetected === "ar" ? "قريباً" : "Coming Soon"
		const view_menu = languageDetected === "ru" ? "Просмотреть Меню" : languageDetected === "ar" ? "عرض القائمة" : "View Menu"

		return(
			<div style={ isMobile ? { padding: "0px" } : {} }>
				{/*CIGAR LOUNGE*/}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ cdn_image_thecigarlounge } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ theCigarLounge_title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : theCigarLounge_description }} />
							{
								typeof props.theCigarLounge.link !== "undefined" && props.theCigarLounge.link !== "" &&
								<Link href={ props.theCigarLounge.link } passHref>
									<a target="_blank">
										<BeachClubDownloadMenu isMobile={ true } noBottom={ true }>
											{ view_menu }
										</BeachClubDownloadMenu>
									</a>
								</Link>
							}
							{
								typeof props.theCigarLounge.link === "undefined" || props.theCigarLounge.link === "" &&
								<BeachClubDownloadMenu isMobile={ true } noBottom={ true }>
									{ coming_soon }
								</BeachClubDownloadMenu>
							}
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceContainer>
						<ExperienceDescription>
							<TitleH2
								textAlign="left"
								languageDetected={ languageDetected }
							>
								{ theCigarLounge_title }
							</TitleH2>
							<BodyText
								fontSize="16px"
								textAlign="left"
								dangerouslySetInnerHTML={{ __html : theCigarLounge_description }}
								languageDetected={ languageDetected }
							/>
							{
								typeof props.theCigarLounge.link !== "undefined" && props.theCigarLounge.link !== "" &&
								<Link href={ props.theCigarLounge.link } passHref>
									<a target="_blank">
										<KudavillingiliButton>
											{ view_menu }
										</KudavillingiliButton>
									</a>
								</Link>
							}
							{
								typeof props.theCigarLounge.link === "undefined" || props.theCigarLounge.link === "" &&
								<KudavillingiliButton>
									{ coming_soon }
								</KudavillingiliButton>
							}
						</ExperienceDescription>
						<ExperienceImageAlign background={ cdn_image_thecigarlounge } />
					</ExperienceContainer>
				}

				{/*DESTINATION DINING*/}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ props.destinationDining.image } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ destination_dining_title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : destination_dining_description }} languageDetected={ languageDetected } />
							{
								typeof props.destinationDining.link !== "undefined" && props.destinationDining.link !== "" &&
								<Link href={ props.destinationDining.link } passHref>
									<a target="_blank">
										<BeachClubDownloadMenu isMobile={ true } noBottom={ true }>
											{ view_brochure }
										</BeachClubDownloadMenu>
									</a>
								</Link>
							}
							{
								typeof props.destinationDining.link === "undefined" || props.destinationDining.link === "" &&
								<BeachClubDownloadMenu isMobile={ true } noBottom={ true }>
									{ coming_soon }
								</BeachClubDownloadMenu>
							}
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceContainer>
						<ExperienceImageAlign background={ cdn_image_destinationdining } />
						<ExperienceDescription>
							<TitleH2 textAlign="left" languageDetected={ languageDetected }>{ destination_dining_title }</TitleH2>
							<BodyText fontSize="16px" textAlign="left" languageDetected={ languageDetected } dangerouslySetInnerHTML={{ __html : destination_dining_description }} />
							{
								typeof props.destinationDining.link !== "undefined" && props.destinationDining.link !== "" &&
								<Link href={ props.destinationDining.link } passHref>
									<a target="_blank">
										<KudavillingiliButton>
											{

												view_brochure
												
											}
										</KudavillingiliButton>
									</a>
								</Link>
							}
							{
								typeof props.destinationDining.link === "undefined" || props.destinationDining.link === "" &&
								<KudavillingiliButton>
									{ coming_soon }
								</KudavillingiliButton>
							}
						</ExperienceDescription>
					</ExperienceContainer>
				}

				{/*PRIVATE EVENTS*/}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ props.privateEvents.image } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile } languageDetected={ languageDetected }>{ private_events_title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : private_events_description }} languageDetected={ languageDetected }/>
							{
								typeof props.privateEvents.link !== "undefined" && props.privateEvents.link !== "" &&
								<Link href={ props.privateEvents.link } passHref>
									<a target="_blank">
										<BeachClubDownloadMenu isMobile={ true } noBottom={ true }>
											{

												view_brochure
												
											}
										</BeachClubDownloadMenu>
									</a>
								</Link>
							}
							{
								typeof props.privateEvents.link === "undefined" || props.privateEvents.link === "" &&
								<BeachClubDownloadMenu isMobile={ true } noBottom={ true }>
									{ coming_soon }
								</BeachClubDownloadMenu>
							}
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceContainer>
						<ExperienceDescription>
							<TitleH2 textAlign="left" languageDetected={ languageDetected }>{ private_events_title }</TitleH2>
							<BodyText fontSize="16px" textAlign="left" dangerouslySetInnerHTML={{ __html : private_events_description }} languageDetected={ languageDetected }/>
							{
								typeof props.privateEvents.link !== "undefined" && props.privateEvents.link !== "" &&
								<Link href={ props.privateEvents.link } passHref>
									<a target="_blank">
										<KudavillingiliButton>
											{

												view_brochure
												
											}
										</KudavillingiliButton>
									</a>
								</Link>
							}
							{
								typeof props.privateEvents.link === "undefined" || props.privateEvents.link === "" &&
								<KudavillingiliButton>
									{ coming_soon }
								</KudavillingiliButton>
							}
						</ExperienceDescription>
						<ExperienceImageAlign background={ cdn_image_privateevents } />
					</ExperienceContainer>
				}
			</div>
		)
	}
	return(<div />)
}

export default CigarLounge
