import axios  from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(false);

    const getUserData = async () => {
        try {
            const {data} = await axios.get(backendUrl + ('/api/user/data'))
            data.success ? setUserData(data.userData) : toast.success(data.message)
        } catch (error) {
            toast.success(error.message)
        }
    }
    
    

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