import Link from 'next/link';

const {
	BodyText,
	Container,
	ContainerFlexEnd,
	ComingSoon,
	RowAlign,
	Title,
	TitleH2,
	ViewPort
} = require('../../style/common/Common.Styled');

const {
	ExperienceHeader,
	ExperienceWaterActivitiesContainer,
	ExperienceWaterActivitiesImage,
	ExperienceScubaDivingContainer,
	ExperienceScubaDivingImage,
	ExperienceScubaDivingTextContainer,
	ExperienceScubaSnorkelling,
	ExperienceScubaSnorkellingContainer,

	ExperienceWellnessFitnessImage,
	ExperienceWellnessFitnessDescription,

	ExperienceWellnessWaterSports,

	ExperienceWaterSportsButton,


	//MOBILE
	ExperienceLeisureHeaderMobile,
	ExperienceWellnessNewPoolImageMobile,
	ExperienceTitleContainerMobile,
	ExperienceTitleTextMobile,
	ExperienceWellnessNewPoolDescriptionMobile,
	BodyTextMobile,

	ExperienceChildrenMobile,
	ExperienceChildrenImageMobile

} = require('../../style/experiences/Experiences.Styled');

const ExperienceWaterActivities = ( props ) => {
	if( typeof props.surfing !== "undefined" ){
		return(
			<div>
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile marginTop='150px' isMobile={ props.isMobile }>
						<Title isMobile={ props.isMobile } textAlign='center' marginTop='0px'>Water Activities</Title>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ props.surfing.image } />
						<ExperienceTitleContainerMobile>
							<ExperienceTitleTextMobile isMobile={ props.isMobile }>{ props.surfing.title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile isMobile={ props.isMobile }>
							<BodyTextMobile fontSize='14px' textAlign='left' isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html: props.surfing.description_mobile }} />
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceHeader isMobile={ props.isMobile }>
						<Title isMobile={ props.isMobile } textAlign='center' marginTop='150px'>Water Activities</Title>
						<ExperienceWaterActivitiesContainer isMobile={ props.isMobile }>
							<TitleH2 isMobile={ props.isMobile } textAlign='center' color='#CBC7BC'>{ props.surfing.title }</TitleH2>
							<BodyText isMobile={ props.isMobile } fontSize='16px' textAlign='left' color='#CBC7BC' dangerouslySetInnerHTML={{ __html: props.surfing.description }} />
						</ExperienceWaterActivitiesContainer>
						<ExperienceWaterActivitiesImage isMobile={ props.isMobile } background={ props.surfing.image } />
					</ExperienceHeader>
				}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ props.waterSports.image } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile }>{ props.waterSports.title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile }>
								{ props.waterSports.description_mobile }
							</BodyTextMobile>
						</ExperienceWellnessNewPoolDescriptionMobile>
						<Link href='/water-sports' passHref>
							<ExperienceWaterSportsButton isMobile={ props.isMobile }>More Details</ExperienceWaterSportsButton>
						</Link>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceWellnessWaterSports isMobile={ props.isMobile }>
						<ExperienceWellnessFitnessDescription isMobile={ props.isMobile }>
							<TitleH2 isMobile={ props.isMobile } textAlignCenter={ true }>{ props.waterSports.title }</TitleH2>
							<BodyText isMobile={ props.isMobile } fontSize='16px' textAlign='center'>
								{ props.waterSports.description }
							</BodyText>
							<Link href='/water-sports' passHref>
								<ExperienceWaterSportsButton>More Details</ExperienceWaterSportsButton>
							</Link>
						</ExperienceWellnessFitnessDescription>
						<ExperienceWellnessFitnessImage isMobile={ props.isMobile } background={ props.waterSports.image } />
					</ExperienceWellnessWaterSports>
				}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile marginTop='150px' isMobile={ props.isMobile }>
						<Title isMobile={ props.isMobile } textAlign='center' marginTop='0px' dark={ true }>Marine Life</Title>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ props.snorkelling.image } />
						<ExperienceTitleContainerMobile dark={ true }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile }>{ props.snorkelling.title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile isMobile={ props.isMobile }>
							<BodyTextMobile fontSize='14px' textAlign='left' isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html: props.snorkelling.description_mobile }} />
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<>
						<Container isMobile={ props.isMobile }>
							<Title isMobile={ props.isMobile } color='#708DA1'>Marine Life</Title>
						</Container>
						<ExperienceScubaSnorkelling isMobile={ props.isMobile } background={ props.snorkelling.image } >
							<ExperienceScubaSnorkellingContainer isMobile={ props.isMobile }>
								<TitleH2 isMobile={ props.isMobile } color='#fff'>{ props.snorkelling.title }</TitleH2>
								<BodyText isMobile={ props.isMobile } fontSize='16px' textAlign='left' color='#fff'>
									{ props.snorkelling.description }
								</BodyText>
							</ExperienceScubaSnorkellingContainer>
						</ExperienceScubaSnorkelling>
					</>
				}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ props.scubaDiving.image } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile } dark={ true }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile }>{ props.scubaDiving.title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile }>
								{ props.scubaDiving.description_mobile }
							</BodyTextMobile>
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceScubaDivingContainer isMobile={ props.isMobile }>
						<ExperienceScubaDivingTextContainer isMobile={ props.isMobile }>
							<TitleH2 isMobile={ props.isMobile } color='#fff' marginBotton='0px'>{ props.scubaDiving.title }</TitleH2>
							<ComingSoon isMobile={ props.isMobile } color='#fff'>Coming Soon</ComingSoon>
							<BodyText isMobile={ props.isMobile } fontSize='16px' textAlign='center' color='#fff'>
								{ props.scubaDiving.description }
							</BodyText>
						</ExperienceScubaDivingTextContainer>
						<ExperienceScubaDivingImage isMobile={ props.isMobile } background={ props.scubaDiving.image } />
					</ExperienceScubaDivingContainer>
				}
			</div>
		)
	}
	return(<div/>);
}

export default ExperienceWaterActivities;