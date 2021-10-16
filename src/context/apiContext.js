import React, { useContext, useState, useEffect, createContext } from "react";
const APIContext = createContext();

function APIContextProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data
  useEffect(() => {
    fetch("./courses.JSON")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setCourses(data);
      });
  }, []);

  return (
    <APIContext.Provider value={{ courses, isLoading }}>
      {children}
    </APIContext.Provider>
  );
}
export default APIContextProvider;

// Create a hook to use the APIContext
export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
