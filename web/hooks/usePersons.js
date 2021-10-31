import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

function usePersons() {
  const { data: personsData } = useFetch(`/`);
  const [persons, setPersons] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    personsData && setPersons(personsData);
    setSuccess(false)
    setError(false)
  }, [personsData]);

  const maxIdPersons = persons && Math.max(...persons.map((p) => p.id));

  const postPerson = async (formData) => {
    const data = {
      id: (maxIdPersons + 1).toString(),
      imageUrl: "",
      ...formData,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    return await fetch(
      "https://o3fp0fun12.execute-api.us-east-1.amazonaws.com/Prod/",
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setError(false);
        console.log("Success:", data);
      })
      .catch((err) => {
        setError("An error occurred while sending the data.");
        setSuccess(false);
        console.error("Error:", err);
      });
  };

  return { persons, postPerson, success, error };
}

export default usePersons;
