const {
	BodyText,
	ContainerRow,
	RowAlign,
	Title,
	TitleH2
} = require('../../style/common/Common.Styled');

const {
	ExperienceHeader,
	ExperienceWeeklyEntertainmentContainer,
	ExperienceWeeklyEntertainmentImage,
	ExperienceRetailVillage,

	ExperienceRetailVillageContainer,
	ExperienceWellnessFitnessImage,
	ExperienceWellnessFitnessDescription,

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

const ExperienceTherapy = ( props ) => {
	if( typeof props.weeklyEntertainment !== "undefined" ){
		return(
			<div>
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile marginTop='150px' isMobile={ props.isMobile }>
						<Title isMobile={ props.isMobile } textAlign='center' marginTop='0px'>Live Performance<br/>& Retail Therapy</Title>
						<ExperienceChildrenImageMobile
							isMobile={ props.isMobile }
							images={ typeof props.weeklyEntertainment.image !== 'undefined' ? props.weeklyEntertainment.image.split(',') : [] }
							cycle={ true }
							interval={ 5000 }
		      				transition={ 2000 }
						/>
						<ExperienceTitleContainerMobile>
							<ExperienceTitleTextMobile isMobile={ props.isMobile }>{ props.weeklyEntertainment.title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile isMobile={ props.isMobile }>
							<BodyTextMobile fontSize='14px' textAlign='left' isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html: props.weeklyEntertainment.description_mobile }} />
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceHeader isMobile={ props.isMobile }>
						<Title isMobile={ props.isMobile } textAlign='center' marginTop='150px'>Live Performance<br/>& Retail Therapy</Title>
						<ExperienceWeeklyEntertainmentContainer isMobile={ props.isMobile }>
							<TitleH2 textAlign='center' isMobile={ props.isMobile }>{ props.weeklyEntertainment.title }</TitleH2>
							<BodyText fontSize='16px' textAlign='left' isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : props.weeklyEntertainment.description }} />
						</ExperienceWeeklyEntertainmentContainer>
						<ExperienceWeeklyEntertainmentImage
							isMobile={ props.isMobile }
							images={ typeof props.weeklyEntertainment.image !== 'undefined' ? props.weeklyEntertainment.image.split(',') : [] }
							cycle={ true }
							interval={ 6000 }
		      				transition={ 2000 }
		      				imageStyles={{ 'background-position': 'center center' }}
						/>
					</ExperienceHeader>
				}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ props.retailVillage.image } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile }>{ props.retailVillage.title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : props.retailVillage.description_mobile }} />
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceRetailVillage isMobile={ props.isMobile }>
						<ExperienceRetailVillageContainer isMobile={ props.isMobile }>
							<ContainerRow isMobile={ props.isMobile }>
								<ExperienceWellnessFitnessDescription isMobile={ props.isMobile }>
									<TitleH2 isMobile={ props.isMobile } textAlign='left'>{ props.retailVillage.title }</TitleH2>
									<BodyText isMobile={ props.isMobile } fontSize='16px' textAlign='left' dangerouslySetInnerHTML={{ __html : props.retailVillage.description }} />
								</ExperienceWellnessFitnessDescription>
								<ExperienceWellnessFitnessImage isMobile={ props.isMobile } background={ props.retailVillage.image } />
							</ContainerRow>
						</ExperienceRetailVillageContainer>
					</ExperienceRetailVillage>
				}
			</div>
		)
	}
	return(<div/>);
}

export default ExperienceTherapy;