const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			starships: [
				{
					name: "FIRST",
					url: "1",
				},
				{
					name: "SECOND",
					url: "2",
				}
			],
			characters: [
				{
					name: "FIRST",
					url: "1",
				},
				{
					name: "SECOND",
					url: "2",
				}
			],
			planets: [
				{
					name: "FIRST",
					url: "1",
				},
				{
					name: "SECOND",
					url: "2",
				}
			],
			myStarships:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				console.log("Se carga pagina desde FLUX")
				fetch('https://swapi.dev/api/starships')
				.then((response)=>response.json())
				.then((data)=>setStore({ starships: data.results }))
			//Preguntar como puedo traer swapi.dev/api/people
			//Pregintar como hacer correctamente el layout para un nuevo personaje
			//Preguntar como poner un if en el boton de favoritos 
			},
			loadSomePeople: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				console.log("Se carga pagina desde FLUX")
				fetch('https://swapi.dev/api/people')
				.then((response)=>response.json())
				.then((data)=>setStore({ characters: data.results }))
			},
			loadSomePlanets: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				console.log("Se carga pagina desde FLUX")
				fetch('https://swapi.dev/api/planets')
				.then((response)=>response.json())
				.then((data)=>setStore({ planets: data.results }))
			},
			cambiarTexto: (startshipName)=> {
				console.log("cambiar texto desde Flux")
				const store = getStore();
				if (store.myStarships.includes(startshipName)){
					console.log('SI tienes el elemento')
					setStore({ 
						myStarships:store.myStarships.filter((starship)=>starship!=startshipName) 
					})
				}else {
					console.log('NO tienes el elemento')
					setStore({ 
						myStarships:[...store.myStarships, startshipName] 
					})
				}

				setStore({ message: startshipName })
				
			},AgregarFavorito: (characterName)=> {
				const store = getStore();
				if (store.myStarships.includes(characterName)){
					console.log('SI tienes el elemento')
					setStore({ 
						myStarships:store.myStarships.filter((character)=>character!=characterName) 
					})
				}else {
					console.log('NO tienes el elemento')
					setStore({ 
						myStarships:[...store.myStarships, characterName] 
					})
				}

				setStore({ message: characterName })
				
			},
			AgregarPlanetaFavorito: (planetName)=> {
				const store = getStore();
				if (store.myStarships.includes(planetName)){
					console.log('SI tienes el elemento')
					setStore({ 
						myStarships:store.myStarships.filter((planet)=>planet!=planetName) 
					})
				}else {
					console.log('NO tienes el elemento')
					setStore({ 
						myStarships:[...store.myStarships, planetName] 
					})
				}

				setStore({ message: planetName })
				
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
