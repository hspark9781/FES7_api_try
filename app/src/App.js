import LoginPage from "./Components/LoginPage";
import JoinPage from "./Components/JoinPage";
import { useState } from "react";

function App() {
    const [page, setPage] = useState(true);
    const [info, setInfo] = useState("");
    const handlePage = () => {
        setPage((prevPage) => {
            return !prevPage;
        })
    }
    const  getMyinfo = async () => {
        const token = localStorage.getItem("token");
        const reqUrl = "https://api.mandarin.weniv.co.kr/user/myinfo";
        const res = await fetch(reqUrl, {
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
        const json = await res.json();
        console.log(json);
        setInfo(JSON.stringify(json));
    }
    return (
        <div>
            <button type="button" onClick={getMyinfo}>내 정보 불러오기</button>
            {info}
            {page ? <LoginPage handlePage={handlePage}/> : <JoinPage handlePage={handlePage}/>}
        </div>
    )
}
export default App;
