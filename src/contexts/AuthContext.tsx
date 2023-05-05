import { createContext, ReactNode, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

import { UserDTO } from "../dtos/UserDTO";

import { USER_COLLECTION } from "@storage/storageConfig";
import { storageGetUser, storageUserRemove } from "@storage/storageUser";

export type AuthContextDataProps = {
    user: UserDTO;
    signUp: (userCreated: UserDTO, password: string) => Promise<void>;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {

    const [user, setUser] = useState<UserDTO>({} as UserDTO);
    const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(false);

    async function loadUserData() {
        const userLogged = await storageGetUser();

        if(userLogged) {
            setUser(userLogged);
        }
    }

    async function signUp(userCreated: UserDTO, password: string) {

        try {

            await createUserWithEmailAndPassword(auth, userCreated.email, password)
                .then((credential) => {
                    updateProfile(credential.user, { displayName: userCreated.name })
                })
                .catch(error => {
                    console.log("createUserWithEmailAndPassword:", error);
                });
           
            const usersRef = doc(db, 'users', userCreated.email);

            await setDoc(usersRef, userCreated);

            await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(user));
        } catch (error) {
            console.log("Erro do try do auth:", error);
            throw error;
        }

        setUser(userCreated);
    }

    async function signIn(email: string, password: string) {

        try {

            const auth = getAuth();

            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    console.log("LOGOU")
                })
                .catch((error) => {
                    console.log(error);
                });

            const userRef = doc(db, 'users', email);
            var userFB = await getDoc(userRef);

            await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(userFB.data()));

            const userLogged = await storageGetUser();
            setUser(userLogged);

        } catch (error) {
            throw error;
        }
    }

    async function signOut() {

        try {
            setIsLoadingUserStorageData(true);
            setUser({} as UserDTO);

            await storageUserRemove();
        } catch (error) {
            throw error;
        } finally {
            setIsLoadingUserStorageData(false);
        }
    }

    useEffect(() => {
        loadUserData();
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            signUp,
            signIn,
            signOut,
        }} >
            {children}
        </ AuthContext.Provider>
    );
}
