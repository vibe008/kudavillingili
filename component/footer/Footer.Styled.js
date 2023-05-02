import styled from 'styled-components';
import { isMobile } from "react-device-detect";

export const FooterComponent = styled.div`
	background-color: #F9F8F5;
	padding: ${ props => props.isMobile ? `60px 0` :`100px 0` };
`;

export const KudavillingiliIcon = styled.div`
	background: url(https://mohit.sgp1.cdn.digitaloceanspaces.com/kudavillingili/logo.png);
	background-size: cover;
	width: 300px;
	height: 42px;
	background-size: 300px;
`;

export const InputText = styled.input`
	border: none;
	border-bottom: 1px solid #77767B;
	background-color: #F9F8F5;
	font-family: 'Lunfga', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 14px;
    font-weight: 300;
    width: 100%;
    ${
        props => props.totalWidth && `
            width: ${props.totalWidth};
        `
    }
    outline: none;
    ${

        props => props.languageDetected === "ar" && `

            direction: rtl;

        `
        
    }
`;

export const SubscribeButton = styled.button`
	width: ${ props => props.isMobile ? `calc(100% - 40px)` : `250px` };
    margin-top: 20px;
    border: none;
    background-color: #77767B;
    padding: 15px 30px;
    font-size: 18px;
    color: #fff;
    font-family: 'Lunfga', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 300;
    cursor: pointer;
`;

export const FooterMessage = styled.div`
	font-size: 16px;
    margin-top: 20px;
    font-weight: 300;
`;

export const LanguageContainer = styled.div`

    color: #C1A292;
    cursor: pointer;
    font-family: 'Lunfga', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 14px;
    font-weight: 500;
    padding: 10px;
    display: inline-block;
    width: auto;
    ${

        props => props.isActive && `

            text-decoration: underline;

        `

    }
    ${

        props => props.isInHeader && `

            color: #fff;
            padding-right: 10px;

        `

    }
    ${

        props => props.changeColor && `

            color: #C1A292;

        `
        
    }

`
