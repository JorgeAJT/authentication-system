import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [username, setUsername] = useState("");

	useEffect(() => {
		const storedUsername = localStorage.getItem("username");
		if (storedUsername) {
			setUsername(storedUsername);
		}
	}, [actions]);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<span className="navbar-brand mb-0 h1">User authentication system</span>
				{store.auth && 
				<div className="ml-auto">
					<span className="fw-bold me-4">{username}'s session</span>
					<Link to="/">
						<button onClick={actions.logout} className="btn btn-primary">Log out</button>
					</Link>
				</div>
				}
			</div>
		</nav>
	);
};
