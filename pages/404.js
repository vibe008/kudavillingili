import Script from "next/script"


export default function Coustom404() {
    return (
        <>
            <h1>404  not found ...rediricting to home page</h1>
            <Script
                id="redirecting"
            >
                {`
       document.location.href="/";
       `}
            </Script>
        </>
    )
}