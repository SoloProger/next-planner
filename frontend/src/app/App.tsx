import {useEffect, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {Navbar} from "../widgets/navbar";
import {Sidebar} from "../widgets/sidebar";

function App() {
    const [isOpenSidebar, setOpenSidebar] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/auth");
        }
    }, [navigate]);

    return (
        <>
            <Navbar openSidebar={() => setOpenSidebar(!isOpenSidebar)}/>
            <main className="flex gap-24 relative">
                <Sidebar isOpen={isOpenSidebar}/>
                <Outlet/>
            </main>
        </>
    );
}

export default App;
