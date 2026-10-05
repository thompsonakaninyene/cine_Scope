import { useContext, createContext } from "react";
const nameProvider = createContext()

export  function NameContext({children}) {

    const UseName = "Akaninyene";
    const Email = "akaninyenethompson@gmail.com";
    const Greetings = "Welcome to CineScope — Discover, Watch and Enjoy Movies"
    return(
        <nameProvider.Provider value={{ UseName, Email, Greetings}}>
            {children}
        </nameProvider.Provider>
    )
}

export  function UseNameContext() {
    const context = useContext(nameProvider)
    if (!context) throw new Error("component must be inside")
        return context
        
    
}