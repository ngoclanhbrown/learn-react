import { useContext, useState } from "react";
import ThemeContext from "./ThemeContext";
import useBreedList from "./useBreedList";
import Result from "./Result";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const breeds = useBreedList(animal);
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [themeColor, setThemeColor] = useContext(ThemeContext);

  async function requestPets() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    const pets = json.pets.map((pet) => {
      return {
        id: pet.id,
        name: pet.name,
        animal: pet.animal,
        breed: pet.breed,
        images: pet.images,
        city: pet.city,
        state: pet.state,
      };
    });
    setPets(pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
            disabled={!breeds.length}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="themeColor">
          Theme
          <select
            value={themeColor}
            onChange={(e) => setThemeColor(e.target.value)}
            onBlur={(e) => setThemeColor(e.target.value)}
          >
            <option value="green">Green</option>
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: themeColor,
          }}
        >
          Submit
        </button>
      </form>
      <Result pets={pets} />
    </div>
  );
};

export default SearchParams;
