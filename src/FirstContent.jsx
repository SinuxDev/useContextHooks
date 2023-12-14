import { createContext, useState } from "react";

export const FirstContext = createContext(null);

const FirstContextProvider = (props) =>{

    const [userName,setUserName] = useState("Shin")
    const address = "YGN";

    return(
        <FirstContext.Provider value={{ userName,address }} >
            {props.children}
        </FirstContext.Provider>
    )
}

export default FirstContextProvider;