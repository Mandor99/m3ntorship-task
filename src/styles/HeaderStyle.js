import styled from 'styled-components';
import pattern from '../images/patternBG.png';
import {
	colors,
	fonts,
	margins,
	media,
	paddings,
	shadows,
	sizes,
} from './globalStyle';

export const HeaderStyle = styled.header`
	height: 95vh;
	background-color: ${colors.color3};
	position: relative;

	${media.desk} {
		height: 85vh;
	}

	${media.tab} {
		height: 75vh;
	}

	${media.mobile} {
		height: 75vh;
	}

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
	font-size: ${sizes.size1};
	line-height: 33px;
	color: ${colors.mainColor};
	font-weight: 400;
	font-family: ${fonts.font1};
	border: 2px dashed ${colors.mainColor};
	text-transform: uppercase;
	padding: 1rem;
	align-self: flex-start;

	${media.desk} {
		line-height: 23px;
	}

	${media.mobile} {
		font-size: ${sizes.size12};
	}
`;

export const BigTitle = styled.h1`
	font-size: ${sizes.size8};
	line-height: 62px;
	color: ${colors.mainColor};
	font-weight: 400;
	font-family: ${fonts.font2};
	filter: drop-shadow(${shadows.shadow1});
	text-transform: uppercase;
	margin-bottom: ${margins.gap2};
	margin-top: ${margins.gap3};

	${media.tab} {
		font-size: ${sizes.size11};
	}

	${media.mobile} {
		font-size: ${sizes.size13};
		line-height: 40px;
	}
`;

export const SubTitle = styled.h2`
	font-size: ${sizes.size9};
	line-height: 62px;
	color: ${colors.mainColor};
	font-weight: 400;
	font-family: ${fonts.font2};
	filter: drop-shadow(${shadows.shadow1});
	text-transform: uppercase;

	${media.tab} {
		font-size: ${sizes.size2};
	}

	${media.mobile} {
		font-size: ${sizes.size14};
		line-height: 30px;
	}
`;

export const BurgerImg = styled.figure`
	position: absolute;
	top: -11rem;
	right: 0rem;
	overflow: hidden;

	${media.desk} {
		top: -15rem;
		right: -11rem;
	}

	${media.tab} {
		top: -18rem;
		right: -15rem;
	}

	${media.mobile} {
		top: -11rem;
		right: -24rem;
	}

	img {
		width: 100%;
		object-fit: contain;
		width: 615px;
		height: 525px;
		transform: scale(1.7);

		${media.desk} {
			transform: scale(1.3);
		}

		${media.tab} {
			transform: scale(1.1);
		}

		${media.mobile} {
			transform: scale(0.5);
		}
	}
`;

export const Div = styled.div`
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

	${media.desk} {
		bottom: -9vh;
		right: 20rem;
		width: 134px;
		height: 134px;
	}

	${media.tab} {
		bottom: -1vh;
		right: 19rem;
		width: 100px;
		height: 100px;
	}

	${media.mobile} {
		bottom: 9vh;
		right: 2rem;
		width: 65px;
		height: 65px;
	}

	p {
		font-size: ${sizes.size10};
		line-height: 50px;
		color: #fff;
		font-weight: 700;
		font-family: ${fonts.font1};
		text-align: center;
		text-transform: uppercase;

		${media.desk} {
			line-height: 40px;
			font-size: ${sizes.size9};
		}

		${media.tab} {
			line-height: 35px;
			font-size: ${sizes.size2};
		}

		${media.mobile} {
			line-height: 23px;
			font-size: ${sizes.size15};
		}

		small {
			font-size: ${sizes.size5};
		}
	}
`;
