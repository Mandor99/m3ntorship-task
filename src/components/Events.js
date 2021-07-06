import React, {useState} from 'react';
import { Container } from '../styles/globalStyle';
import { Section, Wrapper, Box1, Box2, SubTitle, Title, Info, DotsWrapper, Dot, Box3 } from '../styles/EventsStyle';
// import eventImage from '../images/Food Image.png'
import eventImage from '../images/Layer 1.png'

function Events() {
    const eventInfo = [
				{info:'1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. '},
				{info:'2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. '},
				{info:'3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. '},
			];
		const [data, setData] = useState(eventInfo[0])
		const [active, setActive] = useState(0)

		const changeSlide = (e) => {
				setData(eventInfo[e.target.getAttribute("data-index")])
			setActive(e.target.getAttribute("data-index"))
		}
		
	return (
		<Section>
			<Container>
				<Wrapper>
					<Box1>
                        <SubTitle>discover</SubTitle>
                        <Title>Upcoming Events</Title>
						<Info>{data.info}</Info>
						<DotsWrapper>
						{
							Object.keys(eventInfo).map((_, index) => (
								<Dot key={index} data-index={`${index}`} onClick={(e) => changeSlide(e)} active={active} Index={index}></Dot>
							))
						}
						</DotsWrapper>
                    </Box1>
					<Box2>
                        <img src={eventImage} alt="event burger" className="img-responsive" />
                    </Box2>
				</Wrapper>
			</Container>
		</Section>
	);
}

export default Events;
