import React from 'react';
import { Container } from '../styles/globalStyle';
import {
	Box1,
	Box2,
	Caption,
	Fig1,
	Fig2,
	MealsWrapper,
	Section,
} from '../styles/MealsStyle';
import Meal1 from '../images/Burger Image1.png';
import Meal2 from '../images/Image.png';
import Meal3 from '../images/Image1.png';

function Meals() {
	return (
		<Section>
			<Container>
				<MealsWrapper>
					<Box1>
						<Fig1>
							<img src={`${Meal1}`} alt='meal 1' className='' />
							<Caption className='caption__big'>
								<h4>try it today</h4>
								<h2>Most Popular Burger</h2>
							</Caption>
						</Fig1>
					</Box1>
					<Box2>
						<Fig2 className='img-sm-1'>
							<img src={`${Meal2}`} alt='meal 2' />
							<Caption className='caption__sm-1'>
								<h4>try it today</h4>
								<h2>
									More fun
									<br />
									more taste
								</h2>
							</Caption>
						</Fig2>
						<Fig2 className='img-sm-2'>
							<img src={`${Meal3}`} alt='meal 3' />
							<Caption className='caption__sm-2'>
								<h4>try it today</h4>
								<h2>Fresh &amp; Chili</h2>
							</Caption>
						</Fig2>
					</Box2>
				</MealsWrapper>
			</Container>
		</Section>
	);
}

export default Meals;
