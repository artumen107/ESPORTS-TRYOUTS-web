import React, { createContext, useState} from "react";

const ExampleContext = createContext()

const ExampleContextProvider = ({children}) => {

const [Boolean, setBoolean] = useState(false);

function exampleFunction() {
    //
}

value= {
    exampleFunction,
    setBoolean,
    boolean
}


    return <ExampleContext.Provider value = {value}> {children}</ExampleContext.Provider>
    

}