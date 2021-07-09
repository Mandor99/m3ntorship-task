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
			<input type="checkbox" name="navCheckbox" id="navCheckbox" className="nav__checkbox" />
				<label htmlFor="navCheckbox" className="nav__toggler">
					<span className="nav__toggler--icon">&nbsp;</span>
				</label>
				<div className="nav__bg"></div>
			<ItemsWrapper className="nav__wrapper">
				<PhoneCallWrapper>
					<IconDelivery src={Icon} alt='delivery icon' />
					<PhoneDetails>Express Delivery +1 234 567 890</PhoneDetails>
				</PhoneCallWrapper>

				<Items>
					<Item>home</Item>
					<Item>menu</Item>
					<Item>our story</Item>
					<Item>contact us</Item>
					<Item className="delivery">
						<img src={Icon} alt="delivery icon" className="delivery__icon"/>
						<p className="delivery__concat">Express Delivery +1 234 567 890</p>
					</Item>
				</Items>
			</ItemsWrapper>
		</Nav>
	);
}

export default NavBar;
