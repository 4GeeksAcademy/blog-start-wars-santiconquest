import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	
	const [characterData,setCharacterData]=useState({})

	useEffect(()=>{
		console.log("Se cargo Personaje")
		fetch('https://swapi.dev/api/people/'+params.character_id)
		.then((response)=>response.json())
		.then((data)=>setCharacterData(data))
	},[])

	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {params.character_id}</h1>

			<p>Gender: {characterData.gender}</p>
			<p>Hair color: {characterData.hair_color}</p>
			<p>Eye color: {characterData.eye_color}</p>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Character.propTypes = {
	match: PropTypes.object
};