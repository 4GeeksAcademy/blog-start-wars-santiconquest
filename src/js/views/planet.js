import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";

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
			{/* <h1 className="display-4">This will show the demo element: {params.planet_id}</h1> */}

			<div className="card mb-3" style={{width:'540px'}}>
				<div className="row g-0">
					<div className="col-md-4">
						{/* <img src={rigoImage}  className="img-fluid rounded-start" alt="..." /> */}
						<img style={{  objectFit: "cover" }} src={`https://starwars-visualguide.com/assets/img/planets/${params.planet_id}.jpg`} className="card-img-top " alt="..." />

					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{planetData.name}</h5>
							<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						</div>
					</div>
					<div className="card-footer bg-transparent border-danger row text-danger d-flex flex-nowrap">
						<div className="col">
								<div >Name</div>
								<p > {planetData.name}</p>
							</div>
							<div className="col">
								<div >Climate</div>
								<p > {planetData.climate}</p>
							</div>
							<div className="col">
								<div >Population</div>
								<p > {planetData.population}</p>
							</div>
							<div className="col">
								<div >Orbital period</div>
								<p > {planetData.orbital_period}</p>
							</div>
							<div  className="col">
								<div>Rotation period</div>
								<p >{planetData.rotation_period}</p>
							</div>
							<div className="col">
								<div >Diameter</div>
								<p >{planetData.diameter}</p>
							</div>
					</div>
				</div>
			</div>

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