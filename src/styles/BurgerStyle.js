import styled from 'styled-components';
import { colors, fonts, margins, paddings, sizes } from './globalStyle';

export const Section = styled.section`
	margin-top: ${margins.gap5};
	text-align: center;
`;

export const Btn1 = styled.button`
	color: ${colors.mainColor};
	font-family: ${fonts.font1};
	background-color: ${colors.color3};
	text-transform: uppercase;
	border: none;
	padding: ${paddings.paddingBtn1};
	line-height: 38px;
	font-weight: 700;
	letter-spacing: 0.1rem;
	font-size: ${sizes.size1};
`;

export const Title = styled.h2`
	font-size: ${sizes.size2};
	line-height: 38px;
	color: ${colors.mainColor};
	font-weight: 400;
	font-family: ${fonts.font2};
	margin-top: ${margins.gap4};
	margin-bottom: ${margins.gap6};
	text-transform: uppercase;
`;

export const Info = styled.p`
	font-size: ${sizes.size3};
	line-height: 29px;
	color: ${colors.mainColor};
	font-weight: 400;
	font-family: ${fonts.font3};
	text-align: center;
	text-transform: uppercase;
`;

export const Wrapper = styled.div`
	margin-top: ${margins.gap5};
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

export const Burger = styled.figure`
	flex-basis: 30%;

	& img.img-responsive {
		height: 208px;
		width: 100%;
		object-fit: contain;
	}

	& .burger__name {
		font-size: ${sizes.size4};
		line-height: 38px;
		color: ${colors.mainColor};
		font-weight: 700;
		font-family: ${fonts.font1};
		margin-top: 0.5rem;
		margin-bottom: 0.7rem;
	}

	& .burger__content {
		font-size: ${sizes.size3};
		line-height: 21px;
		color: ${colors.mainColor};
		font-weight: 400;
		font-family: ${fonts.font3};
	}
`;

export const Btn2 = styled.button`
	text-transform: uppercase;
	margin-top: ${margins.gap3};
	font-size: ${sizes.size3};
	line-height: 38px;
	color: #fff;
	font-weight: 400;
	font-family: ${fonts.font2};
	background-color: ${colors.color1};
	padding: ${paddings.paddingBtn3};
	border: none;
	cursor: pointer;
`;
