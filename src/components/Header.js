import React from 'react';
import { Container } from '../styles/globalStyle';
import {
	HeaderStyle,
	HeaderWrapper,
	Section,
	Note,
	BigTitle,
	SubTitle,
	BurgerImg,
	ContentWrapper,
	Div,
} from '../styles/HeaderStyle';
import NavBar from './NavBar';
import BurgerImage from '../images/Burger Image.png';

function Header() {
	return (
		<HeaderStyle>
			<Container>
				<HeaderWrapper>
					<NavBar />
					<Section>
						<ContentWrapper>
							<Note>It is a good time for the great taste of burgers</Note>
							<BigTitle>burger</BigTitle>
							<SubTitle>week</SubTitle>
						</ContentWrapper>
						<BurgerImg>
							<img src={BurgerImage} alt='burger family' />
						</BurgerImg>
					</Section>
					<Div>
						<p>
							$5<small>.49</small> <br />
							only
						</p>
					</Div>
				</HeaderWrapper>
			</Container>
		</HeaderStyle>
	);
}

export default Header;
