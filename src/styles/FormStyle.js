import styled from 'styled-components';
import {
	colors,
	fonts,
	margins,
	paddings,
	shadows,
	sizes,
} from './globalStyle';

export const Section = styled.section`
	margin-top: ${margins.marginOuter2};
	position: relative;
	text-align: center;

	& img.bottle {
		position: absolute;
		top: 45%;
		left: -38%;
		height: 55%;
		filter: drop-shadow(${shadows.shadow3});
	}

	& img.burger {
		position: absolute;
		top: -6%;
		left: -44%;
		height: 44%;
		filter: drop-shadow(${shadows.shadow3});
	}

	& img.plate {
		position: absolute;
		filter: drop-shadow(${shadows.shadow3});
		bottom: -18%;
		height: 65%;
		right: -45%;
		transform: rotate(45deg);
		/* overflow-x: clip; */
	}

	& .img-responsive {
		width: 100%;
		object-fit: contain;
	}
`;

export const SubTitle = styled.h4`
	font-size: ${sizes.size5};
	letter-spacing: 2px;
	line-height: 46px;
	color: ${colors.mainColor};
	font-weight: 700;
	font-family: ${fonts.font1};
	text-transform: uppercase;
	margin-bottom: ${margins.gap2};
`;

export const Title = styled.h2`
	font-size: ${sizes.size2};
	letter-spacing: 3px;
	line-height: 46px;
	color: ${colors.mainColor};
	font-weight: 400;
	font-family: ${fonts.font2};
	text-transform: uppercase;
	margin-bottom: ${margins.marginOuter2};
`;

export const InputWrapper = styled.div``;

export const Input = styled.input`
	width: 100%;
	padding: ${paddings.paddingBtn3};
	font-size: ${sizes.size7};
	line-height: 46px;
	color: ${colors.color4};
	font-weight: 400;
	font-family: ${fonts.font1};
	outline: none;
	border-radius: 5px;
	background-color: ${colors.color7};
	border: 1px solid ${colors.color6};
	text-transform: lowercase;

	&::placeholder {
		text-transform: uppercase;
	}
`;

export const BtnForm = styled.button`
	text-transform: uppercase;
	font-size: ${sizes.size7};
	line-height: 46px;
	color: #fff;
	font-weight: 400;
	font-family: ${fonts.font2};
	border-radius: 5px;
	background-color: ${colors.color1};
	outline: none;
	border: none;
	cursor: pointer;
`;

export const FormStyle = styled.form`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: ${margins.gap2};
	width: 65%;
	margin: 0 auto;
	position: relative;
`;
