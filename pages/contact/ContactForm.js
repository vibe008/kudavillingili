import React from "react"

const {

    ContainerRow,
    RowAlign,
    Title,
    ViewPort,

} = require("../../style/common/Common.Styled")
const {

    ContactButton,
    ContactFormContainer,
    ContactFormImage,
    ContactFormResponse,
    ContactFormText,
    ContactFormTextArea,
    ContactFormTitle,
    ContactFormView,

} = require("../../style/contact")
const {

    endpoint

} = require("../../variables")

const ContactForm = ( props ) => {

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
    const contact_number = languageDetected === "ru" ? "Контактный номер (с кодом страны)" : languageDetected === "ar" ? "رقم الاتصال (مع رمز الدولة)" : "Contact Number (with country code)"
    const message = languageDetected === "ru" ? "Сообщение" : languageDetected === "ar" ? "رسالة" : "Message"
    const message_placeholder = languageDetected === "ru" ? "Расскажите нам, что вы хотели бы знать или поделитесь вашими особыми пожеланиями" : languageDetected === "ar" ? "أخبرونا بما تودون معرفته أو في حال لديكم طلبات خاصة" : "tell us what you would like to know or you have special requests"
    const submit = languageDetected === "ru" ? "Отправить" : languageDetected === "ar" ? "إرسلوا" : "Submit"

    return(
        <ViewPort isMobile={ props.isMobile }>
            <ContainerRow isMobile={ props.isMobile } directionRTL={ languageDetected === "ar" ? true : false }>
                <ContactFormImage isMobile={ props.isMobile } background="https://kudavillingili.sgp1.digitaloceanspaces.com/accomodation/Beach%20Villa%20with%20Pool/BeachVillaWithPool_Kuda%20Villingili%20Maldives1.jpg" />
                <ContactFormContainer isMobile={ props.isMobile } directionRTL={ languageDetected === "ar" ? true : false }>
                    <Title isMobile={ props.isMobile }>{ heading }</Title>
                    <RowAlign isMobile={ props.isMobile } noCenter={ true }>
                        <ContactFormView marginRight="80px" isMobile={ props.isMobile } languageDetected={ languageDetected }>
                            <ContactFormTitle>{ name }</ContactFormTitle>
                            <ContactFormText isMobile={ props.isMobile } type="text" onChange={ (event) => updateValue(event) } name="name" value={ state.name }/>
                        </ContactFormView>
                    </RowAlign>
                    <RowAlign isMobile={ props.isMobile } noCenter={ true }>
                        <ContactFormView marginRight="80px" isMobile={ props.isMobile } languageDetected={ languageDetected }>
                            <ContactFormTitle>{ email }</ContactFormTitle>
                            <ContactFormText isMobile={ props.isMobile } type="text" onChange={ (event) => updateValue(event) } name="email" value={ state.email }/>
                        </ContactFormView>
                    </RowAlign>
                    <RowAlign isMobile={ props.isMobile } noCenter={ true }>
                        <ContactFormView marginRight="80px" isMobile={ props.isMobile } languageDetected={ languageDetected }>
                            <ContactFormTitle>{ contact_number }</ContactFormTitle>
                            <ContactFormText isMobile={ props.isMobile } type="text" onChange={ (event) => updateValue(event) } name="contact_number" value={ state.contact_number }/>
                        </ContactFormView>
                    </RowAlign>
                    <ContactFormView isMobile={ props.isMobile }>
                        <ContactFormTitle>{ message }</ContactFormTitle>
                        {
                            props.isMobile &&
                            <ContactFormTextArea isMobile={ props.isMobile } widthFull={ true } type="text" onChange={ (event) => updateValue(event) } name="message" placeholder={ message_placeholder } value={ state.message }/>
                        }
                        {
                            !props.isMobile &&
                            <ContactFormText isMobile={ props.isMobile } widthFull={ true } type="text" onChange={ (event) => updateValue(event) } name="message" placeholder={ message_placeholder } value={ state.message }/>
                        }
                    </ContactFormView>
                    <ContactButton  onClick={ () => agentFetchHelper() }>{ submit }</ContactButton>
                    {
                        state.response !== "" &&
                        <ContactFormResponse>{ state.response }</ContactFormResponse>
                    }
                </ContactFormContainer>
            </ContainerRow>
        </ViewPort>
    )
}

export default ContactForm
