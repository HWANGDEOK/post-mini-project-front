<<<<<<< HEAD
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import { useEffect } from "react";
import OAuth2 from "../pages/auth/OAuth2";

function AuthRoute() {
    const navigate = useNavigate();
    const location = useLocation();
    const {pathname} = location;

    useEffect(() => {
        if (pathname === "/") {
            navigate("/auth/login");
        }
    }, [pathname]);

    return <Routes>
        <Route path="/" element={<></>} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/login/oauth2" element={<OAuth2 />} />
        <Route path="/auth/signup" element={<SignUp />} />
    </Routes>
}

=======
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import { useEffect } from "react";
import OAuth2 from "../pages/auth/OAuth2";
import { useMeQuery } from "../queries/usersQueries";
import Logout from "../pages/auth/Logout";
import Loading from "../components/common/Loading";

function AuthRoute() {
    const navigate = useNavigate();
    const location = useLocation();
    const {pathname} = location;

    const meQuery = useMeQuery();

    useEffect(() => {
        const { isLoading, data } = meQuery;
        if (!isLoading) {
            if (data.status !== 200) {
                if (!pathname.startsWith("/auth")) {
                    navigate("/auth/login");
                }
            } else {
                if (pathname.startsWith("/auth")) {
                    navigate("/");
                }
            }
        }
    }, [pathname, meQuery.data]);

    if (meQuery.isLoading) {
        return <Loading />
    } 
    if (meQuery.isSuccess && meQuery.data.status !== 200) {
        return <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/login/oauth2" element={<OAuth2 />} />
        </Routes>
    } 
    return <Routes>
        <Route path="/" element={<></>} />
        <Route path="/logout" element={<Logout />} />
    </Routes>
}

>>>>>>> 247bc67 (로그인, 로딩 구현)
export default AuthRoute;