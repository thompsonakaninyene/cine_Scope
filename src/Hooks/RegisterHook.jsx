import { useState, useEffect } from "react";


 
export default
function useRegisterHook() {
  const [login, setLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",  
    password: "",
    confirmPassword: "",
  });

  // Monitor the updated formData
  useEffect(() => {
    // console.log("Form Data:", formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
   

    // Check passwords
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://zyloo-api-v1.onrender.com/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      const getRegistered = await response.json();

      console.log("Registration response:", getRegistered);

      if (!response.ok) {
        console.log("Registration failed");
        return;
      }

      console.log("Registration successful");
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };
return{
    login,
    isLoading,
    formData,
    handleChange,
    handleSubmit,
    setLogin
}
}

