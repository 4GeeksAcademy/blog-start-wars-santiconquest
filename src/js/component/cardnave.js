import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Cardnave= (props) => {
	const { store, actions } = useContext(Context);

	return (
        <div className="card mx-3" style={{width: "18rem"}}>
			<img src={rigoImage} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.model}</p>
				<Link to={"/nave/"+props.uid} className="btn btn-primary" >Ver {props.uid}</Link>
				<button type="button" className="btn btn-light" onClick={()=>actions.cambiarTexto(props.name)} > <i class="far fa-heart"></i> </button>
			</div>
		</div>
	);
};