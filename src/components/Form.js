import React, { useState } from 'react';
import Bottle from '../images/bottle.png';
import Burger from '../images/burgerForm.png';
import Plate from '../images/plateForm.png';
import {
	Section,
	FormStyle,
	SubTitle,
	Title,
	InputWrapper,
	Input,
	BtnForm,
} from '../styles/FormStyle';
import { Container } from '../styles/globalStyle';

function Form() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [number, setNumber] = useState('');

	const handleInput = (setter) => (e) => setter(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<Section>
			<img src={`${Burger}`} alt='burger' className='burger img-responsive' />
			<img src={`${Bottle}`} alt='ketchup' className='bottle img-responsive' />
			<img
				src={`${Plate}`}
				alt='burger plate'
				className='plate img-responsive'
			/>

			<Container>
				<SubTitle>Reservation</SubTitle>
				<Title>Book your table</Title>
				<FormStyle onSubmit={handleSubmit}>
					<InputWrapper>
						<Input
							value={name}
							onChange={handleInput(setName)}
							type='text'
							placeholder='NAME'
						/>
					</InputWrapper>
					<InputWrapper>
						<Input
							value={email}
							onChange={handleInput(setEmail)}
							type='email'
							placeholder='EMAIL'
							required
						/>
					</InputWrapper>
					<InputWrapper>
						<Input
							value={date}
							onChange={handleInput(setDate)}
							type='date'
							// placeholder='DATE'
						/>
					</InputWrapper>
					<InputWrapper>
						<Input
							value={time}
							onChange={handleInput(setTime)}
							type='time'
							// placeholder='TIME'
						/>
					</InputWrapper>
					<InputWrapper>
						<Input
							value={number}
							onChange={handleInput(setNumber)}
							type='number'
							placeholder='PEOPLE'
						/>
					</InputWrapper>
					<BtnForm type='submit'>find a table</BtnForm>
				</FormStyle>
			</Container>
		</Section>
	);
}

export default Form;
