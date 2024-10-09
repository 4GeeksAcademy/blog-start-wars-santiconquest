import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log(store.myStarships)
	
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				
				
				<div class="dropdown">
					<button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.myStarships.length}
					</button>
					<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li class="dropdown-item ">
							<div>
								{store.myStarships.map((starship)=>
								<li>{starship}
									<i class="fas fa-trash" onClick={()=>
										{actions.deleteFav(starship)}
										//console.log("delete task")
										//Preguntar como puedo setear un estado en flux para poder eliminar de favoritos
										
										}></i></li>)}
								{store.myStarships.length===0? "(empty)" : null}
							</div>
							
						</li>
							
					{/* {tareas.map((elemento,index) => 
					<li className="d-flex justify-content-between" key={elemento.id}> */}
						{/* //elemento me devuelve un objeto, por eso le pongo el label para que me traiga el valor de la tarea */}
						{/* <div>{elemento.label}</div>
						<div><i 
							className="fas fa-times"
							onClick={()=>deleteTask(elemento.id)}
						></i></div> */}
					{/* </li> */}
					</ul>
				</div>
				{/* <Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link> */}
			</div>
		</nav>
	);
};
