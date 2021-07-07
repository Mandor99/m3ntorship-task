import styled from 'styled-components';
import footerImage from '../images/footerBG.png';
import { fonts, margins, paddings, sizes } from './globalStyle';

export const FooterStyle = styled.footer`
	margin-top: ${margins.marginOuter2};
	padding-bottom: ${paddings.padding3};
`;

export const Wrapper = styled.div`
	/* height: 70vh; */
	background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url(${footerImage}) no-repeat center center/cover;

	/* display: flex;
	flex-direction: column; */
`;

export const Box1 = styled.div`
	padding-left: ${paddings.padding2};
	padding-bottom: ${paddings.padding5};
	display: flex;
	justify-content: space-between;
	margin-top: ${margins.gap1};

	& > * {
		flex: 0 0 50%;
	}
`;

export const Logo = styled.figure`
	padding-top: ${paddings.paddingInner2};
	padding-left: ${paddings.padding2};

	& img {
		width: 20rem;

		&.img-responsive {
			max-width: 100%;
			object-fit: contain;
		}
	}
`;

export const Info = styled.p`
	font-size: ${sizes.size3};
	line-height: 25px;
	color: #fff;
	font-weight: 400;
	font-family: ${fonts.font3};
	/* margin-top: ${margins.gap1}; */
	flex-basis: 45%;
`;
const size = '2rem';
export const Contact = styled.div`
	color: #fff;
	display: flex;
	flex-direction: column;
	gap: ${margins.gap0};

	& .iconWrapper {
		display: flex;
		gap: 10px;
		& .icon {
			fill: currentColor;
			width: ${size};
			height: ${size};

			&__location {
				font-size: 21px;
				line-height: 38px;
				color: #fff;
				font-weight: 700;
				font-family: ${fonts.font1};
			}
		}
	}
`;
const size2 = '1rem';
export const Box2 = styled.div`
	align-self: flex-end;
	padding-bottom: ${paddings.paddingInner1};
	padding-left: ${paddings.padding2};
	display: flex;
	justify-content: space-between;
	color: #fff;
	margin-right: ${margins.gap6};

	& .footer__copyRights {
		font-size: ${sizes.size3};
		font-weight: 400;
		font-family: ${fonts.font1};
	}

	& .icon-wrapper {
		background: #fff;
		padding: 8px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& .contactWrapper {
		display: flex;
		gap: 10px;
	}

	& .icon {
		width: ${size2};
		height: ${size2};
		fill: #000;
	}
`;
