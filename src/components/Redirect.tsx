import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectComponent = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/home");
    }, [navigate]);

    return null; 
};

export default RedirectComponent;
