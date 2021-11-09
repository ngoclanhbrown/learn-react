import { useState, useEffect } from "react";

const localCache = {};

const useBreedList = (animal) => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    if (!animal) {
      setBreeds([]);
    } else if (localCache[animal]) {
      setBreeds(localCache[animal]);
    } else {
      requestBreeds(animal);
    }
  }, [animal]);

  async function requestBreeds(animal) {
    setBreeds([]);
    const response = await fetch(
      `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    );
    const json = await response.json();
    localCache[animal] = json.breeds || [];
    setBreeds(localCache[animal]);
  }

  return breeds;
};

export default useBreedList;
