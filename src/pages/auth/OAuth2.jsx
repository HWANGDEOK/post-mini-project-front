<<<<<<< HEAD
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function OAuth2() {
    const navigate = useNavigate();
    const [ SearchParams ] = useSearchParams();
    const accessToken = SearchParams.get("accessToken");
    
    useEffect(() => {
        console.log(accessToken);
        if (!!accessToken) {
            alert("로그인 성공!");
        } else {
            alert("로그인 후 이용바랍니다");
            navigate("/auth/login");
        }
    }, [accessToken])
    return <></>
}

=======
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMeQuery } from "../../queries/usersQueries";

function OAuth2() {
    const navigate = useNavigate();
    const [ SearchParams ] = useSearchParams();
    const accessToken = SearchParams.get("accessToken");
    

    if (!!accessToken) {
        localStorage.setItem("AccessToken", accessToken);
    }

    const meQuery = useMeQuery();

    useEffect(() => {
        const {isLoading, data} = meQuery;
        if (!isLoading) {
            if(data.status !== 200) {
                alert("인증이 필요합니다");
                navigate("/auth/login");
            } else {
                alert("로그인 성공");
                navigate("/");
            }
        }
    }, [meQuery.data])

    return <></>
}

>>>>>>> 247bc67 (로그인, 로딩 구현)
export default OAuth2;