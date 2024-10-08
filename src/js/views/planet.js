import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	
	const [planetData,setPlanetData]=useState({})

	useEffect(()=>{
		console.log("Se cargo Planet")
		fetch('https://swapi.dev/api/planets/'+params.planet_id)
		.then((response)=>response.json())
		.then((data)=>setPlanetData(data))
	},[])

	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {params.planet_id}</h1>

			<p>Population: {planetData.population}</p>
			<p>Terrain: {planetData.terrain}</p>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Planet.propTypes = {
	match: PropTypes.object
};