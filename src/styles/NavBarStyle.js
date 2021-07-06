import styled from 'styled-components';
import { colors, fonts, margins, paddings, sizes } from './globalStyle';

export const Nav = styled.nav`
	padding: ${paddings.padding3 / 2} 0 0 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
`;

export const LogoWrapper = styled.figure`
	width: 260px;
`;

export const Logo = styled.img`
	object-fit: cover;
	width: 100%;
`;

export const ItemsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${margins.gap2};
`;

export const PhoneCallWrapper = styled.figure`
	display: flex;
	gap: ${margins.gapShape};
	align-self: flex-end;
`;

export const IconDelivery = styled.img`
	max-width: 40px;
	object-fit: contain;
`;

export const PhoneDetails = styled.figcaption`
	font-size: ${sizes.size3};
	line-height: 71px;
	color: ${colors.mainColor};
	font-weight: 700;
	font-family: ${fonts.font3};
	text-align: right;
`;

export const Items = styled.ul`
	display: flex;
	gap: ${margins.gapItems};
`;

export const Item = styled.li`
	font-size: ${sizes.size7};
	letter-spacing: 4px;
	color: ${colors.mainColor};
	font-weight: 700;
	font-family: ${fonts.font1};
	cursor: pointer;
`;
