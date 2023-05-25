const {
	BodyText,
	ContainerFlexEnd,
	RowAlign,
	Title,
	TitleH2
} = require('../../style/common/Common.Styled');

const {
	ExperienceHeader,
	ExperienceWellnessFitness,
	ExperienceWellnessFitnessImage,
	ExperienceWellnessFitnessDescription,
	ExperienceWellnessSpaContainer,
	ExperienceWellnessSpaImage,
	ExperienceWellnessSpaDescription,
	ExperienceWellnessWellBeing,
	ExperienceWellnessWellBeingDescription,
	ExperienceWellnessWellBeingImage,

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

const ExperienceWellness = ( props ) => {
	if( typeof props.fitness !== "undefined" ){
		return(
			<div>
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile marginTop='150px' isMobile={ props.isMobile }>
						<TitleH2 isMobile={ props.isMobile } textAlign='center' marginTop='0px'>Wellness</TitleH2>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ props.theSpa.image } />
						<ExperienceTitleContainerMobile>
							<ExperienceTitleTextMobile isMobile={ props.isMobile }>{ props.theSpa.title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile isMobile={ props.isMobile }>
							<BodyTextMobile fontSize='14px' textAlign='left' isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html: props.theSpa.description_mobile }} />
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceHeader marginTop='150px' isMobile={ props.isMobile }>
						<TitleH2 isMobile={ props.isMobile } textAlign='center' marginTop='150px'>Wellness</TitleH2>
						<ExperienceWellnessSpaDescription isMobile={ props.isMobile }>
							<TitleH2 isMobile={ props.isMobile }>{ props.theSpa.title }</TitleH2>
							<BodyText fontSize='16px' textAlign='left' isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html: props.theSpa.description }} />
						</ExperienceWellnessSpaDescription>
						<ExperienceWellnessSpaImage isMobile={ props.isMobile } background={ props.theSpa.image } />
					</ExperienceHeader>
				}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ props.fitness.image } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile }>{ props.fitness.title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile }>
								{ props.fitness.description_mobile }
							</BodyTextMobile>
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceWellnessFitness isMobile={ props.isMobile }>
						<ContainerFlexEnd isMobile={ props.isMobile }>
							<ExperienceWellnessFitnessImage isMobile={ props.isMobile } background={ props.fitness.image } />
							<ExperienceWellnessFitnessDescription isMobile={ props.isMobile }>
								<TitleH2 textAlign='left'>{ props.fitness.title }</TitleH2>
								<BodyText fontSize='16px' textAlign='left'>
									{ props.fitness.description }
								</BodyText>
							</ExperienceWellnessFitnessDescription>
						</ContainerFlexEnd>
					</ExperienceWellnessFitness>
				}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ props.wellbeing.image } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile }>{ props.wellbeing.title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile }>
								{ props.wellbeing.description_mobile }
							</BodyTextMobile>
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceWellnessWellBeing isMobile={ props.isMobile }>
						<ExperienceWellnessWellBeingDescription isMobile={ props.isMobile }>
							<TitleH2 isMobile={ props.isMobile }>{ props.wellbeing.title }</TitleH2>
							<BodyText isMobile={ props.isMobile } fontSize='16px' textAlign='left' dangerouslySetInnerHTML={{ __html: props.wellbeing.description }} />
						</ExperienceWellnessWellBeingDescription>
						<ExperienceWellnessWellBeingImage isMobile={ props.isMobile } background={ props.wellbeing.image } />
					</ExperienceWellnessWellBeing>
				}
			</div>
		)
	}
	return(<div/>);
}

export default ExperienceWellness;
