import React from 'react';

const {
	BodyText,
	Container,
	RowAlign,
	Title,
	TitleH2
} = require('../../style/common/Common.Styled');

const {
	ExperienceChildren,
	ExperienceChildrenImage,
	ExperienceChildrenDescription,
	ExperienceGamesAndSports,
	ExperienceGamesAndSportsDescription,
	ExperienceGamesAndSportsImage,
	ExperienceChildrenImageSolo,
	ExperienceHeader,
	ExperienceHeaderPool,
	ExperienceHeaderPoolBody,
	ExperiencePool,
	ExperiencePoolDescription,

	ExperienceWellnessNewPoolDescription,
	ExperienceWellnessNewPoolImage,
	ExperienceLeisureHeader,

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

const ExperiencesRecreationAndLeisure = ( props ) => {
	// const myRef = React.createRef();
	// React.useEffect(() => {
	// 	window.addEventListener('scroll', () => {
 //            if( window.scrollY > 0 ){
 //                console.log( window.scrollY );
 //                if( myRef.current !== null)
 //                	console.log( 'Element height is '+myRef.current.scrollHeight )
 //            }
 //        });
	// },[ myRef ]);
	if( typeof props.kudaFiyoIslandPlayground !== "undefined" ){
		return(
			<div>
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile marginTop='150px' isMobile={ props.isMobile }>
						<Title isMobile={ props.isMobile } textAlign='center' marginTop='150px'>Recreation & Leisure</Title>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ props.thePool.image } />
						<ExperienceTitleContainerMobile>
							<ExperienceTitleTextMobile isMobile={ props.isMobile }>{ props.thePool.title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile isMobile={ props.isMobile }>
							<BodyTextMobile fontSize='14px' textAlign='left' isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html: props.thePool.description_mobile }} />
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceLeisureHeader marginTop='150px' isMobile={ props.isMobile }>
						<Title isMobile={ props.isMobile } textAlign='center' marginTop='150px'>Recreation & Leisure</Title>
						<ExperienceWellnessNewPoolImage isMobile={ props.isMobile } background={ props.thePool.image } />
						<ExperienceWellnessNewPoolDescription isMobile={ props.isMobile }>
							<TitleH2 isMobile={ props.isMobile }>{ props.thePool.title }</TitleH2>
							<BodyText fontSize='16px' textAlign='left' isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html: props.thePool.description }} />
						</ExperienceWellnessNewPoolDescription>
					</ExperienceLeisureHeader>
				}
				{
					false &&
					<ExperiencePool isMobile={ props.isMobile } marginTop='150px'>
						<ExperiencePoolDescription isMobile={ props.isMobile }>
							<TitleH2 textAlign='center'>{ props.thePool.title }</TitleH2>
							<BodyText fontSize='16px'>
								{ props.thePool.description }
							</BodyText>
						</ExperiencePoolDescription>
						<ExperienceHeaderPoolBody isMobile={ props.isMobile } background={ props.thePool.image } />
					</ExperiencePool>
				}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile }>
						<ExperienceWellnessNewPoolImageMobile isMobile={ props.isMobile } background={ props.sportsGames.image } />
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile }>{ props.sportsGames.title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile }>
								{ props.sportsGames.description_mobile }
							</BodyTextMobile>
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceGamesAndSports isMobile={ props.isMobile }>
						<ExperienceGamesAndSportsDescription isMobile={ props.isMobile }>
							<TitleH2 isMobile={ props.isMobile }>{ props.sportsGames.title }</TitleH2>
							<BodyText fontSize='16px' textAlign='left' isMobile={ props.isMobile }>
								{ props.sportsGames.description }
							</BodyText>
						</ExperienceGamesAndSportsDescription>
						<ExperienceGamesAndSportsImage isMobile={ props.isMobile } background={ props.sportsGames.image } />
					</ExperienceGamesAndSports>
				}
				{/*IS MOBILE*/}
				{
					props.isMobile &&
					<ExperienceLeisureHeaderMobile isMobile={ props.isMobile } marginTop='100px'>
						<ExperienceChildrenImageMobile
							isMobile={ props.isMobile }
							images={ typeof props.kudaFiyoIslandPlayground.image !== 'undefined' ? props.kudaFiyoIslandPlayground.image.split(',') : [] }
							cycle={ true }
							interval={ 5000 }
		      				transition={ 2000 }
						/>
						<ExperienceTitleContainerMobile isMobile={ props.isMobile }>
							<ExperienceTitleTextMobile isMobile={ props.isMobile }>{ props.kudaFiyoIslandPlayground.title }</ExperienceTitleTextMobile>
						</ExperienceTitleContainerMobile>
						<ExperienceWellnessNewPoolDescriptionMobile>
							<BodyTextMobile isMobile={ props.isMobile }>
								{ props.kudaFiyoIslandPlayground.description_mobile }
							</BodyTextMobile>
						</ExperienceWellnessNewPoolDescriptionMobile>
					</ExperienceLeisureHeaderMobile>
				}
				{/*IS NOT MOBILE*/}
				{
					!props.isMobile &&
					<ExperienceChildren isMobile={ props.isMobile } marginTop='100px'>
						<Container isMobile={ props.isMobile }>
							<RowAlign isMobile={ props.isMobile }>
								<ExperienceChildrenImage
									isMobile={ props.isMobile }
									images={ typeof props.kudaFiyoIslandPlayground.image !== 'undefined' ? props.kudaFiyoIslandPlayground.image.split(',') : [] }
									cycle={ true }
									interval={ 5000 }
				      				transition={ 2000 }
								/>
								<ExperienceChildrenDescription isMobile={ props.isMobile }>
									<TitleH2 isMobile={ props.isMobile }>{ props.kudaFiyoIslandPlayground.title }</TitleH2>
									<BodyText isMobile={ props.isMobile } fontSize='16px' textAlign='left'>
										{ props.kudaFiyoIslandPlayground.description }
									</BodyText>
								</ExperienceChildrenDescription>
							</RowAlign>
						</Container>
					</ExperienceChildren>
				}
			</div>
		)
	}
	return(<div/>);
}

export default ExperiencesRecreationAndLeisure;
