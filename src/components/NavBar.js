import React from 'react';
import {
	Nav,
	LogoWrapper,
	Logo,
	ItemsWrapper,
	PhoneCallWrapper,
	IconDelivery,
	PhoneDetails,
	Items,
	Item,
} from '../styles/NavBarStyle';
import LogoImg from '../images/logoHeader.png';
import Icon from '../images/deliveryNav.png';

function NavBar() {
	return (
		<Nav>
			<LogoWrapper>
				<Logo src={`${LogoImg}`} alt='burger home logo' />
			</LogoWrapper>
			<ItemsWrapper>
				<PhoneCallWrapper>
					<IconDelivery src={Icon} alt='delivery icon' />
					<PhoneDetails>Express Delivery +1 234 567 890</PhoneDetails>
				</PhoneCallWrapper>
				<Items>
					<Item>home</Item>
					<Item>menu</Item>
					<Item>our story</Item>
					<Item>contact us</Item>
				</Items>
			</ItemsWrapper>
		</Nav>
	);
}

export default NavBar;
