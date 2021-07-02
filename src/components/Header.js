import React from 'react';
import { HeaderStyle, Div } from '../styles/HeaderStyle';
import NavBar from './NavBar'

function Header() {
	return (
		<HeaderStyle>
			<Div>
            <NavBar />
			</Div>
		</HeaderStyle>
	);
}

export default Header;
