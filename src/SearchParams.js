import React, { useState } from 'react';
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from './useDropdown';

export default function SearchParams () {
    const [location, setLocation] = useState("Dallas, TX");
    // const [animal, setAnimal] = useState("dog");
    // const [breed, setBreed] = useState("maltese");
    const [breeds, setBreeds] = useState([]);

    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

    return (
        <div className="search-params">
            <form>
                <h1>{location}</h1>
                <label htmlFor="location">Location</label>
                <input 
                id="location" 
                value={location}
                placeholder="Location"
                onChange={ event => setLocation(event.target.value) } />

                <AnimalDropdown />
                <BreedDropdown />

                {/* <label htmlFor="animal">
                    Amimal
                    <select 
                    id="animal"
                    value={animal}
                    onChange={e => setAnimal(e.target.value)}
                    onBlur={e => setAnimal(e.target.value)}>
                    <option>All</option>
                    {ANIMALS.map(animal => (
                        <option key={animal} value={animal}>{animal}</option> 
                    ))}
                    </select>
                    
                </label>
                <label htmlFor="breed">
                    Breed
                    <select 
                    id="breed"
                    value={breed}
                    onChange={e => setBreed(e.target.value)}
                    onBlur={e => setBreed(e.target.value)}
                    disabled={breeds.length === 0}>
                    <option>All</option>
                    {breeds.map(breedString => (
                        <option key={breedString} value={breedString}>{breedString}</option> 
                    ))}
                    </select>
                    
                </label> */}
                <button>Submit</button>
            </form>
        </div>
    )
}