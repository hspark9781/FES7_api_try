import LoginPage from "./Components/LoginPage";
import JoinPage from "./Components/JoinPage";
import { useState } from "react";

function App() {
    const [page, setPage] = useState(true);
    const handlePage = () => {
        setPage((prevPage) => {
            return !prevPage;
        })
    }
    return (
        <div>
            {page ? <LoginPage handlePage={handlePage}/> : <JoinPage handlePage={handlePage}/>}
        </div>
    )
}
export default App;
