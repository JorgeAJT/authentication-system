import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.css";

import helloTherePhoto from "/workspaces/authentication-system/src/front/img/obiwan.png"

export const Home = () => {
	const { store, actions } = useContext(Context);
	let access = ""
	
	store.auth ? access = "Access" : access = "Login"

	useEffect(() => {
        actions.setNewUser(false)
		actions.setError(undefined)
      }, []); 

	return (
		<div className="text-center mt-4">
			<img src={helloTherePhoto} alt="Hello There Image" className="my-3 rounded-circle"/>
			<h1>Hello there</h1>
			{!store.auth ? 
			<>
				<h4 className="mb-4">Choose an option</h4>
				<Link to="/login">
					<button className="btn btn-primary mx-2">{access}</button>
				</Link>
				<span>or</span>
				<Link to="/signup">
					<button className="btn btn-warning mx-2">Sing up</button>
				</Link>
			</>			
			:
			<Link to="/login">
			<button className="btn btn-primary mx-auto">{access}</button>
			</Link>
			}
		</div>
	);
};
