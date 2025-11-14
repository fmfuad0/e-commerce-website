import { createContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    function handleGoogleResponse(response) {
        try {
            const userData = jwtDecode(response.credential);
            console.log("Google User:", userData);

            setUser(userData);
            localStorage.setItem("googleUser", JSON.stringify(userData));
        } catch (err) {
            console.error("JWT decode failed: ", err);
        }
    }



    const logout = () => {
        setUser(null);
        localStorage.removeItem("googleUser");
        google.accounts.id.disableAutoSelect();
    };

    useEffect(() => {
        const stored = localStorage.getItem("googleUser");
        if (stored) setUser(JSON.parse(stored));
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, logout, handleGoogleResponse }}>
            {children}
        </AuthContext.Provider>
    );
};
