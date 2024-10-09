import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Cardcharacter= (props) => {
	const { store, actions } = useContext(Context);

	return (
        <div className="card m-3" style={{width: "18rem"}}>
			<img src={rigoImage} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.hair_color}</p>
				<p className="card-text">{props.eye_color}</p>
				<Link to={"/character/"+props.uid} className="btn btn-primary" >Ver {props.uid}</Link>
				<button type="button" className="btn btn-light" onClick={()=>actions.AgregarFavorito(props.name)} > <i className="far fa-heart"></i> </button>
			</div>
		</div>
	);
};