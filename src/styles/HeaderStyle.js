import styled from 'styled-components';
import pattern from '../images/pattern.png';
import { colors, fonts, margins, paddings, shadows } from './globalStyle';

export const HeaderStyle = styled.header`
	height: 100vh;
	background-color: ${colors.color3};
	position: relative;

	&::before {
		content: '';
		background: url(${pattern}) repeat;
		background-size: 16%;
		opacity: 18%;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
	}
`;

export const Container = styled.div`
	width: 90%;
	margin-left: auto;
	margin-right: auto;
`;
export const HeaderWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 5rem;
`;

export const Section = styled.section`
	display: flex;
	justify-content: space-between;
	position: relative;
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Note = styled.p`
	font-size: 24px;
	line-height: 33px;
	color: ${colors.mainColor};
	font-weight: 400;
	font-family: ${fonts.font1};
	border: 2px dashed ${colors.mainColor};
	text-transform: uppercase;
	padding: 1rem;
	align-self: flex-start;
`;

export const BigTitle = styled.h1`
	font-size: 114px;
	line-height: 62px;
	color: ${colors.mainColor};
	font-weight: 400;
	font-family: ${fonts.font2};
	filter: drop-shadow(${shadows.shadow1});
	text-transform: uppercase;
	margin-bottom: ${margins.gap2};
	margin-top: ${margins.gap3};
`;

export const SubTitle = styled.h2`
	font-size: 56px;
	line-height: 62px;
	color: ${colors.mainColor};
	font-weight: 400;
	font-family: ${fonts.font2};
	filter: drop-shadow(${shadows.shadow1});
	text-transform: uppercase;
`;

export const BurgerImg = styled.figure`
	position: absolute;
	top: -11rem;
	right: 0rem;
	overflow: hidden;

	img {
		width: 100%;
		object-fit: contain;

		width: 615px;
		height: 525px;
		transform: scale(1.7);
	}
`;

export const Div = styled.div`
	/* padding: ${paddings.paddingInner1}; */
	background-color: ${colors.color1};
	border: 2px dashed #fff;
	border-radius: 50%;
	box-shadow: 0 0 0 10px ${colors.color1};
	position: absolute;
	bottom: -19vh;
	right: 29rem;
	width: 174px;
	height: 174px;
	display: flex;
	justify-content: center;
	align-items: center;

	p {
		font-size: 70px;
		line-height: 50px;
		color: #fff;
		font-weight: 700;
		font-family: ${fonts.font1};
		text-align: center;
		text-transform: uppercase;

		small {
			font-size: 30px;
		}
	}
`;
