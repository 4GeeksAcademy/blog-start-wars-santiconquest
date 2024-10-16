import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Cardplanet= (props) => {
	const { store, actions } = useContext(Context);

	return (
        <div className="card m-3" style={{width: "18rem"}}>
			{/* <img src={rigoImage} className="card-img-top" alt="..." /> */}
			<img style={{  objectFit: "cover" }} src={`https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`} className="card-img-top " alt="..." />

			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Population: {props.population}</p>
				<p className="card-text">Terrain: {props.terrain}</p>
				<Link to={"/planet/"+props.uid} className="btn btn-primary" >Learn more!</Link>
				<button type="button" className="btn btn-light" onClick={()=>actions.AgregarPlanetaFavorito(props.name)} > <i className="far fa-heart"></i> </button>
			</div>
		</div>
	);
};