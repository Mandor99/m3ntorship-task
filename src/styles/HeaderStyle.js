import styled from 'styled-components';
import pattern from '../images/pattern.png';
import { colors } from './globalStyle';

export const HeaderStyle = styled.header`
	height: 90vh;
	background-color: ${colors.color3};
	position: relative;

	&::after {
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

export const Div = styled.div`
	/* position: relative;
	background: radial-gradient(#f6c 15%, rgba(0, 0, 0, 0) 16%),
		radial-gradient(#6cf 15%, rgba(0, 0, 0, 0) 16%), #fc0;
	background-position: 0 0, 30px 30px;
	background-origin: padding-box;
	background-clip: border-box;
	background-size: 60px 60px;
	width: 100%;
	height: 100%; */

	/* &::after {
		content: '';
		background: url(${pattern}) repeat;
		width: 100%;
		height: 100%;
		z-index: -1;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	} */
`;
