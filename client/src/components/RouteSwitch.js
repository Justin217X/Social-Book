import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path='/' element={<SignUp />}/>
                    <Route path='/login' element={<SignIn />}/>
                    <Route path='/SocialBook' element={<App />}/>

            </Routes>
        </BrowserRouter>
    )
}


export default RouteSwitch;