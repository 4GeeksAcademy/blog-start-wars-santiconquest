import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
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
			{/* <h1 className="display-4">This will show the demo element: {params.character_id}</h1> */}

			<div className="card mb-3" style={{width:'540px'}}>
				<div className="row g-0">
					<div className="col-md-4">
						{/* <img src={rigoImage}  className="img-fluid rounded-start" alt="..." /> */}
						<img style={{  objectFit: "cover" }} src={`https://starwars-visualguide.com/assets/img/characters/${params.character_id}.jpg`} className="card-img-top " alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{characterData.name}</h5>
							<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						</div>
					</div>
					<div className="card-footer bg-transparent border-danger row text-danger d-flex flex-nowrap">
						<div className="col">
							<div >Name</div>
								<p > {characterData.name}</p>
							</div>
							<div className="col">
								<div >Birth year</div>
								<p > {characterData.birth_year}</p>
							</div>
							<div className="col">
								<div >Gender</div>
								<p > {characterData.gender}</p>
							</div>
							<div className="col">
								<div >Height</div>
								<p > {characterData.height}</p>
							</div>
							<div  className="col">
								<div>Skin color</div>
								<p >{characterData.skin_color}</p>
							</div>
							<div className="col">
								<div >Eye color</div>
								<p >{characterData.eye_color}</p>
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

Character.propTypes = {
	match: PropTypes.object
};