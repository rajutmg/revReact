import React, {createContext} from "react";
import CA from "./CA";

const Firstname = createContext();
const Lastname = createContext(); 

const ContextAPI = () => {
    return(
        <>
        <Firstname.Provider value={"Raju"}>
        <Lastname.Provider value={"Tamang"}>
        <CA/>
        </Lastname.Provider>
        </Firstname.Provider>
        </>
    );
} 

export default ContextAPI;
export { Firstname, Lastname }