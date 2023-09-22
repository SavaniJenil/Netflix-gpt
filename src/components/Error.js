import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();
    console.log(err);
    return (<div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h1>Oops!!! Something went wrong. Please resolve below error.</h1>
        <h1>Error:{err.status} {err.error.message}</h1>
        <img alt="error image" src="https://img.freepik.com/premium-vector/website-page-found-error-robot-character-broken-chatbot-mascot-disabled-site-technical-work_502272-1888.jpg" style={{width:"700px", height:"500px"}} />
    </div>
    )
}
export default Error;