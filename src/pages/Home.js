import React from 'react';
import Burgers from '../components/Burgers';
import Events from '../components/Events';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';
// import Meals from '../components/Meals';
import Meals2 from '../components/Meals2';

function Home() {
	return (
		<div>
			<Header />
			<Meals2 />
			<Burgers />
			<Events />
			<Form />
			<Footer />
		</div>
	);
}

export default Home;
