import React from 'react';
import {
	Section,
	Wrapper,
	Btn1,
	Title,
	Info,
	Burger,
	Btn2,
} from '../styles/BurgerStyle';
import { Container } from '../styles/globalStyle';
import BurgerKind1 from '../images/burgerKind1.png';
import BurgerKind2 from '../images/burgerKind2.png';
import BurgerKind3 from '../images/burgerKind3.png';

function Burgers() {
	const burgerKinds = [
		{
			img: BurgerKind1,
			name: 'Lorem ipsum dolor',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
		},
		{
			img: BurgerKind2,
			name: 'Lorem ipsum dolor',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
		},
		{
			img: BurgerKind3,
			name: 'Lorem ipsum dolor',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
		},
	];
	return (
		<Section>
			<Container>
				<Btn1>
					{/* <small> */}
					always tasty burger
					{/* </small> */}
				</Btn1>
				<Title>choose &amp; enjoy</Title>
				<Info>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
					suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
					lacus vel facilisis.{' '}
				</Info>
				<Wrapper>
					{burgerKinds.map(({ img, name, content }, index) => (
						<Burger key={index}>
							<img src={img} alt={name} className='img-responsive' />
							<figcaption>
								<h3 className='burger__name'>{name}</h3>
								<p className='burger__content'>{content}</p>
								<Btn2>order now</Btn2>
							</figcaption>
						</Burger>
					))}
				</Wrapper>
			</Container>
		</Section>
	);
}

export default Burgers;
