import styled from 'styled-components';
import { fonts, margins, paddings } from './globalStyle';

export const Section = styled.section`
	margin-top: ${margins.marginOuter2};
	overflow: hidden;
	max-height: 75vh;
`;

export const MealsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
`;

export const Box1 = styled.div`
	flex-basis: 50%;
`;

export const Box2 = styled.div`
	flex-basis: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	/* & > * {
		flex: 1 1 50%;
	} */
`;

export const Fig1 = styled.figure`
	position: relative;
	img {
		width: 100%;
		object-fit: cover;
	}
`;

export const Fig2 = styled.figure`
	position: relative;
	/* height: 50%; */
	&.img-sm-1 {
		position: relative;
		margin-top: -4.5rem;
		height: 391px;
	}
	&.img-sm-2 {
		position: relative;
		margin-top: -13.5rem;
		height: 391px;
		transform: scale(0.98);
	}
	img {
		width: 100%;
		object-fit: cover;
	}
`;

export const Caption = styled.figcaption`
	font-size: 25px;
	line-height: 38px;
	color: #fff;
	font-weight: 700;
	font-family: ${fonts.font1};
	text-transform: uppercase;
	position: absolute;
	letter-spacing: 0.1rem;
	padding: ${paddings.paddingTxt};

	&.caption__big {
		top: 0;
	}

	&.caption__sm-1 {
		top: 4.5rem;
	}

	&.caption__sm-2 {
		top: 5.5rem;
	}
`;
