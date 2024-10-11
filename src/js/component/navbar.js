import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log(store.myStarships)
	
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				
				
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="badge bg-secondary">{store.myStarships.length}</span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li className="dropdown-item ">
							<div>
								{store.myStarships.map((starship)=>
								<li>{starship}
									<i class="fas fa-trash" onClick={()=>
										{actions.deleteFav(starship)}	
										}></i></li>)}
								{store.myStarships.length===0? "(empty)" : null}
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
