import styled from 'styled-components';
import {
	margins,
	paddings,
	shadows,
	fonts,
	colors,
	sizes,
	media,
} from './globalStyle';

export const Section = styled.section`
	margin-top: ${margins.marginOuter1};

	${media.tab} {
		margin-top: ${margins.marginOuter2};
	}
`;

export const Wrapper = styled.div`
	filter: drop-shadow(${shadows.shadow2});
	background-color: #fff;
	padding: ${paddings.padding4};
	display: flex;
	justify-content: space-between;
	overflow: hidden;
	gap: ${margins.gap4};

	& > * {
		flex-basis: 50%;
	}
`;

export const Box1 = styled.article`
	overflow: hidden;
	padding-top: ${paddings.padding2};
	padding-bottom: ${paddings.padding2};
	position: relative;

	${media.tab} {
		flex: 1 1 100%;
		text-align: center;
	}
`;

export const SubTitle = styled.h4`
	font-size: ${sizes.size5};
	letter-spacing: 2px;
	/* line-height: 46px; */
	color: ${colors.color4};
	font-weight: 700;
	font-family: ${fonts.font1};
	text-transform: uppercase;
`;

export const Title = styled.h2`
	font-size: ${sizes.size6};
	/* line-height: 46px; */
	color: ${colors.mainColor};
	font-weight: 400;
	font-family: ${fonts.font2};
	text-transform: uppercase;
`;

export const Info = styled.p`
	font-size: ${sizes.size7};
	line-height: 30px;
	color: ${colors.color4};
	font-weight: 400;
	font-family: ${fonts.font3};
	margin-top: ${margins.gap6};
	transition: all 0.3s ease-in-out;

	${media.desk} {
		line-height: 25px;
	}

	${media.tab} {
		margin-bottom: ${margins.gapItems};
	}
`;

export const Box2 = styled.div`
	height: 70vh;
	& img {
		height: 100%;

		&.img-responsive {
			width: 100%;
		}
	}
	${media.desk} {
		height: 60vh;
	}

	${media.tab} {
		display: none;
	}
`;

export const DotsWrapper = styled.div`
	display: flex;
	gap: 8px;
	position: absolute;
	bottom: 1.5rem;

	${media.tab} {
		left: 50%;
		transform: translateX(-50%);
	}
`;

export const Dot = styled.span`
	width: 17px;
	height: 17px;
	border-radius: 50%;
	background-color: ${colors.color5};
	transition: all 0.2s ease;
	background-color: ${({ active, Index }) =>
		// eslint-disable-next-line eqeqeq
		active == Index ? colors.color3 : colors.color5};

	&:hover {
		background-color: ${colors.color3};
	}
`;
