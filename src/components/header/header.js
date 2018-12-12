import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './header.css'

const Header = props => {
	return (
		<header>
			<div> { props.title } </div>
			<div className="header-links">
				<Link to="/">Home</Link>
				<Link to="/about/me">About</Link>
				<Link to="/todo">Todo</Link>
			</div>
		</header>
	)
};

export default Header;
