import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Nave = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const [starshipData,setStartShipData]=useState({})

	useEffect(()=>{
		console.log("Se cargo Nave")
		fetch('https://www.swapi.tech/api/starships/'+params.nave_id)
		.then((response)=>response.json())
		.then((data)=>setStartShipData(data.result.properties))
	},[])

	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {params.nave_id}</h1>

			<p>Model: {starshipData.model}</p>
			<p>Manufacturer: {starshipData.manufacturer}</p>
			<p>Name: {starshipData.name}</p>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Nave.propTypes = {
	match: PropTypes.object
};