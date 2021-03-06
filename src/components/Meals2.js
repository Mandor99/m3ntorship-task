import React from 'react';
import { Container } from '../styles/globalStyle';
import {
	Box1,
	Box2,
	Caption,
	Fig2,
	MealsWrapper,
	Section,
} from '../styles/Meals2Style';
import Meal1 from '../images/leftMeal.png';
import Meal1Desk from '../images/leftMealDesk.png';
import Meal2 from '../images/topMeal.png';
import Meal3 from '../images/bottomMeal.png';

function Meals2() {
	return (
		<Section>
			<Container>
				<MealsWrapper>
					<Box1 image={Meal1} imageDesk={Meal1Desk}>
						<Caption className='caption__big'>
							<h4>try it today</h4>
							<h2>Most Popular Burger</h2>
						</Caption>
					</Box1>
					<Box2>
						<Fig2 image={Meal2}>
							<Caption className='caption__sm-1'>
								<h4>try it today</h4>
								<h2>
									More fun
									<br />
									more taste
								</h2>
							</Caption>
						</Fig2>
						<Fig2 image={Meal3}>
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

export default Meals2;
