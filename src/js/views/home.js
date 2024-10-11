import React, { useEffect, useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Cardnave } from "../component/cardnave";
import { Navigate } from "react-router";
import { Cardcharacter } from "../component/cardcharacter";
import { Cardplanet } from "../component/cardplanet";


export const Home = () => {
	const { store, actions } = useContext(Context);
	
	const [starships,setStarships]=useState([])
	const [characters,setCharacters]=useState([])

	return (
			<div className="text-center mt-5">
				<h1>Characters</h1>
				<div className="row flex-row flex-nowrap" style={{overflowX:'auto'}}>
					{store.characters.map( (character)=> 
					<Cardcharacter 
						key={character.url} 
						uid={character.url.replace("https://swapi.dev/api/people/","").replace("/","")} 
						name={character.name}
						eye_color={character.eye_color}
						hair_color={character.hair_color}
						gender={character.gender}
					/> )}
				</div>
				<h1>Planets</h1>
				<div className="row flex-row flex-nowrap" style={{overflowX:'auto'}}>
					{store.planets.map( (planet)=> 
					<Cardplanet 
						key={planet.url} 
						uid={planet.url.replace("https://swapi.dev/api/planets/","").replace("/","")} 
						name={planet.name}
						population={planet.population}
						terrain={planet.terrain}
					/> )}
				</div>
			</div>
	)
}
	
