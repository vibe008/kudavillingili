import React from "react"

const {

    ContainerRow,
    RowAlign,
    Title,
    TitleH2,
    ViewPort2,

} = require("../../style/common/Common.Styled")
const {
    InputText,
} = require('../../component/footer/Footer.Styled');
const {

    ContactButton,
    ContactFormContainer,
    ContactFormImage,
    ContactFormResponse,
    ContactFormText,
    ContactFormTextArea,
    ContactFormTitle,
    ContactFormView,

} = require("../../style/footer-form")
const {

    endpoint

} = require("../../variables")

const FooterForm = ( props ) => {

    const {

        languageDetected

    } = props

    const [ state, updateState ] = React.useState({

        contact_number: "",
        country: "",
        email: "",
        first_name: "",
        last_name: "",
        message: "",
        nature_of_enquiry: "",
        response: "",
        title: "",

    })
    const updateValue = ( event ) => {

        const variable = event.target.name
        const value = event.target.value
        updateState({ ...state, [variable]: value })

    }
    const agentFetchHelper = async () => {

        const body = JSON.stringify({

            email: state.email,
            message: state.message,
            mobile: state.contact_number,
            name: state.name,

        })

        const headers = { "Content-Type": "application/json" }
        const config = { method:"POST", headers:headers, body }
        const url = endpoint+"/form"
        try {

            fetch(url, config)
            .then(response => response.json())
            .then(responseJson => {
                console.log( responseJson )
                if( responseJson.status === 201 ){
                    console.log( "success")
                    //CLEAR FORM WHEN SUCCESS
                    updateState({

                        ...state,
                        contact_number: "",
                        email: "",
                        message: "",
                        name: "",
                        response: responseJson.message,

                    })

                } else {

                    updateState({ ...state, response: responseJson.message })

                }

            })
        } catch (err) {

            console.log("error")

        }

    }

    const heading = languageDetected === "ru" ? "Связаться с нами" : languageDetected === "ar" ? "اتصلوا بنا" : "Contact Us"
    const name = languageDetected === "ru" ? "Имя" : languageDetected === "ar" ? "اسم" : "Name"
    const email = languageDetected === "ru" ? "Электронная почна" : languageDetected === "ar" ? "البريد الالكتروني" : "Email"
    const contact_number = languageDetected === "ru" ? "Контактный номер (с кодом страны)" : languageDetected === "ar" ? "رقم الاتصال (مع رمز الدولة)" : "Contact Number"
    const message = languageDetected === "ru" ? "Сообщение" : languageDetected === "ar" ? "رسالة" : "Message"
    const message_placeholder = languageDetected === "ru" ? "Расскажите нам, что вы хотели бы знать или поделитесь вашими особыми пожеланиями" : languageDetected === "ar" ? "أخبرونا بما تودون معرفته أو في حال لديكم طلبات خاصة" : "tell us what you would like to know"
    const submit = languageDetected === "ru" ? "Отправить" : languageDetected === "ar" ? "إرسلوا" : "Submit"

    return(
        <ViewPort2 isMobile={ props.isMobile }>
            <ContainerRow totalWidth="0px" isMobile={ props.isMobile } directionRTL={ languageDetected === "ar" ? true : false }>
                <ContactFormContainer isMobile={ props.isMobile } directionRTL={ languageDetected === "ar" ? true : false }>
                    <TitleH2 marginBotton="0px" isMobile={ props.isMobile } marginTop={ '0px' }>{ heading }</TitleH2>
                    <RowAlign isMobile={ props.isMobile } marginTop="1px" noCenter={ true }>
                        <ContactFormView marginRight="10px" isMobile={ props.isMobile } languageDetected={ languageDetected }>
                            <InputText isMobile={ props.isMobile } widthFull={ true } totalWidth="250px" type="text" onChange={ (event) => updateValue(event) } placeholder={ name } name="name" value={ state.name }/>
                        </ContactFormView>
                    </RowAlign>
                    <RowAlign isMobile={ props.isMobile } marginTop="1px" noCenter={ true }>
                        <ContactFormView marginRight="1px" isMobile={ props.isMobile } languageDetected={ languageDetected }>
                            <InputText isMobile={ props.isMobile } widthFull={ true } totalWidth="250px" type="text" onChange={ (event) => updateValue(event) } placeholder={ email } name="email" value={ state.email }/>
                        </ContactFormView>
                    </RowAlign>
                    <RowAlign isMobile={ props.isMobile } marginTop="1px" noCenter={ true }>
                        <ContactFormView marginRight="1px" isMobile={ props.isMobile } languageDetected={ languageDetected }>
                            <InputText isMobile={ props.isMobile } widthFull={ true } totalWidth="250px" type="text" onChange={ (event) => updateValue(event) } placeholder={ contact_number } name="contact_number" value={ state.contact_number }/>
                        </ContactFormView>
                    </RowAlign>
                    <RowAlign isMobile={ props.isMobile } marginTop="1px" noCenter={ true }>
                        <ContactFormView marginRight="1px" isMobile={ props.isMobile } languageDetected={ languageDetected }>
                            <InputText isMobile={ props.isMobile } widthFull={ true } totalWidth="250px" type="text" onChange={ (event) => updateValue(event) } name="message" placeholder={ message_placeholder } value={ state.message }/>
                        </ContactFormView>
                    </RowAlign>

                    <ContactButton  onClick={ () => agentFetchHelper() }>{ submit }</ContactButton>
                    {
                        state.response !== "" &&
                        <ContactFormResponse>{ state.response }</ContactFormResponse>
                    }
                </ContactFormContainer>
            </ContainerRow>
        </ViewPort2>
    )
}

export default FooterForm
