import React from 'react';
import Image from 'next/image';
import { isMobile } from "react-device-detect";

import logo from '../../assets/images/logo_with_tag.svg';
import kiwi_logo from '../../assets/images/kiwi_logo.svg';
import FooterForm from "../../pages/contact/FooterForm"
import jsonp from "jsonp";

const {

	FooterComponent,
	FooterMessage,
	InputText,
	KudavillingiliIcon,
	LanguageContainer,
	SubscribeButton,

} = require('./Footer.Styled');

const {
	
	ContainerByThree,
	ContainerRow,
	MarginTopForMobile,
	RowAlign,
	TextColorDarkGrey,
	TextColorLightGrey,
	TitleH2,

} = require('../../style/common/Common.Styled');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const Footer = ( props ) => {

	const {

		languageDetected

	} = props

	const [ is_mobile, UpdateState ] = React.useState( false )
	const [ subscribeText, subscribeTextUpdate ] = React.useState("")
	React.useEffect(() => {
		UpdateState( isMobile );
	},[])
	const submitForm = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const validation = validateEmail(email)
        if( validation ){
            const url = 'https://kudavillingili.us14.list-manage.com/subscribe/post-json?u=26d8cb9ae4a9e30ef5e730255&id=a7f36e4aaf&EMAIL='+email;
            jsonp(url,{
                param: "c"
                },
                (error, data) => {
                    if (error) {
                        subscribeTextUpdate('something went wrong');
                    } else {
                        if( data.result === "success")
                            subscribeTextUpdate('Thank you for sharing your mail address, we would be in touch with you!')
                        else
                            subscribeTextUpdate(data.msg)
                    }
                }
            )
        } else {
            subscribeTextUpdate('Invalid email.');
        }
    }
    const storeLanguage = ( language ) => {

    	localStorage.setItem("language", language )
    	window.location.reload()

    }

    const footer_items_text = {

		en: {

			reservations: "Reservations: (+960) 4001700",
			general_enquiries: "General Enquiries: (+960)4000900",
			atoll: "Kudavillingili, Kaafu Atoll",
			country: "Republic of Maldives",
			sign_up_heading: "Sign up for news",
			partners_heading: "Our Partners",
			email_placeholder: "email address",
			subscribe_button: "Subscribe",

		},
		ru: {

			reservations: "Бронирование: (+960) 4001700",
			general_enquiries: "Общие вопросы: (+960) 4000900",
			atoll: "Кудавиллингили, Атолл Каафу",
			country: "Мальдивская Республика",
			sign_up_heading: "Подпишитесь на новости",
			partners_heading: "Наши Партнеры",
			email_placeholder: "адрес электронной почты",
			subscribe_button: "Подписаться",

		},
		ar: {

			reservations: "للحجوزات: 4001700 (960+)",
			general_enquiries: "للإستفسارات العامة: 4000900 (960+)",
			atoll: "كودافيليجيلي كافو أتول",
			country: "جمهورية جزر المالديف",
			sign_up_heading: "يرجى الإشتراك للحصول على الأخبار",
			partners_heading: "شركاؤنا",
			email_placeholder: "عنوان البريد الإلكتروني",
			subscribe_button: "الإشتراك",

		}

	}
	return(
		<FooterComponent isMobile={ is_mobile }>
			<ContainerRow isMobile={ is_mobile }>
				<ContainerByThree isMobile={ is_mobile } alignItemsCenter={ true }>
					<Image src={ logo } alt="logo_with_tag_icon" width={ 300 } height={ 60 } />
					<RowAlign style={{ width: 300 }} alignCenter={ true } marginTop={ "20px" } isMobile={ is_mobile } alignOverright={ true }>
						<LanguageContainer onClick={ () => storeLanguage("en") } isActive={ languageDetected === "en" ? true : false }>English</LanguageContainer>
						<LanguageContainer onClick={ () => storeLanguage("ru") } isActive={ languageDetected === "ru" ? true : false }>русский</LanguageContainer>
						<LanguageContainer onClick={ () => storeLanguage("ar") } isActive={ languageDetected === "ar" ? true : false }>العربية</LanguageContainer>
					</RowAlign>
				</ContainerByThree>
				<MarginTopForMobile isMobile={ is_mobile } marginTop={ '60px'} />
				<ContainerByThree isMobile={ is_mobile } languageDetected={ languageDetected }>
					<TextColorLightGrey isMobile={ is_mobile } marginBottom={ '10px' }>
						<span>{ footer_items_text[languageDetected].reservations }<script src="https://onboard.triptease.io/bootstrap.js?integrationId=01G34JXQRXJ8T0VEW6H67VZ6MK" defer async crossorigin="anonymous" type="text/javascript"></script></span>
					</TextColorLightGrey>
					<TextColorLightGrey isMobile={ is_mobile } marginBottom={ '10px' }>
						<span>{ footer_items_text[languageDetected].general_enquiries }</span>
					</TextColorLightGrey>
					<TextColorLightGrey isMobile={ is_mobile } marginBottom={ '10px' }>reservations@kudavillingili.com</TextColorLightGrey>
					<TextColorLightGrey isMobile={ is_mobile }>
						<span>{ footer_items_text[languageDetected].atoll }</span>
					</TextColorLightGrey>
					<TextColorLightGrey isMobile={ is_mobile } >
						<span>{ footer_items_text[languageDetected].country }</span>
					</TextColorLightGrey>
				</ContainerByThree>
				<MarginTopForMobile isMobile={ is_mobile } marginTop={ '60px'} />
				<ContainerByThree isMobile={ is_mobile } languageDetected={ languageDetected }>
					<TitleH2 isMobile={ is_mobile } marginTop={ '0px' }>
						<span>{ footer_items_text[languageDetected].sign_up_heading }</span>
					</TitleH2>
					<form onSubmit={ submitForm }>
						<InputText languageDetected={ languageDetected } placeholder={ footer_items_text[languageDetected].email_placeholder } name="email"/>
						<SubscribeButton isMobile={ is_mobile }>
							<span>{ footer_items_text[languageDetected].subscribe_button }</span>
						</SubscribeButton>
                        <FooterMessage className="subscribeText">{ subscribeText }</FooterMessage>
                    </form>
				</ContainerByThree>				
					<ContainerByThree isMobile={ is_mobile } textAlign="center" languageDetected={ languageDetected }>
						<TitleH2 isMobile={ is_mobile } marginBotton= { '5px' } marginTop={ '0px' }>
							<span>{ footer_items_text[languageDetected].partners_heading }</span>
						</TitleH2>
						<Image src={ kiwi_logo } alt="logo_with_tag_icon" width={ 140 } height={ 90 } />
					</ContainerByThree>				
				<ContainerByThree isMobile={ is_mobile } languageDetected={ languageDetected }>
			<FooterForm
				isMobile={ is_mobile }
				languageDetected={ languageDetected }
			/>
				</ContainerByThree>
			</ContainerRow>
		</FooterComponent>
	)
}

export default Footer;
