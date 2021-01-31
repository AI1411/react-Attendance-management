import React, {createContext, useState, useEffect} from "react";
import axios from "axios";

interface AuthContext {
    currentUser: any | null | undefined;
}

const AuthContextUser = createContext<AuthContext>({
    currentUser: undefined,
});

const AuthProvider = (props: any) => {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        getCurrentUser();
    }, []);

    const getCurrentUser = async () => {
        const response = await axios.post('login', {
            email: 'sayuri.sugiyama@example.org',
            password: 'password'
        });
        axios.defaults.headers.Auththorization = `Bearer ${response.data.token}`;

        setCurrentUser(response.data.data);
    };

    return (
        <AuthContextUser.Provider value={{
            currentUser: currentUser
        }}>
            {props.children}
        </AuthContextUser.Provider>
    )
}

export {AuthContextUser, AuthProvider};
