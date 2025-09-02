import { useNavigate } from "react-router-dom";
import { ACCES_TOKEN, REFRESH_TOKEN } from "../constants";
import Navbar from "../components/Navbar";
import HomeHero from "../sections/HomeHero";
import HomeCourse from "../sections/HomeCourse";
import Footer from "../components/Footer";
import "../styles/Home.css";

function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem(ACCES_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        navigate("/login");
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <HomeHero />
            <HomeCourse />
            <Footer />
        </div>
    );  
}

export default Home;
