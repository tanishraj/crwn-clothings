import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/images/original.svg';

import './header.style.scss';

const Header = () => (
	<div className="header">
		<BrowserRouter>
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
		</BrowserRouter>
		<div className="options">
			<BrowserRouter><Link className="option" to="/shop">SHOP</Link></BrowserRouter>
			<BrowserRouter><Link className="option" to="/contact">CONTACT</Link></BrowserRouter>
		</div>
	</div>
)

export default Header;