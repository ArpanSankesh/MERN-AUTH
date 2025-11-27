import axios  from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const navigate = useNavigate()

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(false);
    
    axios.defaults.withCredentials = true;


    const getAuthState = async () => {
        try {
            const {data} = await axios.get(backendUrl + ('/api/auth/is-auth'))
            if(data.success){
                setIsLoggedIn(true)
                getUserData()
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getUserData = async () => {
        try {
            const {data} = await axios.get(backendUrl + ('/api/user/data'))
            data.success ? setUserData(data.userData) : toast.success(data.message)
        } catch (error) {
            toast.error(error.message)
        }
    }
    
    useEffect(()=>{
        getAuthState();
    },[])

    const value = {
        backendUrl,
        isLoggedIn, setIsLoggedIn, 
        userData, setUserData, 
        getUserData
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}