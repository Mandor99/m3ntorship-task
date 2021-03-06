import styled from 'styled-components';
import { fonts, margins, paddings, sizes } from './globalStyle';

export const Section = styled.section`
	margin-top: ${margins.marginOuter2};
	overflow: hidden;
	/* max-height: 75vh; */
`;

export const MealsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;

	gap: 2vw;
`;

export const Box1 = styled.div`
	flex: 0 0 50%;
	background: ${(props) => `url(${props.image})`} no-repeat center/cover;
	height: 59vh;
	border-radius: 10px;
`;

export const Box2 = styled.div`
	/* flex: 0 0 50%; */
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2vw;

	/* & > * {
		flex: 1 1 50%;
	} */
`;

export const Fig1 = styled.figure`
	/* background: url() no-repeat center/cover; */
	height: 27.5vh;
	border-radius: 10px;
	width: 95%;
	position: relative;
	/* img {
		width: 100%;
		object-fit: cover;
	} */
`;

export const Fig2 = styled.div`
	background: ${(props) => `url(${props.image})`} no-repeat center/cover;
	height: 27.5vh;
	width: 95%;
	border-radius: 10px;
	position: relative;
	/* height: 50%; */
	/* &.img-sm-1 {
		position: relative;
		margin-top: -4.5rem;
		height: 391px;
	}
	&.img-sm-2 {
		position: relative;
		margin-top: -13.5rem;
		height: 391px;
		transform: scale(0.98);
	} */
	/* img {
		width: 100%;
		object-fit: cover;
	} */
`;

export const Caption = styled.figcaption`
	font-size: ${sizes.size1};
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
