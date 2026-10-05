import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function useAuthHooks() {
    
const [isLoading, setIsLoading] = useState(true)
    const[isRegister, setIsRegister] = useState(false)
      const [loginDate, setLoginDate] = useState (
        {
            email: '',
            password: ''
        }
      );
    
          const navigate = useNavigate()

      const handleChange = (e) =>{
        const {name, value} = e.target;
        setLoginDate(prevState =>({...prevState, [name]: value}))
      }
    //   const handleLogin = (e) =>{
    //     e.preventDefault()
    //     console.log(loginDate)
    //     setIsRegister(true)
    //     return <Register /> 
    //   }

      const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(false)

   try {
         
    // if (!formData.fullName || !formData.email || !formData.passWord) return alert("all inputs are required") 
  
    const response = await fetch ("https://zyloo-api-v1.onrender.com/auth/login", {
      method: "POST", 
      headers: {"Content-Type" : "application/json"}, 
      credentials: "include",
      body: JSON.stringify( loginDate )
    })
    
    const tryLogIn = await response.json()

    localStorage.setItem("token", JSON.stringify(tryLogIn))

    navigate("/", {replace: true})
    console.log(tryLogIn);

    
    setIsLoading(false)
   } catch (error) {
    console.log(error)
    setIsLoading(false)
   }
  };
    return {
        isLoading,
        handleChange,
        handleSubmit,
        isRegister,
        setIsRegister,
        loginDate
    }
}